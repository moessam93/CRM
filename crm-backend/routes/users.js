const express = require('express');
const router = express.Router();
const {genPassword} = require('../lib/password');
const {userExists} = require('../config/passport');
const crmDB = require('../database/connect');
const passport = require('passport');


router.route('/register').get((req,res,next)=>{
    res.render('register')
}).post(userExists,(req,res,next)=>{
    const saltHash = genPassword(req.body.password);
    const hash = saltHash.hash;
    const salt = saltHash.salt;

    crmDB.query('insert into users set ?',
    {first_name:req.body.first_name,last_name:req.body.last_name,hash_password:hash,salt:salt,email:req.body.email,isAdmin:false},(err,result)=>{
        if (err){
            throw err;
        }
        else {
            console.log("User successfully created")
        }
    });
    res.redirect('login');
})

router.route('/login').get((req,res,next)=>{
    res.render('login');
}).post(passport.authenticate('local',{failureRedirect:'/login-failure',successRedirect:'/login-success'}));

router.route('/logout').get((req,res,next)=>{
    req.logout();
    res.redirect('login');
})

router.route('/login-success').get((req,res,next)=>{
    res.send(req.user);
})

router.route('/login-failure').get((req,res,next)=>{
    res.send('<p>Wrong email or password</p>');
})

module.exports = router;