import React from 'react';
import { InstagramGradientIcon } from './components/Icons';
import { StoryCardStack } from './components/StoryCardStack';
import { LoginForm } from './components/LoginForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-[#ffffff] text-[#000000] flex flex-col justify-between selection:bg-[#1877f2] selection:text-white">
      
      {/* 📱 MOBILE VIEW (Exact Match to Light Mobile Screenshot) */}
      <div className="w-full min-h-screen flex flex-col justify-between items-center md:hidden px-4 py-3 bg-[#ffffff]">
        {/* Top Language Bar */}
        <header className="w-full py-2 flex justify-center items-center">
          <span className="text-[12px] text-[#737373] cursor-pointer hover:text-[#000000] font-normal">
            English (UK)
          </span>
        </header>

        {/* Mobile Main Content */}
        <main className="w-full flex-1 flex flex-col justify-between items-center max-w-[360px]">
          <LoginForm isMobile={true} />
        </main>
      </div>

      {/* 💻 DESKTOP 50/50 SPLIT SCREEN (Exact Match to Light Desktop View) */}
      <div className="w-full flex-1 hidden md:flex flex-col justify-between bg-[#ffffff]">
        <div className="w-full flex-1 flex items-stretch">
          
          {/* Left Hero Pane (50% Width with Light Vertical Divider) */}
          <div className="w-1/2 border-r border-[#dbdbdb] flex flex-col items-center justify-center py-10 px-8">
            <div className="w-full max-w-[460px] flex flex-col items-start text-left">
              {/* Instagram Logo */}
              <div className="mb-6 flex items-center">
                <InstagramGradientIcon className="w-14 h-14" />
              </div>

              {/* Headline with Black Text & Gradient Close Friends */}
              <h2 className="text-[28px] lg:text-[32px] font-bold text-[#000000] leading-[1.25] tracking-tight mb-8">
                See everyday moments from your<br />
                <span className="text-gradient-close-friends font-extrabold">
                  close friends
                </span>
                <span className="text-[#000000]">.</span>
              </h2>

              {/* 3D Story Cards Stack Container */}
              <div className="w-full flex justify-center">
                <StoryCardStack />
              </div>
            </div>
          </div>

          {/* Right Login Pane (50% Width) */}
          <div className="w-1/2 flex items-center justify-center py-10 px-8">
            <LoginForm isMobile={false} />
          </div>

        </div>

        {/* Desktop Full-Width Footer with Light Border Divider */}
        <div className="w-full border-t border-[#dbdbdb]">
          <Footer isMobile={false} />
        </div>
      </div>

    </div>
  );
}

export default App;
