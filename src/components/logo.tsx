import React from 'react';

export function Logo() {
  return (
    <a href="/" className="group flex-shrink-0">
      <div className="flex flex-col items-start leading-none">
        <h1 className="text-2xl font-black tracking-tighter uppercase">
          <span className="text-primary transition-colors group-hover:text-secondary">Proton</span>
          <span className="text-secondary transition-colors group-hover:text-primary"> Technosystem</span>
        </h1>
        <p className="text-xs font-bold text-muted-foreground ml-px">प्रोटॉन टेक्नोसिस्टम</p>
      </div>
    </a>
  );
}
