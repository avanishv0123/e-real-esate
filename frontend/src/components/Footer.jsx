import React from 'react'
import '../index.css'

import logo from '../assets/images/logo-trans.png';
import insta from '../assets/images/insta-logo.gif';
import twitter from '../assets/images/twitter-logo.gif';
import fb from '../assets/images/fb-logo.gif';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div class="menu">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link activenav" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle"
                                        id="navbardrop"
                                        data-toggle="dropdown"
                                    >
                                        <Link to="/Properties" className="propnav2">
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
                            </ul>
                        </div>
                        <ul class="footer-social ">
                            <li>
                                <a href="#insta"> <img src={insta} alt="insta logo" /></a>
                            </li>
                            <li>
                                <a href="#twitter"> <img src={twitter} alt="twitter logo" /></a>
                            </li>
                            <li>
                                <a href="#facebook"><img src={fb} alt="fb logo" /></a>
                            </li>
                        </ul>
                    </div>
                </div><hr className="hr" />
                <div class="row mt-2">
                    <div class="col-md-12 text-center">
                        <p class="copyright">
                            Copyright &copy; 2022-23 by Avanish
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
