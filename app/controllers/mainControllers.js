const { MongoClient } = require('mongodb');
const insertValidator = require('../models/Validator')
const { query, urlencoded } = require('express');
const { sendResponse } = require('../config/Response.send')

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
        if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
        db = client.db(dbName)
        data = db.collection(dbCollection)
                    .find({"nama_query" : new RegExp(finder) })
                    .toArray((error, result) =>{
                        length = Object.keys(result).length;
                        if (length == 0){
                            res.status(404).json(sendResponse(null,length,'berhasil mencari tetapi data tidak ada yang cocok','not found',404))   
                        }else{
                            res.json(sendResponse(result,length,'finder data from database by params'))
                        }})
                })
}


function put(req,res){
    client.connect((error,client)=>{
        if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
        var request = req.params.slug
        var db = client.db(dbName);
        var data = db.collection(dbCollection)
            .find({"nama" : request})
            .toArray((error,result)=>{
                length = Object.keys(result).length;
                if (length == 0){
                    res.status(404).json(sendResponse(null,length,'find data not found from database','not found',404))
                }else{
                    res.json(sendResponse(result,length,'cari data dengan spesifik'))
                }
            })
    })
}

//  fungsi default add

function add(req,res) {
    client.connect((error, client) => {
        if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
        db = client.db(dbName)
        var GETor = insertValidator.main(req,res)
            if (GETor.valid){
                db.collection(dbCollection).insertOne(GETor.data)
            }
    }
)}

// if our request not found on routes

function notFound(res){
    res.status(400).json(sendResponse(null,0,'url route not found | tolong baca documentasi','bad request',400))
}


module.exports = {add,get,find,notFound,put}
