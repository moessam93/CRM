const crmDB = require('../database/connect');

const getAllDeals = (req,res)=>{
    const sql = `select * from deals`;
    crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        res.status(200).json(result);
    })
}

const getDealByID = (req,res)=>{
    const sql = `select * from deals where deal_id=${req.params.id}`;
    crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        res.status(200).json(result);
    })
}

const createDeal = (req,res)=>{
    const sql = `create table if not exists deals(
        deal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, deal_name VARCHAR(255) NOT NULL, deal_stage VARCHAR(255) NOT NULL, amount INT NOT NULL,
        currency VARCHAR(255) NOT NULL, close_date DATE NOT NULL, deal_owner VARCHAR(255) NOT NULL, deal_description VARCHAR(255) NOT NULL, deal_source VARCHAR(255) NOT NULL,
        country VARCHAR(255), associated_company VARCHAR(255), CONSTRAINT unique_deal UNIQUE (deal_name)
    );
    insert ignore into deals set ?`;
    const query = crmDB.query(sql,req.body,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(201).json(query.values);
}

const updateDealByID = (req,res)=>{
    const sql = `update deals set ? where deal_id=${req.params.id}`;
    const query = crmDB.query(sql,req.body,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(200).send("Deal has been updated");
}

const deleteDealByID = (req,res)=>{
    const sql = `delete from deals where deal_id=${req.params.id}`;
    const query = crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(200).send("Deal has been deleted");
}

module.exports = {getAllDeals,createDeal,getDealByID,updateDealByID,deleteDealByID};