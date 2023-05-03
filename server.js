const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs');
app.get('/index', function (req, res){
    res.render('index')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  app.get('/login', function (req, res){
    res.render('login')
})

app.get('/cadastro', function (req, res){
  res.render('cadastro')
})

