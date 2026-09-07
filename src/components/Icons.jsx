import React from 'react';

// Official Instagram Logo Glyph matching the screenshot exactly
export const InstagramGradientIcon = ({ className = "w-14 h-14" }) => (
  <img
    src="/instagram-logo.svg"
    alt="Instagram"
    className={`select-none object-contain ${className}`}
    style={{ minWidth: '40px', minHeight: '40px' }}
  />
);

// Meta Infinity Wordmark Logo with Blue Infinity Sign
export const MetaLogo = ({ className = "h-4 w-auto text-[#737373]" }) => (
  <div className={`flex items-center justify-center gap-1.5 ${className}`}>
    <svg className="w-5 h-4 text-[#0064e0] fill-current" viewBox="0 0 24 16">
      <path d="M17.47 0C15.02 0 13.1 1.25 12 2.68 10.9 1.25 8.98 0 6.53 0 2.92 0 0 2.96 0 7.85c0 4.89 2.92 8.15 6.53 8.15 2.5 0 4.45-1.32 5.47-2.8 1.02 1.48 2.97 2.8 5.47 2.8 3.61 0 6.53-3.26 6.53-8.15C24 2.96 21.08 0 17.47 0zm0 13.8c-2.3 0-4.14-2.15-4.83-4.78l-.06-.27c.56-2.58 2.37-4.94 4.89-4.94 2.14 0 3.79 1.83 3.79 4.99 0 3.16-1.65 5-3.79 5zm-10.94 0c-2.14 0-3.79-1.84-3.79-5 0-3.16 1.65-4.99 3.79-4.99 2.52 0 4.33 2.36 4.89 4.94l-.06.27c-.69 2.63-2.53 4.78-4.83 4.78z" />
    </svg>
    <span className="font-semibold text-xs text-[#000000] tracking-tight">Meta</span>
  </div>
);

// Blue Facebook Round Icon
export const FacebookIcon = ({ className = "w-5 h-5 text-[#1877f2]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Green Close Friends Star Badge
export const CloseFriendsBadge = ({ className = "w-6 h-6" }) => (
  <div className={`rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-md ${className}`}>
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  </div>
);

// Gradient Heart Sticker
export const GradientHeartSticker = ({ className = "w-10 h-10" }) => (
  <div className={`rounded-full p-[2px] bg-gradient-to-tr from-[#ff1361] via-[#fff800] to-[#ff0077] flex items-center justify-center shadow-lg ${className}`}>
    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff007f] to-[#ff5e00] flex items-center justify-center">
      <svg className="w-5 h-5 text-white fill-current drop-shadow-sm" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  </div>
);

// Story Heart Icon Outline
export const StoryHeartIcon = ({ className = "w-4 h-4 text-white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Loading Spinner
export const LoadingSpinner = ({ className = "w-5 h-5 text-white" }) => (
  <svg className={`animate-spin-fast ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);
