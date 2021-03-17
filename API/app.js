var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post(`/api/login`, function(reg, res){
    if(reg.body.username=='admin' && reg.body.password=='1') {
        res.send('login success')
    } else {
        res.send('login false')
    }
})


app.listen(8080, function() {
    console.log('start server')
})