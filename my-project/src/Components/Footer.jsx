import React from 'react';
import logo from "../assets/react.png"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 left-0 w-full h-10 text-xl">
      <p className="absolute left-4 bottom-2">&copy; Osian Jones ({new Date().getFullYear()})</p>
      <p className="absolute right-4 bottom-2">Made with <a href="https://react.dev"><img src={logo} alt="React Logo" className="h-6 inline"/></a></p>
    </footer>
  );
};


export default Footer;
