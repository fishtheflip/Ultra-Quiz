import React from 'react'
import './result.css'
type ResultProps ={
    finalResult: number,
    onRetake: ()=> void,
    onStartLine:()=> void
}

const Result = ({finalResult, onRetake, onStartLine}: ResultProps) => {
    const precentResult = Math.ceil(finalResult/20 * 100)
    return (
        <div className="jumbotron">
            <h1>Ваш результат: {precentResult}% </h1>
            <hr className="my-4"></hr>
            <button className="btn btn-primary btn-lg" role="button" onClick={onRetake}>Еще раз</button>
            <button className="btn btn-primary btn-lg return-btn" role="button" onClick={onStartLine}>Вернутся в главное меню</button>
        </div>
    )
}
export default Result
