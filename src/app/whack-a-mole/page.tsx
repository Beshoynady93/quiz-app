import React from 'react';
import WackaMoleGame from './WackaMoleGame';

const page = () => {
  return (
    <main className="flex items-center justify-start gap-4 overflow-hidden py-2 flex-col flex-1">
      <WackaMoleGame />
    </main>
  );
};

export default page;
