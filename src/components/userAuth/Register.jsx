import React, { useState } from "react";
import "./auth.scss";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register({ upmodal, upModalClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [revpas, setRevpas] = useState("password");
  const [password, setPassword] = useState("");

  function showPass() {
    if (revpas === "password") {
      setRevpas("text");
    } else {
      setRevpas("password");
    }
  }

  async function registration(e) {
    e.preventDefault();
    try {
      const sendTask = await axios.post(
        "http://localhost:5001/userAuth/Register",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      toast.success("Registration successful!", {
        position: "bottom-right",
      });

      upModalClose();
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
      });
    }
  }

  return (
    <div className="sign_modal" style={upmodal}>
      <ToastContainer autoClose={5000} hideProgressBar />
      <div className="register">
        <h1 className="header_text">Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          className="com_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="com_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={revpas}
          placeholder="Enter Your password"
          name="password"
          className="com_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="show_pass d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            onClick={showPass}
            className="show_pass_input"
          />{" "}
          {"  "}show Password
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="submit"
            className="userAuth_btns d-flex align-items-center justify-content-center"
            onClick={(e) => registration(e)}
          >
            Submit
          </button>
          <button
            className="userAuth_btns d-flex align-items-center justify-content-center"
            onClick={upModalClose}
          >
            Close <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
