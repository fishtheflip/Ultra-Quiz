const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const dataJS = require('./data/data-js')
const dataHtml = require('./data/data-html')
const dataCss = require('./data/data-css')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('hello')
})
app.get('/js', (req, res)=>{
    res.send(dataJS)
})
app.get('/html', (req, res)=>{
    res.send(dataHtml)
})
app.get('/css', (req, res)=>{
    res.send(dataCss)
})

app.listen(port, ()=>{
    console.log('SERVER IS RUNNING')
})