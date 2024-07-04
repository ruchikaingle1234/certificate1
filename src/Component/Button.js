// import React from 'react';
// import './Button.css';

// function Button() {
//   const [name, setName] = React.useState('');

//   const handleGenerateCertificate = () => {
//     const certificate = `
//       <div classname="certificate">
//         <h1 class="title">Adobe Stock Certificate Of Appreciation</h1>
//         <p class="presented-to">Presented to</p>
//         <h2 class="name">${name}</h2>
//       </div>
//     `;
//     const certificateElement = document.createElement('div');
//     certificateElement.innerHTML = certificate;
//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(certificateElement.outerHTML);
//     printWindow.print();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <button onClick={handleGenerateCertificate}>Generate Certificate</button>
//     </div>
//   );
// }
// export default Button;