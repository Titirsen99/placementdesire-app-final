"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = ({ isAdmin, isLoggedIn }) => {
  const pathName = usePathname();

  const isActive = (href) => {
    return pathName === href
      ? { ...linkStyle, backgroundColor: '#ffcccc', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: 'black' }
      : linkStyle;
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Image
          src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_640.png"
          alt="Logo"
          width={50}
          height={50}
          style={logoStyle}
        />
        <span style={logoTextStyle}>Placement Cracker</span>
      </div>
      <nav style={navStyle}>
        <Link href="/">
          <span style={isActive('/')}>Home</span>
        </Link>
        <Link href="/about">
          <span style={isActive('/about')}>About</span>
        </Link>
        <Link href="/job">
          <span style={isActive('/job')}>Jobs Notifications</span>
        </Link>
        {isAdmin && (
          <Link href="/admin">
            <span style={isActive('/admin')}>Admin</span>
          </Link>
        )}
        {isLoggedIn ? (
          <Link href="/logout">
            <span style={isActive('/logout')}>Logout</span>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <span style={isActive('/login')}>Sign In</span>
            </Link>
            <Link href="/register">
              <span style={isActive('/register')}>Sign Up</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  marginRight: '0.5rem', // Adjust as needed for spacing
};

const logoTextStyle = {
  fontSize: '1.5rem', // Adjust as needed
};

const navStyle = {
  display: 'flex',
  gap: '1rem', // Adjust as needed for spacing between links
};

const linkStyle = {
  color: '#fff',
  cursor: 'pointer',
};

export default Header;
