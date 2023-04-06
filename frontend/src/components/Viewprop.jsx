import React from "react";
import { NavLink } from "react-router-dom";
import buy1 from "../assets/images/properties/1.jpg";
import buy2 from "../assets/images/properties/2.jpg";
import buy3 from "../assets/images/properties/3.jpg";
import { Footer } from "./Footer";
import './viewprop.css';
// import buy4 from "../assets/images/properties/4.jpg";

export const Viewprop = () => {
    return (
        <>
            <section id="bc" class="mt-3">
                <div class="container-fluid p-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb p-3">
                            <li class="breadcrumb-item">
                                <a href='/' className="text-decoration-none">
                                    <i class="fas fa-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active"> View Property</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* <h2 className="mt-3 mb-3 bg-dark text-light p-3 text-left" id="propdetail">View Property</h2> */}

            <div className="viewprop_main">
                {/* property title */}
                <div className="leftview">
                    <div class="banner animated tada">
                        <div id="ad">Ad</div>
                        {/* <div class=" big-text visibility-none">10% OFF</div> */}

                        {/* <a href="#">Hurry Up!!</a> */}
                    </div>

                </div>
                <div className="centerview">
                    <h5 className="text-center text-uppercase" id="propdetail">2 room and 1 kitchen apartment</h5>

                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>

                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                                <img src={buy1} alt="slider1" className="img-fluid" />
                            </div>
                            <div className="carousel-item">
                                <img src={buy2} alt="slider2" className="img-fluid" />
                            </div>
                            <div className="carousel-item">
                                <img src={buy3} alt="slider2" className="img-fluid" />
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#demo"
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
                                href="#demo"
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
                    </div>

                    <div className="property_detail mt-3">
                        <h3 className="text-uppercase"><i className="fa fa-list"></i> Property details</h3>
                        <p>
                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
                            Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service
                        </p>

                    </div>
                    <div className="location">
                        <h4><i class="fa fa-map-marker"></i>  Location</h4>
                        <div>
                            <iframe width="100%" height="350" title="vasai" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vasai+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html" > Vasai Map</a>
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="rightview">
                    <div class="property-info mt-3">
                        <span class="price text-uppercase"><i class="fa fa-rupee-sign"></i> 45,11,000</span><br />
                        <span class="area"><i class="fa fa-map-marker"></i> Vasai,Mumbai,Maharashtra</span>

                        <div class="profile">
                            <i class="fa fa-user-shield"></i>Agent Details <br />
                            <i className="fa fa-user" id="name"> </i>  <span className="">Avanish Vish</span> <br />
                            <i className="fa fa-phone" id="name"> </i> <span className="">009 229 2929</span>

                        </div>
                        <NavLink className="btn btn-outline-primary d-block mt-4 text-uppercase " to="/agents">
                            View agents
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
