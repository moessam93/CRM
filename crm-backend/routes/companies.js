const express = require('express');
const { isAuth } = require('../config/passport');
const router = express.Router();
const { getAllCompanies, createCompany, getCompanyByID, updateCompanyByID, deleteCompanyByID } = require('../controllers/companies');

router.route('/api/companies').get(isAuth,getAllCompanies).post(isAuth,createCompany);
router.route('/api/companies/:id').get(isAuth,getCompanyByID).patch(isAuth,updateCompanyByID).delete(isAuth,deleteCompanyByID);

module.exports = router;