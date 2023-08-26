// global function routes



function global_routes(app) {


    app.get('/',(req,res)=>{
        res.json({"message":"hello"})
    })

}

module.exports = {global_routes}