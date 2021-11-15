import {gql} from '@apollo/client'

export const GET_ALL_JS = gql`
    query{
        getAllJs{
        id, variable1, variable2, variable3,variable4, trueAnswer, question
    }
    }	
`
export const GET_ALL_HTML = gql`
    query{
        getAllHtml{
        id, variable1, variable2, variable3,variable4, trueAnswer, question
    }
    }	
`
export const GET_ALL_CSS = gql`
    query{
        getAllCss{
        id, variable1, variable2, variable3,variable4, trueAnswer, question
    }
    }	
`