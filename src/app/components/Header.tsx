import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link href="/">Quiz App</Link>
        </h1>
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
