import React, { useState } from 'react';

export const FloatingInput = ({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  autoComplete,
  isPassword = false,
  showPassword = false,
  onTogglePassword,
  disabled = false,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div
      className={`relative w-full h-[38px] bg-[#fafafa] border rounded-[3px] transition-colors ${
        isFocused ? 'border-[#a8a8a8]' : 'border-ig-border'
      } flex items-center overflow-hidden`}
    >
      <label
        htmlFor={id}
        className={`absolute left-2 select-none pointer-events-none transition-all duration-100 ease-out text-[#737373] ${
          isFloating
            ? 'top-[2px] text-[10px] transform origin-[0_0]'
            : 'top-[9px] text-xs'
        }`}
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        aria-label={label}
        className={`w-full h-full bg-transparent px-2 text-xs text-ig-text-primary focus:outline-none transition-all ${
          isFloating ? 'pt-[14px] pb-[2px]' : 'py-2'
        } ${isPassword && hasValue ? 'pr-14' : ''}`}
      />

      {isPassword && hasValue && (
        <button
          type="button"
          onClick={onTogglePassword}
          tabIndex={-1}
          className="absolute right-2 text-[13px] font-semibold text-ig-text-primary hover:opacity-50 transition-opacity focus:outline-none select-none"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};
