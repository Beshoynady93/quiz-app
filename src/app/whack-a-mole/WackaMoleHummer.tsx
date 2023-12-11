'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { calcHammerPosition } from './calcHammerPosition';

type WackaMoleProps = {
  gameContainerRef: React.RefObject<HTMLDivElement>;
};

const WackaMoleHummer = ({ gameContainerRef }: WackaMoleProps) => {
  const hammerRef = useRef<HTMLImageElement | null>(null);
  const [posX, setPosX] = useState<number>();
  const [posY, setPosY] = useState<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const calcHammerYPosition = () => {
        if (!gameContainerRef.current) return;
        if (!hammerRef.current) return;
        const hammerYPosition = e.clientY - gameContainerRef.current.offsetLeft;
        if (hammerYPosition < 0) {
          return;
        } else if (
          hammerYPosition >
          gameContainerRef.current.clientHeight - hammerRef.current.height
        ) {
          return;
        } else {
          setPosY(hammerYPosition);
        }
      };
      const calcHammerXPosition = () => {
        if (!gameContainerRef.current) return;
        if (!hammerRef.current) return;
        const hammerXPosition =
          e.clientX -
          gameContainerRef.current.offsetLeft -
          hammerRef.current.width / 2;
        if (
          hammerXPosition >
          gameContainerRef.current.clientWidth - hammerRef.current.width
        ) {
          return;
        } else if (hammerXPosition < 0) {
          return;
        } else {
          setPosX(hammerXPosition);
        }
      };

      calcHammerPosition({
        xPosition: e.clientX,
        yPosition: e.clientY,
        containerRef: gameContainerRef,
        hammerRef: hammerRef,
        setX: setPosX,
        setY: setPosY,
      });

      // calcHammerXPosition();
      // calcHammerYPosition();
    };
    if (!gameContainerRef.current) return;
    gameContainerRef.current.onmousemove = handleMouseMove;
  }, [gameContainerRef]);
  return (
    <>
      <Image
        style={{
          left: posX,
          top: posY,
        }}
        className="absolute border border-red-500"
        ref={hammerRef}
        src="/wack-a-mole-hammer.png"
        alt="wack a mole hummer"
        width={200}
        height={400}
      />
    </>
  );
};

export default WackaMoleHummer;
