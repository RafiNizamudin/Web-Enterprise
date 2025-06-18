import React, { useState, useEffect } from 'react';
import './App.css';

// ==============================
// Header Component
// ==============================
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth > 640) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo">RSU Delima</a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="mobile-toggle"
          type="button"
        >
          &#9776;
        </button>

        <div className={`nav-links${isMobile && menuOpen ? ' show' : ''}`} role="menubar">
          <a href="#about" role="menuitem" tabIndex={0}>Tentang Kami</a>
          <a href="#services" role="menuitem" tabIndex={0}>Layanan</a>
          <a href="#doctors" role="menuitem" tabIndex={0}>Dokter</a>
          <a href="#contact" role="menuitem" tabIndex={0}>Kontak</a>
        </div>
      </nav>
    </header>
  );
};

// ==============================
// Hero Section
// ==============================
const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-label="Hero section with clinic introduction" className="hero">
      <h1 className="hero-title">
        Selamat datang di RSU Delima, perawatan kesehatan terpercaya Anda
      </h1>
      <p className="hero-subtitle">
        Kami menyediakan layanan medis berkualitas dengan dokter profesional dan fasilitas modern.
      </p>
      <button onClick={scrollToContact} className="btn-primary" type="button">
        Hubungi Kami
      </button>
    </section>
  );
};

// ==============================
// About Section
// ==============================
const About: React.FC = () => (
  <section id="about" tabIndex={0} className="about">
    <h2 className="section-title">Tentang RSU Delima</h2>
    <p className="section-text">
      RSU Delima berdedikasi memberikan pelayanan kesehatan terbaik dengan fokus pada kenyamanan
      dan kebutuhan pasien. Dengan fasilitas lengkap dan tenaga medis berpengalaman, kami siap membantu
      menjaga kesehatan Anda dan keluarga.
    </p>
  </section>
);

// ==============================
// Services Section
// ==============================
const services = [
  {
    icon: '🩺',
    title: 'Konsultasi Medis',
    desc: 'Konsultasi dengan dokter ahli dari berbagai spesialisasi sesuai kebutuhan Anda.',
  },
  {
    icon: '💉',
    title: 'Vaksinasi',
    desc: 'Program vaksinasi lengkap untuk melindungi Anda dari berbagai penyakit.',
  },
  {
    icon: '🩹',
    title: 'Penanganan Darurat',
    desc: 'Layanan cepat dan tepat untuk kondisi darurat medis 24 jam.',
  },
  {
    icon: '🩻',
    title: 'Radiologi & Laboratorium',
    desc: 'Fasilitas lengkap untuk pemeriksaan radiologi dan laboratorium dengan hasil akurat.',
  },
];

const Services: React.FC = () => (
  <section id="services" tabIndex={0} aria-label="Layanan RSU Delima" className="services">
    <h2 className="section-title">Layanan Kami</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <article
          key={index}
          tabIndex={0}
          role="region"
          aria-labelledby={`service-${index + 1}-title`}
          className="service-card"
        >
          <div aria-hidden="true" className="service-icon">{service.icon}</div>
          <h3 id={`service-${index + 1}-title`} className="service-title">{service.title}</h3>
          <p className="service-desc">{service.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

// ==============================
// Doctors Section
// ==============================
type Doctor = {
  img: string;
  name: string;
  specialty: string;
  alt: string;
};

const doctors: Doctor[] = [
  {
    img: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00076571-c982-4e4e-ab99-e1a39dbb0ff7.png',
    name: 'dr. Sari Andriani, Sp.A',
    specialty: 'Spesialis Anak',
    alt: 'Foto dr. Sari Andriani, Spesialis Anak',
  },
  {
    img: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00284e41-926d-4079-b61f-44102be01ce1.png',
    name: 'dr. Maya Lestari, Sp.KK',
    specialty: 'Spesialis Kulit dan Kelamin',
    alt: 'Foto dr. Maya Lestari, Spesialis Kulit dan Kelamin',
  },
];

const Doctors: React.FC = () => (
  <section id="doctors" tabIndex={0} aria-label="Daftar dokter RSU Delima" className="doctors">
    <h2 className="section-title">Tim Dokter Profesional</h2>
    <div className="doctor-grid">
      {doctors.map((doctor, index) => (
        <article
          key={index}
          tabIndex={0}
          role="region"
          aria-labelledby={`doctor-${index + 1}-name`}
          className="doctor-card"
        >
          <img src={doctor.img} alt={doctor.alt} className="doctor-img" />
          <h3 id={`doctor-${index + 1}-name`} className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialty">{doctor.specialty}</p>
        </article>
      ))}
    </div>
  </section>
);

// ==============================
// Contact Section
// ==============================
const Contact: React.FC = () => (
  <section id="contact" tabIndex={0} aria-label="Informasi kontak RSU Delima" className="contact">
    <h2 className="section-title">Kontak Kami</h2>
    <div className="contact-info">
      <div>
        <span aria-hidden="true" className="contact-icon">📞</span>
        <a href="tel:+62213456789" aria-label="Nomor telepon RSU Delima">
          +62 21 3456789
        </a>
      </div>
      <div>
        <span aria-hidden="true" className="contact-icon">📧</span>
        <a href="mailto:info@rsudelima.com" aria-label="Alamat email RSU Delima">
          info@rsudelima.com
        </a>
      </div>
      <div>
        <span aria-hidden="true" className="contact-icon">📍</span>
        <address>Jl. Merdeka No.45, Jakarta Pusat, Indonesia</address>
      </div>
    </div>
  </section>
);

// ==============================
// Footer Component
// ==============================
const Footer: React.FC = () => (
  <footer className="footer">
    &copy; 2025 RSU Delima. Semua hak cipta dilindungi.
  </footer>
);

// ==============================
// App Component
// ==============================
const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
