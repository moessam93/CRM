const express = require('express');
const router = express.Router();
const {isDealOwner,isAuth} = require('../config/passport')

const {getAllDeals, createDeal, getDealByID, updateDealByID, deleteDealByID} = require('../controllers/deals');

router.route('/api/deals').get(isAuth,getAllDeals).post(isAuth,createDeal);
router.route('/api/deals/:id').get(isAuth,getDealByID).patch(isDealOwner,updateDealByID).delete(isDealOwner,deleteDealByID);

module.exports = router;