import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import { STRAPI_URL } from '../lib/strapi';
import { useRouter } from "next/router";

const Layout = ({ children, globalSetting: globalSettingProp = null }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [globalSetting, setGlobalSetting] = useState(globalSettingProp);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const router = useRouter();
  const isResources = router.pathname === "/resources";
  
  // Close menus when navigating
  useEffect(() => {
    setShowAboutDropdown(false);
    setShowMobileMenu(false);
  }, [router.pathname]);
  
  useEffect(() => {
    if (globalSettingProp) return; // already provided by page SSG
    let mounted = true;
    async function fetchGlobal() {
      try {
        const res = await fetch(`${STRAPI_URL}/api/global-setting?populate=*`);
        if (!res.ok) return;
        const json = await res.json();
        if (mounted) setGlobalSetting(json);
      } catch (err) {
        // ignore
      }
    }
    fetchGlobal();
    return () => { mounted = false; };
  }, [globalSettingProp]);

  const logoUrl = globalSetting?.data?.attributes?.logo?.data?.attributes?.url
    ? `${STRAPI_URL}${globalSetting.data.attributes.logo.data.attributes.url}`
    : '/images/Layer1.png';

  const footerText = globalSetting?.data?.attributes?.footer_text || 'Safe, reliable, and innovative copper wiring solutions powering homes, industries & agriculture.';
  const socialLinks = globalSetting?.data?.attributes?.social_links || [];

  return (
    <>
      <nav className={`navbar navbar-expand-lg py-3 ${isResources ? "navbar-light bg-resources" : "bg-primary navbar-dark"}`}>
        <div className="container">
          <Link href="/" className={`navbar-brand d-flex align-items-center gap-2 ${isResources ? "dark-logo" : ""}`}>
            <div className="logo-container-nav position-relative me-2">
              <img src={logoUrl} alt="Sonali Wires Logo" className={`sonali-logo-nav ${isResources ? "dark-logo-img" : ""}`} />
            </div>

            <div className="logo-text-nav position-relative">
              <h3 className="brand-title-nav">SONALI<span className="logo-r-nav">®</span></h3>
              <span>W I R E S</span>
              <p className={`brand-subtitle-nav ${isResources ? "text-resources" : ""}`}>{"(A UNIT OF SONALI GROUP)"}</p>
            </div>
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-controls="navbarContent" 
            aria-expanded={showMobileMenu} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarContent" style={{display: showMobileMenu ? 'block' : ''}}>
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${router.pathname === "/" ? "active text-light" : ""}`}>Home</Link>
              </li>

              <li className="nav-item dropdown" onMouseLeave={() => setShowAboutDropdown(false)}>
                <button 
                  className={`nav-link dropdown-toggle btn btn-link text-decoration-none ${router.pathname === "/about" ? "active text-light" : ""}`}
                  onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  style={{cursor: 'pointer'}}
                >
                  About Us
                </button>
                {showAboutDropdown && (
                  <ul className="dropdown-menu show" style={{marginLeft: '18px', display: 'block', position: 'absolute', minWidth: '200px', zIndex: 1000}}>
                    <li><Link href="/about" className="dropdown-item" onClick={() => setShowAboutDropdown(false)}>About Us</Link></li>
                    <li><Link href="/innovation" className="dropdown-item" onClick={() => setShowAboutDropdown(false)}>Innovation & Quality</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item"><Link href="/products" className={`nav-link ${router.pathname === "/products" ? "active text-light" : ""}`}>Our Products</Link></li>
              <li className="nav-item"><Link href="/resources" className={`nav-link ${router.pathname === "/resources" ? "active text-light" : ""}`}>Resources</Link></li>
              <li className="nav-item"><Link href="/careers" className={`nav-link ${router.pathname === "/careers" ? "active text-light" : ""}`}>Careers</Link></li>

              {router.pathname === "/" && (
                <li className="nav-item position-relative">
                  {showSearch ? (
                    <input type="text" className="form-control form-control-sm" placeholder="Search..." autoFocus onBlur={() => setShowSearch(false)} />
                  ) : (
                    <button className="btn btn-link nav-link" onClick={() => setShowSearch(true)}>
                      <i className="fas fa-search"></i>
                    </button>
                  )}
                </li>
              )}

              <li className="nav-item">
                <Link href="/contact" className="nav-link"><button className="btn btn-danger rounded-pill px-4">Contact Us</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">{children}</div>

      {/* Certifications & Trust Section */}
      <div className="certifications-section">
        <div className="cert-content">
          <div className="cert-left">
            <p className="cert-subtitle">Certifications & Trust</p>
            <h2>Certified for <br /><span>Your Safety</span></h2>
          </div>
          <div className="cert-right">
            <p className="cert-desc">Every Sonali product goes through rigorous NABL-accredited testing and holds BIS, ISI & ISO certifications — ensuring safety, durability, and compliance with global standards.</p>
          </div>
        </div>
        <div className="cert-logos">
          <img src="/images/rohs.png" alt="ROHS Certified" />
          <img src="/images/reach-compliant.webp" alt="Reach Compliant" />
          <img src="/images/pb-lead free.webp" alt="Lead-Free" />
          <img src="/images/isi.png" alt="ISI Certified" className="isi" />
          <img src="/images/iso-9001.png" alt="ISO 9001" />
          <img src="/images/iso-14001.png" alt="ISO 14001" className="iso14001" />
          <img src="/images/iso-45001.png" alt="ISO 45001" />
          <img src="/images/pure-copper.png" alt="Pure Copper" />
        </div>

        <div className="container mt-5 mb-2 power-your">
          <div className="row align-items-left">
            <div className="col-lg-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <h2 className="display-4 mb-4">Power Your Future with <br /><span className="fw-bold foot-subtitle">Sonali Wires</span></h2>
            </div>
            <div className="col-lg-6">
              <p className="lead mb-4">Get safe, durable, and certified copper wires & cables for your home, industry, or farm.</p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger btn-lg">Contact Us →</button>
                <button className="btn btn-info btn-lg text-white">Find a Dealer →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Section ===== */}
      <footer className="text-light py-3 footer">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4 mb-4">
              <div className="col-lg-4 mb-4 d-flex align-items-center logo-wrapper position-relative">
                <div className="logo-container position-relative me-2">
                  <img src={logoUrl} alt="Sonali Wires Logo" className="sonali-logo" />
                </div>
                <div className="logo-text position-relative">
                  <h3 className="brand-title">SONALI<span className="logo-r">®</span></h3>
                  <span>W I R E S</span>
                  <p className="brand-subtitle">(A UNIT OF SONALI GROUP)</p>
                </div>
              </div>

              <p className="mb-4">{footerText}</p>

              <div className="d-flex gap-3 fs-4 icon">
                {socialLinks.length > 0 ? (
                  socialLinks.map((s, idx) => (
                    <a key={idx} href={s.url || '#'} className="text-light" aria-label={s.name || `social-${idx}`}>
                      <span className="footer-icon-bg">{s.name?.toLowerCase()?.includes('whatsapp') ? <FaWhatsapp className="footer-icon-bg-inner"/> : s.name?.toLowerCase()?.includes('youtube') ? <FaYoutube className="footer-icon-bg-inner"/> : s.name?.toLowerCase()?.includes('facebook') ? <FaFacebook className="footer-icon-bg-inner"/> : <FaLinkedin className="footer-icon-bg-inner"/>}</span>
                    </a>
                  ))
                ) : (
                  <>
                    <a href="https://wa.me/yourwhatsappnumber" className="text-light" aria-label="WhatsApp"><span className="footer-icon-bg"><FaWhatsapp className="footer-icon-bg-inner" /></span></a>
                    <a href="https://youtube.com/yourchannel" className="text-light" aria-label="YouTube"><span className="footer-icon-bg"><FaYoutube className="footer-icon-bg-inner" /></span></a>
                    <a href="https://facebook.com/yourpage" className="text-light" aria-label="Facebook"><span className="footer-icon-bg"><FaFacebook className="footer-icon-bg-inner" /></span></a>
                    <a href="https://linkedin.com/company/yourcompany" className="text-light" aria-label="LinkedIn"><span className="footer-icon-bg"><FaLinkedin className="footer-icon-bg-inner" /></span></a>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 col-md-6 quick-links">
              <h4 className="h5 mb-3">Quick Links</h4>
              <ul className="nav flex-column">
                <li className="nav-item"><Link href="/" className="nav-link text-light px-0">Home</Link></li>
                <li className="nav-item"><Link href="/about" className="nav-link text-light px-0">About Us</Link></li>
                <li className="nav-item"><Link href="/resources" className="nav-link text-light px-0">Resources</Link></li>
                <li className="nav-item"><Link href="/careers" className="nav-link text-light px-0">Careers</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="h5 mb-3">Our Products</h4>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#housing" className="nav-link text-light px-0">Housing Wires</a></li>
                <li className="nav-item"><a href="#submersible" className="nav-link text-light px-0">Submersible Winding</a></li>
                <li className="nav-item"><a href="#flat" className="nav-link text-light px-0">Three Core Flat Cables</a></li>
                <li className="nav-item"><a href="#industrial" className="nav-link text-light px-0">Industrial Copper Cables</a></li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h4 className="h5 mb-3">Contact Us</h4>
              <ul className="list-unstyled footer-contact-list">
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="footer-icon-bg contact-icon"><FaPhoneAlt aria-label="Phone" className="contact-icon-inner" /></span>
                  <a href="tel:+918344422211" className="contatctus">+91 83444 22211</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="footer-icon-bg contact-icon"><FaEnvelope aria-label="Email" className="contact-icon-inner" /></span>
                  <a href="mailto:info@sonaligroup.com" className="mailto">info@sonaligroup.com</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="footer-icon-bg contact-icon"><FaMapMarkerAlt aria-label="Address" className="contact-icon-inner" /></span>
                  <span>Sonali Group, G-6/30, Jain Plaza,<br/>Oppanakara Street, Coimbatore,<br/>Tamil Nadu - 641001, (India).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
