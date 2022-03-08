const express = require('express');
const bp = require('body-parser');
const crmDB = require('./database/connect');
const session = require('express-session');
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();
const contactsRouter = require('./routes/contacts');
const companiesRouter = require('./routes/companies');
const dealsRouter = require('./routes/deals');
const usersRouter = require('./routes/users');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

crmDB.connect(()=>{
  try {
    console.log("CRM database is connected ...");
  } catch (error) {
    console.log(error)
  }
})

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('./public'));
app.set("view engine","ejs");

app.use(session({
  key:'session_cookie_name',
  secret:'session_cookie_secret',
  store:new MySQLStore({
    host:'localhost',
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:'cookie_user'
  }),
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60*24
  }
}))


app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}))

app.use(cookieParser('session_cookie_secret'));

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/',contactsRouter);
app.use('/',companiesRouter);
app.use('/',dealsRouter);
app.use('/',usersRouter);

app.get('/notAuthorized',(req,res,next)=>{
  res.send('<h1>You are not authorized to view this page. Please Login</h1>')
})

app.get('/notAuthorizedAdmin',(req,res,next)=>{
  res.send('<h1>You are not authorized to view this page. Please contact the admin</h1>')
})

app.get('/userAlreadyExists',(req,res,next)=>{
  res.send('<h1>User Already Exists</h1>')
})

const port = process.env.PORT || 8000;
app.listen(port,()=>{
  console.log(`Server is listening at port ${port} ...`);
})