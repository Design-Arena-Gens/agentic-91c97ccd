import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [showConcept, setShowConcept] = useState(false)

  const brands = [
    {
      letter: 'H',
      name: 'H.',
      tagline: 'Home. Habitat. Haven.',
      concept: 'The letter H embodies HOME at its core. Simple, strong, architectural - like a doorway or window frame. When people hear "H." they think of home, and your brand becomes synonymous with creating beautiful living spaces.',
      brandValues: ['Home', 'Harmony', 'Heritage', 'Height', 'Haute'],
      colors: ['#2C3E50', '#BFA27F', '#FFFFFF'],
      reasoning: 'H is the most powerful single letter for furniture and interiors because it literally stands for HOME. Its shape resembles architecture and structure.'
    },
    {
      letter: 'L',
      name: 'L.',
      tagline: 'Living. Luxury. Legacy.',
      concept: 'L represents LIVING and LUXURY. The letter itself has clean, modern lines perfect for contemporary design. It suggests elevation, aspiration, and the L-shape is fundamental in interior design layouts.',
      brandValues: ['Living', 'Luxury', 'Legacy', 'Light', 'Lines'],
      colors: ['#1A1A1A', '#D4AF37', '#F8F8F8'],
      reasoning: 'L connects to "living spaces" and "luxury living" - two core concepts in high-end furniture and interiors. The letter shape is architecturally significant.'
    },
    {
      letter: 'I',
      name: 'I.',
      tagline: 'Interior. Inspired. Iconic.',
      concept: 'I stands for INTERIOR - your exact business focus. Minimalist and elegant, it represents the vertical lines in architecture, the individual, and innovation. Perfect for a modern, design-forward brand.',
      brandValues: ['Interior', 'Inspired', 'Iconic', 'Individual', 'Innovation'],
      colors: ['#000000', '#C0C0C0', '#FFFFFF'],
      reasoning: 'I directly represents "Interior" and has the most minimalist, elegant form. It conveys sophistication and modern design philosophy.'
    },
    {
      letter: 'V',
      name: 'V.',
      tagline: 'Vision. Value. Vivid.',
      concept: 'V suggests VISION and victory. The shape points upward, indicating aspiration and growth. It\'s memorable, modern, and creates a strong visual identity in any space.',
      brandValues: ['Vision', 'Value', 'Vivid', 'Vanguard', 'Vitality'],
      colors: ['#8B4513', '#F5DEB3', '#FFFFFF'],
      reasoning: 'V has visual impact and suggests forward-thinking design. The shape is dynamic and memorable, perfect for brand recognition.'
    },
    {
      letter: 'M',
      name: 'M.',
      tagline: 'Modern. Made. Masterful.',
      concept: 'M represents MODERN and MASTERPIECE. Its strong, symmetrical form suggests stability and craftsmanship. The letter evokes both mountains (aspiration) and the M-shape common in architecture.',
      brandValues: ['Modern', 'Masterful', 'Made', 'Materials', 'Memorable'],
      colors: ['#4A4A4A', '#E8D5C4', '#FFFFFF'],
      reasoning: 'M is solid, memorable, and connects to "modern" living. Its shape suggests architectural strength and design excellence.'
    }
  ]

  return (
    <>
      <Head>
        <title>Your Brand Identity - Single Letter Furniture & Interior Design Brand</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          color: #333;
          line-height: 1.6;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }

        .hero {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          margin-bottom: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .hero p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .intro {
          background: white;
          padding: 40px;
          border-radius: 15px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .intro h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .intro p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 15px;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .brand-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
        }

        .brand-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #2c3e50, #3498db);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .brand-card:hover::before {
          transform: scaleX(1);
        }

        .brand-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .brand-card.selected {
          transform: scale(1.02);
          box-shadow: 0 20px 50px rgba(52, 152, 219, 0.4);
          border: 3px solid #3498db;
        }

        .brand-letter {
          font-size: 5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .brand-name {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .brand-tagline {
          font-size: 1.2rem;
          text-align: center;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 2px solid #ecf0f1;
        }

        .brand-values {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .value-tag {
          background: #ecf0f1;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #2c3e50;
        }

        .color-palette {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .color-swatch {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          border: 3px solid white;
        }

        .detail-panel {
          background: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          margin-top: 40px;
          animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .detail-panel h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #2c3e50;
          text-align: center;
        }

        .detail-panel h3 {
          font-size: 1.8rem;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #34495e;
        }

        .detail-panel p {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .concept-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          margin: 30px 0;
          font-size: 1.2rem;
          line-height: 1.8;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .reasoning-box {
          background: #fff3cd;
          border-left: 5px solid #ffc107;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
        }

        .recommendation {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
          padding: 40px;
          border-radius: 15px;
          margin-top: 40px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(17, 153, 142, 0.3);
        }

        .recommendation h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .recommendation p {
          font-size: 1.3rem;
          line-height: 1.8;
        }

        .cta-button {
          background: white;
          color: #11998e;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 25px;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        .mockup-section {
          margin-top: 40px;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .mockup-section h3 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .visual-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .visual-example {
          background: white;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .visual-example .big-letter {
          font-size: 6rem;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .visual-example p {
          font-size: 0.9rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .brands-grid {
            grid-template-columns: 1fr;
          }

          .detail-panel {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero">
          <h1>Your Perfect Brand Identity</h1>
          <p>A single, unforgettable letter that defines luxury furniture, home decor, and interior design excellence</p>
        </div>

        <div className="intro">
          <h2>The Power of a Single Letter Brand</h2>
          <p>
            The most iconic brands in the world use single letters: Chanel's <strong>C</strong>, Louis Vuitton's <strong>LV</strong>,
            Hermès' <strong>H</strong>. A single letter brand is instantly recognizable, timeless, and transcends language barriers.
          </p>
          <p>
            For your furniture, home decor, and interior design business, I've crafted five powerful single-letter brand
            identities. Each letter has been carefully selected based on its meaning, visual appeal, and ability to embed
            itself in people's minds.
          </p>
          <p style={{ fontWeight: 600, color: '#2c3e50', fontSize: '1.2rem', marginTop: '20px' }}>
            Click on each brand to explore its full concept ↓
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div
              key={brand.letter}
              className={`brand-card ${selectedBrand?.letter === brand.letter ? 'selected' : ''}`}
              onClick={() => {
                setSelectedBrand(brand)
                setShowConcept(true)
              }}
            >
              <div className="brand-letter">{brand.letter}</div>
              <div className="brand-name">{brand.name}</div>
              <div className="brand-tagline">{brand.tagline}</div>
              <div className="brand-values">
                {brand.brandValues.map((value) => (
                  <span key={value} className="value-tag">{value}</span>
                ))}
              </div>
              <div className="color-palette">
                {brand.colors.map((color) => (
                  <div
                    key={color}
                    className="color-swatch"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedBrand && showConcept && (
          <div className="detail-panel">
            <h2>{selectedBrand.name} - Complete Brand Concept</h2>

            <div className="concept-box">
              <strong>Core Concept:</strong> {selectedBrand.concept}
            </div>

            <h3>Why {selectedBrand.letter}?</h3>
            <div className="reasoning-box">
              <p><strong>{selectedBrand.reasoning}</strong></p>
            </div>

            <h3>Brand Values & Associations</h3>
            <p>
              The letter <strong>{selectedBrand.letter}</strong> connects to these powerful concepts:
            </p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '30px', marginBottom: '20px' }}>
              {selectedBrand.brandValues.map((value) => (
                <li key={value} style={{ marginBottom: '8px' }}><strong>{value}</strong></li>
              ))}
            </ul>

            <div className="mockup-section">
              <h3>Visual Identity Preview</h3>
              <div className="visual-examples">
                <div className="visual-example">
                  <div className="big-letter" style={{ color: selectedBrand.colors[0] }}>
                    {selectedBrand.letter}
                  </div>
                  <p>Primary Logo</p>
                </div>
                <div className="visual-example">
                  <div className="big-letter" style={{ color: selectedBrand.colors[1] }}>
                    {selectedBrand.letter}.
                  </div>
                  <p>With Period Accent</p>
                </div>
                <div className="visual-example" style={{ background: selectedBrand.colors[0] }}>
                  <div className="big-letter" style={{ color: 'white' }}>
                    {selectedBrand.letter}
                  </div>
                  <p style={{ color: 'white' }}>Dark Background</p>
                </div>
              </div>
            </div>

            <h3>Brand Color Palette</h3>
            <p>These colors create a sophisticated, memorable identity:</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
              {selectedBrand.colors.map((color, idx) => (
                <div key={color} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      background: color,
                      borderRadius: '12px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      marginBottom: '10px'
                    }}
                  />
                  <code style={{ fontSize: '0.9rem', color: '#666' }}>{color}</code>
                </div>
              ))}
            </div>

            <h3>How This Brand Embeds in People's Minds</h3>
            <p>
              <strong>{selectedBrand.name}</strong> works because:
            </p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '30px', lineHeight: '2' }}>
              <li><strong>Simple & Memorable:</strong> One letter is impossible to forget</li>
              <li><strong>Visual Impact:</strong> The letter {selectedBrand.letter} has strong visual presence</li>
              <li><strong>Word Association:</strong> Connects directly to {selectedBrand.brandValues[0].toLowerCase()}</li>
              <li><strong>Luxury Positioning:</strong> Single letters signal high-end, exclusive brands</li>
              <li><strong>Timeless:</strong> Won't feel dated in 5, 10, or 20 years</li>
              <li><strong>Versatile:</strong> Works on furniture tags, storefronts, websites, and social media</li>
            </ul>
          </div>
        )}

        <div className="recommendation">
          <h2>🏆 Top Recommendation: H.</h2>
          <p>
            <strong>H.</strong> (Home. Habitat. Haven.) is the strongest choice because it literally stands for HOME -
            the foundation of your entire business. When customers see <strong>H.</strong> on furniture or in an interior
            space, they instantly associate it with home, creating powerful brand recall.
          </p>
          <p style={{ marginTop: '20px' }}>
            The letter H's architectural shape (like a doorway or window frame) makes it perfect for interiors,
            and its simplicity allows it to work across all styles - from modern minimalism to classic elegance.
          </p>
          <button
            className="cta-button"
            onClick={() => {
              setSelectedBrand(brands[0])
              setShowConcept(true)
              window.scrollTo({ top: 600, behavior: 'smooth' })
            }}
          >
            Explore H. Brand Identity
          </button>
        </div>

        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: 'white',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Ready to Build Your Brand?</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
            Each of these single-letter brands has been designed to be memorable, meaningful, and perfectly suited
            for luxury furniture and interior design. Choose the one that resonates with your vision, and you'll
            have a brand identity that customers will never forget.
          </p>
        </div>
      </div>
    </>
  )
}
