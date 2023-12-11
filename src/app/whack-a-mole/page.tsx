import React from 'react';
import WackaMoleGame from './WackaMoleGame';

const page = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <h1>Wack a Mole</h1>
      <WackaMoleGame />
    </main>
  );
};

export default page;
