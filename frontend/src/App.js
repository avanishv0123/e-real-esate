import React from "react";

import Properties from "./components/Properties";
import { Routes, Route } from "react-router-dom";
import { Viewprop } from "./components/Viewprop";
import { Viewprop2 } from "./components/viewprop2";
// import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Homepage from "./components/homepage";
// import AdminLogin from "./components/AdminLogin";
// import Navbar from "./components/Navbar";
import prop1 from "../src/assets/images/1.jpg";
import prop2 from "../src/assets/images/2.jpg";
import prop3 from "../src/assets/images/3.jpg";
import prop4 from "../src/assets/images/4.jpg";
import prop5 from "../src/assets/images/5.jpg";
import { Agents } from "./components/Agents";
import Buy from "./components/Buy";
import { NewAgent } from "./components/NewAgent";
import { AgentDashboard } from "./components/AgentDashboard";
import Navbar from "./components/Navbar";
import { Sell } from "./components/Sell";
import PredictForm from "./components/PredictPriceForm";
import { MyProvider } from "./context/MyContext";
// import BuyData from "./components/BuyData";

const App = () => {
  return (
    <>
      <MyProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/Properties"
            element={
              <>
                <Properties
                  imgsrc={prop1}
                  location="Vasai"
                  title="1 bhk"
                  sname="get upto 20% off"
                  link="https://google.com"
                  price="Rs 55,00,000"
                  // className="filter 1bhk card  "
                />
                <Properties
                  imgsrc={prop2}
                  location="Virar"
                  title="1 bhk"
                  sname="get upto 10% off"
                  link="https://google.com"
                  price="Rs 65,00,000"
                  // className="filter 1bhk card gallery_product "
                />
                <Properties
                  imgsrc={prop3}
                  location="bhayandar"
                  title="2 bhk"
                  sname="get upto 10% off"
                  link="https://google.com"
                  price="Rs 45,00,000"
                  // className="filter 2bhk card gallery_product "
                />
                <Properties
                  imgsrc={prop4}
                  location="dahisar"
                  title="2 bhk"
                  sname="get upto 15% off"
                  link="https://google.com"
                  price="Rs 75,00,000"
                  // className="filter 2bhk card gallery_product "
                />
                <Properties
                  imgsrc={prop5}
                  location="Borivali"
                  title="2 bhk"
                  sname="get upto 10% off"
                  link="https://google.com"
                  price="Rs 85,00,000"
                  // className="filter 2bhk card gallery_product "
                />
                <Properties
                  imgsrc={prop2}
                  location="Kandivali"
                  title="2 bhk"
                  sname="get upto 12% off"
                  link="https://google.com"
                  price="Rs 95,00,000"
                />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/logOut" element={<LogOut />} /> */}
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Viewprop" element={<Viewprop />} />
          <Route path="/Viewprop2" element={<Viewprop2 />} />
          <Route path="/NewAgent" element={<NewAgent />} />
          <Route path="/Dashboard" element={<AgentDashboard />} />
          <Route path="/predict" element={<PredictForm />} />

          {/* <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="Login/AdminLogin" element={<AdminLogin />} /> */}
        </Routes>
      </MyProvider>
    </>
  );
};
export default App;
