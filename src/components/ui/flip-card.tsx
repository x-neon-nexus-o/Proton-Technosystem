"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
}

export function FlipCard({ children, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group h-96 w-full [perspective:1000px]", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          {children[0]}
        </div>
        <div className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {children[1]}
        </div>
      </div>
    </div>
  );
}
