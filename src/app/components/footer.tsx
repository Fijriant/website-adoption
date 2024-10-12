import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-3">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
        <p className="mb-4">Follow me on social media for the latest updates!</p>
        
        {/* Ikon Media Sosial */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition duration-300">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-600 transition duration-300">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900 transition duration-300">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800 transition duration-300">
            <FaInstagram className="text-3xl" />
          </a>
        </div>

        {/* Informasi Kontak */}
        <div className="mb-4">
          <p>Contact me: fikrivijriant@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fijriant tech. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
