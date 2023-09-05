// global function routes
const mainControl = require('../app/controllers/mainControllers')
const midControl = require('../app/controllers/middleControllers')


function globalRoutes(app) {


    app.get('/',(req,res)=>{
        var data = {
            "name":"hanzsoft-data-api",
            "author":"YohanesOktanio",
            "organisasi":"YhanzC Product",
            "isi":"Beragam free software",
            "hosting":"vercel",
        }
        res.json({"message":"'/' request not found , please use /api on url","data":data})
    })

    app.post('/api',(req,res)=>{
        mainControl.add(req,res)
    })

    app.get("/api",(req,res)=>{
        mainControl.get(req,res)
    })

    app.get("/api/kategori",(req,res)=>{
        midControl.get(req,res)
    })

    app.post("/api/kategori",(req,res)=>{
        midControl.add(req,res)
    })

}

module.exports = {globalRoutes}