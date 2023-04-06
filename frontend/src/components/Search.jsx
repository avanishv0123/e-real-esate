import React from "react";
import "../index.css";
// import rightimg from "../assets/images/logo.jpg";
// import $ from 'jquery';
import { useState } from "react";
import buy2 from "../assets/images/properties/2.jpg";

import { NavLink } from "react-router-dom";

const initialProperties = [
    { id: 1, location: 'Vasai', propertyType: 'Plot', area: '1200 sqft', price: 1500000 },
    { id: 2, location: 'Virar', propertyType: 'Flat', area: '2400 sqft', price: 2500000 },
    { id: 3, location: 'Nallasopara', propertyType: 'Flat', area: '900 sqft', price: 800000 },
    { id: 4, location: 'Dahisar', propertyType: 'bungalow', area: '1500 sqft', price: 11800000 },
    { id: 5, location: 'Borivali', propertyType: 'Plot', area: '2000 sqft', price: 2000000 },
    { id: 6, location: 'virar', propertyType: 'Plot', area: '2200 sqft', price: 8000000 },
    { id: 7, location: 'Vasai', propertyType: 'Plot', area: '2100 sqft', price: 5000000 },
    { id: 8, location: 'borivali', propertyType: 'Plot', area: '2200 sqft', price: 6000000 },
    { id: 9, location: 'mira road', propertyType: 'Plot', area: '2200 sqft', price: 9000000 },
    { id: 10, location: 'dahisar', propertyType: 'Plot', area: '3200 sqft', price: 12000000 },
    { id: 11, location: 'mira road', propertyType: 'Plot', area: '3600 sqft', price: 12000000 },

];
const Search = () => {

    const [properties, setProperties] = useState(initialProperties);
    const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 1000000, max: 10000000 });

    // filter properties based on the selected price range
    const filteredProperties = properties.filter((property) => property.price >= selectedPriceRange.min && property.price <= selectedPriceRange.max);

    return (
        <>
            {/* search properties starts */}
            <div
                className="properties row"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
            >
                <div className="leftprop col-xl-6 col-lg-6 col-12">
                    <h2 className="text-uppercase mt-3">Buy Property</h2>
                    <form action="">
                        <div id="filters">

                            <div className="propselection">
                                <div className="form-control">
                                    <label htmlFor="area">Select Range of Area: </label> <input type="range" min="200" max="5000" step="100" value={selectedPriceRange.min} onChange={(event) => setSelectedPriceRange({ ...selectedPriceRange, min: parseInt(event.target.value) })} />
                                    <label htmlFor="area" className="ml-3">Select Range of Price: </label> <input type="range" min="1000000" max="3000000" step="50000" value={selectedPriceRange.max} onChange={(event) => setSelectedPriceRange({ ...selectedPriceRange, max: parseInt(event.target.value) })} />
                                </div>
                                {/* <NavLink
                                    to="/Buy"
                                    className="btn btn-success mt-2 findbtn"
                                >
                                    Find now
                                </NavLink> */}
                            </div>
                        </div>
                    </form>
                    <div className="filter ">
                        {filteredProperties.map((property) => (
                            <div key={property.id}>
                                <div class="card" id="searchcard">
                                    <div class="card-body py-4 mt-2">
                                        <div class="d-flex justify-content-center mb-4 text-right">
                                            <img
                                                src={buy2}
                                                class="img-fluid"
                                                alt="myimg"
                                                id="sell_img"
                                            />
                                            <p id="proptag" className="">
                                                for sell
                                            </p>
                                        </div>
                                        <h5 class="font-weight-bold text-uppercase text-dark">{property.location}</h5>
                                        <h6 class="font-weight-bold my-2 text-dark ">Area: {property.area}</h6>
                                        <h6 className="bg-primary text-light p-1"> {property.price}</h6>

                                        <div className="contact-info text-dark">
                                            <i class="fas fa-phone" id="phone"></i>
                                            <span>+91 8585845785</span>
                                            <br />
                                            <i class="fas fa-envelope"> </i>
                                            <span href="#dsd" id="mail" className="ml-1">
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
                        ))}
                    </div>
                </div>
            </div>
            {/* search properties ends */}
        </>
    )
}
export default Search;