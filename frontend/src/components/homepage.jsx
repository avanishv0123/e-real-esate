import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
// import rightimg from "../assets/images/logo.jpg";
import slider1 from "../assets/images/slider/1.jpg";
import slider2 from "../assets/images/slider/2.jpg";
import slider3 from "../assets/images/slider/3.jpg";
import slider4 from "../assets/images/slider/4.jpg";
import slider5 from "../assets/images/slider/5.jpg";
import wallet from "../assets/images/Gif Icons/purse.gif";
import location from "../assets/images/Gif Icons/location.gif";
import house from "../assets/images/Gif Icons/house.gif";
import spy from "../assets/images/Gif Icons/spy.gif";
import housegif from "../assets/images/buysell2.gif";
import PredictPriceForm from './PredictPriceForm'
import { Footer } from "./Footer";
// import { Gallery } from "./Gallery";
// import bgmain from "../images/bgmain.png";


const homepage = () => {



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
          <div className="carousel-item active">
            <img src={slider1} alt="slider1" className="" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10 ">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc text-uppercase">
                  <span className="material-symbols-outlined">location_on</span>
                  2021, Vasai, Mumbai
                </p>
                <p>
                  Until he extends the circle of his compassion to all living
                  things, man will not himself find peace.
                </p>
                <NavLink
                  to="/Properties"
                  className="btn btn-primary p-3 font-weight-bolder"
                >
                  Rs. 56,000,00/-
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc text-uppercase">
                  <span className="material-symbols-outlined">location_on</span>
                  2021, Virar, Mumbai
                </p>
                <p>
                  Until he extends the circle of his compassion to all living
                  things, man will not himself find peace.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc text-uppercase">
                  <span className="material-symbols-outlined">location_on</span>
                  2021, naigaon, Mumbai
                </p>
                <p>
                  Until he extends the circle of his compassion to all living
                  things, man will not himself find peace.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider4} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc text-uppercase">
                  <span className="material-symbols-outlined">location_on</span>
                  2021, bhayandar, Mumbai
                </p>
                <p>
                  Until he extends the circle of his compassion to all living
                  things, man will not himself find peace.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider5} alt="slider2" className="img-fluid" />
            <div className="carousel-caption row">
              <div className="inner-text col-xl-6 col-lg-6 col-12 col-sm-10">
                <h1>2 Bed Rooms and 1 Dinning Room Aparment on Sale</h1>
                <p className="loc text-uppercase">
                  <span className="material-symbols-outlined">location_on</span>
                  2021, mira road, Mumbai
                </p>
                <p>
                  Until he extends the circle of his compassion to all living
                  things, man will not himself find peace.
                </p>
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

      {/* search properties starts */}
      <div className="properties row">
        <div className="leftprop col-xl-6 col-lg-6 col-12">
          <h2 className="text-uppercase mt-3">Buy,Sell</h2>
          <form action="">
            <input
              type="text"
              className="form-control searchprop"
              placeholder="Search of properties"
            />
            <div className="propselection ">
              <select name="action" id="" className="form-control select">
                <option value="Buy">Buy</option>

              </select>
              <select name="price Range" id="" className="form-control select">
                <option value="price">Price</option>
                <option value="<35,00,000">35,00,000</option>
                <option value="<=50,00,000"> 50,00,000</option>
                <option value="<=70,00,000"> 70,00,000</option>
              </select>
              <select name="PropType" id="" className="form-control select">
                <option value="prop type">Property type</option>
                <option value="<35,00,000">Flat</option>
                <option value="<=50,00,000"> plot</option>
                <option value="<=70,00,000"> Bungalow</option>
              </select>

              <input
                type="button"
                className="btn btn-success mt-2 findbtn"
                value="Find Now"
              />
            </div>
          </form>
        </div>
        <div className="rightprop col-xl-6 col-lg-6 col-12 mt-2">
          <img src={housegif} alt="housegif" className="img-fluid" />
        </div>
      </div>
      {/* search properties ends */}
      <PredictPriceForm />

      {/* Featured properties starts */}
      <h5 className="text-uppercase featuredprop">Featured Properties</h5>

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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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
                  <a href="/" className="btn btn-danger">
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

      <section className="features-section">
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
      <Footer />
    </>
  );
};

export default homepage;
