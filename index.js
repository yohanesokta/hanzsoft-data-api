const express = require("express");
const cors = require('cors');
const {db_connect} = require('./app/config/mongodb')
const routes = require('./routes/Routes')

const app = express();
const corsOption = {
    origin:"*"
};
app.set('views', __dirname + '/view');
app.engine('html', require('ejs').renderFile);

app.use(cors(corsOption));
app.use(express.json());

db_connect()

routes.globalRoutes(app)

const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`Running port ${port}`))