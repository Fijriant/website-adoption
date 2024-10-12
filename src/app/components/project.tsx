"use client"; // Menandai komponen ini sebagai Client Component

import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';
import Link from 'next/link';

const Project: React.FC = () => {
  useEffect(() => {
    // Inisialisasi controller ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Membuat scene baru untuk animasi
    const scene = new ScrollMagic.Scene({
      triggerElement: '.project-container', // Elemen pemicu animasi
      triggerHook: 0.8, // Ketika elemen berada di 80% dari viewport
      duration: 500, // Durasi animasi
      reverse: true, // Mengizinkan animasi berjalan berulang kali
    })
      .on('enter', () => {
        gsap.to('.animate', { y: '0', opacity: 1, duration: 1 });
      })
      .on('leave', () => {
        gsap.to('.animate', { y: '50px', opacity: 0, duration: 1 }); // Kembalikan posisi ketika meninggalkan elemen
      })
      .addTo(controller);

    // Cleanup controller saat komponen di-unmount
    return () => {
      scene.destroy(true);
      controller.destroy(true);
    };
  }, []);

  return (
    <div className="project-container p-10 py-4 p bg-kuning bg-cover">
      <h1 className="text-4xl font-bold mb-4">Proyek Kami</h1>
      <p
        className="text-lg mb-4 text-2xl italic text-black animate"
        style={{ opacity: 0, transform: 'translateY(50px)' }} // Untuk animasi masuk
      >
        Sangat berbeda dalam hal prioritas, skala, dan kompleksitas implementasi.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center">
        <Link href="/emergency">
          <button className="relative inline-block px-6 py-3 text-white bg-blue-600 border-2 border-blue-600 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 w-full h-full border-2 border-light transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <h1 className="relative z-10 text-2xl italic">Emergency Aid. WAR 2022</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
