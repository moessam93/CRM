const express = require('express');
const router = express.Router();

const {getAllDeals, createDeal, getDealByID, updateDealByID, deleteDealByID} = require('../controllers/deals');

router.route('/api/deals').get(getAllDeals).post(createDeal);
router.route('/api/deals/:id').get(getDealByID).patch(updateDealByID).delete(deleteDealByID);

module.exports = router;