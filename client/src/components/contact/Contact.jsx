// import React, { Component } from "react";
import React from "react";
import AppNavBar from '../Navbar/Nav';
import Footer from '../home/Footer';
import emailjs from "emailjs-com";

import TransparentHeader from '../props/TransparentHeader';

export default function Contact() {
  function sendEmail(e) {
     e.preventDefault();

    emailjs.sendForm('gmail', 'template_0djtx1f', e.target, 'user_oddtUo6vD7mbLymvEoFOK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div>
    <AppNavBar />
    <TransparentHeader
      text="Contact Us"
    />
    <section className="main-contact">
      <form className="contact-form" onSubmit={sendEmail}>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" name="name"/>
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" class="form-control" name="email"/>
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example3">Message</label>
    <textarea class="form-control" id="form4Example3" rows="4" name="message"></textarea>
  </div>

  <button type="submit" class="btn btn-block mb-4" style={{backgroundColor: "#161E54", color: "#fff"}}>Send Message</button>
</form>

    </section>
      <Footer />
    </div>
  );
}
