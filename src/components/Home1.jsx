import React, { useState } from "react";
import Home from "./Home";
import "./Home1.scss";
import { IoMdClose } from "react-icons/io";
import Register from "./userAuth/Register";
import Login from "./userAuth/Login";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [modal, setModal] = useState({});
  const [inmodal, setInModal] = useState({});
  const [upmodal, setUpModal] = useState({});
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();

  function upModalOpen() {
    setUpModal({ display: "block" });
  }
  function upModalClose() {
    setUpModal({ display: "none" });
  }

  function inModalOpen() {
    setInModal({ display: "block" });
  }
  function inModalClose() {
    setInModal({ display: "none" });
  }

  function handlePlay() {
    if (userToken) {
      navigate("/quiz");
    } else {
      setModal({ display: "block" });
    }
  }
  function handleClose() {
    setModal({ display: "none" });
  }

  function handleSignOpen(e) {
    e.preventDefault();
    handleClose();
    inModalOpen();
  }

  return (
    <div className="landing">
      <div className="sign_modal_landing" style={modal}>
        <h5 className="mb-5">You don't have an account! Create one</h5>
        <div className="landing_user_logs super_center">
          <button
            className="landing_btns theme_color"
            onClick={handleSignOpen}
          >
            Sign In
          </button>
          <button
            className="landing_btns theme_color"
            onClick={handleClose}
          >
            Close <IoMdClose />
          </button>
        </div>
      </div>
      <Register upmodal={upmodal} upModalClose={upModalClose} />
      <Login
        inmodal={inmodal}
        inModalClose={inModalClose}
        setUserName={setUserName}
        setUserToken={setUserToken}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-6 landing_card">
          <div className="landing_header">
            <Home />
            <h1 className="landing_header_text">Quiz Quest</h1>
            <h3>Online quiz platform</h3>
            <hr className="solid" />
          </div>
          <div className="landing_card_body mt-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              {userName ? <h5>Hi {userName}, now you can start the quiz.</h5> : " "}
            </div>

            <div className="landing_user_logs super_center">
              <button
                className="landing_btns theme_color"
                onClick={inModalOpen}
              >
                Sign In
              </button>
              <button
                className="landing_btns theme_color"
                onClick={upModalOpen}
              >
                Sign Up
              </button>
            </div>
            <div className="super_center mt-3">
              <button
                className="landing_btns anti_theme_color"
                onClick={handlePlay}
              >
                Play Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
