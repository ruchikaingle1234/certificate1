import React, { useState } from 'react';
import Certificate from './Certificate';

function Cer() {
  const [name, setName] = useState('Your Name Here');

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
        />
        <Certificate name={name} />
      </header>
    </div>
  );
}

export default Cer;
