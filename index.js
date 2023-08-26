const express = require("express");
const cors = require('cors');
const {db_connect} = require('./app/config/mongodb')
const routes = require('./routes/')

const app = express();
const corsOption = {
    origin:"*"
};

app.use(cors(corsOption));
app.use(express.json());

db_connect()

routes.global_routes(app)

const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`Running port ${port}`))