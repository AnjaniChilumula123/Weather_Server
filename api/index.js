const { response } = require("express");
const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
var weather;
app.use(cors());
app.get('/getWeatherAnjani/:city' , (req , res) =>{
    let city = req.params.city;
    var request = require('request');
    //res.send("this is working fine in browser"+res.statusCode);
    var url = 'http://api.weatherstack.com/current?access_key=9dd8af983013896d33a4f77e9bbeb682&query='+city;

        request(url,function(err ,response,body){
        //let data = JSON.parse(body);
        if(err) res.json("This is error");
        else
        {
            weather = JSON.parse(body);
            //console.log(weather);
            // res.json({
            //     success:'200',
            //     message : 'This is working as expected'
            // });
            res.json(weather);
        }
        
});
})



app.listen(1000 , () => console.log('server started at 1000 anjani'));