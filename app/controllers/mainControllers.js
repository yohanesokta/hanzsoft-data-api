const { MongoClient } = require('mongodb');
const insertValidator = require('../models/insertValidator')
const { err } = require('../config/display');
const { query } = require('express');

const client = new MongoClient(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION


// ( API POST FUNCTION )


function add(req,res) {
    client.connect((error, client) => {
        if(error){
            err(res)
        }

        var validator = insertValidator.main(req)
        if (validator == undefined){
            res.json({"message": "validation is not completed"})
        }else{
            const db = client.db(dbName)
            data = {
                    "nama": validator[0],
                    "nama_query":req.query.nama.toLowerCase(),
                    "kategori":validator[1],
                    "description":validator[2],
                    "info":validator[3],
                    "icon":validator[4],
                    "download":validator[5],
                    "ver":validator[6],
                    "prev":validator[7],
                    "req":validator[8]
                    }
            res.json({"message":"add succsessfull","data":data})

            db.collection(dbCollection).insertOne(data)
        }
    }
)}

// (/api GET FUNTION)

function get(req,res){
    if (![req.query.find].includes(undefined)){

        client.connect((error, client)=>{
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find({"nama_query" : new RegExp(req.query.find.toLowerCase()) })
            .toArray((error, result) =>{
                data = {
                    "message" : "find data -> result",
                    "data" : result
                }
                res.json(data)
            })
        })
    }else{
        if([req.query.put].includes(undefined)){

        client.connect((error, client)=> {
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find()
            .toArray((error, result) => {
                data = {
                    "message" : "query all data -> result",
                    "data" : result
                }
                res.json(data)
            })
        })
            }else{

                console.log(req.query.put)
                client.connect((error,client) =>{
                    db = client.db(dbName)
                    data = db.collection(dbCollection).find({"nama" : req.query.put})
                    .toArray((error,result) =>{
                        res.json({"data" : result})
                    })
                })
            }
    }
}

module.exports = {add,get}