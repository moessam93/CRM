const express = require('express');
const bp = require('body-parser');
const contactsRouter = require('./routes/contacts');
const companiesRouter = require('./routes/companies');
const dealsRouter = require('./routes/deals');
const crmDB = require('./database/connect');
require('dotenv').config();
const app = express();

crmDB.connect(()=>{
  try {
    console.log("CRM database is connected ...");
  } catch (error) {
    console.log(error)
  }
})

//middleware
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('./public'));

//routes
app.use('/',contactsRouter);
app.use('/',companiesRouter);
app.use('/',dealsRouter);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
  console.log(`Server is listening at port ${port} ...`);
})