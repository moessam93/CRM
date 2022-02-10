const express = require('express');
const router = express.Router();

const {getAllContacts, createContact, updateContactByID,deleteContactByID, getContactByID} = require('../controllers/contacts');

router.route('/api/contacts').get(getAllContacts).post(createContact);
router.route('/api/contacts/:id').get(getContactByID).patch(updateContactByID).delete(deleteContactByID);
module.exports = router;