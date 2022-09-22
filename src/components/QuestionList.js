import React from "react";

function QuestionList( {getQuestions} ) {

  const listedQuestions = getQuestions.map((question) => <ul key={question.id}>{question.prompt}</ul>)


  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* <ul>{listedQuestions}</ul> */}
      {listedQuestions}
    </section>
  );
}

export default QuestionList;
