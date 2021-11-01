import {InitialStateValue , ActionValue} from '../../types/quiz-reduser-types'
import {CHANGE_PAGE, CHANGE_SUBJECT, CHANGE_CORRECT_ANSWER, NULLIFY_CORRECT_ANSWER,CHANGE_CURRENT_QUESTION, NULLIFY_CURRENT_QUESTION} from '../../actions'

const initialState : InitialStateValue = {
    currentPageR: '',
    currentSubjectR: 'js',
    correctAnswerR: 0,
    currentQuestionR: 0
}

const quizReducer = (state = initialState, action: ActionValue) : InitialStateValue  => {
    switch(action.type){
        case CHANGE_PAGE:
            return{ ...state, currentPageR : action.payload}
        case CHANGE_SUBJECT:
            return{ ...state, currentSubjectR : action.payload}
        case CHANGE_CORRECT_ANSWER:
            return{ ...state, correctAnswerR : state.correctAnswerR + 1}
        case NULLIFY_CORRECT_ANSWER:
            return{ ...state, correctAnswerR : 0}
        case CHANGE_CURRENT_QUESTION:
            return{ ...state, currentQuestionR : state.currentQuestionR + 1}
        case NULLIFY_CURRENT_QUESTION:
            return{ ...state, currentQuestionR : 0}
        default:
            return state
    }
}

export default quizReducer