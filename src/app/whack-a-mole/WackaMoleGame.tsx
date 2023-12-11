'use client';
import React, { useRef } from 'react';
import WackaMoleHummer from './WackaMoleHummer';

const WackaMoleGame = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={gameContainerRef} className="w-4/5 h-96 relative border">
      <WackaMoleHummer gameContainerRef={gameContainerRef} />
    </div>
  );
};

export default WackaMoleGame;
