import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import ikon yang diperlukan

const Partner: React.FC = () => {
  return (
    <div className="container">
      <div className="about-container p-8">
        <h1 className="text-4xl font-bold mb-4">Our Partner</h1>
        <p className="text-lg mb-4 text-2xl italic">
          They take care of our fund and help us with many questions
        </p>

        {/* Kontainer untuk ikon perusahaan */}
        <div className="flex justify-center space-x-8 mt-8"> {/* Jarak antar ikon lebih lebar */}
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition duration-300">
            <FaFacebook className="text-5xl" /> {/* Mengubah ukuran ikon menjadi lebih besar */}
          </a>
          <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-600 transition duration-300">
            <FaTwitter className="text-5xl" /> {/* Mengubah ukuran ikon menjadi lebih besar */}
          </a>
          <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900 transition duration-300">
            <FaLinkedin className="text-5xl" /> {/* Mengubah ukuran ikon menjadi lebih besar */}
          </a>
          <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800 transition duration-300">
            <FaInstagram className="text-5xl" /> {/* Mengubah ukuran ikon menjadi lebih besar */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
