const { MongoClient } = require('mongodb');
const exec = require('../config/mongodb');
const { err } = require('../config/display');

const client = new MongoClient(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION_KATEGORI
const db = client.db(dbName)

function get(req,res){
   client.connect((error,client) => {
    if (error) { err(res) }
    
    var data = db.collection(dbCollection).find().toArray((error,result)=>{

        res.json({"message" : "find all data category","data" : result})
    
    })
   })
}


function add(req,res) {
    client.connect((error, client) => {
        if(error){
            err(res)
        }
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

module.exports = { get , add}