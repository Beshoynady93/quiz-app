'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { SignOutButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const UserProfile = () => {
  const [isUserSettingsShown, setIsUserSettingsShown] = useState(false);
  const userSettingsRef = useRef<HTMLDivElement | null>(null);
  const { user } = useUser();

  const displayUserSettingsHandler = () => {
    setIsUserSettingsShown((prev) => !prev);
  };

  const closeUserSettings = (e: MouseEvent) => {
    if (e.target !== userSettingsRef.current) {
      setIsUserSettingsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeUserSettings);
    return () => document.removeEventListener('click', closeUserSettings);
  }, [isUserSettingsShown]);

  return (
    <>
      <button onClick={displayUserSettingsHandler}>
        <Image
          className="rounded-full"
          src={user?.imageUrl ?? '/profile-picture-placeholder.jpg'}
          alt="user profile image"
          width={40}
          height={40}
        />
      </button>
      {isUserSettingsShown && (
        <div
          ref={userSettingsRef}
          className="absolute top-full right-0 bg-white w-32 text-black font-semibold mt-2 rounded-md py-2 flex flex-col gap-2 z-10"
        >
          <Link
            href="/settings"
            className="hover:bg-slate-400 transition-colors duration-200 border-b-2 py-2 text-center"
          >
            Settings
          </Link>
          <SignOutButton>
            <button className="hover:bg-slate-400 transition-colors duration-200 border-b-2 py-2">
              Sign out
            </button>
          </SignOutButton>
        </div>
      )}
    </>
  );
};

export default UserProfile;
