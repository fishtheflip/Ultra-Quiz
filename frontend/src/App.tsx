import React, { useState, useEffect} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'
import Result from './components/result'
import MainPage from './components/main-page'
import data from './data/data'
import dataHtml from './data/data-html'
import dataCss from './data/data-css'
import { useSelector,useDispatch } from 'react-redux';
import {InitialStateValue} from './types/quiz-reduser-types'
const App = () => {

  const [currentPage, setCurrentPage] = useState('')
  const [currentSubject, setCurrentSubject] = useState('js')
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentData, setCurrentData] = useState(data)
  
  const correctAnswerR = useSelector<InitialStateValue>(state => state.correctAnswerR)
  const currentPageR = useSelector<InitialStateValue>(state => state.currentPageR)
  const currentQuestionR = useSelector<InitialStateValue>(state => state.currentQuestionR)
  const currentSubjectR = useSelector<InitialStateValue>(state => state.currentSubjectR)

  const dispatch = useDispatch()
  const addNode = (note:string) =>{
    dispatch({type: 'Hello', payload: note})
  }

  useEffect(():void => {
    if(currentQuestion === 19) {
      setCurrentPage('result')
      setCurrentQuestion(0)
    }
  }, [currentQuestion]);

  useEffect(():void => {
    if(currentSubject === 'js' ) setCurrentData(data)
    if(currentSubject === 'css' ) setCurrentData(dataCss)
    if(currentSubject === 'html' ) setCurrentData(dataHtml)
  }, [currentSubject]);

  let {variable1, variable2, variable3, variable4, question, trueAnswer} = currentData[currentQuestion]

  const setSubject = (item: string):void =>{
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

  const restart = ():void => {
    if(currentPage === 'result') setCurrentPage('test')
    setCurrentQuestion(0)
    setCorrectAnswer(0)
  }
  const goToMainPage = ():void =>{
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
