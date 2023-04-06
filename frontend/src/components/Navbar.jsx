import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../App.css";
import $ from 'jquery';
import headerlogo from "../assets/images/logo-trans.png";
import MyContext from "../context/MyContext";
import { useContext } from 'react';

const Navbar = () => {

  $(document).ready(function () {
    // add click event listener to all li elements
    $('li').click(function () {
      // remove active class from all li elements
      $('li').removeClass('activenav');
      // add active class to the clicked li element
      $(this).addClass('activenav');
    });
  });

  const { username, LogOut } = useContext(MyContext);


  return (
    <div className="Navbar ">
      <nav
        className="navbar navbar-expand-md navbar-light bg-light"
        id="navbar-top"
      >
        <a className="navbar-brand mr-5" id="logo" href="#logo">
          <img src={headerlogo} alt="" id="headerlogo" />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item activenav">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <div
                className="nav-link dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <Link to="/Properties" className="propnav">
                  Properties
                </Link>
              </div>
              <div className="dropdown-menu ">
                <Link className="dropdown-item nav-link" to="/Buy">
                  BUY
                </Link>
                <Link className="dropdown-item nav-link " to="/Sell">
                  SELL
                </Link>
                <Link className="dropdown-item nav-link" to="/Properties">
                  ALL
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Agents">
                Agents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact us
              </Link>
            </li>
            {/* <li className="nav-item btn btn-primary">
              logout
            </li> */}
            {/* <li>
              Logged in as {username}
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Welcome {username}
              </NavLink>
            </li> */}






            {username ?
              (
                <div className="logged_in">
                  <div className="text-primary">Welcome, <i className="fa fa-user"></i>  {username}
                    <button className="btn btn-danger ml-2" onClick={LogOut} >
                      <Link to="" className="linkbtn" >
                        Log Out
                      </Link>
                    </button>
                  </div>
                </div>


              ) :
              (
                <>
                  <div className="buttons">
                    <button className="btn btn-primary ml-auto">
                      <Link to="/Register" className="linkbtn">
                        Register
                      </Link>
                    </button>

                    <button className="btn btn-success ml-2">
                      <Link to="/login" className="linkbtn">
                        Login
                      </Link>
                    </button>
                  </div>

                </>
              )}



            {/*  <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-success mbtn nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  <Link to="/Login" className="linkbtn">
                    Login
                  </Link>
                </button>
                <div className="dropdown-menu ">
                  <NavLink className="dropdown-item" to="/Login">
                    UserLogin
                  </NavLink>
                  <NavLink className="dropdown-item" to="/AdminLogin">
                    AdminLogin
                  </NavLink>
                </div>
              </li>
            </div> */}
          </ul>
        </div>
      </nav>
    </div>

  );
};
export default Navbar;