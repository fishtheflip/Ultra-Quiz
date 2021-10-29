import React from 'react'
type ResultProps ={
    finalResult: number,
    onRetake: ()=> void,
    onStartLine:()=> void
}

const Result = ({finalResult, onRetake, onStartLine}: ResultProps) => {
    return (
        <div className="jumbotron">
            <h1>Ваш результат: {finalResult}% </h1>
            <hr className="my-4"></hr>
            <button className="btn btn-primary btn-lg" role="button" onClick={onRetake}>Еще раз</button>
            <button className="btn btn-primary btn-lg" role="button" onClick={onStartLine}>Вернутся в главное меню</button>
        </div>
    )
}
export default Result
