const crmDB = require('../database/connect');

const getAllCompanies = (req,res)=>{
    const sql = `select * from companies`;
    crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        res.status(200).json(result);
    })
}

const getCompanyByID = (req,res)=>{
    const sql = `select * from companies where company_id=${req.params.id}`;
    crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
        res.status(200).json(result);
    })
}

const createCompany = (req,res)=>{
    const sql = `create table if not exists companies(
        company_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, company_domain VARCHAR(255) NOT NULL, company_name VARCHAR(255) NOT NULL, company_owner VARCHAR(255), industry VARCHAR(255),
        phone_number VARCHAR(255), country VARCHAR(255), no_employees VARCHAR(255), annual_revenue VARCHAR(255),
        CONSTRAINT unique_company UNIQUE (company_domain)
    );
    insert ignore into companies set ?`
    const query = crmDB.query(sql,req.body,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(201).json(query.values);
}


const updateCompanyByID = (req,res)=>{
    const sql = `update companies set ? where company_id=${req.params.id}`;
    const query = crmDB.query(sql,req.body,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(200).send("Company has been updated");
}

const deleteCompanyByID = async (req,res)=>{
    const sql = `delete from companies where company_id=${req.params.id}`;
    const query = crmDB.query(sql,(err,result)=>{
        if (err){
            throw err;
        }
    })
    res.status(200).send("Company has been deleted");
}

module.exports = {getAllCompanies,createCompany,getCompanyByID,updateCompanyByID,deleteCompanyByID}