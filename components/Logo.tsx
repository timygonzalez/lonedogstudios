import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", light = false }) => {
  // Update fill logic: if light=false (default), use brand blue. If light=true (dark backgrounds), use white.
  // BUT: In the light theme footer, we might pass light=false but want colored text. 
  // The 'light' prop originally meant "is on dark background".
  const fill = light ? "#FFFFFF" : "#0078D4"; 
  const eyeColor = light ? "#0F172A" : "#FFFFFF"; // Dark eye on light dog, White eye on dark dog

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square"
      >
        {/* Body */}
        <path 
          d="M30 55C30 46.7157 36.7157 40 45 40H60C68.2843 40 75 46.7157 75 55V78C75 80.7614 72.7614 83 70 83C67.2386 83 65 80.7614 65 78V68H45V78C45 80.7614 42.7614 83 40 83C37.2386 83 35 80.7614 35 78V55Z" 
          fill={fill} 
        />
        {/* Head */}
        <path 
          d="M60 40C60 28.9543 68.9543 20 80 20C88.2843 20 95 26.7157 95 35C95 43.2843 88.2843 50 80 50H60V40Z" 
          fill={fill} 
        />
        {/* Ear */}
        <path 
          d="M68 25L62 10L80 22" 
          fill={fill} 
          stroke={fill}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Tail */}
        <path 
          d="M30 55L15 45" 
          stroke={fill} 
          strokeWidth="7" 
          strokeLinecap="round" 
        />
        {/* Eye */}
        <circle cx="82" cy="32" r="3" fill={eyeColor} />
      </svg>
      <span className={`font-bold text-lg md:text-xl tracking-tight uppercase whitespace-nowrap ${light ? 'text-white' : 'text-slate-900'}`}>
        Lone Dog Studios
      </span>
    </div>
  );
};

export default Logo;