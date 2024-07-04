// // src/Card.js
// import React, { useState, useEffect } from 'react';
// import './Card.css';





// const Card = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: Math.random() * window.innerWidth * 0.8 });

  

//   useEffect(() => {
//     const initialMoveTimeout = setTimeout(() => {
//       setPosition({
//         top: Math.random() * window.innerHeight * 0.8,
//         left: Math.random() * window.innerWidth * 0.8,
//       });
//     }, 200); 

//     const flipInterval = setInterval(() => {
//       setIsFlipped(prev => !prev);
//     }, 2000);

//     const moveInterval = setInterval(() => {
//       setPosition({
//         top: Math.random() * window.innerHeight * 0.8,
//         left: Math.random() * window.innerWidth * 0.8,
//       });
//     }, 2000);

//     return () => {
//       clearTimeout(initialMoveTimeout);
//       clearInterval(flipInterval);
//       clearInterval(moveInterval);
//     };
//   }, []);

//   return (
//     <div>

//   <div className='bt1'>


//   </div>
  
  
//     <div
//       className={`card ${isFlipped ? 'flipped' : ''}`}
//       style={{ top: position.top, left: position.left }}
//     >
       
//       <div className="ribbon">New</div>
//       <div className="card-inner">
//         <div className="card-front">
//           <h1>Harry Potter</h1>
//           <p>Virtual Attendee</p>
//         </div>
//         <div className="card-back">
//           <h1>Back Side</h1>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Card;
import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [position, setPosition] = useState({ top: -500, left: Math.random() * window.innerWidth * 0.8 });
  const [isDroppedOut, setIsDroppedOut] = useState(false);

  useEffect(() => {
    const dropInTimeout = setTimeout(() => {
      const topPos = Math.random() * window.innerHeight * 0.8;
      setPosition({
        top: topPos,
        left: Math.random() * window.innerWidth * 0.8,
      });
    }, 500); // Sudden drop-in over 0.5 seconds

    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, Math.random() * 3000 + 1000); // Flip randomly between 1s to 4s

    const moveInterval = setInterval(() => {
      const topPos = Math.random() * window.innerHeight * 0.8;
      const leftPos = Math.random() * window.innerWidth * 0.8;

      if (topPos > window.innerHeight * 0.7) {
        setIsDroppedOut(true);
        setTimeout(() => {
          setPosition({ top: -500, left: Math.random() * window.innerWidth * 0.8 });
          setIsDroppedOut(false);
        }, 1000); // Duration of the drop-out animation
      } else {
        setIsDroppedOut(false);
      }

      setPosition({
        top: topPos,
        left: leftPos,
      });
    }, Math.random() * 3000 + 1000); // Move randomly between 1s to 4s

    return () => {
      clearTimeout(dropInTimeout);
      clearInterval(flipInterval);
      clearInterval(moveInterval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--card-top', `${position.top}px`);
  }, [position.top]);

  return (
    <div className='container'>
      <div className='bt1'></div>
      <div
        className={`card ${isFlipped ? 'flipped' : ''} ${isDroppedOut ? 'drop-out' : 'drop-in'}`}
        style={{ top: position.top, left: position.left }}
      >
        <div className="ribbon"></div>
        <div className="card-inner">
          <div className="card-front">
            <h1>Harry Potter</h1>
            <p>Virtual Attendee</p>
          </div>
          <div className="card-back">
            <h1>Back Side</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
