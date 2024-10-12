import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="about-container p-8">
        <h1 className="text-4xl font-bold mb-4">We are</h1>
        <p className="text-lg mb-4 text-2xl italic">
          Tim yang terdiri dari orang-orang yang berpikiran sama, perusahaan yang aktif secara sosial, tokoh media, 
          sukarelawan yang membantu tempat penampungan berpenghasilan rendah dan pengasuh untuk mendukung hewan tunawisma.
        </p>
        <h1 className="text-4xl font-bold mb-4">Our primary goal</h1>
        <p className="text-lg mb-4 text-2xl italic">
          Adalah menyediakan kebutuhan yang paling penting bagi hewan - makanan, obat-obatan, dan kebutuhan mendesak 
          untuk penghidupan di tempat penampungan. Kami percaya pada kekuatan kami dan kekuatan warga negara yang sadar, 
          peduli terhadap lingkungan dan kesehatan mereka, yang memahami pentingnya membantu satu sama lain, terutama 
          teman-teman kecil kami. Pertumbuhan dimulai dengan kepedulian Anda terhadap orang yang Anda cintai. Hewan 
          merupakan salah satu makhluk yang paling dekat dengan manusia dan tetap bersama kita sepanjang hidup. Kita 
          semua tahu kekuatan penyembuhan dari kehangatan, keanggunan, dan mata besar yang penuh kasih.
        </p>

        <div className="mt-8">
          <iframe 
            width="1300" 
            height="500" 
            src="https://www.youtube.com/embed/aAjvinMOfXE?si=tnCv6_Olsio7itMT" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
