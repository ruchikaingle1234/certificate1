

import "./App.css";
import Card from "./Component/Card";
import React, { useState } from 'react';
import Certificate from "./Component/Certificate";
import Chatbot from "./Component/Chatbot";



function App() {
  const [name, setName] = useState('Your Name Here');
  const [showCertificate, setShowCertificate] = useState(false);
  const handleToggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };
  return (
    <div className="App">
      {/* <div>
        <button onClick={handleClick}>step1</button>
        </div>
      <div className="image-container">
        <div id="a1"  className="image-row left">
          <img src="Image/Instructor.png" alt="Smiling man" className="image" />
        </div>
        <svg height="200" width="400" className="curve">
          <path className="path" d="M 10 20 C 50 200, 300 0, 500 250" stroke="black" strokeWidth="2" stroke-dasharray="5,5" fill="none"  />
        </svg>
        <div className="image-row right">
          <img src="Image/Instructor.png" alt="Smiling man" className="image" />
        </div>
        <svg height="200" width="400" className="curve">
          <path className="path" d="M 10 200 C 200 100, 400 200, 370 10" stroke="black" strokeWidth="2" fill="transparent" strokeDasharray="5,5" />
        </svg>
       

        <div ref={cardRef} className="image-row left">
          <img src="Image/Instructor.png" alt="Smiling man" className="image" />
       
        </div>
        
      </div> */}

      {/* <div className="c1">
        <div className="btncontainer">
          <button>step1</button>
          <button>step2</button>
          <button>step3</button>
        </div>
        <div className="img1">
          <img
            src="Image/Instructor.png"
            alt="Smiling man"
            width="300px"
            height="300px"
            className="i1"
          />
          <div className="l1">
            <svg className="line1" width="400" height="300">
              <path
                d="M 10 20 C 50 200, 200 0, 500 300"
                stroke="black"
                stroke-dasharray="10,5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="img2">
        <img
            src="Image/Instructor.png"
            alt="Smiling man"
            width="300px"
            height="300px"
            className="i2"
          />
        </div> */}
        <Card/>
        <header className="App-header">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
        /><br/>
        <button onClick={handleToggleCertificate} style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#1e3a8a', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {showCertificate ? 'Close Certificate' : 'Generate Certificate'}
        </button>
        {showCertificate && <Certificate name={name} />}
      </header>
      <div>
      
      
      </div>
    </div>
  );
}

export default App;

// "Image/Instructor.png"
 {/* <svg width="400" height="200">
  <path d="M 10 10 C 50 20, 100 30, 150 40" stroke="black" stroke-dasharray="5,5" fill="none" />
 </svg> */}
