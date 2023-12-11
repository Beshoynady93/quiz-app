import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Quiz App</h1>
      </div>
      <div>
        <Link href="/whack-a-mole">
          <span>Wack a mole</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
