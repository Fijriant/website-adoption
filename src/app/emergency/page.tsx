"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import g1 from '../../public/g1.jpeg';
import g2 from '../../public/g2.jpeg';
import g3 from '../../public/g3.jpeg';
import Footer from '../components/footer';

const EmergencyPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch((error) => console.error('Failed to load Bootstrap JS:', error));
  }, []);

  return (
    <div className="about-container p-8">
      <h1 className="text-4xl font-bold mb-4">Emergency Aid. WAR 2022</h1>
      <p className="text-2xl italic mb-4">Bantuan Darurat. PERANG 2022.</p>
      <p className="text-2xl italic mb-4">
        24.02.2022 - hari ketika dunia terbagi menjadi Sebelum dan Sesudah.
      </p>
      <p className="text-2xl italic mb-4">
        Life would never be the same. Russia attacked Ukraine. Thousands of
        victims, children, and vast numbers of dead animals or those who have
        lost their homes.
      </p>
      <p className="text-2xl italic mb-4">
        We are incredibly grateful to the People, despite everything, who did
        not leave their little friends behind, but unfortunately, there are
        many examples to the contrary. Sometimes it happened due to owners’
        ignorance or death, and other times because of other terrible
        circumstances that forced animals to become homeless. A humanitarian
        catastrophe has begun. Thousands of lost and wounded animals are
        wandering the deserted cities and villages, searching for some kind of
        salvation.
      </p>
      <p className="text-2xl italic mb-4">
        Even before the war, we kept the records of shelters and guardians in
        Ukraine; therefore, we have much information from urgent needs to food,
        medicine, and other necessary services. Since the beginning of the
        full-scale war, the database was joined by: a massive number of
        homeless animals, relocated animals from hot spots to more peaceful
        regions, and increased needs during an unstable economic situation in
        the country. Shortage of animal feed, medicine, volunteers.
      </p>
      <h1 className="text-4xl font-bold mb-4">Our goal</h1>
      <p className="text-2xl italic mb-4">
        To provide emergency humanitarian aid from abroad; implement logistics
        in Ukraine; assist in coordinating evacuations, transportation, and
        financial aid.
      </p>

      {/* Carousel */}
      {isClient && (
        <div
          id="carouselExampleCaptions"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={g1}
                className="d-block w-100"
                alt="First slide"
                fill
              />
            </div>
            <div className="carousel-item">
              <Image
                src={g2}
                className="d-block w-100"
                alt="Second slide"
                fill
              />
            </div>
            <div className="carousel-item">
              <Image
                src={g3}
                className="d-block w-100"
                alt="Third slide"
                fill
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      {/* Tombol Back to Homepage */}
      <div className="mt-6">
        <Link href="/" passHref>
          <span className="px-4 py-2 text-black bg-white rounded">
            Back to Homepage
          </span>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EmergencyPage;
