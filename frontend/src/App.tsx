import React, { useState} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'
import Result from './components/result'
import MainPage from './components/main-page'
import data from './data/data'



const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [questionsCount, setQuestionsCount] = useState(0)
  const [currentSubject, setCurrentSubject] = useState('js')

  const setSubject = (item: string) =>{
    setCurrentSubject(item)
    setCurrentPage('test')
  }
  

  if(currentPage === 'test' ){
    return (
      <div className='main-con'>
        <QuestionArea question={'random text'}/>
        <AnswerArea choiceAnswer={()=> console.log('hello')} answers={ {variable1: 'random text', variable2: 'random text', variable3: 'random text', variable4: 'random text'} }/>
        <OptionsArea onRetake={ ()=> console.log('retake') } onBtn={()=> console.log('next')} />
      </div>
    );
  }
  if(currentPage === 'result'){
    return(
      <Result finalResult={80} onRetake={()=> console.log('retake')} onStartLine={()=> console.log('go to the main')} />
    )
  }
  return <MainPage setSubject={setSubject}/>
}

export default App;
