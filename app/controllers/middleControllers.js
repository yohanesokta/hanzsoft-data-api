const { MongoClient } = require('mongodb');
const exec = require('../config/mongodb');

const client = new MongoClient(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION_KATEGORI
const db = client.db(dbName)

function get(req,res){

    if([req.query.find].includes(undefined)){

        client.connect((error,client) => {
            if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
            var data = db.collection(dbCollection).find().toArray((error,result)=>{
            res.json({"message" : "find all data category","data" : result})
    
        })
    })
    }else{
        client.connect((err,client)=>{
            if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
            var data = db.collection(process.env.DB_COLLECTION).find({"kategori":req.query.find}).toArray((err,result)=>{
                res.json({
                    'message':'find category : ' + req.query.find,
                    'data':result
                })
            })
        })
    }
}


function add(req,res) {
    client.connect((error, client) => {
        if (error){res.status(500).json(sendResponse(error,null,'server error','server error',500))}
        var jenis = req.query.jenis
        var image = req.query.image

        if ([jenis,image].includes(undefined)){
            res.json({'message' : 'validator not completed'})
        }else{
            
            data = {
                    "jenis":jenis,
                    "image":image
                    }
            res.json({"message":"add succsessfull","data":data})
            db.collection(dbCollection).insertOne(data)
        }
    }
)}

module.exports = { get , add }