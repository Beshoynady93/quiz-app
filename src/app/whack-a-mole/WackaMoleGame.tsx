'use client';
import React, { useEffect, useRef, useState } from 'react';
import WackaMoleHummer from './WackaMoleHummer';
import WakeaMoleHole from './WakeaMoleHole';

const WackaMoleGame = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const [holes, setHoles] = useState<number[]>(Array(8).fill(0));
  const [score, setScore] = useState(0);

  const popMole = (index: number) => {
    setHoles((prevHoles) => {
      const newHoles = [...prevHoles];
      newHoles[index] = 0;
      return newHoles;
    });
  };

  const wackMole = (index: number) => {
    popMole(index);
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * holes.length);
      setHoles((curmoles) => {
        const newHoles = [...curmoles];
        newHoles[randomIndex] = 1;
        return newHoles;
      });

      setTimeout(() => {
        popMole(randomIndex);
      }, 1500);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [holes]);

  return (
    <>
      <h1>Score: {score}</h1>
      <div
        ref={gameContainerRef}
        className="w-11/12 flex-1 relative border bg-wack-a-mole-bg bg-no-repeat bg-cover"
      >
        <div className="grid grid-cols-4 mt-[10%]">
          {holes.map((hole, idx) => (
            <WakeaMoleHole
              key={idx}
              hole={hole}
              index={idx}
              wackMole={wackMole}
            />
          ))}
        </div>
        <WackaMoleHummer gameContainerRef={gameContainerRef} />
      </div>
    </>
  );
};

export default WackaMoleGame;
