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


  const [currentData, setCurrentData] = useState(data)
  
  const correctAnswerR = useSelector<InitialStateValue>(state => state.correctAnswerR)
  const currentPageR = useSelector<InitialStateValue>(state => state.currentPageR)
  const currentQuestionR = useSelector<InitialStateValue, number>(state => state.currentQuestionR)
  const currentSubjectR = useSelector<InitialStateValue>(state => state.currentSubjectR)

  const dispatch = useDispatch()

  // ================== //
  const changeCurrentPage = (note:string) =>{
    dispatch({type: 'CHANGE_PAGE', payload: note})
  }
  const changeCurrentSubject = (note:string) =>{
    dispatch({type: 'CHANGE_SUBJECT', payload: note})
  }
  const changeCorrectAnswer = () =>{
    dispatch({type: 'CHANGE_CORRECT_ANSWER'})
  }
  const nullifyCorrectAnswer =() =>{
    dispatch({type: 'NULLIFY_CORRECT_ANSWER'})
  }
  const changeCurrentQuestion = () =>{
    dispatch({type: 'CHANGE_CURRENT_QUESTION'})
  }
  const nullufyCurrentQuestion = () =>{
    dispatch({type: 'NULLIFY_CURRENT_QUESTION'})
  }
  // ================= //
  

  useEffect(():void => {
    console.log('Updated')
    console.log(currentQuestionR)
    if(currentQuestionR === 19) {
      changeCurrentPage('result')
      changeCurrentQuestion()
    }
  }, [currentQuestionR]);

  useEffect(():void => {
    if(currentSubjectR === 'js' ) setCurrentData(data)
    if(currentSubjectR === 'css' ) setCurrentData(dataCss)
    if(currentSubjectR === 'html' ) setCurrentData(dataHtml)
  }, [currentSubjectR]);
  
  // ================ //

  let {variable1, variable2, variable3, variable4, question, trueAnswer} = currentData[currentQuestionR] || {variable1:'default', variable2:'default', variable3:'default', variable4:'default', question:'default', trueAnswer:'default'}


  // ================ //
  const setSubject = (item: string):void =>{
    changeCurrentSubject(item)
    changeCurrentPage('test')
    console.log(data)
  }
  const choiceAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{
    const name = (e.target as HTMLButtonElement).name
    e.preventDefault()
    if(name === trueAnswer) changeCorrectAnswer()
    changeCurrentQuestion()
  }

  const restart = ():void => {
    if(currentPageR === 'result') changeCurrentPage('test')
    nullufyCurrentQuestion()
    nullifyCorrectAnswer()
  }
  const goToMainPage = ():void =>{
    restart()
    changeCurrentPage('')
  }

  // ================= //

  if(currentPageR === 'test' ){  
    return (
      <div className='main-con'>
        <QuestionArea question={question}/>
        <AnswerArea choiceAnswer={ choiceAnswer } answers={ {variable1 , variable2, variable3, variable4} }/>
        <OptionsArea onRetake={ restart }  goToMainPage={goToMainPage}/>
      </div>
    );
  }
  if(currentPageR === 'result'){
    return(
      <Result finalResult={correctAnswerR} onRetake={restart} onStartLine={goToMainPage} />
    )
  }
  return <MainPage setSubject={setSubject}/>
}

export default App;
