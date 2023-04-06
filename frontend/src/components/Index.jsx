import React, { useState, useEffect } from "react";
import "../index.css";
import rightimg from "../assets/images/logo.jpg";
import Search from './Search';
import slider1 from "../assets/images/slider/1.jpg";
import slider2 from "../assets/images/slider/2.jpg";
import slider3 from "../assets/images/slider/3.jpg";
import slider4 from "../assets/images/slider/4.jpg";
import slider5 from "../assets/images/slider/5.jpg";
import wallet from "../assets/images/Gif Icons/purse.gif";
import location from "../assets/images/Gif Icons/location.gif";
import house from "../assets/images/Gif Icons/house.gif";
import spy from "../assets/images/Gif Icons/spy.gif";
import $ from 'jquery';

import { FaAngleUp } from 'react-icons/fa';
// import { Gallery } from "./Gallery";
// import bgmain from "../images/bgmain.png";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";
// import PredictPriceForm from './PredictPriceForm';
// import Gallery from "./Gallery";

function Index(av) {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };
  $(document).ready(function () {
    // add click event listener to all li elements
    $('li').click(function () {
      // remove active class from all li elements
      $('li').removeClass('activenav');
      // add active class to the clicked li element
      $(this).addClass('activenav');
    });
  });
  return (
    <>
      {/* slider start */}

      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
        </ul>
        <div className="carousel-inner " id="overlay">
          <div className="carousel-item active" data-interval="3000">
            <img src={slider1} alt="slider1" className="" />
            <div className="carousel-caption row">
              <div
                className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10 "
                data-aos="slide-left"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
              >
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc">
                  <span className="material-symbols-outlined">location_on</span>
                  2012 Vasai,Mumbai
                </p>
                <p>
                  Find Better Places to Live, Work and Wonder...
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 1,56,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item " data-interval="2000">
            <img src={slider2} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>3 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc">
                  <span className="material-symbols-outlined">location_on</span>
                  2014 Virar,Mumbai
                </p>
                <p>
                  Find Better Places to Live, Work and Wonder...
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 89,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img src={slider3} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc">
                  <span className="material-symbols-outlined">location_on</span>
                  2014 Nallasopara,Mumbai
                </p>
                <p>
                  Find Better Places to Live, Work and Wonder...
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 62,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src={slider4} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc">
                  <span className="material-symbols-outlined">location_on</span>
                  2016 Bhayandar,Mumbai
                </p>
                <p>
                  Find Better Places to Live, Work and Wonder...
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 1,56,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="3000">
            <img src={slider5} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>4 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc">
                  <span className="material-symbols-outlined">location_on</span>
                  2018,Mira road,Mumbai
                </p>
                <p>
                  Find Better Places to Live, Work and Wonder...
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 2,56,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a> */}
      </div>

      {/* Slider ends */}

      {/* buy properties */}
      <Search />
      {/* buy properties ends*/}

      {/* intro part */}
      <div
        className="main container-fluid"
        data-aos=""
        data-aos-duration=""
        data-aos-easing=""
      >
        <div className="row">
          <div className="left col-sm-12 col-md-6 col-xl-6 col-lg-6 col-12 ">
            <h2>find the best property.</h2>
            <h1>
              find Your p<span id="highlight">erfect</span> property with us.
            </h1>
            <p>
              E-Real estate is a web application to manage your property on one
              platform. provides valuation,buy,sell and other real estate
              services worldwide.
            </p>
            <button className="btn btn-primary p-2">
              <a href="register" className="getstarted">
                Get Started
              </a>
            </button>
          </div>
          <div className="right col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12">
            <img src={rightimg} alt="rightimg" />
          </div>
        </div>
      </div>
      {/* intro part end */}



      {/* Featured properties starts */}
      <h5
        className="text-uppercase featuredprop"
        data-aos="slide-right"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        Featured Properties
      </h5>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" id="fci">
          <div className="carousel-item active">
            <div className="cards-wrapper " id="fcard-wrapper">
              <div className="card" id="fcard">
                <img
                  src={slider2}
                  className="card-img-top "
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Virar</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>

                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 55,00,000/-
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block" id="fcard">
                <img
                  src={slider5}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Vasai</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 57,00,000/-
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Dahisar</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 2BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 75,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Bhayandar</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Plot
                    </p>

                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 50,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper" id="fcard-wrapper">
              <div className="card">
                <img
                  src={slider4}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Borivali</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Bungalow
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 3Bhk+
                    </p>
                  </div>
                  <p className="card-text fcard-price">

                    <strong>Price:</strong> 5,55,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Bhayandar</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> plot
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 2BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 1,55,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider4}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Vasai</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> plot
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 2BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 95,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Virar</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> plot
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 85,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper" id="fcard-wrapper">
              <div className="card">
                <img
                  src={slider3}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Mira road</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong>1,00,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Kandivali</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 1,55,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider2}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Malad</h4>
                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Plot
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 2BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 1,55,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img
                  src={slider1}
                  className="card-img-top"
                  alt="..."
                  id="fimg"
                />
                <div className="card-body fcard-body text-center">
                  <h4 className="fcard-title text-center">Goregaon</h4>

                  <div className="detail">
                    <p className="card-text ">
                      <strong>Type:</strong> Flat
                    </p>
                    <p className="card-text ">
                      <strong>Size:</strong> 1BHK
                    </p>
                  </div>
                  <p className="card-text fcard-price">
                    <strong>Price:</strong> 1,55,00,000/
                  </p>
                  <a href="/viewprop" className="btn btn-danger">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section
        className="features-section"
        data-aos=""
        data-aos-duration=""
        data-aos-easing=""
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-3 d-flex ">
              <div className="media d-block py-4">
                <div className="d-flex justify-content-center">
                  <div className="icon">
                    <img src={location} alt="wallet-icon" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">
                    Find Places According to your need
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon">
                    <img src={spy} alt="spy-icon" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">
                    We Have Agents With Experience
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon">
                    <img src={house} alt="house-icon" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">
                    Buy &amp; Sell Modern Properties
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon">
                    <img src={wallet} alt="wallet-icon" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Making Money</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer starts */}
      {/* <footer class="footer">
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
      </footer> */}
      <Footer />

      <div className="top-to-btm">

        {showTopBtn && (
          <FaAngleUp
            className="icon-position icon-style"
            onClick={goToTop}
          />
        )}
      </div>
    </>
  );
}
export default Index;
