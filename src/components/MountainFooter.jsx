// Create a new component called MountainFooter.jsx
import React from 'react';
import { SuperFooter } from './Footer';

const MountainFooter = ({ className = "" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <svg 
        className="w-full h-auto" 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud layer */}
        <path 
          d="M0,100 C100,120 200,80 300,90 C400,100 500,140 600,130 C700,120 800,60 900,70 C1000,80 1100,120 1200,110 L1200,200 L0,200 Z" 
          fill="#F0F8FF" 
        />
        
        {/* Mountain layer 1 */}
        <path 
          d="M0,140 L200,90 L350,130 L450,80 L580,120 L750,70 L900,120 L1050,80 L1200,110 L1200,200 L0,200 Z" 
          fill="#E6F3FF" 
        />
        
        {/* Mountain layer 2 (closer mountains) */}
        <path 
          d="M0,160 L150,130 L300,150 L450,120 L600,160 L750,130 L900,160 L1050,120 L1200,140 L1200,200 L0,200 Z" 
          fill="#FFFFFF" 
        />
      </svg>
      
      {/* Super Footer Content goes here */}
      <div className="bg-white py-8 px-4">
        {/* Your super footer content */}
        <SuperFooter /> 
      </div>
      
    </div>
  );
};

export default MountainFooter;