import React, { useState, useEffect} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'
import Result from './components/result'
import MainPage from './components/main-page'
import data from './data/data'

const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [currentSubject, setCurrentSubject] = useState('js')
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  
  useEffect(() => {
    if(currentQuestion === 19) {
      setCurrentPage('result')
      setCurrentQuestion(0)
    }
  }, [currentQuestion]);

  let {variable1, variable2, variable3, variable4, question, trueAnswer} = data[currentQuestion]

  const setSubject = (item: string) =>{
    setCurrentSubject(item)
    setCurrentPage('test')
    console.log(data)
  }
  const choiceAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{
    const name = (e.target as HTMLButtonElement).name
    e.preventDefault()
    if(name === trueAnswer) setCorrectAnswer(correctAnswer + 1)
    setCurrentQuestion(currentQuestion + 1)
  }

  const restart = () => {
    if(currentPage === 'result') setCurrentPage('test')
    setCurrentQuestion(0)
    setCorrectAnswer(0)
  }
  const goToMainPage = () =>{
    restart()
    setCurrentPage('')
  }

  if(currentPage === 'test' ){  
    return (
      <div className='main-con'>
        <QuestionArea question={question}/>
        <AnswerArea choiceAnswer={ choiceAnswer } answers={ {variable1 , variable2, variable3, variable4} }/>
        <OptionsArea onRetake={ restart }  goToMainPage={goToMainPage}/>
      </div>
    );
  }
  if(currentPage === 'result'){
    return(
      <Result finalResult={correctAnswer} onRetake={restart} onStartLine={goToMainPage} />
    )
  }
  return <MainPage setSubject={setSubject}/>
}

export default App;
