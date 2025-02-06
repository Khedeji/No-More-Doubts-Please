import React, { useEffect }  from 'react'
import './HomeMainBar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store.tsx';
import Questionlist from './Questionlist.tsx';
import { getQuestions } from '../../Redux/reducers/question_action.tsx';


export default function HomeMainBar() {
  const dispatch:AppDispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getQuestions());
    console.log("QuestionsList", questionsList)
  }, [dispatch])

  const questionsList = useSelector((state:RootState) => state.question.questions);
  console.log("QuestionsList",questionsList)
  const location = useLocation();
  const Navigate = useNavigate()
  const handleclick = () => {
    Navigate("/AskQuestion");

  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        {/* <button onClick={checkAuth} className="ask-btn"> */}
        <button onClick={handleclick}  className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <Questionlist questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  )
}
