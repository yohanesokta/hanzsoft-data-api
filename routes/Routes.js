// global function routes
const mainControl = require('../app/controllers/mainControllers')
const midControl = require('../app/controllers/middleControllers')


function globalRoutes(app) {


    app.get('/',(req,res)=>{
        var data ={
            'status':{
                'code':200,
                'type':'success'
            },
            'response':{
                'message':'wellcome to hanzsoft - data - api , documentasi ada di github',
                'link' : 'https://github.com/yohanesokta/hanzsoft-data-api',
                'dev' : 'yohanes oktanio',
                'data':null
            }
        }
        res.json(data)
    })
    
    // alredy
    app.post('/api',(req,res)=>{
        mainControl.add(req,res);
    })

    app.get("/api",(req,res)=>{
        mainControl.get(req,res);
    })

    app.get("/api/kategori",(req,res)=>{
        midControl.get(req,res);
    })

    app.post("/api/kategori",(req,res)=>{
        midControl.add(req,res);
    })
    // add

    app.get("/api/find/:slug",(req,res)=>{
        mainControl.find(req,res);
    })
    app.get('/api/put/:slug',(req,res)=>{
        mainControl.put(req,res);
    })

    app.get('*',(req,res)=>{
        mainControl.notFound(res);
    })
}

module.exports = {globalRoutes}