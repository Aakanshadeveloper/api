require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
const postsrouter = require('./router/posts');


const app = express();
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
} )
.then(()=>{
    console.log("DB CONNECT");

});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use("/api",postsrouter);


const port =  process.env.PORT || 7000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));