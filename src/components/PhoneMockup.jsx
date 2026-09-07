import React, { useState, useEffect } from 'react';

const screenshots = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    title: 'Portrait in warm sunlight',
    user: 'sarah_adventures',
    likes: '1,420 likes'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    title: 'Tropical paradise vibes 🌊',
    user: 'wanderlust_world',
    likes: '3,892 likes'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
    title: 'City lights & coffee ☕',
    user: 'urban_alex',
    likes: '856 likes'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80',
    title: 'Golden hour mountains ⛰️',
    user: 'peak_trails',
    likes: '5,103 likes'
  }
];

export const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative hidden lg:block w-[380px] h-[580px] mr-8 select-none">
      {/* Outer Phone Frame */}
      <div className="relative w-full h-full bg-[#1c1e21] rounded-[48px] p-3 shadow-2xl border-4 border-[#2b2d30] flex flex-col justify-between overflow-hidden">
        {/* Notch / Speaker bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a2e] border border-[#2e2e48]" />
        </div>

        {/* Screen Bezel */}
        <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden flex flex-col">
          {/* Mock Instagram Header */}
          <div className="pt-6 pb-2 px-3 border-b border-gray-100 flex items-center justify-between bg-white z-20">
            <span className="font-semibold text-xs tracking-tight">Instagram</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500/80" />
            </div>
          </div>

          {/* Stories Bar */}
          <div className="flex gap-2 px-2 py-2 overflow-hidden border-b border-gray-100 bg-gray-50/50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] to-[#962fbf]">
                  <div className="w-full h-full rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1530000000000 + i * 20000}?w=100&auto=format&fit=crop&q=60`}
                      alt="Story"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Screen Feed */}
          <div className="relative flex-1 bg-black overflow-hidden">
            {screenshots.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Feed Post Overlay Details */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-xs">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-xs">@{item.user}</span>
                  </div>
                  <p className="text-[11px] text-gray-200 line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-gray-400 font-semibold mt-1">{item.likes}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav Bar Mock */}
          <div className="h-10 border-t border-gray-200 bg-white flex items-center justify-around px-4 z-20">
            <div className="w-4 h-4 border-2 border-black rounded-sm" />
            <div className="w-4 h-4 rounded-full border-2 border-black" />
            <div className="w-4 h-4 border-2 border-black rounded-full" />
            <div className="w-4 h-4 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
};
