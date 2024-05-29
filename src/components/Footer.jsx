import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftContainerStyle}>
        <Image
          src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_640.png"
          alt="Logo"
          width={50}
          height={50}
          style={logoStyle}
        />
        <span style={copyrightStyle}>&copy; All rights reserved</span>
      </div>
      <div style={rightContainerStyle}>
        <a href="https://www.facebook.com">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width={30}
            height={30}
            style={socialIconStyle}
          />
        </a>
        <a href="https://www.linkedin.com">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
            alt="LinkedIn"
            width={30}
            height={30}
            style={socialIconStyle}
          />
        </a>
        <a href="https://www.instagram.com">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1025px-Instagram_icon.png"
            alt="Instagram"
            width={30}
            height={30}
            style={socialIconStyle}
          />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  marginRight: '10px',
};

const copyrightStyle = {
  fontSize: '0.9rem',
};

const rightContainerStyle = {
  display: 'flex',
};

const socialIconStyle = {
  marginLeft: '10px',
};

export default Footer;
