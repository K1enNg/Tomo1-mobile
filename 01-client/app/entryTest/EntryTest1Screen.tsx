import SingleChoiceQuiz from '../QuizTemplates/SingleChoiceQuiz';
import React from 'react'
import { EntryTest_1 } from '@/constants/entryTest/Quizzes';


const EntryTest1Screen = () => {
  return (
    <SingleChoiceQuiz{...EntryTest_1}/>
  )
}
export default EntryTest1Screen