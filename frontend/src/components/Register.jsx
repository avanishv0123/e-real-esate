import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../index.css";
import $ from 'jquery';

function Register() {
  const navigate = useNavigate();

  let RegisterUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: e.target.fname.value,
        last_name: e.target.lname.value,
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        password2: e.target.repsw.value,
        role: e.target.role.value,
        // photo: e.target.photo.value,


      }),
    });
    let data = await response.json();
    console.log(data.status);
    if (data.status === 200) {
      Swal.fire({
        title: 'Success!',
        text: 'You Have Registered Successfully!!',
        icon: 'success',
      });
      navigate("/Login");
    } else {
      Swal.fire({
        title: 'error!',
        text: 'Not Registered',
        icon: 'error',
      });
      navigate("/Register");
    }
  };
  let handleKeyUp = (event) => {
    if
      ($('#rpass').val() === $('#rcpass').val()) {
      $('#checkpass').html('Password Matched').css('color', 'green');
      $('#checkpass').fadeToggle();
    }
    else
      $('#checkpass').html('**Password is Not Matching').css('color', '#dc3545');
    $('#checkpass').fadeToggle();
  }


  return (
    <>
      {/* <h2 classNameName="text-center mt-3 text-uppercase">Registeration Page</h2> */}

      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-4 py-5 bg-primary text-white text-center ">
            <div className=" ">
              <div className="card-body">
                <img
                  alt="imagesss"
                  src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                  className="registerImg"
                ></img>
                <h2 className="py-3">Register Here</h2>
                <p className="text-justify">
                  Find Your Dream Home at E-Real Estate. Search by Area, Price &
                  Amenities. Choose Your Residential Property from 15 lac+
                  Property Options on E-Real Estate. Property Advice. In-Depth
                  Locality Info. Price & Trends Info. Maximum Property Options.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5 border ">
            <h4 className="pb-4 text-capitalize">
              Please fill with your details
            </h4>
            <form method="POST" onSubmit={RegisterUser}>
              {/* {% csrf_token %}  */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    name="fname"
                    placeholder="First Name"
                    className="form-control"
                    type="text"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    name="lname"
                    placeholder="Last Name"
                    className="form-control"
                    type="text"
                    required="required"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email ID"
                    required="required"
                    name="email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Create username"
                    required="required"
                    name="username"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    required="required"
                    type="password"
                    id="rpass"
                  />

                </div>
                <div className="form-group col-md-6">
                  <input
                    name="repsw"
                    placeholder="Confirm password"
                    className="form-control"
                    required="required"
                    type="password"
                    id="rcpass"
                    onKeyUp={handleKeyUp}
                  />
                  <span id="checkpass" ></span>

                </div>

              </div>
              <div className="form-group col-md-6 options">
                <p className=" font-weight-bold">Register as: </p>
                <select
                  name="role"
                  placeholder=""
                  className="form-control col-8 ml-2"
                  required="required"
                  type="text"
                >

                  <option value="agent">Agent</option>
                  <option value="user">User</option>
                </select>

              </div>

              <div className="form-row regbtn">
                <input
                  type="submit"
                  className="btn btn-success reg"
                  value="REGISTER"
                />
                <span className="existing mt-2 ml-2">
                  <span>Already have an account? </span>
                  <NavLink to="/login">Login</NavLink>
                </span>
                {/* <div className=" mt-2 ml-2">
                  <span>or want to <b>become an agent?</b> </span>
                  <NavLink to="/NewAgent">click here</NavLink>
                </ div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
