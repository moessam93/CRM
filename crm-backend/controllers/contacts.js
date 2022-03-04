const crmDB = require('../database/connect');

const getAllContacts = (req, res) => {
    const sql = `select * from contacts`;
    crmDB.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    })
}

const getContactByID = (req, res) => {
    const sql = `select * from contacts where contact_id=${req.params.id}`;
    crmDB.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    })
}

const createContact = (req, res) => {
    const sql = `create table if not exists contacts(contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, job_title VARCHAR(255),
    company VARCHAR(255), contact_owner VARCHAR(255), lead_status VARCHAR(255), 
    lifecycle_stage VARCHAR(255), mobile_number VARCHAR(255), country VARCHAR(255),
    CONSTRAINT unique_contact UNIQUE (email)
    );
    insert ignore into contacts set ?`;
    const query = crmDB.query(sql, req.body, (err, result) => {
        if (err) {
            throw err;
        }
    })
    res.status(201).json(query.values);
}

const updateContactByID = (req, res) => {
    const sql = `update contacts set ? where contact_id=${req.params.id}`;
    const query = crmDB.query(sql, req.body, (err, result) => {
        if (err) {
            throw err;
        }
    });
    res.status(200).send('Contact has been updated')
}

const deleteContactByID = (req, res) => {
    const sql = `delete from contacts where contact_id=${req.params.id}`;
    const query = crmDB.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
    })
    res.status(200).send("Contact has been deleted");
}

module.exports = { getAllContacts, createContact, updateContactByID, deleteContactByID, getContactByID };