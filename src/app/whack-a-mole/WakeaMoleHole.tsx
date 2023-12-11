import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type WakeaMoleProps = {
  hole: number;
};

const WakeaMoleHole = ({ hole }: WakeaMoleProps) => {
  const [moleAppeare, setmoleAppeare] = useState(hole);
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
          className="animate-summon-mole"
          src="/wack-a-mole-mole-crope.png"
          alt="mole"
          width={150}
          height={100}
        />
      )}
    </>
  );
};

export default WakeaMoleHole;
