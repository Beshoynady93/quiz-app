import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type WakeaMoleProps = {
  hole: number;
  index: number;
  wackMole: (index: number) => void;
};

const WakeaMoleHole = ({ hole, index, wackMole }: WakeaMoleProps) => {
  const [moleAppeare, setmoleAppeare] = useState(hole);

  const handleWackMole = () => {
    wackMole(index);
  };

  useEffect(() => {
    setmoleAppeare(hole);
  }, [hole]);

  return (
    <>
      {moleAppeare === 0 ? (
        <Image
          src="/wack-a-mole-hole.png"
          alt="Wack a mole hole"
          width={150}
          height={100}
        />
      ) : (
        <Image
          src="/wack-a-mole-mole-crope.png"
          alt="mole"
          width={150}
          height={100}
          onClick={handleWackMole}
        />
      )}
    </>
  );
};

export default WakeaMoleHole;
