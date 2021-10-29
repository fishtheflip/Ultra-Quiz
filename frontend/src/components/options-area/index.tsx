import React from 'react'

type OptionProps = {
    onRetake: ()=> void,
    onBtn: ()=> void
}

const OptionsArea = ({onRetake,onBtn }: OptionProps) => {
    return (
        <div className="options">
            <button className="btn btn-outline-danger cnc-btn" onClick={onRetake}>Рестарт</button>
            <button className="btn btn-outline-success" onClick={onBtn}>Следующий вопрос</button>
        </div>
    )
}

export default OptionsArea
