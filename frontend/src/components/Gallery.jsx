import React from "react";
import "../index.css";
import prop1 from "../assets/images/properties/1.jpg";
import prop2 from "../assets/images/properties/1.jpg";
import prop3 from "../assets/images/properties/1.jpg";
import prop4 from "../assets/images/properties/1.jpg";
import prop5 from "../assets/images/properties/1.jpg";
// import prop6 from "../assets/images/prop6.jpeg";

const Gallery = () => {
  return (
    <>
      <div className="col-sm-5 col-md-7 col-lg-4">
        <h5 className="font-weight-bold text-uppercase text-white">Gallery</h5>
        <div className="row row-x-10" data-lightgallery="group">
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop1}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src={prop1}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop3}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop3}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop3}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop3}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop1}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop1}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop5}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop5}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop4}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop4}
                alt=""
              />
              <div className="thumbnail-minimal-caption"> </div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop3}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop3}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
          <div className="col-3 col-sm-4 col-md-3">
            <a
              className="thumbnail-minimal"
              href={prop2}
              data-lightgallery="item"
            >
              <img
                className="thumbnail-minimal-image"
                src ={prop2}
                alt=""
              />
              <div className="thumbnail-minimal-caption"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
