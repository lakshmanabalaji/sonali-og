import React, { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { hyperspeedPresets } from "../components/hyperspeedPresets";
import HyperspeedLoader from "../components/HyperspeedLoader";
import SEO from "../components/SEO";
import Image from 'next/image'
// background hero uses a normal <img> to preserve original layout

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <SEO
        title="Home"
        description="Safe, reliable, and innovative copper wiring solutions powering homes, industries & agriculture."
        canonical="/"
        openGraph={{ image: '/images/optimized/Layer1-opt.webp' }}
        preloadImages={["/images/optimized/Layer1-opt.webp"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sonali Wires",
          "url": "/"
        }}
      />
      <div className="homeContainer">
  <HyperspeedLoader effectOptions={hyperspeedPresets.one} />

        {/* background image (hero) - use next/image in a positioned wrapper to preserve layout and improve LCP */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }} aria-hidden="true">
          <Image
            src="/images/optimized/Layer1-opt.webp"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="overlay">
          <h1>
            Sonali <span className="over">wires</span>
          </h1>
           
          <h3>Stronger trust.</h3>
          <p>
            Safe, reliable, and innovative copper wiring solutions powering homes,
            industries & agriculture.
          </p>

          <div className="buttonGroup">
            <button className="btn btn-red">
              Explore Our Products <span className="arrow">→</span>
            </button>
            <button className="btn btn-blue">
              Find a Dealer <span className="arrow">→</span>
            </button>
          </div>
        </div>

  {/* WhatsApp Floating Chat */}
        <div className="position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 1000 }}>
          {showChat && (
            <div className="card shadow-lg mb-3" style={{ width: '300px' }}>
              <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Welcome to our website!</h5>
                <button 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowChat(false)}
                  aria-label="Close chat"
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Nice to meet you! If you have any questions about our products,
                  feel free to contact us.
                </p>
                <button className="btn btn-success w-100">
                  Chat with us <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          )}

          <button
            className="btn btn-success rounded-circle p-3 shadow-lg"
            onClick={() => setShowChat(true)}
            aria-label="Chat with us on WhatsApp"
          >
            {/* Use react-icons for WhatsApp icon for better visibility and bundle consistency */}
            <FaWhatsapp style={{ fontSize: 24, verticalAlign: 'middle' }} />
          </button>
        </div>
      </div>

      {/* About Us Section - Moved outside home-container */}
      <div className="aboutContainer1">
        <div className="aboutLeft">
          <h2>About Us</h2>
          <h3>
            Welcome to <br />
            <span className="highlightText">Sonali Wires LLP</span>
          </h3>

          <div className="whoWeAre">
            <h3>WHO <br />WE ARE</h3>
            <a href="/about" className="knowMoreBtn">
              Know More <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="aboutRight">
          <p>
            At Sonali Wires LLP, we are committed to delivering safe, BIS-certified
            copper wires and cables designed for every sector — residential,
            industrial, and agricultural. Our advanced manufacturing processes and
            rigorous testing ensure products that last longer, perform better, and
            keep you safe.
          </p>
          <h3><strong>Our Vision</strong></h3>
          <p>
            We are committed to a vision of positioning not only our organization
            but our country India as the number one supplier of Non-Ferrous
            metal products in the world.
          </p>
          <br />
          <br />
          <p>Since 1996</p>
        </div>
      </div>
      {/* Our Applications Section */}
      <div className="applicationsSection">
        <p className="appSubtitle">Our Applications</p>
        <h2>
          Copper Wiring Solutions for <br />
          <span>Every Sector</span>
        </h2>


        <div className="applicationsGrid">
          <div className="appCard">
            <div className="icon">🏠</div>
            <p>
              Flame-retardant (FR), Flame Retardant Low Smoke (FRLS), and Halogen Free
              Flame Retardant (HFFR) wires that make homes safer, smarter, and
              long-lasting.
            </p>
            <h3>Residential Wiring</h3>
          </div>

          <div className="appCard">
            <div className="icon">🏭</div>
            <p>
              High-strength, fire-resistant copper cables engineered to handle heavy
              machinery, automation, and factory setups with ease.
            </p>
            <h3>Industrial Cables</h3>
          </div>

          <div className="appCard">
            <div className="icon">🌾</div>
            <p>
              Reliable submersible winding wires and flat cables that power pumps and
              irrigation systems, supporting farmers in their daily operations.
            </p>
            <h3>Agriculture</h3>
          </div>
        </div>
      </div>
      {/* Featured Products Section */}
      <div className="featuredProducts">
        <p className="featuredSubtitle">Featured Products</p>
        <h2>
          Discover <br />
          <span>Our Product Range</span>
        </h2>

        <div className="productGrid">
          <div className="productCard rotateLeft">
            <div style={{ position: 'relative', width: 300, height: 200 }}>
              <Image
                src="/images/freepik_br_38c274bd-e1a3-4785-bc3c-0e1530f57b34 1.png"
                alt="Submersible Winding Wires"
                fill
                style={{ objectFit: 'contain', transform: 'rotate(30deg)' }}
                priority
              />
            </div>
            <h3>Submersing Wires (FR, FRLS, HFFR)</h3>
          </div>

          <div className="productCard noRotate">
            <div style={{ position: 'relative', width: 300, height: 200 }}>
              <Image
                src="/images/freepik_br_664f631b-f4ab-478d-babc-d010187463a8 1.png"
                alt="Three Core Flat Cables"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <h3>Three Core Flat Cables</h3>
          </div>

          <div className="productCard rotateRight">
            <div style={{ position: 'relative', width: 300, height: 200 }}>
              <Image
                src="/images/freepik_br_a4162ba9-96f9-4be0-883f-b331f9bd20d1 1.png"
                alt="Wiring Wires (FR, FRLS, HFFR)"
                fill
                style={{ objectFit: 'contain', transform: 'rotate(360deg)' }}
                priority
              />
            </div>
            <h3 style={{marginTop: '50px'}}>Submersible Winding Wires</h3>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="productBtn">Explore Our Products →</button>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="newsUpdates">
        <div className="newsHeader">
          <div>
            <p className="newsSubtitle">News & Updates</p>
            <h2>
              Latest Updates from <br />
              <span>Sonali Wires</span>
            </h2>
          </div>
          <button className="seeMoreBtn">See More News →</button>
        </div>

          <div className="newsGrid">
          {/* News Card 1 */}
          <div className="newsCard">
            <div style={{ position: 'relative', width: 420, height: 240 }}>
              <Image src="/images/wires1-news.png" alt="Expo Participation" fill style={{objectFit: 'cover'}} />
            </div>
            <p className="newsDate">July 2, 2025</p>
            <h3>Participation in India Electrical Expo 2025</h3>
            <p className="newsDesc">
              Sonali Wires LLP showcased its latest product innovations and
              manufacturing excellence at the India Electrical Expo 2025.
            </p>
            <a href="https://sonaliwires.com/" className="newsLink">
              Read More →
            </a>
          </div>

          {/* News Card 2 */}
          <div className="newsCard">
            <div style={{ position: 'relative', width: 420, height: 240 }}>
              <Image src="/images/wires-news.png" alt="HFFR Wires Launch" fill style={{objectFit: 'cover'}} />
            </div>
            <p className="newsDate">July 2, 2025</p>
            <h3>Launch of HFFR housing wires for safer homes</h3>
            <p className="newsDesc">
              We are proud to introduce our new range of Halogen Free Flame Retardant
              (HFFR) housing wires. Designed for modern households, these wires emit
              minimal smoke and zero halogen.
            </p>
            <a href="https://sonaliwires.com/" className="newsLink">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
