import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css';

const Certificate = ({ name }) => {
  const certificateRef = useRef();

  const generateCertificate = () => {
    html2canvas(certificateRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div>
      <div ref={certificateRef} className="certificate-container">
        <div className="certificate-border"></div>
        <h1 className="certificate-title">Certificate of Appreciation</h1>
        <p className="certificate-subtitle">This Certificate is proudly presented to</p>
        <h2 className="certificate-name">{name}</h2>
        <p className="certificate-subtitle">For outstanding performance and dedication.</p>
        <div className="certificate-footer">
          <div className="footer-content">
            <div className="footer-text-left">
              <p>Date</p>
              <p>_______________</p>
            </div>
            <div className="footer-text-right">
              <p>Signature</p>
              <p>_______________</p>
            </div>
          </div>
        </div>
        <div className="certificate-logo">
          <div className="logo-text">Logo</div>
        </div>
      </div>
      <button onClick={generateCertificate} className="generate-button">Download Certificate</button>
    </div>
  );
};

export default Certificate;
