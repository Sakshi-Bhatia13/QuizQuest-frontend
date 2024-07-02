import React, { useState, useEffect } from "react";
import "./QuizView.scss";
import axios from "axios";
import { WhisperSpinner } from "react-spinners-kit";

function QuestionRend({ setCorrectAnsw, setUserAnsw }) {
  const [quizes, setQuizes] = useState([]);
  const uname = localStorage.getItem("userName");
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [three, setThree] = useState(null);
  const [four, setFour] = useState(null);
  const [five, setFive] = useState(null);

  async function fetchQuestion() {
    try {
      const response = await axios.get(
        "https://quizquest-backend-lg90.onrender.com/quiz/getQuiz"
      );
      const quizArray = response.data.result;
      setQuizes(quizArray);
    } catch (error) {
      console.error("Error fetching quiz questions:", error.message);
    }
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  function correctRend() {
    return quizes.map((quiz) => quiz.correct_answer);
  }

  function userArray() {
    return [one, two, three, four, five];
  }

  useEffect(() => {
    setCorrectAnsw(correctRend());
  }, [quizes]);

  useEffect(() => {
    setUserAnsw(userArray());
  }, [one, two, three, four, five]);

  return (
    <div>
      <h1>{uname} attempt your quiz</h1>
      <div className="question_card">
        {quizes.length > 0 ? (
          <>
            {quizes.map((quiz, index) => (
              <div key={index}>
                <h5>{quiz.question}</h5>
                <div className="answer_sec">
                  {quiz.answers.map((answer, answerIndex) => (
                    <div className="answers" key={answerIndex}>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        id={answer}
                        value={answer}
                        checked={index === 0 ? one === answer : index === 1 ? two === answer : index === 2 ? three === answer : index === 3 ? four === answer : index === 4 ? five === answer : ""}
                        onChange={(e) => {
                          index === 0 ? setOne(e.target.value) : index === 1 ? setTwo(e.target.value) : index === 2 ? setThree(e.target.value) : index === 3 ? setFour(e.target.value) : setFive(e.target.value);
                        }}
                      />
                      <label htmlFor={answer}>{answer}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center loader_spinner">
            <WhisperSpinner size={30} color="#5eff86" loading={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionRend;
