import React from 'react';

export const NexusIllustration = () => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.8 }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background Circles */}
    <circle cx="250" cy="250" r="200" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
    <circle cx="250" cy="250" r="150" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
    <circle cx="250" cy="250" r="100" stroke="white" strokeOpacity="0.15" strokeWidth="1" />

    {/* Orchestration Lines */}
    <path d="M100 250 Q 250 100 400 250" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
    <path d="M100 250 Q 250 400 400 250" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />

    {/* Dynamic Nodes */}
    <circle cx="100" cy="250" r="8" fill="#10b981" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="400" cy="250" r="8" fill="#10b981" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" begin="1s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="100" r="6" fill="white" opacity="0.5" />
    <circle cx="250" cy="400" r="6" fill="white" opacity="0.5" />

    {/* Central Nexus Core */}
    <rect x="210" y="210" width="80" height="80" rx="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
    <path d="M235 235 L265 265 M265 235 L235 265" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

    {/* Data Streams */}
    <circle r="3" fill="#10b981">
      <animateMotion
        path="M100 250 Q 250 100 400 250"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
    <circle r="3" fill="#10b981">
      <animateMotion
        path="M400 250 Q 250 400 100 250"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const StrategyIllustration = () => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 0.05 }} />
      </linearGradient>
    </defs>

    <rect width="500" height="500" fill="url(#grad2)" rx="40" />

    {/* Grid pattern */}
    <path d="M0 100 H500 M0 200 H500 M0 300 H500 M0 400 H500" stroke="#10b981" strokeOpacity="0.1" />
    <path d="M100 0 V500 M200 0 V500 M300 0 V500 M400 0 V500" stroke="#10b981" strokeOpacity="0.1" />

    {/* Strategy Pillars */}
    <rect x="150" y="300" width="40" height="100" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" opacity="0.8">
        <animate attributeName="height" values="100;120;100" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y" values="300;280;300" dur="4s" repeatCount="indefinite" />
    </rect>
    <rect x="230" y="200" width="40" height="200" rx="4" fill="#10b981" opacity="0.6">
        <animate attributeName="height" values="200;230;200" dur="5s" repeatCount="indefinite" />
        <animate attributeName="y" values="200;170;200" dur="5s" repeatCount="indefinite" />
    </rect>
    <rect x="310" y="250" width="40" height="150" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" opacity="0.8">
        <animate attributeName="height" values="150;180;150" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" values="250;220;250" dur="3s" repeatCount="indefinite" />
    </rect>

    {/* Connecting Trend Line */}
    <path d="M170 300 L250 200 L330 250" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="170" cy="300" r="5" fill="#10b981" />
    <circle cx="250" cy="200" r="5" fill="#10b981" />
    <circle cx="330" cy="250" r="5" fill="#10b981" />
  </svg>
);
