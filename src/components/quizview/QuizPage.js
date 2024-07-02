import React, { useState } from "react";
import "./QuizView.scss";
import QuestionRend from "./QuestionPage";
import { ResultCountUpdate, ResultCount } from "../../DataContext";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const [correctAnsw, setCorrectAnsw] = useState([]);
  const [userAnsw, setUserAnsw] = useState([]);
  const setCount = ResultCountUpdate();
  const navigate = useNavigate();

  function quizSubmit(e) {
    e.preventDefault();
    let marks = 0;
    for (let i = 0; i < userAnsw.length; i++) {

      if (userAnsw[i] === correctAnsw[i]) {
        marks = marks + 1;
      }
    }

    setCount(marks);
    navigate("/UserResult");
  }

  return (
    <div className="quiz_view d-flex justify-content-center">
      <div className="quiz-container">
        <QuestionRend
          setCorrectAnsw={setCorrectAnsw}
          setUserAnsw={setUserAnsw}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="quizsubmit"
            onClick={(e) => quizSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
