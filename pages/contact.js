import React, { useState } from "react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      {/* ===========================
          HERO SECTION
      =========================== */}
      <div className="contact-hero">
        <img src="/images/contact.jpg" alt="Contact Background" className="contact-bg" />
        <div className="contact-overlay"></div>

        <div className="container contact-content">
          <p className="breadcrumb5">Home &gt; Contact Us</p>

          <div className="row align-items-left">
            <div className="col-lg-7 col-md-7">
              <h1 className="contact-heading">
                Get in Touch with <br />
                <span>Sonali Wires</span>
              </h1>
            </div>

            <div className="col-lg-5 col-md-5">
              <p className="contact-desc">
                We’re here to support you — from product enquiries to dealership
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
          ENQUIRY FORM SECTION
      =========================== */}
      <section className="contact-form-section  position-relative">
        <div className="lets-talk">Let’s Talk</div>
        <div className="container">
          {/* Tabs */}
          <div className="enquiry-tabs mb-4">
            <button
              className={`enquiry-tab ${activeTab === "general" ? "active" : ""}`}
              onClick={() => setActiveTab("general")}
            >
              General Enquiry
            </button>
            <button
              className={`enquiry-tab ${activeTab === "dealer" ? "active" : ""}`}
              onClick={() => setActiveTab("dealer")}
            >
              Dealer Enquiry
            </button>
          </div>

          {/* Header */}
          <div className="enquiry-header">
            <h2 className="enquiry-title">
              Customer <br />
              <span>Enquiries</span>
            </h2>
            <p className="enquiry-desc">
              Have a question about our copper wires & cables? Need help with
              specifications, safety standards, or technical support? Our
              dedicated support team will guide you.
            </p>
          </div>

          {/* Animated Wrapper */}
          <div className="form-container">
            {/* General Enquiry Form */}
            <form
              className={`enquiry-form fade-form ${activeTab === "general" ? "show" : "hide"
                }`}
            >
              <div className="row">
                <div className="col-md-6">
                  <label>First Name*</label>
                  <input type="text" placeholder="Enter first name" />
                </div>
                <div className="col-md-6">
                  <label>Last Name*</label>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Email*</label>
                  <input type="email" placeholder="Enter email address" />
                </div>
                <div className="col-md-6">
                  <label>Phone*</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label>Query Type*</label>
                  <select>
                    <option>Product</option>
                    <option>Technical Support</option>
                    <option>Warranty</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label>Your Message</label>
                  <textarea placeholder="Type your message here..."></textarea>
                </div>
              </div>

              <div className="form-footer">
                <div className="checkbox-area">
                  <input type="checkbox" id="smsConsent" />
                  <label htmlFor="smsConsent">
                    By providing your phone number, you agree to receive SMS
                    messages. See our <a href="/privacy-policy">Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="btn submit-btn">
                  Submit →
                </button>
              </div>
            </form>

            {/* Dealer Enquiry Form */}
            <form
              className={`enquiry-form fade-form ${activeTab === "dealer" ? "show" : "hide"
                }`}
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Company Name*</label>
                  <input type="text" placeholder="Enter company name" />
                </div>
                <div className="col-md-6">
                  <label>Dealer Code (if applicable)</label>
                  <input type="text" placeholder="Enter dealer code" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Contact Person*</label>
                  <input type="text" placeholder="Enter contact person name" />
                </div>
                <div className="col-md-6">
                  <label>Phone*</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Email*</label>
                  <input type="email" placeholder="Enter email address" />
                </div>
                <div className="col-md-6">
                  <label>City*</label>
                  <input type="text" placeholder="Enter city" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label>Business Query*</label>
                  <select>
                    <option>New Dealership</option>
                    <option>Bulk Order</option>
                    <option>Collaboration</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <label>Your Message</label>
                  <textarea placeholder="Type your message here..."></textarea>
                </div>
              </div>

              <div className="form-footer">
                <div className="checkbox-area">
                  <input type="checkbox" id="dealerConsent" />
                  <label htmlFor="dealerConsent">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy">Privacy Policy</a>.
                  </label>
                </div>

                <button type="submit" className="btn submit-btn">
                  Submit →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ======= GLOBAL HEADQUARTERS SECTION ======= */}
      <section className="contact-map-section">
        <div className="container">
          {/* Header */}
          <div className="map-header">
            <p className="map-subtitle">Get In Touch</p>
            <h2 className="map-title">
              Global <br />
              <span>Headquarters</span>
            </h2>
          </div>

          {/* Layout */}
          <div className="map-content">
            {/* Left: Map */}
            <div className="map-left">
              <img src="/images/map.png" alt="Sonali Wires Map" className="map-image" />
            </div>

            {/* Right: Details */}
            <div className="map-right">
              <ul className="map-details">
                <li>
                  <img src="/images/location_icon.png" className="map-png-icon" alt="Location" />
                  <span>
                    G-6/30, Jain Plaza, Oppanakara Street,
                    <br />
                    Coimbatore, Tamil Nadu - 641001
                  </span>
                </li>

                <li>
                  <img src="/images/contact_icon.png" className="map-png-icon" alt="Phone" />
                  <a href="tel:+918344422211" className="map-link">
                    +91 83444 22211
                  </a>
                </li>

                <li>
                  <img src="/images/mail_icon.png" className="map-png-icon" alt="Email" />
                  <a href="mailto:info@sonaligroup.com" className="map-link">
                    info@sonaligroup.com
                  </a>
                </li>
              </ul>

              <p className="map-desc">
                Looking to collaborate on large-scale distribution, industrial supply,
                or government projects? Feel free to use the above email address.
                We will get back to you as soon as we can!
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
