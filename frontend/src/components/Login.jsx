import React from "react";

import "../components/login.css";
import img from "../assets/images/user.png";
// import img2 from "../assets/images/properties/1.jpg";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import MyContext from "../context/MyContext";
import { useContext } from "react";

import $ from 'jquery';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../public/jQuery.js";
// import AdminLogin from "../components/AdminLogin";


function Login() {

  // const navigate = useNavigate();

  // let LoginUser = async (e) => {
  //   e.preventDefault();
  //   let response = await fetch("http://127.0.0.1:8000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //     }),
  //   });
  //   let data = await response.json();
  //   console.log(data);
  //   console.log(data.status);

  //   if (data.status === 200) {

  //     Swal.fire({
  //       title: 'Success!',
  //       text: 'Logged in Successfully!!',
  //       icon: 'success',
  //     });
  //     // window.alert('Logged in Successfully!!')

  //     navigate("/homepage");

  //   }
  //   else {
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'You have not regisered yourself, Register First',
  //       icon: 'error',
  //     });
  //     // alert("You have not regisered yourself...");
  //     navigate("/Register");

  //   }
  // };
  const { LoginUser } = useContext(MyContext);
  let agentbtn = () => {
    var a = document.getElementById("ubtn");
    var b = document.getElementById("agbtn");
    // var c = document.getElementById("bgimg");

    a.style.backgroundColor = "#fff";
    a.style.color = "black";
    a.style.borderRadius = "20px";

    b.style.color = "white";
    b.style.backgroundColor = "#28a745";
    b.style.borderRadius = "20px";
    // c.style.backgroundImage = { img2 };
  };


  let userbtn = () => {
    var a = document.getElementById("ubtn");
    var b = document.getElementById("agbtn");

    a.style.backgroundColor = "#28a745";
    a.style.color = "white ";

    b.style.color = "black";
    b.style.backgroundColor = "transparent";
  };


  let logbtn = () => {
    var a = $('#loginid').val();
    var b = $('#password').val();

    if (a === "") {
      $('#error').html("**Enter Login ID first ");
      $('#error').css('color', '#dc3545');
      $('#error').css('padding', '10px');

      return false;

    }

    if (b === "") {
      $('#error2').html("**Enter Password ");
      $('#error2').css('color', '#dc3545');
      return false;

    }

  }


  return (
    <>
      <div className="row">
        <div className="col-xl-11 d-xl-flex col-md-11 d-md-block mx-auto col-12">
          <div className="bgimg p-2 p-xl-0 p-lg-4">
            <img
              src={img}
              className="img-fluid p-md-4 p-0 p-lg-5"
              alt="leftimage"
              id="bgimg"
            />
          </div>
          <div className="form form-content mt-xl-0 mt-md-0 my-3">
            <div className="form">
              <div className="form-box my-4">
                <h3 className="text-center text-light">USER & AGENT LOGIN</h3>
                <div className="button-box mt-4 mb-4">
                  <button
                    className="font-weight--bold text-left btn text-uppercase active "
                    id="ubtn"
                    onClick={userbtn}
                  >
                    USER
                  </button>

                  <button
                    className="font-weight-bold text-left btn text-uppercase "
                    id="agbtn"
                    onClick={agentbtn}
                  >
                    Agent
                  </button>
                </div>
                {/* <!-- Student LOGIN FORM STARTS --> */}
                <form className="form my-5" id="slogin" onSubmit={LoginUser}>
                  <label for="Login Id" class="">
                    <i class="fa fa-user"></i> LOGIN ID :
                  </label>
                  <input
                    type="text"
                    id="loginid"
                    name="username"
                    placeholder="Enter Login id"
                    class="form-control "
                  />

                  <span id="error"></span>

                  <br />
                  <label for="Password" class="">
                    <i class="fa fa-lock "></i> PASSWORD :
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    class="form-control"
                  />
                  <div id="error2"></div>

                  <input
                    type="submit"
                    class="btn btn-primary  text-white d-inline-flex my-3 "
                    onClick={logbtn}
                    name="login"
                    value="LOGIN"
                  />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
