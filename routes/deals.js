const express = require('express');
const router = express.Router();
const {isDealOwner} = require('../config/passport')

const {getAllDeals, createDeal, getDealByID, updateDealByID, deleteDealByID} = require('../controllers/deals');

router.route('/api/deals').get(getAllDeals).post(createDeal);
router.route('/api/deals/:id').get(getDealByID).patch(isDealOwner,updateDealByID).delete(isDealOwner,deleteDealByID);

module.exports = router;