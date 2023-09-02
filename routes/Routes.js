// global function routes
const mainControl = require('../app/controllers/mainControllers')
const midControl = require('../app/controllers/middleControllers')
const { display } = require('../app/config/display')


function globalRoutes(app) {


    app.get('/',(req,res)=>{
        res.json({"message":"hello"})
    })

    app.post('/api',(req,res)=>{
        display(" '/api' on Post ")
        mainControl.add(req,res)
    })

    app.get("/api",(req,res)=>{
        display(" '/api' on GET ")
        mainControl.get(req,res)
    })

    app.get("/api/kategori",(req,res)=>{
        display(" '/api/kategori' on GET")
        midControl.get(req,res)
    })
    app.post("/api/kategori",(req,res)=>{
        display(" '/api/kategori' on Post")
        midControl.add(req,res)
    })

}

module.exports = {globalRoutes}