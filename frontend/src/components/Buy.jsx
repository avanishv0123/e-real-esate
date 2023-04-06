import React from 'react';
// import axios from 'axios';
import "../index.css";
// import viewprop from "./viewprop";
import { NavLink } from "react-router-dom";
import buy1 from "../assets/images/properties/1.jpg";

// import buy2 from "../assets/images/properties/2.jpg";
// import buy3 from "../assets/images/properties/3.jpg";
// import buy4 from "../assets/images/properties/4.jpg";
class Buy extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  fetchData() {
    fetch('http://localhost:3000/Listing')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
        console.log()
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {

    return (
      <>
        <div className="buy_main container-fluid ">
          {/* <h2 className="text-uppercase mt-2 bg-dark text-light pl-3">Buy Properties</h2> */}
          <section id="bc" class="mt-3">
            <div class="container-fluid p-0">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb p-3">
                  <li class="breadcrumb-item">
                    <a href='/' className="text-decoration-none">
                      <i class="fas fa-home"></i> Home</a>
                  </li>
                  <li class="breadcrumb-item active"> Buy Property</li>
                </ol>
              </nav>
            </div>
          </section>
          <section className="agent-section">

            <div class="container py-2">
              <div class="row text-center">
                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0 mt-2">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Vasai East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 45,11,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Virar East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 55,11,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop2">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Bhayandar East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 95,11,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2 ">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Mira Road East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 85,11,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Borivali East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 1,11,00,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
                  <div class="card">
                    <div class="card-body py-4 mt-2">
                      <div class="d-flex justify-content-center mb-4 text-right">
                        <img
                          src={buy1}
                          class="img-fluid"
                          alt="myimg"
                          id="sell_img"
                        />
                        <p id="proptag" className="">
                          for sell
                        </p>
                      </div>
                      <h5 class="font-weight-bold text-uppercase">Dahisar East</h5>
                      <h6 class="font-weight-bold my-2 ">1 Bhk for sale</h6>
                      <h6 className="bg-primary text-light p-1">Rs 1,15,11,000</h6>

                      <div className="contact-info">
                        <i class="fas fa-phone" id="phone"></i>
                        <span>+91 8585845785</span>
                        <br />
                        <i class="fas fa-envelope"> </i>
                        <span href="#dsd" id="mail">
                          avanishv73@gmail.com
                        </span>
                        <br />
                        <NavLink className="btn btn-primary mt-1 " to="/viewprop">
                          View Property
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </>
    );
  }
}








export default Buy;
