import React from "react";
import "../agents.css";
import Swal from 'sweetalert2';

function Contact() {
  let contact = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Message sent Successfully!!',
      icon: 'success',
      timer: '2000',
    });

  }

  return (
    <>
      <section id="bc" class="mt-3">
        <div class="container-fluid p-1">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-3">
              <li class="breadcrumb-item">
                <a href='/'>
                  <i class="fas fa-home"></i> Home</a>
              </li>
              <li class="breadcrumb-item active"> Contact</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="contact-body border">
        <div class="container contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="" onSubmit={contact}>
            <h3>Drop Us a Message</h3>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="">
                  <div class="form-group">
                    <textarea
                      name="txtMsg"
                      class="form-control"
                      placeholder="Your Message *"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btn btn-danger"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
