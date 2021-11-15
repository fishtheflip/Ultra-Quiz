const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')

const dataJS = require('./data/data-js')
const dataHtml = require('./data/data-html')
const dataCss = require('./data/data-css')

const users = [{id:1, username: 'Vasya', age: 25}]

app.use(cors())

// const createUser = (input) =>{
//     const id = Date.now()
//     return {
//         id, ...input
//     }
// }

const root = {
    getAllJs: ()=>{
        return dataJS
    },
    getAllCss: ()=>{
        return dataCss
    },
    getAllHtml: ()=>{
        return dataHtml
    }
}
app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema,
    rootValue: root
}))

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