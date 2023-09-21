const { MongoClient } = require('mongodb');
const insertValidator = require('../models/insertValidator')
const { err } = require('../config/display');
const { query, urlencoded } = require('express');

//  create client

const client = new MongoClient(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// chek data env

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION
const kategoriCollection = process.env.DB_COLLECTION_KATEGORI

// finder doble on api

function sendResponse(data,count = null,message = '',type = 'success',code = 200){
    var make = {
        'status':{
            'code':code,
            'type':type,

        },
        'response':{
            'message': message,
            'count': count,
            'data': data
        }
    }
    return make
}

async function dobleFinder(cola,colb,res) {
  try {
    await client.connect();
    const db = client.db(dbName); 
    const collection1 = db.collection(cola);
    const collection2 = db.collection(colb);
    const result1 = await collection1.find().toArray();
    const result2 = await collection2.find().toArray();

    res.json(sendResponse({
        'items':result1,
        'kategori':result2
    },Object.keys(result1).length))    

  } catch (error) {
    res.status(500).json(sendResponse(null,null,'internal server error 500','error',500))
  } finally {
    client.close();
  }
}

function get(req,res){
    db = client.db(dbName)
    dobleFinder(dbCollection,kategoriCollection,res)
}

function find(req,res){
    var finder = decodeURI(req.params.slug);

    client.connect((error, client)=>{
        if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
                    .find({"nama_query" : new RegExp(finder) })
                    .toArray((error, result) =>{
                        length = Object.keys(result).length;
                        if (length == 0){
                            res.status(404).json(sendResponse(null,length,'find data not found from database','not found',404))   
                        }else{
                            res.json(sendResponse(result,length,'finder data from database by params'))
                        }})
                })
}

function notFound(res){
    res.status(400).json(sendResponse(null,0,'url route not found | tolong baca documentasi','bad request',400))
}
// function get(req,res){
//     if (![req.query.find].includes(undefined)){

//         client.connect((error, client)=>{
//             if (error){err(res)}
//             db = client.db(dbName)
//             data = db.collection(dbCollection)
//             .find({"nama_query" : new RegExp(req.query.find.toLowerCase()) })
//             .toArray((error, result) =>{
//                 data = {
//                     "message" : "find data -> result",
//                     "data" : result
//                 }
//                 res.json(data)
//             })
//         })
//     }else{
//         if([req.query.put].includes(undefined)){

//         client.connect((error, client)=> {
//             if (error){err(res)}
//             db = client.db(dbName)
//             var software = null
//             dobleFinder(dbCollection,kategoriCollection,res)

//         })
//             }else{

//                 console.log(req.query.put)
//                 client.connect((error,client) =>{
//                     db = client.db(dbName)
//                     data = db.collection(dbCollection).find({"nama" : req.query.put})
//                     .toArray((error,result) =>{
//                         res.json({"data" : result})
//                     })
//                 })
//             }
//     }
// }

// fungsi add

function add(req,res) {
    client.connect((error, client) => {
        if(error){
            err(res)
        }
        db = client.db(dbName)
        var GETor = insertValidator.main(req,res)
            if (GETor.valid){
                db.collection(dbCollection).insertOne(GETor.data)
            }
    }
)}

module.exports = {add,get,find,notFound}
