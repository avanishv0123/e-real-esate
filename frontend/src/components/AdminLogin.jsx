import React from "react";
// import "./Admin.css";
import img from "./adminImg.png";
function AdminLogin() {
  return (
    <>
      <div className="row">
        <div className="col-xl-11 d-xl-flex col-md-11 d-md-block mx-auto col-12">
          <div className="bgimg p-2 p-xl-0 p-lg-4">
            <img
              src={img}
              className="img-fluid p-md-4 p-0 p-lg-5"
              alt="leftimage"
            />
          </div>
          <div className="form form-content mt-xl-0 mt-md-0 my-3">
            <div className="form">
              <div className="form-box my-4">
                <h3 className="text-center text-light">ADMIN LOGIN</h3>
                <div className="button-box mt-4 mb-4">
                  <button
                    className="font-bold student text-left btn text-uppercase active"
                    id="sbtn"
                  >
                    ADMIN
                  </button>
                </div>
                {/* <!-- Student LOGIN FORM STARTS --> */}
                <form className="form my-5" id="slogin">
                  <label for="Login Id" class="">
                    <i class="fa fa-user"></i> ADMIN ID :
                  </label>
                  <input
                    type="text"
                    id="loginid"
                    name="reguid"
                    placeholder="Enter Login id"
                    class="form-control "
                  />
                  {/* <div id="error" style="padding-top:10px; "></div> */}

                  <br />
                  <label for="Password" class="">
                    <i class="fa fa-lock "></i> PASSWORD :
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="regpass"
                    placeholder="Enter Password"
                    class="form-control"
                  />
                  {/* <!-- <i class="fa fa-eye" onclick="logpswshow()" id="showpass"></i> --> */}

                  {/* <i id="open" class="fa fa-eye"></i> */}
                  {/* <i id="closed" class="fa fa-eye-slash "></i> */}
                  {/* <div id="error2" style={{"padding-top:10px"}}></div> */}

                  <input
                    type="submit"
                    class="btn btn-outline-primary btn-success text-white d-inline-flex my-3 "
                    id="btn1"
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
export default AdminLogin;
