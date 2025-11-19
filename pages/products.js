import React from "react";
import SEO from "../components/SEO";
import Image from 'next/image'
// hero background reverted to plain <img> to restore original CSS behavior

const OurProducts = () => {
  return (
    <>
      <SEO
        title="Our Products"
        description="Explore Sonali Wires' range of BIS-certified copper wires and cables for residential, industrial and agricultural applications."
        canonical="/products"
        openGraph={{ image: '/images/optimized/wire1-opt.webp' }}
        preloadImages={["/images/optimized/wire1-opt.webp"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Three Core Flat Cables" },
            { "@type": "ListItem", "position": 2, "name": "Housing Wires" },
            { "@type": "ListItem", "position": 3, "name": "Submersible Winding Wires" },
            { "@type": "ListItem", "position": 4, "name": "Industrial Cables" }
          ]
        }}
      />
      <div className="products-hero">
      {/* hero background uses optimized WebP now (next/image for optimization + priority) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
        <Image src="/images/optimized/wire1-opt.webp" alt="" fill priority style={{ objectFit: 'cover', transform: 'scaleX(-1)' }} />
      </div>
            <div className="container hero-content">
          <p className="breadcrumb1">Home &gt; Our Products</p>
          <div className="hero-headline-group">
            <h1 className="hero-heading">Smarter</h1>
            <span className="hero-heading-span">wires,</span>
          </div>
          <p className="hero-heading secondary">Safer Tomorrow</p>
          <p className="hero-text">
            Discover our safe, durable, and BIS-certified copper wires and cables — engineered to power homes, industries, and agriculture with reliability.
          </p>
        </div>
      </div>
      {/* ===== Product Grid Section ===== */}
      <div className="product-grid-section py-5">
        <div className="container">
          <p className="small-title text-muted">Product Categories</p>
          <h2 className="product-heading">
            Explore <br />
            <span>Our Product Range</span>
          </h2>
          <p className="product-subtext">
            At Sonali Wires LLP, we offer a comprehensive range of copper wires
            and cables designed to meet diverse needs:
          </p>
          <div className="row g-4 mt-3">
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg1">
                <div style={{ position: 'relative', width: 300, height: 200 }}>
                  <Image src="/images/wire2.png" alt="Three Core Flat Cables" fill style={{objectFit: 'contain'}} />
                </div>
                <h5>Three Core Flat Cables</h5>
                <p>
                  Trusted by farmers, these durable flat cables deliver
                  consistent power to submersible pumps.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg2">
                <div style={{ position: 'relative', width: 300, height: 200 }}>
                  <Image src="/images/wire3.png" alt="Housing Wires" fill style={{objectFit: 'contain'}} />
                </div>
                <h5>Housing Wires</h5>
                <p>
                  Designed for residential use, these wires ensure safety and
                  long-lasting performance in homes.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg3">
                <div style={{ position: 'relative', width: 300, height: 200 }}>
                  <Image src="/images/wire4.png" alt="Submersible Winding Wires" fill style={{objectFit: 'contain'}} />
                </div>
                <h5>Submersible Winding Wires</h5>
                <p>
                  Built with advanced insulation for high durability and
                  reliability underwater.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg4">
                <div style={{ position: 'relative', width: 300, height: 200 }}>
                  <Image src="/images/wire5.png" alt="Industrial Cables" fill style={{objectFit: 'contain'}} />
                </div>
                <h5>Industrial Cables</h5>
                <p>
                  High-performance cables used across industrial applications
                  requiring strength and flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Why Our Products Section ========= */}
            <div className="our-products-section">
              <div className="container">
                <div className="row align-items-start">
                  <div className="col-lg-6">
                    <p className="small-title-our text-muted">Why Our Products?</p>
                    <h2 className="our-values-heading">
                      Why Choose <br />
                      <span>Sonali Products?</span>
                    </h2>
                  </div>
                  <div className="col-lg-6">
                    <p className="our-values-subtext">
                      At Sonali Wires LLP, our growth is guided by principles that shape
                      every product and decision:
                    </p>
                  </div>
                </div>
      
                {/* Values Grid */}
                <div className="our-values-grid mt-4">
                  <div className="our-value-card">
                    <img src="/images/certified_safety.png" alt="Certified safety" className="our-product-icons"/>
                    <h5>Certified Safety</h5>
                    <p>BIS, ISI & ISO approvals guarantee reliability and compliance.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src="/images/durability.png" alt="Durability" className="our-product-icons"/>
                    <h5>Long-Lasting Durability</h5>
                    <p>Engineered to withstand heat, moisture, and tough conditions.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src="/images/innovation.png" alt="Innovation" className="our-product-icons"/>
                    <h5>Eco-Friendly Solutions</h5>
                    <p>FRLS & HFFR wires designed for safer, greener environments.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src="/images/sustainability.png" alt="Sustainability" className="our-product-icons"/>
                    <h5>Nationwide Trust</h5>
                    <p>Preferred by contractors, industries, farmers & households across India.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src="/images/integrity.png" alt="Integrity" className="our-product-icons"/>
                    <h5>Advanced Manufacturing</h5>
                    <p>Produced with automated technology and NABL-accredited testing.</p>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default OurProducts;
