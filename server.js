var express = require("express");
var app = express();
app.use(express.static("public"));
var mongoose = require('mongoose')
app.set("view engine", 'ejs');
app.set("views", "./views");

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

const SignUP = require('./controllers/Signup');
const { json } = require("body-parser");

//mongoDB
const db = 'mongodb+srv://taivaha:taivaha123@cluster0.euz2r.mongodb.net/tailuong?retryWrites=true&w=majority'

    const connectDB = async () => {
        try {
           await mongoose.connect(db, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
           });
           console.log('MongoDB connected');
         } catch (error) {
           console.log(error.message);
         }
     };

     connectDB();

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

app.use(express.json())
app.use(SignUP)