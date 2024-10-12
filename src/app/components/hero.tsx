import React from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube, FaTelegram } from 'react-icons/fa';


const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-bermuda flex flex-col items-center justify-center">
      <div className="relative z-20 text-center text-black bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Kami Membuka Donasi untuk Hewan-Hewan</h1>
        <p className="text-xl mb-8">Bantu kami melindungi dan merawat hewan-hewan yang membutuhkan.</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
          Donasi Sekarang
        </button>
        <p className="text-xl mt-3">atau kalian bisa menghubungi kami di:</p>
        
        {/* Kontainer sosial media */}
        <div className="social-media-container mt-4">
          <div className="social-icons flex justify-center space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-600 hover:text-blue-800 transition text-3xl" /> 
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp className="text-green-600 hover:text-green-800 transition text-3xl" /> 
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-red-600 hover:text-red-800 transition text-3xl" /> 
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegram className="text-blue-400 hover:text-blue-600 transition text-3xl" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
