'use client';
import React, { useRef, useState } from 'react';
import WackaMoleHummer from './WackaMoleHummer';
import { log } from 'console';
import Image from 'next/image';
import WakeaMoleHole from './WakeaMoleHole';

const WackaMoleGame = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const Holes = Array(8).fill(0);
  console.log(Holes);

  return (
    <div
      ref={gameContainerRef}
      className="w-11/12 flex-1 relative border bg-wack-a-mole-bg bg-no-repeat bg-cover"
    >
      <div className="grid grid-cols-4 mt-[10%]">
        {Holes.map((hole, idx) => (
          <WakeaMoleHole key={idx} />
        ))}
      </div>
      <WackaMoleHummer gameContainerRef={gameContainerRef} />
    </div>
  );
};

export default WackaMoleGame;
