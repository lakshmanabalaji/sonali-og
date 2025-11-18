import React from "react";
import SEO from "../components/SEO";
import { FiCalendar } from "react-icons/fi"; // ✅ calendar icon

const certificates = [
    { img: "/images/cert1.jpg", title: "BIS Certification" },
    { img: "/images/cert2.jpg", title: "Technical Datasheets" },
    { img: "/images/cert3.jpg", title: "Product Catalogues" },
    { img: "/images/cert4.jpg", title: "ISO 9001:2015" },
    { img: "/images/cert5.jpg", title: "ISI Mark" },
    { img: "/images/cert6.jpg", title: "Safety Datasheets" },
    { img: "/images/cert7.jpg", title: "CPRI Approval" },
    { img: "/images/cert8.jpg", title: "ISO 45001:2018" },
  ];

const Resources = () => {
  return (
    <>
      <SEO
        title="Resources"
        description="Media, resources and product documentation from Sonali Wires — guides, news, catalogues and certifications."
        canonical="/resources"
      />
      {/* ===== HERO SECTION ===== */}
      <div className="resources-hero">
        <div className="container resource-content">
          <p className="breadcrumb3">Home &gt; <span>Media & Resources</span></p>

          <div className="resource-text-area">
            <h1 className="resources-heading">
              Media & <br />
              <span>Resources</span>
            </h1>

            <p className="resources-desc">
              Discover the latest updates, expert guides, and essential downloads
              from Sonali Wires LLP.
            </p>
          </div>
        </div>

        <div className="resource-image-container">
          <img
            src="/images/resources_first_div.png"
            alt="Resource Hero Background"
            className="resource-hero-img"
          />
          <div className="resources-arrow-container">
            <img
              src="/images/resources_down_arrow.png"
              alt="Explore Resources"
              className="resources-arrow"
            />
          </div>
        </div>
      </div>

      {/* ===== SAFETY & INNOVATION TIPS ===== */}
      <div className="resources-tips">
        <div className="container">
          <div className="tips-header">
            <div className="tips-heading-group">
              <p className="tips-subtitle">Blogs & Guides</p>
              <h2 className="tips-heading">
                Safety & <br />
                <span>Innovation Tips</span>
              </h2>
            </div>
            <p className="tips-desc">
              Stay informed with expert insights on copper wiring, safety practices,
              and industry innovations.
            </p>
          </div>

          <div className="tips-cards">
            <div className="tips-card">
              <img src="/images/man.jpg" alt="Safe Housing Wires" className="tips-card-img" />
              <p className="tips-card-text">How to Choose Safe Housing Wires</p>
            </div>
            <div className="tips-card">
              <img src="/images/fire.jpg" alt="Safer for Homes" className="tips-card-img" />
              <p className="tips-card-text">Why HFFR is Safer for Homes & Offices</p>
            </div>
            <div className="tips-card">
              <img src="/images/looms.png" alt="Copper Wiring" className="tips-card-img" />
              <p className="tips-card-text">
                The Future of Copper Wiring in Smart Cities
              </p>
            </div>
          </div>

          <div className="tips-footer">
            <button className="btn tips-read-btn">
              Read All Articles <span className="arrow">→</span>
            </button>

            <div className="tips-navigation">
              <button className="nav-btn">❮</button>
              <button className="nav-btn">❯</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== LATEST UPDATES SECTION ===== */}
      <div className="resources-updates">
        <div className="container">
          <div className="updates-header">
            <div>
              <p className="updates-subtitle">News & Events</p>
              <h2 className="updates-heading">
                Latest Updates from <br />
                <span>Sonali Wires</span>
              </h2>
            </div>

            <button className="btn updates-btn">See More News →</button>
          </div>

          <div className="updates-cards">
            {/* Left Small Card */}
            <div className="update-card small">
              <img
                src="/images/resources_news.jpg"
                alt="Electrical Expo"
                className="update-card-img small-img"
              />
              <p className="update-date">
                <FiCalendar className="calendar-icon" /> July 2, 2025
              </p>
              <h3 className="update-title">
                Participation in India Electrical Expo 2025
              </h3>
              <p className="update-desc">
                Sonali Wires LLP showcased its latest product innovations and
                manufacturing excellence at the India Electrical Expo 2025.
              </p>
              <a href="https://www.electricexpo.co.in/" className="update-link">
                Read More →
              </a>
            </div>

            {/* Right Large Card */}
            <div className="update-card large">
              <img
                src="/images/resources_wire.jpg"
                alt="HFFR Housing Wires"
                className="update-card-img large-img"
              />
              <p className="update-date">
                <FiCalendar className="calendar-icon" /> July 2, 2025
              </p>
              <h3 className="update-title">
                Launch of HFFR housing wires for safer homes
              </h3>
              <p className="update-desc">
                We are proud to introduce our new range of Halogen Free Flame
                Retardant (HFFR) housing wires. Designed for modern households,
                these wires emit minimal smoke and zero halogen.
              </p>
              <a href="https://www.electricexpo.co.in/" className="update-link">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Dowloads Certificate */}
      <div className="resources-certifications">
  <div className="container">
    {/* Header Section */}
    <div className="certify-header">
      <div>
        <p className="certify-subtitle">Downloads</p>
        <h2 className="certify-heading">
          Catalogues & <br />
          <span>Certifications</span>
        </h2>
      </div>

      <p className="certify-desc">
        Access detailed information on our products, certifications, and
        safety guidelines.
      </p>
    </div>

    {/* Certificates Grid */}
    <div className="certify-grid">
      {certificates.map((cert, index) => (
        <div className="certify-card" key={index}>
          <img src={cert.img} alt={cert.title} className="certify-img" />
          <p className="certify-title">{cert.title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default Resources;
