const { MongoClient } = require('mongodb');
const insertValidator = require('../models/insertValidator')
const { err } = require('../config/display')

const client = new MongoClient(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION




function control(){
    console.log('hello')
}

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
                    "ver":validator[6]
                    }
            res.json({"message":"add succsessfull","data":data})

            db.collection(dbCollection).insertOne(data)
        }
    }
)}

// (/api GET FUNTION)

function get(req,res){
    if(req.query.action == 'find'){

        // if add parameter action : find (! require parameter find : < string >)

        client.connect((error, client)=>{
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find({"nama_query" : new RegExp(req.query.find.toLowerCase()) })
            .toArray((error, result) =>{
                data = {
                    "message" : "Find Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })
        })
}else{

    // without parameter action
        client.connect((error, client)=> {
            if (error){err(res)}
            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find()
            .toArray((error, result) => {
                data = {
                    "message" : "Query All Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })
        })
    }
}

module.exports = {control,add,get}