import React, { useState, useEffect} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'
import Result from './components/result'
import MainPage from './components/main-page'
import { useSelector,useDispatch } from 'react-redux';
import {InitialStateValue} from './types/quiz-reduser-types'
import axios, {  AxiosResponse } from 'axios';
import { useQuery } from '@apollo/client';
import {GET_ALL_JS, GET_ALL_CSS, GET_ALL_HTML} from './query'



const App = () => {
  // Set default data
  const defaultData = {variable1:'data sending...', variable2:'data sending...', variable3:'data sending...', variable4:'data sending...', question:'data sending...', trueAnswer:'default...'}
  const [currentData, setCurrentData] = useState([defaultData])

  // const {dataCss} = useQuery(GET_ALL_CSS)
  // const {dataHtml}  = useQuery(GET_ALL_HTML)
  
  
  // Set variables from redux
  const correctAnswerR = useSelector<InitialStateValue>(state => state.correctAnswerR)
  const currentPageR = useSelector<InitialStateValue>(state => state.currentPageR)
  const currentQuestionR = useSelector<InitialStateValue, number>(state => state.currentQuestionR)
  const currentSubjectR = useSelector<InitialStateValue>(state => state.currentSubjectR)

  const {data } = useQuery(GET_ALL_JS)
  console.log('Qury',data)
  // const dataHTML = useQuery(GET_ALL_HTML)
  // console.log(dataHTML)
  // const dataCSS = useQuery(GET_ALL_CSS)
  
  // const hz = useQuery(GET_ALL_HTML)
  



  // set dispatch actions
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
  
  // Set use effect hooks
  useEffect(():void => {
    if(currentQuestionR === 19) {
      changeCurrentPage('result')
      changeCurrentQuestion()
    }
  }, [currentQuestionR]);

  useEffect(():void => {
    if(currentSubjectR === 'js' ) getDataFromBack('js')
    if(currentSubjectR === 'css' ) getDataFromBack('css')
    if(currentSubjectR === 'html' ) getDataFromBack('html')
  }, [currentSubjectR]);

  // ================ //
  // Destucturing variable to send it to props
  let {variable1, variable2, variable3, variable4, question, trueAnswer} =  defaultData


  // ================ //
  // Some methods to interactive with app
  const setSubject = (item: string):void =>{
    changeCurrentSubject(item)
    changeCurrentPage('test')
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

  const getDataFromBack = (item:string): void =>{
    // axios.get(`http://localhost:5000/${item}`).then((res:AxiosResponse )=>{
    //   setCurrentData(res.data)
    // }).catch((err)=> console.log(err))
    // if(item === 'js') setCurrentData(dataJS)
    // if(item === 'css') setCurrentData(dataCss)
    // if(item === 'html') setCurrentData(dataHtml)
    
  }

  // ================= //
  // Display app
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
  return <MainPage setSubject={setSubject} getDataFromBack={getDataFromBack}/>
}

export default App;
