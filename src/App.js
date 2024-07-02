import React, { Component,useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./components/Home1";
import QuizPage from "./components/quizview/QuizPage";
import Private from "./components/utils/PrivateRoute";
import UserResult from "./components/UserResult";
import ScoreBoard from "./components/Scoreboard";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/userAuth/Login";

function App() {
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    const [userToken, setUserToken] = useState(localStorage.getItem("authToken") || "");
    
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login setUserName={setUserName} setUserToken={setUserToken} />} />
        <Route path="/quiz" element={<Private element={QuizPage} />} />
        <Route path="/UserResult" element={<UserResult />} />
        <Route path="/lboard" element={<ScoreBoard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
