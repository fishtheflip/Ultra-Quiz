import React, {FC, useState} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'
import Result from './components/result'
import MainPage from './components/main-page'
import { createStore } from 'redux';
import reducer from './store/reducer'

const store = createStore(reducer);

const App = () => {
  const [currentPage, setCurrentPage] = useState(null)
  const [countQuestion, setCountQuestion] = useState(0)
  
  if(currentPage === 'test'){
    return(
      <Result finalResult={80}  onRetake={()=> console.log('retake')} onStartLine={()=> console.log('go to the main')} />
    )
  }
  if(currentPage === 'test' && countQuestion === 20){
    return (
      <div className='main-con'>
        <QuestionArea question={'random text'}/>
        <AnswerArea choiceAnswer={()=> console.log('hello')} answers={ {variable1: 'random text', variable2: 'random text', variable3: 'random text', variable4: 'random text'} }/>
        <OptionsArea onRetake={ ()=> console.log('retake') } onBtn={()=> console.log('next')} />
      </div>
    );
  }
  return <MainPage/>
}

export default App;
