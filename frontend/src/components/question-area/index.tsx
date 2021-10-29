import React from 'react'
import './question-area.css'

type QuestionProps = {
    question: string
}

const QuestionArea = ({question}: QuestionProps) => {
    return (
        <div className='quest'>
            <label className="quest-text">{question}</label>
        </div>
    )
}

export default QuestionArea
