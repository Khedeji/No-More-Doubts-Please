import React from 'react'
import Questions from './Questions.tsx';


export default function Questionlist({questionsList}) {
  return (
    <>
      {questionsList.map((question) => (
        <Questions question={question}  />
      ))}
    </>
  );
}
