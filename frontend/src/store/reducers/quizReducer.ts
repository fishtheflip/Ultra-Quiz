import {InitialStateValue , ActionValue} from '../../types/quiz-reduser-types'

const SET_CURRENT_STATE = 'SET_CURRENT_STATE'

const initialState : InitialStateValue = {
    currentPageR: '',
    currentSubjectR: 'js',
    correctAnswerR: 0,
    currentQuestionR: 0
}

const quizReducer = (state = initialState, action: ActionValue) : InitialStateValue  => {
    switch(action.type){
        case SET_CURRENT_STATE:
            return{ ...state, currentPageR : action.payload}
        default:
            return state
    }
}

export default quizReducer