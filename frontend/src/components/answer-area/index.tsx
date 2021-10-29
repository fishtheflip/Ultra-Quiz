import React from 'react'
import './answer-area.css'
import AnswerButton from '../answer-button'

type AnswerProps =  {
    answers: {
        variable1: string,
        variable2: string,
        variable3: string,
        variable4: string,
    },
    choiceAnswer: () => void
}

const AnswerArea = ({answers, choiceAnswer}: AnswerProps) => {
    return (
        <div>
            <AnswerButton choiceAnswer={choiceAnswer} answerText={answers.variable1} name={"variable1"}/>
            <AnswerButton choiceAnswer={choiceAnswer} answerText={answers.variable1} name={"variable2"}/>
            <AnswerButton choiceAnswer={choiceAnswer} answerText={answers.variable1} name={"variable3"}/>
            <AnswerButton choiceAnswer={choiceAnswer} answerText={answers.variable1} name={"variable4"}/>
        </div>
    )
}

export default AnswerArea
