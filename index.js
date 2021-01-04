var express = require('express')
var app = express()
var mysqlDAO = require('./mysqlDAO')

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
 })
 
 app.get('/displayCountries', (req, res)=>{
     mysqlDAO.getCountries()
     .then((result)=>{
         res.render('displayCountries', {countries:result})
     })
     .catch((error)=>{
         res.send(error)
         
     })
 })

 app.get('/displayCities', (req, res)=>{
    mysqlDAO.getCities()
    .then((result)=>{
        res.render('displayCities', {cities:result})
    })
    .catch((error)=>{
        res.send(error)
        
    })
})


 app.listen(3000, () => {
    console.log("Listening on port 3000")
})