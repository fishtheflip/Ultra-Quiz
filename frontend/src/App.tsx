import React, {FC} from 'react';
import QuestionArea from './components/question-area'
import AnswerArea from './components/answer-area'
import OptionsArea from './components/options-area'

const App: FC = () => {
  return (
    <div className='main-con'>
      <QuestionArea question={'random text'}/>
      <AnswerArea choiceAnswer={()=> console.log('hello')} answers={ {variable1: 'rendom text', variable2: 'random text', variable3: 'random text', variable4: 'random text'} }/>
      <OptionsArea onRetake={ ()=> console.log('retake') } onBtn={()=> console.log('next')} />
    </div>
  );
}

export default App;
