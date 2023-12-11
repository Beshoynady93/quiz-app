import React from 'react';
import WackaMoleGame from './WackaMoleGame';

const page = () => {
  return (
    <main className="flex items-center justify-start overflow-hidden py-2 flex-col flex-1">
      <h1>Wack a Mole</h1>
      <WackaMoleGame />
    </main>
  );
};

export default page;
