import React, {useState} from 'react'

const ChoiceTest = () => {
    const [item, setItem] = useState('js')
    const [hiddenBlock, setHiddenBlock] = useState( false )
    const cangeItem = (item : string ) =>{
        setItem(item)
        setHiddenBlock(true)
        console.log(item)
    }

        return (
            <div >
                <button className="btn btn-info btn-lg btn-block" onClick={()=> cangeItem('js')}>JS</button>
                <button className="btn btn-info btn-lg btn-block" onClick={()=>cangeItem('html')}>HTML</button>
                <button className="btn btn-info btn-lg btn-block" onClick={()=>cangeItem('css')}>CSS</button>
                {hiddenBlock ? <button className="btn btn-success btn-lg btn-block" onClick={()=> console.log('BEGIN')}>Начать тест по {item}</button> : null}
            </div>
        )
    

}

export default ChoiceTest
