const express = require('express');
const router = express.Router();

const { getAllCompanies, createCompany, getCompanyByID, updateCompanyByID, deleteCompanyByID } = require('../controllers/companies');

router.route('/api/companies').get(getAllCompanies).post(createCompany);
router.route('/api/companies/:id').get(getCompanyByID).patch(updateCompanyByID).delete(deleteCompanyByID);

module.exports = router;