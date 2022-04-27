// import React, { Component } from "react";
import React from "react";
import AppNavBar from '../Navbar/Nav';
import Footer from '../home/Footer';

import TransparentHeader from '../props/TransparentHeader';

export default function Contact() {
  return (
    <div>
    <AppNavBar />
    <TransparentHeader
      text="Contact Us"
    />
    <section className="main-contact">
      <form className="contact-form">

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" class="form-control" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example3">Message</label>
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
  </div>

  <button type="submit" class="btn btn-block mb-4" style={{backgroundColor: "#161E54", color: "#fff"}}>Send Message</button>
</form>

    </section>
      <Footer />
    </div>
  );
}
