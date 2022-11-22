import React from 'react';

export const Loader = React.memo(() => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-20 h-20 rounded-full border-4 border-main-grey border-l-transparent animate-spin-slow duration-500" />
  </div>
))