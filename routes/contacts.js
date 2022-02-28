const express = require('express');
const router = express.Router();
const {isAuth} = require('../config/passport')
const {getAllContacts, createContact, updateContactByID,deleteContactByID, getContactByID} = require('../controllers/contacts');

router.route('/api/contacts').get(isAuth,getAllContacts).post(isAuth,createContact);
router.route('/api/contacts/:id').get(isAuth,getContactByID).patch(isAuth,updateContactByID).delete(isAuth,deleteContactByID);
module.exports = router;