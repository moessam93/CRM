const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { validPassword } = require('../lib/password');
const crmDB = require('../database/connect');

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}

const verifyCallback = (email, password, done) => {
    crmDB.query('select * from users where email=?', [email], (err, result, fields) => {
        if (err) {
            done(err);
        }
        if (result.length == 0) {
            console.log("No user with the email");
            done(null, false);
        }
        else {
            const isValid = validPassword(password, result[0].hash_password, result[0].salt);
            const user = { id: result[0].id, email: result[0].email, hash_password: result[0].hash_password, salt: result[0].salt };
            if (isValid) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
    })
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((userId, done) => {
    crmDB.query('select * from users where id = ?', [userId], (err, result) => {
        done(null, result[0]);
    })
})

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.send('Unauthorized');
    }
}

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin == true) {
        next();
    }
    else {
        res.redirect('/notAuthorizedAdmin');
    }
}

const isDealOwner = (req, res, next) => {
    crmDB.query('select deal_owner from deals where deal_id=?', [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            if (result[0].deal_owner === (req.user.first_name+" "+req.user.last_name) || req.user.isAdmin){
                next ();
            }
            else{
                res.send("Not deal owner")
            }
        }
    })
}

const userExists = (req, res, next) => {
    crmDB.query('select * from users where email=?', [req.body.email], (err, result) => {
        if (err) {
            console.log("Error");
        }
        else if (result.length > 0) {
            res.redirect('/userAlreadyExists');
        }
        else {
            next();
        }
    })
}

module.exports = { isAuth, isAdmin, isDealOwner, userExists };