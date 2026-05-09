import React from 'react';

export const HoneybeeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body */}
    <path d="M12 22C14.7614 22 17 19.7614 17 17V11C17 8.23858 14.7614 6 12 6C9.23858 6 7 8.23858 7 11V17C7 19.7614 9.23858 22 12 22Z" fill="currentColor"/>
    {/* Stripes */}
    <path d="M7 12.5H17" stroke="var(--color-cream)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 16.5H17" stroke="var(--color-cream)" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Antennae */}
    <path d="M10.5 6L9 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13.5 6L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Left Wing */}
    <path d="M7 11C3.5 11 1.5 8.5 1.5 5.5C1.5 2.5 4.5 1 7 1C9.5 1 10.5 4.5 11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.2"/>
    {/* Right Wing */}
    <path d="M17 11C20.5 11 22.5 8.5 22.5 5.5C22.5 2.5 19.5 1 17 1C14.5 1 13.5 4.5 13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

export const LeafDecoration = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 3C21 3 20 13 12 13C4 13 3 21 3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M21 3C21 3 15 2 12 6C9 10 12 13 12 13C12 13 17 11 21 3Z" fill="currentColor"/>
  </svg>
);
