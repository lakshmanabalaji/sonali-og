import React from "react";
import SEO from "../components/SEO";
import { FiCalendar } from 'react-icons/fi';
import { getResources, getResourceBySlug, getGlobalSettings } from '../lib/cms';
import { STRAPI_URL } from '../lib/strapi';

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

const Resources = ({ resources = [], globalSetting }) => {
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
            {(resources.data || []).slice(0,2).map((r) => {
              const attrs = r.attributes || {};
              const img = attrs.cover_image?.data?.attributes?.url ? `${STRAPI_URL}${attrs.cover_image.data.attributes.url}` : '/images/resources_news.jpg';
              return (
                <div key={r.id} className={`update-card ${attrs.featured ? 'large' : 'small'}`}>
                  <img src={img} alt={attrs.title} className={`update-card-img ${attrs.featured ? 'large-img' : 'small-img'}`} />
                  <p className="update-date"><FiCalendar className="calendar-icon" /> {attrs.published_at ? new Date(attrs.published_at).toLocaleDateString() : ''}</p>
                  <h3 className="update-title">{attrs.title}</h3>
                  <p className="update-desc">{(attrs.body || '').slice(0, 160)}...</p>
                  <a href={`/resources/${attrs.slug}`} className="update-link">Read More →</a>
                </div>
              )
            })}
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

export async function getStaticProps() {
  try {
    const resources = await getResources();
    const globalSetting = await getGlobalSettings();
    return { props: { resources, globalSetting }, revalidate: 10 };
  } catch (err) {
    console.error('getStaticProps resources error:', err);
    return { props: { resources: null, globalSetting: null }, revalidate: 10 };
  }
}
