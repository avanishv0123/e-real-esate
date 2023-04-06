import React from "react";
// import agent1 from "../assets/images/agents/1.jpg";
import agent2 from "../assets/images/agents/2.jpg";
import agent3 from "../assets/images/agents/3.jpg";
// import agent4 from "../assets/images/agents/4.jpg";
// import wallet from "../assets/images/Gif Icons/purse.gif";
// import location from "../assets/images/Gif Icons/location.gif";
// import house from "../assets/images/Gif Icons/house.gif";
// import spy from "../assets/images/Gif Icons/spy.gif";
import "../agents.css";
export const Agents = () => (
  <>
    <section className="agent-section">
      {/* <div class="container py-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class=" mb-4 text-uppercase bg-primary text-white"> Agents</h3>
          </div>
        </div> */}
      <section class="mt-1 bc">
        <div class="container-fluid p-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-3">
              <li class="breadcrumb-item">
                <a href='/' className="text-decoration-none">
                  <i class="fas fa-home"></i> Home</a>
              </li>
              <li class="breadcrumb-item active"> View Agents</li>
            </ol>
          </nav>
        </div>
      </section>

      <div class="row text-center p-0">
        <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
          <div class="card">
            <div class="card-body py-4 mt-1">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent2}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Shubham</h5>
              <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star-half-alt fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone"></i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">
                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-10 m-auto mb-4 mb-md-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent3}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Riya</h5>
              <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Autem, totam debitis
                suscipit saepe sapiente magnam officiis quaerat necessitatibus
                odio assumenda perferendis labore laboriosam.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone"></i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">
                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-10 m-auto mb-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent2}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Avanish</h5>
              <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                libero, in gravida nulla metus scelerisque ante sollicitudin
                commodo cras purus odio, vestibulum in tempus viverra turpis.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone"></i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">
                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 col-10 m-auto mb-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent3}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Priya</h5>
              <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                libero, in gravida nulla metus scelerisque ante sollicitudin
                commodo cras purus odio, vestibulum in tempus viverra turpis.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone"></i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">
                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-10 m-auto mb-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent2}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Shardul</h5>
              <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                libero, in gravida nulla metus scelerisque ante sollicitudin
                commodo cras purus odio, vestibulum in tempus viverra turpis.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone">

                </i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">

                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-10 m-auto mb-0">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src={agent2}
                  class="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                  alt="myimg"
                />
              </div>
              <h5 class="font-weight-bold">Shivam</h5>
              <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
              <ul class="list-unstyled d-flex justify-content-center">
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i class="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                libero, in gravida nulla metus scelerisque ante sollicitudin
                commodo cras purus odio, vestibulum in tempus viverra turpis.
              </p>
              <div className="contact-info">
                <i class="fas fa-phone" id="phone"></i>
                <span>+91 8585845785</span>
                <br />
                <i class="fas fa-envelope"> </i>
                <span href="#dsd" id="mail">
                  avanishv73@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>
);

// import React, { useState, useEffect } from "react";

// export function Agents() {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     fetch("/api/agent_list/")
//       .then((response) => response.json())
//       .then((data) => setAgents(data.agents))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>Agents:</h2>
//       {agents.length === 0 ? (
//         <div>No agents found.</div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Phone number</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents.map((agent) => (
//               <tr key={agent.name}>
//                 <td>{agent.name}</td>
//                 <td>{agent.phone}</td>
//                 <td>{agent.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';

// function Agents() {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     async function fetchAgents() {
//       const response = await fetch('/agent_list/');
//       const data = await response.json();
//       setAgents(data.agents);
//     }
//     fetchAgents();
//   }, []);

//   return (
//     <div>
//       <h2 className="bg-primary p-3 text-uppercase text-light">Agent List</h2>
//       <ul>
//         {agents.map((agent, index) => (
//           <li key={index}>
//             <p>Name: {agent.name}</p>
//             <p>photo: {agent.photo}</p>
//             <p>description: {agent.description}</p>
//             <p>phone : {agent.phone}</p>
//             <p>email: {agent.email}</p>

//           </li>
//         ))}
//       </ul>


//     </div>
//   );
// }

// export default Agents;


