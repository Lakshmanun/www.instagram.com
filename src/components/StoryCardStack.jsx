import React from 'react';
import { CloseFriendsBadge, GradientHeartSticker, StoryHeartIcon } from './Icons';

export const StoryCardStack = () => {
  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center select-none">
      {/* 1. Left Background Story Card (Tilted Left) */}
      <div className="absolute left-6 bottom-3 w-[165px] h-[250px] rounded-[24px] overflow-hidden shadow-2xl transform -rotate-12 border border-white/10 z-0 opacity-95">
        <img
          src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=500&auto=format&fit=crop&q=80"
          alt="Artistic neon portrait"
          className="w-full h-full object-cover"
        />
        {/* Story Overlay & Progress */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute top-3 inset-x-3 h-[2px] bg-white/40 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-white rounded-full" />
        </div>
      </div>

      {/* 2. Right Background Story Card (Tilted Right) */}
      <div className="absolute right-6 bottom-4 w-[170px] h-[255px] rounded-[24px] overflow-hidden shadow-2xl transform rotate-12 border border-white/10 z-10">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80"
          alt="Close friend posing"
          className="w-full h-full object-cover"
        />
        {/* Story Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Green Close Friends Star Badge at Top Right */}
        <div className="absolute top-3 right-3 z-20">
          <CloseFriendsBadge className="w-6 h-6 shadow-lg" />
        </div>

        {/* Small Avatar Ring at Bottom Right */}
        <div className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] to-[#962fbf] shadow-md">
          <div className="w-full h-full rounded-full border border-black overflow-hidden bg-gray-700">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
              alt="Story creator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3. Center Main Story Card (Foreground) */}
      <div className="absolute bottom-1 w-[185px] h-[280px] rounded-[26px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-[1.5px] border-white/20 z-20">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80"
          alt="Close friends selfie"
          className="w-full h-full object-cover"
        />
        
        {/* Story Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />

        {/* Story Progress Bar */}
        <div className="absolute top-3.5 inset-x-3.5 flex gap-1 z-30">
          <div className="flex-1 h-[2px] bg-white rounded-full" />
          <div className="flex-1 h-[2px] bg-white/40 rounded-full" />
        </div>

        {/* Floating Emoji Sticker (🔮 👀 🤯) at Top Left */}
        <div className="absolute -top-3 -left-3 z-30 bg-[#16181d]/95 backdrop-blur-md px-2 py-1 rounded-full border border-white/20 shadow-xl flex items-center gap-1">
          <span className="text-xs">🔮</span>
          <span className="text-xs">👀</span>
          <span className="text-xs">🤯</span>
        </div>

        {/* Bottom Story Interaction Bar */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-30">
          <div className="h-6 flex-1 bg-white/20 backdrop-blur-md rounded-full mr-2 border border-white/20 flex items-center px-2.5">
            <span className="text-[10px] text-white/80">Send message</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
            <StoryHeartIcon className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      {/* 4. Glowing Gradient Heart Sticker on Bottom Left */}
      <div className="absolute -left-3 bottom-16 z-30 cursor-pointer">
        <GradientHeartSticker className="w-11 h-11" />
      </div>
    </div>
  );
};
