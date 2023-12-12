'use client';
import React, { useEffect, useRef, useState } from 'react';
import WackaMoleHummer from './WackaMoleHummer';
import WakeaMoleHole from './WakeaMoleHole';

const WackaMoleGame = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);
  const [holes, setHoles] = useState<number[]>(Array(8).fill(0));
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);
  const [userClicked, setUserClicked] = useState(false);

  const handleUserClick = (e: React.MouseEvent) => {
    if (e.type === 'mousedown') {
      setUserClicked(true);
    } else if (e.type === 'mouseup') {
      setUserClicked(false);
    }
  };

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
    if (!startGame) return;
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
  }, [holes, startGame]);

  return (
    <>
      <div className="flex items-center justify-between w-11/12 self-stretch mx-auto">
        <h1>Score: {score}</h1>
        <button
          className="bg-white px-4 py-2 text-black rounded font-bold"
          onClick={() => {
            setStartGame(false);
            setScore(0);
          }}
        >
          Reset Game
        </button>
      </div>
      <div
        ref={gameContainerRef}
        className={`w-11/12 flex-1 relative border bg-wack-a-mole-bg bg-no-repeat bg-cover ${
          startGame ? 'cursor-none' : ''
        } px-[5%]`}
        onMouseDown={handleUserClick}
        onMouseUp={handleUserClick}
      >
        {!startGame && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
            <button
              className="bg-white px-6 py-4 text-black rounded font-bold"
              onClick={() => setStartGame(true)}
            >
              Start Game
            </button>
          </div>
        )}
        <div className="grid grid-cols-4 mt-[7%] mx-auto justify-items-center">
          {holes.map((hole, idx) => (
            <WakeaMoleHole
              key={idx}
              hole={hole}
              index={idx}
              wackMole={wackMole}
            />
          ))}
        </div>
        {startGame && (
          <WackaMoleHummer
            gameContainerRef={gameContainerRef}
            userClicked={userClicked}
          />
        )}
      </div>
    </>
  );
};

export default WackaMoleGame;
