import React from "react";
import { useState, useMemo } from "react";
import SEO from "../components/SEO";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaShieldAlt, FaCogs, FaLightbulb, FaLeaf, FaHeart } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { MILESTONES } from "../components/History/timeline_years.js";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = MILESTONES[activeIndex];
  const years = useMemo(() => MILESTONES.map(m => m.year), []);

  const goNext = () => setActiveIndex(i => (i + 1) % MILESTONES.length);
  const goPrev = () => setActiveIndex(i => (i - 1 + MILESTONES.length) % MILESTONES.length);
  const goTo = (i) => setActiveIndex(i);
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sonali Wires LLP — our vision, mission, leadership, and commitment to quality and safety in copper wire manufacturing."
        canonical="/about"
      />
      {/* ========= Top Blue Section ========= */}
      <div className="about-container">
        <div className="about-content container">
          <div className="row align-items-start">
            {/* Left section */}
            <div className="col-lg-8">
              <p className="breadcrumb">Home &gt; About Us</p>
              <h2 className="about-title">About</h2>
              
              <p className="about-heading">
               <span className="span-h1">Sonali </span> Wires LLP
              </p>

              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                To empower households, industries, and agriculture with safe,
                innovative, and sustainable copper cabling solutions.
              </p>
            </div>

            {/* Right section */}
            <div className="col-lg-4 about-our-right">
              <h5 className="trusted-title">
                India’s Trusted Copper Wire Manufacturer — <br />
                BIS & ISO Certified for Quality and Safety
              </h5>
              <p className="trusted-desc text-white">
                Sonali Wires LLP is a leading name in India’s copper wire and cable
                industry. With a commitment to safety, durability, and reliability,
                we deliver high-quality products that power homes, strengthen
                industries, and support agriculture across the nation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= New White Section ========= */}
      <div className="about-white-section">
        <div className="container py-5">
          {/* Mission */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <p className="small-title text-muted">Our Mission</p>
              <h2 className="mission-text">
                To exceed customer expectations by delivering world-class copper <span className="mission-text-span"> wires and cables backed by quality certifications & innovation.</span>
              </h2>
              <div className="mt-5">
                <h3 className="highlight-number">1M+</h3>
                <p className="highlight-caption">
                  Households & Industries Served
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="exp-box">
                <div className="exp-icon">
                  <FaTrophy />
                </div>
                <h3 className="exp-number">25+</h3>
                <p className="exp-caption">
                  Years of Excellence <span>in copper wire manufacturing</span>
                </p>
              </div>
            </div>
          </div>

          {/* Company Profile */}
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="small-title text-muted">Company Profile</p>
              <h2 className="profile-heading">
                A Trusted Name in <br />
                <span>Quality <br /> Copper Wire Manufacturing</span>
              </h2>
              <div className="team-circle">
                <svg viewBox="0 0 200 200" className="circle-svg">
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100
               m-80,0
               a80,80 0 1,1 160,0
               a80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text
                    fontSize="28"
                    fill="#11224d"
                    fontWeight="500"
                    letterSpacing="2px"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      • Meet Our Team • Meet Our Team
                    </textPath>
                  </text>
                </svg>

                <div className="center-circle">
                  <span className="arrow">↓</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="profile-desc">
                Sonali Wires LLP is a leading manufacturer of high-quality copper
                wires and cable solutions trusted by homes, industries, and
                agricultural sectors across India. Backed by advanced technology,
                BIS & ISO certifications, and NABL-accredited in-house testing, we
                ensure safety, performance, and reliability in every product we
                produce.
              </p>
              <p className="profile-desc">
                With state-of-the-art manufacturing units and BIS & ISO-certified
                processes, we deliver products that meet long-term performance and
                unmatched safety assurance. Our solutions are used across power
                networks, motor manufacturers, infrastructure, and industrial
                applications.
              </p>
              <p className="profile-desc">
                Driven by continuous innovation and customer-centric values, Sonali
                Wires LLP continues to expand its footprint across India, becoming
                a trusted partner for distributors, OEMs, and industries requiring
                consistent and dependable copper wiring solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Leadership Section ========= */}
      <div className="leadership-section">
        <div className="container">
          <div className="row align-items-center">

            {/* Left image */}
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src="/images/dress_code.png" alt="Chairman" className="leader-img" />
            </div>

            {/* Right text */}
            <div className="col-lg-8">
              {/* ✅ Add this wrapper only for vertical padding */}
              <div className="leader-text-wrapper">
                <i className="bi bi-quote"></i>
                <h3 className="leader-quote-title">
                  Guided by Values. Driven by Quality.
                </h3>
                <p className="leader-quote-text">
                  "Our journey began with a commitment to deliver safe, durable, and
                  reliable copper wiring solutions that empower everyday life—from
                  homes to industries and farms. The trust of our customers and
                  partners continues to inspire us to innovate responsibly, maintain
                  uncompromising quality, and contribute to India’s growth through
                  sustainable manufacturing practices."
                </p>

                <div className="leader-name-block">
                  <h5 className="leader-name">
                    Mr. R. Mahesh Kumar{" "}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon"
                    >
                      <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="linkedin-img"
                      />
                    </a>
                  </h5>
                  <p className="leader-title">
                    Chairman, <span>Sonali Wires LLP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="small-title text-muted">Our Leadership Team</p>
              <h2 className="team-heading">
                The People Empowering <br />
                <span>Our Growth & Excellence</span>
              </h2>
              <p className="team-subtext">
                Behind our success is a dedicated leadership team that brings
                expertise, vision, and a strong commitment to quality and
                customer satisfaction.
              </p>
            </div>
          </div>

          {/* ===== Responsive Carousel Cards ===== */}
          <div className="team-cards-wrapper">
            <div className="row mt-5 g-4 justify-content-center team-cards-scroll">
              {/* Card 1 */}
              <div className="col-md-3 col-sm-6">
                <div className="team-card">
                  <img src="/images/jobs-career-campaign-Photoroom 1.png" alt="Karthik Raj" className="team-img" />
                  <div className="team-info">
                    <h5>Mr. S. Karthik Raj</h5>
                    <p>Managing Partner</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin"
                    >
                      <img
                        src="/images/linkedin1.png"
                        alt="LinkedIn"
                        className="linkedin-img"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-3 col-sm-6">
                <div className="team-card">
                  <img src="/images/confident-businessman-Photoroom 1.png" alt="Mr. Prakash Srinivasan" className="team-img" />
                  <div className="team-info">
                    <h5>Mr. Prakash Srinivasan</h5>
                    <p>Head – Manufacturing & Quality</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin"
                    >
                      <img
                        src="/images/linkedin1.png"
                        alt="LinkedIn"
                        className="linkedin-img"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-3 col-sm-6">
                <div className="team-card">
                  <img src="/images/business-woman-Photoroom 1.png" alt="Anitha Shree" className="team-img" />
                  <div className="team-info">
                    <h5>Ms. Anitha Shree</h5>
                    <p>Head – Sales & Customer Relations</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin"
                    >
                      <img
                        src="/images/linkedin1.png"
                        alt="LinkedIn"
                        className="linkedin-img"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-3 col-sm-6">
                <div className="team-card">
                  <img src="/images/successful-businessman-Photoroom 1.png" alt="Ramesh" className="team-img" />
                  <div className="team-info">
                    <h5>Mr. V. Ramesh</h5>
                    <p>Head – Finance & Admin</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin"
                    >
                      <img
                        src="/images/linkedin1.png"
                        alt="LinkedIn"
                        className="linkedin-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* Histor Section */}
     <div className="history-section">
      <div className="container">

        {/* Top row */}
        <div className="row">
          <div className="col-lg-8">
            <p className="small-title">Our History</p>
            <h2 className="history-heading">
              Our Journey <br />
              <span>Through the Years</span>
            </h2>
          </div>

          <div className="col-lg-4 text-lg-end">
            <p className="history-side-text">
              From a Modest Beginning to a Trusted <br /> Copper Brand
            </p>
          </div>
        </div>

        {/* Timeline Years */}
        <div className="timeline-years mt-4 mb-5">
          {years.map((y, i) => (
            <span
              key={y}
              className={`year ${i === activeIndex ? "active" : ""}`}
              onClick={() => goTo(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(i)}
            >
              {y}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="row align-items-center mt-0">
          {/* Text */}
          <div className="col-md-3 order-md-1">
            <h4 className="history-subtitle">{active.subtitle}</h4>
            {active.paragraphs.map((p, idx) => (
              <p className="history-text" key={idx}>{p}</p>
            ))}
          </div>

          {/* Image + Buttons */}
          <div className="col-md-3 order-md-2 text-center mt-4 mt-md-0 position-relative">
            <img
              src={active.img}
              alt={`${active.year} – ${active.subtitle}`}
              className="history-img img-fluid"
            />

            {/* Right-side button pair (matches your layout) */}
            <div className="history-btn-group">
              <button
                className="history-btn prev"
                aria-label="Previous year"
                onClick={goPrev}
              >
                ‹
              </button>
              <button
                className="history-btn next"
                aria-label="Next year"
                onClick={goNext}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ========= Core Values Section ========= */}
      <div className="core-values-section">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <p className="small-title text-muted">Core Values</p>
              <h2 className="values-heading">
                What <br />
                <span>We Stand For</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="values-subtext">
                At Sonali Wires LLP, our growth is guided by principles that shape
                every product and decision:
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="values-grid mt-4">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h5>Safety</h5>
              <p>Every wire designed to protect lives and property.</p>
            </div>

            <div className="value-card">
              <FaCogs className="value-icon" />
              <h5>Durability</h5>
              <p>Long-lasting performance, even in challenging environments.</p>
            </div>

            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h5>Innovation</h5>
              <p>Modern solutions for evolving needs.</p>
            </div>

            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h5>Sustainability</h5>
              <p>Eco-friendly products and responsible practices.</p>
            </div>

            <div className="value-card">
              <FaHeart className="value-icon" />
              <h5>Integrity</h5>
              <p>Honesty and trust at the core of our relationships.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Manufacturing Excellence Section ========= */}
      <div className="manufacture-section">
        <div className="container">
          <p className="small-title text-muted">Manufacturing Excellence</p>
          <h2 className="manufacture-heading">
            Advanced <br />
            <span>Technology & Assurance</span>
          </h2>
          <p className="manufacture-subtext">
            We blend cutting-edge technology with strict quality standards to
            ensure every wire meets global benchmarks.
          </p>

          <div className="row align-items-start mt-0">

            <div className="col-lg-6">
              <ul className="manufacture-list">
                <li>
                  <span className="arrow">›</span> State-of-the-art production
                  units <span className="list-span">with automated machinery.</span>
                </li>
                <li>
                  <span className="arrow">›</span> In-house NABL-accredited
                  testing labs <span className="list-span">for precision and compliance.</span>
                </li>
                <li>
                  <span className="arrow">›</span> Certified under BIS, ISI &
                  ISO standards, <span className="list-span">guaranteeing reliability and safety.</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 text-center">
              <img src="/images/manufacture.png" alt="Manufacturing" className="manufacture-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Across India */}
      <div className="trusted-card mt-5">
        <div className="col-md-8">
          <p className="trusted-subtitle">Nationwide Trust</p>
          <h3 className="trusted-heading">
            Trusted <br />
            <span>Across India</span>
          </h3>
          <p className="trusted-text">
            From residential contractors to industrial plants and farmers,
            Sonali Wires LLP is powering every sector with reliable copper
            solutions.
          </p>
        </div>

        <div className="col-md-4 text-center mt-0">

          <div className="map-placeholder">
            <img src="/images/map-india.png" alt="India Map" className="map-img" />
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
