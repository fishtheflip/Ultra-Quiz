import React from 'react'

type AnswerProps =  {
    answerText: string
    choiceAnswer: (event: any) => void
    name: string
}

const AnswerButton = ({choiceAnswer, answerText, name}:AnswerProps) => {
    return (
        <button className="btn btn-primary btn-lg btn-block" onClick={choiceAnswer} name={name}>{answerText}</button>
    )
}

export default AnswerButton
