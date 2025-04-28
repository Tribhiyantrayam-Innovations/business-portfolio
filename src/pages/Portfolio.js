import React from 'react';
import '../style/portfolio_style.css'
function Portfolio() {
  return (
    <section>
    <h1>Our Works</h1>
    <div className="portfolio-section">
     <div className="card card-1">
      <div className="card-header">
        <h2>📄 PNG to Word Conversion</h2>
      </div>
      <div className="card-body">
      <div className="portfolio-section-title">🔍 Project Description</div>
      <p>We are converting 200 image content into MS Word file. </p>
        <div className='first'>
          <div className="section">
            <strong>Focused</strong>
            <ul>
              <li>✔ Layout & alignment</li>
              <li>✔ Fonts & typography</li>
              <li>✔ Tables & data</li>
            </ul>
          </div>
          <div className="section">
            <div className="portfolio-section-title">🛠️ Tools Used</div>
            <ul>
              <li>Microsoft Word</li>
              <li>OCR Software</li>
              <li>Manual Proofreading</li>
            </ul>
          </div>
        </div>
          <div className="highlight">
            <div className="portfolio-section-title">✅ Client Benefit</div>
            <ul>
              <li>Saved hours of manual typing</li>
              <li>Ready for official use</li>
            </ul>
          </div>
          <div className="section">
            <div className="portfolio-section-title">📦 Delivery</div>
            <ul>
              <li><span className="tag">Fast</span> Within 24 hours</li>
              <li>DOCX + PDF backup</li>
              <li><span className="badge">💬 100% satisfied</span></li>
            </ul>
          </div>
      </div>
    </div>

    <div className="card card-2">
      <div className="card-header">
        <h2>📊 PDF to Excel Conversion</h2>
      </div>
      <div className="card-body">
      <div className="portfolio-section-title">🔍 Project Description</div>
      <p>Extracted financial data from PDF reports to organized Excel:</p>
      <div className='first'>
          <div className="section">
            <strong>Focused</strong>
            <ul>
              <li>✔ Tables with formulas</li>
              <li>✔ Data validation</li>
              <li>✔ Pivot-ready formatting</li>
            </ul>
          </div>
          <div className="section">
            <div className="portfolio-section-title">🛠️ Tools Used</div>
            <ul>
              <li>Adobe Acrobat</li>
              <li>Excel Power Query</li>
              <li>Tabula (for complex PDFs)</li>
            </ul>
          </div>
        </div>
        <div className="highlight">
          <div className="portfolio-section-title">✅ Client Benefit</div>
          <ul>
            <li>Enabled data analysis</li>
            <li>Reduced manual entry errors</li>
          </ul>
        </div>
        <div className="section">
          <div className="portfolio-section-title">📦 Delivery</div>
          <ul>
            <li><span className="tag">Audit-ready</span> XLSX files</li>
            <li>Data dictionary included</li>
            <li><span className="badge">⭐ 5/5 rating</span></li>
          </ul>
        </div>
      </div>
    </div>
</div>
</section>
  );
}

export default Portfolio;