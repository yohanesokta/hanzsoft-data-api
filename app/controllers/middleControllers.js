const { MongoClient } = require('mongodb');
const exec = require('../config/mongodb');

function get(req,res){
    exec.middldbControl(res,()=>{
        res.json({"message":"berjaya"})
    })
}

module.exports = { get }