import React from "react";
import SEO from "../components/SEO";
// revert hero background to original <img> so CSS (.careers-bg) applies unchanged
import { FiMapPin } from "react-icons/fi";
import { BiBriefcase } from "react-icons/bi";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Quality Testing Engineer",
      type: "Fulltime",
      location: "Chennai",
      responsibilities:
        "Ensure compliance with BIS, ISI & ISO standards. Work on developing safer, smarter, and sustainable copper solutions.",
    },
    {
      title: "Production Supervisor",
      type: "Fulltime",
      location: "Chennai",
      responsibilities:
        "Manage workflows and ensure product quality. Work in world-class facilities with modern machinery and automated systems.",
    },
    {
      title: "Regional Sales Manager",
      type: "Fulltime",
      location: "Chennai",
      responsibilities:
        "Drive sales performance across regions. Help us expand our nationwide presence and build long-term trust with customers.",
    },
  ];

  const promises = [
    {
      icon: "/images/learning.png",
      text: "Continuous learning & skill development programs",
    },
    {
      icon: "/images/skill.png",
      text: "Clear career growth and promotion pathways",
    },
    {
      icon: "/images/environment.png",
      text: "Safe, inclusive, and collaborative work environment",
    },
    {
      icon: "/images/rewards.png",
      text: "Recognition and rewards for performance",
    },
    {
      icon: "/images/innovate.png",
      text: "Opportunities to innovate and make an impact",
    },
  ];

  return (
    <>
      <SEO
        title="Careers"
        description="Join Sonali Wires LLP — explore open roles in production, quality, sales and more. Build your future with us."
        canonical="/careers"
        openGraph={{ image: '/images/optimized/career_1-opt.webp' }}
        preloadImages={["/images/optimized/career_1-opt.webp"]}
        jsonLd={jobOpenings.map((job, index) => ({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": job.title,
          "description": job.responsibilities,
          "employmentType": job.type,
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Sonali Wires LLP",
            "sameAs": "https://sonaliwires.com/"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": job.location,
              "addressCountry": "IN"
            }
          }
        }))}
      />
      {/* ===== HERO SECTION ===== */}
      <div className="careers-hero">
  {/* revert to original background image element so .careers-bg CSS controls object-fit/position */}
  <img src="/images/optimized/bg_first_div-opt.webp" alt="Careers Hero" className="careers-bg" aria-hidden="true" />
        <div className="careers-overlay"></div>

        <div className="container careers-content">
          <p className="breadcrumb4">Home &gt; Careers</p>

          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7">
              <h1 className="careers-heading">
                Careers at <br />
                <span>Sonali Wires LLP</span>
              </h1>
            </div>

            <div className="col-lg-4 col-md-5 careers-right">
              <p className="careers-desc">
                Shape the future of India's copper wiring industry with innovation,
                trust, and excellence.
              </p>
              <button className="btn careers-btn">View Openings →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHY WORK WITH US ===== */}
      <div className="why-work-section">
        <div className="container">
          <div className="why-header">
            <div className="why-left">
              <p className="why-subtitle">Life at Sonali Wires</p>
              <h2 className="why-heading">
                Why <br/> <span>Work With Us?</span>
              </h2>
              <p className="why-desc">
                We build careers, opportunities, and futures. Our workplace is
                defined by innovation, continuous learning, and teamwork. Whether
                you're starting fresh or bringing years of expertise, you'll find
                the freedom to grow with us.
              </p>
            </div>

            <div className="why-right">
              <div className="retention-box">
                <img src="/images/star.png" alt="Star Shines at Night" className="star" />
                <h3>95%</h3>
                <p>
                  Employee Retention in <br />
                  key departments
                </p>
              </div>
            </div>
          </div>

          {/* Images Row */}
          <div className="why-images">
            <img src="/images/career_1.jpg" alt="Career 1" />
            <img src="/images/career_2.jpg" alt="Career 2" />
            <img src="/images/career_3.jpg" alt="Career 3" />
            <img src="/images/career_4.png" alt="Career 4" />
          </div>
        </div>
      </div>

      {/* ===== JOB OPENINGS SECTION ===== */}
      <div className="job-section">
        <div className="container">
          <div className="job-header">
            <div>
              <p className="job-subtitle">Explore Career Paths</p>
              <h2 className="job-heading">
                Find <br />
                <span>Where You Belong</span>
              </h2>
              <p className="job-desc">
                We offer diverse opportunities across departments
              </p>
            </div>
          </div>

          {/* Job Cards */}
          <div className="job-cards">
            {jobOpenings.map((job, index) => (
              <div className="job-card" key={index}>
                <h3 className="job-title">{job.title}</h3>

                <div className="job-info">
                  <span>
                    <BiBriefcase className="job-icon" /> {job.type}
                  </span>
                  <span>
                    <FiMapPin className="job-icon" /> {job.location}
                  </span>
                </div>

                <p className="job-subheading">Responsibilities:</p>
                <p className="job-text">{job.responsibilities}</p>

                <a href="#" className="job-link">
                  View Job →
                </a>
              </div>
            ))}
          </div>

          {/* Footer Button + Navigation */}
          <div className="job-footer">
            <button className="btn job-btn">Explore Openings →</button>
            <div className="job-nav">
              <button className="nav-btn">❮</button>
              <button className="nav-btn">❯</button>
            </div>
          </div>
        </div>
      </div>


      {/* ===== EMPLOYEE PROMISE SECTION ===== */}
      <div className="employee-promise">
        <div className="container">
          <p className="promise-subtitle">Employee Promise</p>

          <h2 className="promise-heading">
            Build <br />
            <span>Your Future With Us</span>
          </h2>

          <p className="promise-desc">
            Your growth is our priority. We invest in training, skill development,
            and career advancement to help you achieve your full potential. At
            Sonali Wires, you don’t just work — you grow, lead, and thrive.
          </p>

          <h4 className="promise-title">Our Promise to You:</h4>

          <div className="promise-grid">
            {promises.map((item, index) => (
              <div className="promise-card" key={index}>
                <img
                  src={item.icon}
                  alt={item.text}
                  className="promise-icon"
                />
                <p className="promise-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
