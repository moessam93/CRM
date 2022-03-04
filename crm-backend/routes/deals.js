const express = require('express');
const crmDB = require('../database/connect');
const router = express.Router();
const {isDealOwner,isAuth} = require('../config/passport')

const {getAllDeals, createDeal, getDealByID, updateDealByID, deleteDealByID} = require('../controllers/deals');

router.route('/api/deals').get(isAuth,getAllDeals).post(isAuth,createDeal);
router.route('/api/deals/:id').get(isAuth,getDealByID).patch(isDealOwner,updateDealByID).delete(isDealOwner,deleteDealByID);

router.route('/deals').get(isAuth,(req,res,next)=>{
    const sql = `select * from deals`;
    crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        res.render('deals',{deals:result});
    })
})
module.exports = router;