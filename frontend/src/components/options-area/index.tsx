import React from 'react'
import './options-area.css'

type OptionProps = {
    onRetake: ()=> void,
    goToMainPage: ()=> void
}

const OptionsArea = ({onRetake,goToMainPage }: OptionProps) => {
    return (
        <div className="options">
            <button className="btn btn-outline-danger cnc-btn" onClick={onRetake}>Рестарт</button>
            <button className="btn btn-outline-success" onClick={goToMainPage}> Вернуться на главную страницу</button>
        </div>
    )
}

export default OptionsArea
