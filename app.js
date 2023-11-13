const { log } = require('console')
const express =require('express')
const path = require('path')
const port = 3030
const app= express()

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')) )
app.get('/register' ,(req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/login' ,(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, console.log(`server run in http://localhost:${port}`))
