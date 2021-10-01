const express = require('express');
const app = express();

const userModel = require('../models/nguoidung')

app.get("/", function(req, res) {
    res.render('SignUp')
});
app.post('/SignUp',function(req,res){
    const user = new userModel({
        email: req.body.txtemail,
        name: req.body.txtname,
        phone: req.body.txtphone,
        password: req.body.txtpass
    })
    user.save(function(err){
        if(err){
            res.json({"Kq":0}+err)
        }else{
            res.render('Login.ejs')
        }
    })
})

module.exports = app