import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {

  // STATE 

  const [page, setPage] = useState("List");
  const [getQuestions, setGetQuestions] = useState([])

  // GET REQUEST

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(r => (setGetQuestions(r)))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setGetQuestions={setGetQuestions}/> : <QuestionList getQuestions={getQuestions}/>}
    </main>
  );
}

export default App;
