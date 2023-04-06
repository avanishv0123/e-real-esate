import React from "react";
import "../index.css";
// import { Footer } from "./Footer";


function Properties(av) {
  return (
    <>

      <div className="cards mt-5 propcards">
        <div className="row">
          <div className="card propcard">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={av.imgsrc} alt="mypic" className="img-fluid" />
              {/* <img src={av.imgsrc} class="img-responsive" /> */}

              <div className="card-info propcard-info">
                <h3 className="location text-center"> {av.location} </h3>
                <h2 className="title text-center"> {av.title}</h2>

                {/* <h3 className="sname text-center"> {av.sname} </h3> */}
                <p className="price text-center text-light bg-primary"> {av.price} </p>
                <a href={av.link} >
                  <button className="sbtn "> See details </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
export default Properties;
