const {buildSchema} = require('graphql')
const schema = buildSchema(`
    type Query {
        hello: [Int],
        getAllJs: [obj],
        getAllCss: [obj],
        getAllHtml: [obj]
    }
    type obj {
        id: String,
        question: String,
        variable1: String,
        variable2: String,
        variable3: String,
        variable4: String,
        trueAnswer: String
    }
`)

module.exports = schema