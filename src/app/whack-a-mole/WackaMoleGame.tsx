'use client';
import React, { useEffect, useRef, useState } from 'react';
import WackaMoleHummer from './WackaMoleHummer';
import WakeaMoleHole from './WakeaMoleHole';

const WackaMoleGame = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const [holes, setHoles] = useState(Array(8).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * holes.length);
      setHoles((curmoles) => {
        const newHoles = [...curmoles];
        newHoles[randomIndex] = 1;
        return newHoles;
      });

      setTimeout(() => {
        setHoles((cur) => {
          const newHoles = [...cur];
          newHoles.fill(0);
          return newHoles;
        });
      }, 500);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [holes]);

  return (
    <div
      ref={gameContainerRef}
      className="w-11/12 flex-1 relative border bg-wack-a-mole-bg bg-no-repeat bg-cover"
    >
      <div className="grid grid-cols-4 mt-[10%]">
        {holes.map((hole, idx) => (
          <WakeaMoleHole key={idx} hole={hole} />
        ))}
      </div>
      <WackaMoleHummer gameContainerRef={gameContainerRef} />
    </div>
  );
};

export default WackaMoleGame;
