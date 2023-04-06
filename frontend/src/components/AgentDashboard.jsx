import React from 'react';
// import { NavLink } from "react-router-dom";
import './Agentdashboard.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


import $ from 'jquery';
import profile from '../assets/images/agents/2.jpg';

import MyContext from "../context/MyContext";
import { useContext } from 'react';
import HousePricePrediction from './PredictPriceForm';

export const AgentDashboard = (props) => {


    $(document).ready(function () {
        // add click event listener to all li elements
        $('li').click(function () {
            // remove active class from all li elements
            $('li').removeClass('active');
            // add active class to the clicked li element
            $(this).addClass('active');
        });
    });


    const { username, LogOut } = useContext(MyContext);

    let added = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Property Added Successfully!!',
            icon: 'success',
        });
    }
    return (
        <>

            <div class="dashboard">
                <div class="sidebar">
                    <ul>

                        <li><aaa class='heading text-decoration-none text-light' href='#dashboard'>E-Real Estate</aaa></li>
                        <div class="row profile">
                            <div class="col-md-12">
                                <div class="profile-sidebar">
                                    {/* <!-- SIDEBAR USERPIC --> */}
                                    <div class="profile-userpic">
                                        <img src={profile} class="img-responsive" alt="" />
                                    </div>
                                    {/* <!-- END SIDEBAR USERPIC -->
                                    <!-- SIDEBAR USER TITLE --> */}
                                    <div class="profile-usertitle">
                                        <div class="profile-usertitle-name">
                                            {username}
                                        </div>
                                        <div class="profile-usertitle-job">
                                            User
                                        </div>
                                    </div>
                                    {/* <!-- END SIDEBAR USER TITLE -->
                                    <!-- SIDEBAR BUTTONS --> */}
                                    <div class="profile-userbuttons">
                                        <button type="button" class="btn btn-success btn-sm">Follow</button>
                                        <button type="button" class="btn btn-danger btn-sm">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <li className='active'><i className='fas fa-home'></i>
                            <a href="#dash" className='text-light '
                            >Dashboard</a></li>
                        <li className='d-block'><i className='fas fa-plus-circle'></i>
                            <a href="#AddProp" className='text-light'
                            >Add Property</a></li>
                        <li><i className="fa fa-list-alt">
                        </i><a href="#listing" className='text-light'
                        >Listings</a></li>
                        <li><i className="fa fa-list-alt">
                        </i><a href="#get" className='text-light'
                        >Get Prediction</a></li>

                        <li className='text-danger'><i className='fas fa-sign-out'></i><a href="#logout" className='text-danger' onClick={LogOut}>Log Out</a></li>
                    </ul>
                </div >
                <div class="main-content" id='content'>
                    {/* <!--  main content --> */}
                    <div className='dashcontent' id='dash'>
                        <h5 className='alert alert-success my-2' >Welcome {username}</h5>

                        <div class="box-container">

                            <div class="box box1 bg-primary text-light">
                                <div class="text text-light">
                                    <h2 class="topic-heading">04</h2>
                                    <h2 class="topic">Property Added</h2>
                                </div>

                                <i className='fa fa-check-circle' id="dashlog"> </i>
                            </div>

                            <div class="box box2 bg-warning ">
                                <div class="text text-dark">
                                    <h2 class="topic-heading">23</h2>
                                    <h2 class="topic text-center">Likes </h2>
                                </div>

                                <i className='fa fa-thumbs-o-up' id="dashlog"> </i>
                            </div>

                            <div class="box box3 bg-success">
                                <div class="text">
                                    <h2 class="topic-heading">320</h2>
                                    <h2 class="topic">Comments</h2>
                                </div>

                                <i className='fas fa-comments' id="dashlog"> </i>
                            </div>

                            <div class="box box4 bg-danger">
                                <div class="text">
                                    <h2 class="topic-heading">70</h2>
                                    <h2 class="topic">Published</h2>
                                </div>

                                <i className='fas fa-share' id="dashlog"> </i>
                            </div>
                        </div>

                        <div class="recent-container">
                            <div class="recent-header">
                                <h1 class="recent-Articles">Recent Properties</h1>
                                <Link class="btn btn-primary" to="#listing">View All</Link>
                            </div>

                            <div class="recent-body">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Location</th>
                                                <th>Room Size</th>
                                                <th>Property Type</th>
                                                <th>Status</th>
                                                <th >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>vasai</td>
                                                <td>2 bhk</td>
                                                <td>Flat</td>
                                                <td className='text-success '>Published</td>
                                                <button className='btn btn-primary mr-2'>Update</button>
                                                <button className='btn btn-danger'>Delete</button>


                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>virar</td>
                                                <td>1 bhk</td>
                                                <td>Plot</td>
                                                <td className='text-success '>Published</td>
                                                <button className='btn btn-primary mr-2'>Update</button>
                                                <button className='btn btn-danger'>Delete</button>


                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>dahisar</td>
                                                <td>2 bhk</td>
                                                <td>Flat</td>
                                                <td className='text-success '>Published</td>
                                                <button className='btn btn-primary mr-2'>Update</button>
                                                <button className='btn btn-danger'>Delete</button>


                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>borivali</td>
                                                <td>2 bhk</td>
                                                <td>Bungalow</td>
                                                <td className='text-success '>Published</td>
                                                <button className='btn btn-primary mr-2'>Update</button>
                                                <button className='btn btn-danger'>Delete</button>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* new end */}

                    </div>
                    <div className='AddProp' id='AddProp'>
                        <form onSubmit={(event) => event.preventDefault()}>
                            <h3 className='text-light bg-primary p-3 text-uppercase'><i className='fa fa-plus-circle'></i> Add Property</h3>
                            <div className="col-md-border ">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            name="yourname"
                                            placeholder="Your Name"
                                            className="form-control"
                                            type="text"
                                            required="required"
                                            value={username}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            name="location"
                                            placeholder="Location"
                                            className="form-control"
                                            type="text"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select name="BHK" id="" className='form-control' >
                                            <option value="1">Bhk</option>
                                            <option value="1">1 Bhk</option>
                                            <option value="2">2 Bhk</option>
                                            <option value="3">3+ Bhk</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select name="PropType" id="" className='form-control'>
                                            <option value="1">Property Type</option>
                                            <option value="1">Flat</option>
                                            <option value="2">Plot</option>
                                            <option value="3">Bungalow</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="upload photo" className='mt-0'>Upload photo: </label>
                                        <br /><input type="file" name="propImg1" className='' accept="image/*" />
                                        <br /><input type="file" name="propImg2" className='imgfile' accept="image/*" />
                                        <br /><input type="file" name="propImg3" className='imgfile' accept="image/*" />
                                        <br /><input type="file" name="propImg4" className='imgfile' accept="image/*" />

                                    </div>

                                </div>
                                <div className='form-row'>
                                    <label htmlFor="price" >Price: </label>
                                    <input type="number" className="form-control col-md-2 col-5 ml-2 mt-0" />

                                </div>

                                <div className="form-row mt-3">
                                    <input
                                        type="submit"
                                        className="btn btn-success"
                                        value="Add Property"
                                        onClick={added}
                                    />


                                </div>


                            </div>
                        </form>

                    </div>
                    <div className='listing' id='listing'>
                        <h2 className='text-light bg-primary p-2 text-uppercase'><i className='fas fa-list'></i>My Listed Properties</h2>
                        <table className='table table-hover bg-black'>
                            <thead>
                                <tr>

                                    <th>Location</th>
                                    <th>BHK</th>
                                    <th>Property Type</th>
                                    <th>Area</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td>Vasai</td>
                                    <td>2</td>
                                    <td>Plot</td>
                                    <td>3000</td>
                                    <td>51,87,990</td>
                                </tr>
                                <tr>
                                    <td>Virar</td>
                                    <td>1</td>
                                    <td>Plot</td>
                                    <td>2000</td>
                                    <td>31,57,990</td>
                                </tr>
                                <tr>
                                    <td>Bhayandar</td>
                                    <td>1</td>
                                    <td>Plot</td>
                                    <td>2000</td>
                                    <td>51,27,990</td>

                                </tr>
                                <tr>
                                    <td>Miraroad</td>
                                    <td>1</td>
                                    <td>Bungalow</td>
                                    <td>2000</td>
                                    <td>2,11,27,990</td>

                                </tr>
                                <tr>
                                    <td>nallasopara</td>
                                    <td>1</td>
                                    <td>Flat</td>
                                    <td>2600</td>
                                    <td>1,11,27,990</td>

                                </tr>
                                <tr>
                                    <td>Miraroad</td>
                                    <td>1</td>
                                    <td>Flat</td>
                                    <td>2600</td>
                                    <td>1,11,27,990</td>

                                </tr>

                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>

                    <div className='prediction' id='get'>
                        <HousePricePrediction />
                    </div>



                </div>
            </div >

        </>
    );
}
