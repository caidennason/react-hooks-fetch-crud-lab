import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList( {getQuestions, handleDeleteQuestion} ) {

  // const listedQuestions = getQuestions.map((question) => <ul key={question.id}>{question.prompt}</ul>)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{getQuestions.map((question) => {
       return <QuestionItem question={question} handleDeleteQuestion={handleDeleteQuestion}/>
      })}</ul>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
