const { MongoClient } = require('mongodb');
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

        const db = client.db(dbName)

        db.collection(dbCollection).insertOne(
            {
                "nama":"Ilustrator",
                "kategori":"Desain"
            }
        )

        res.json({"message":"add complete"})
        
    })
    

}

function get(req,res){
    if(req.query.data == 'find'){
        client.connect((error, client)=>{
            if (error){
                err(res)
            }

            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find({"nama" : new RegExp(req.query.find) })
            .toArray((error, result) =>{
                data = {
                    "Message" : "Find Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })

        })
        
    }else{
        client.connect((error, client)=>{
            if (error){
                err(res)
            }

            db = client.db(dbName)
            data = db.collection(dbCollection)
            .find()
            .toArray((error, result) =>{

                data = {
                    "Message" : "Find ALL Data ~ Result",
                    "data" : result
                }
                res.json(data)
            })

        })
    }
}

module.exports = {control,add,get}