import React, {useState} from 'react'

type ChoiceTestProps ={
    setSubject: (item : string)=> void
}

const ChoiceTest = ({setSubject}: ChoiceTestProps) => {
    const [itemSubject, setItemSubject] = useState('js')
    const [hiddenBlock, setHiddenBlock] = useState( false )
    const cangeItem = (item : string ) =>{
        setHiddenBlock(true)
        setItemSubject(item)
        console.log('Current Subject', itemSubject)
    }

        return (
            <div >
                <button className="btn btn-info btn-lg btn-block" onClick={()=> cangeItem('js')}>JS</button>
                <button className="btn btn-info btn-lg btn-block" onClick={()=>cangeItem('html')}>HTML</button>
                <button className="btn btn-info btn-lg btn-block" onClick={()=>cangeItem('css')}>CSS</button>
                {hiddenBlock ? <button className="btn btn-success btn-lg btn-block" onClick={ ()=> setSubject(itemSubject) }>Начать тест по {itemSubject}</button> : null}
            </div>
        )
    

}

export default ChoiceTest
