import React, { useState } from 'react';

const footerLinks = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Locations',
  'Popular',
  'Instagram Lite',
  'Meta AI',
  'Threads',
  'Contact Uploading & Non-Users',
  'Meta Verified',
];

const languages = [
  'English (UK)',
  'English',
  'Español',
  'Français (France)',
  'Deutsch',
  'Italiano',
  'Português (Brasil)',
  '日本語',
  '한국어',
  'हिन्दी',
];

export const Footer = ({ isMobile = false }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');

  return (
    <footer className="w-full flex flex-col items-center text-[12px] text-[#737373] select-none py-6 px-4 bg-[#ffffff]">
      {/* Ecosystem Navigation Links */}
      <div className={`flex flex-wrap justify-center gap-x-4 gap-y-2 text-center ${isMobile ? 'max-w-xs' : 'max-w-4xl'} mb-4`}>
        {footerLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            onClick={(e) => e.preventDefault()}
            className="text-[#737373] hover:underline transition-colors leading-relaxed"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Language Selector Dropdown & Copyright Notice */}
      <div className="flex items-center justify-center gap-4 text-[#737373] mt-1">
        <div className="relative inline-flex items-center">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            aria-label="Switch Display Language"
            className="appearance-none bg-transparent cursor-pointer pr-4 text-[12px] text-[#737373] hover:text-[#000000] focus:outline-none"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang} className="bg-white text-[#000000]">
                {lang}
              </option>
            ))}
          </select>
          <svg
            className="w-3 h-3 absolute right-0 pointer-events-none text-[#737373]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <span>© 2026 Instagram from Meta</span>
      </div>
    </footer>
  );
};
