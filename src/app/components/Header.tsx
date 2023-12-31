import Link from 'next/link';
import React from 'react';

import { auth } from '@clerk/nextjs';
import UserProfile from './UserProfile';

const Header = async () => {
  const { userId } = auth();

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div>
        <h1>
          <Link href="/">Quiz App</Link>
        </h1>
      </div>
      <nav>
        <Link href="/whack-a-mole">
          <span>Wack a mole</span>
        </Link>
      </nav>
      <div className="flex items-center justify-center gap-4 relative">
        {userId ? (
          <UserProfile />
        ) : (
          <Link href="/sign-in">
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
