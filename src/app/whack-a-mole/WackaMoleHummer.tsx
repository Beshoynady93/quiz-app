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
      calcHammerPosition({
        xPosition: e.clientX,
        yPosition: e.clientY,
        containerRef: gameContainerRef,
        hammerRef: hammerRef,
        setX: setPosX,
        setY: setPosY,
      });
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
        className="absolute border border-red-500 active:-rotate-90"
        ref={hammerRef}
        src="/wack-a-mole-hammer2.png"
        alt="wack a mole hummer"
        width={200}
        height={400}
      />
    </>
  );
};

export default WackaMoleHummer;
