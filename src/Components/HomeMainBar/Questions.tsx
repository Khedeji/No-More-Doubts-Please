import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';

export default function Questions({question}) {
  return (
    <div className="question-display">
      <div className="all-questions">
        <div className="all-questions-left">
          <div className="all-options">
            <p className="arrow">0</p>
            <p className="arrow">{question.answerDetails.length}</p>
            <p className="arrow">0</p>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question/${question._id}`}>{question.questionTitle}</Link>
          <div style={{ width: "90%" }}>
            <div>
              {question.questionTags.map((tag) => (
                <p className="answer">{tag}</p>
              ))}
            </div>
          </div>
          <div className="author">
            <div className="author-details">
              <p>{moment(question.askedOn).fromNow()}</p>
              <p>{question.userPosted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
