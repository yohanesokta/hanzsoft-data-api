// global function routes
const Control = require('../app/controllers')


function global_routes(app) {


    app.get('/',(req,res)=>{
        res.json({"message":"hello"})
    })

    app.get('/add',(req,res)=>{
        Control.add(req,res)
    })

    app.get("/api",(req,res)=>{
        Control.get(req,res)
    })

}

module.exports = {global_routes}