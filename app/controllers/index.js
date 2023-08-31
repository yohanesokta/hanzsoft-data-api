const { MongoClient } = require('mongodb');
const insertValidator = require('../models/insertValidator')

const client = new MongoClient(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION

function err(res,msg = "default"){
    if (msg == "default"){
        res.json({"message":"server connection error"})
    }else{
        res.json({"message":msg})
    }
}


function control(){
    console.log('hello')
}

function add(req,res) {
    client.connect((error, client) => {
        if(error){
            err(res)
        }
        
        var validator = insertValidator.main(req)
        if (validator == undefined){
            res.json({"message": "validation is not completed"})
        }else{
            res.json({"message":"validation completed"})
            // const db = client.db(dbName)
        }
    }
)}

function get(req,res){
    if(req.query.action == 'find'){
        client.connect((error, client)=>{
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find({"nama" : new RegExp(req.query.find) })
            .toArray((error, result) =>{
                data = {
                    "message" : "Find Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })
        })
    }else{
        client.connect((error, client)=> {
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find()
            .toArray((error, result) => {
                data = {
                    "message" : "Find All Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })
        })
    }
}

module.exports = {control,add,get}