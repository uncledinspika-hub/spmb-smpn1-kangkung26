import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
export default function SPMBSchoolWebsite() {
  const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 2500)
}, [])
  const menu = [
  {
    title: '👤 Profil Sekolah',
    image: '/images/profil.png',
    content:
      'SMP Negeri 1 Kangkung beralamat di Jl. Raden Patah Tanjungmojo Kangkung Kendal.',
  },

  {
    title: '📅 Jadwal SPMB',
    image: '/images/jadwal.jpg',
    content:
      'Jadwal SPMB dapat diedit sesuai kebutuhan sekolah.',
  },

  {
    title: '📚 Jalur SPMB',
    image: '/images/jalur.png',
    content:
      'Tersedia jalur Zonasi, Prestasi, dan Affirmasi.',
  },

  {
    title: '🏆 Prestasi Sekolah',
    image: '/images/prestasi.jpg',
    content:
      'Prestasi sekolah dapat ditambahkan dan diedit.',
  },

  {
    title: '🎓 Kegiatan Sekolah',
    image: '/images/kegiatan.png',
    content:
      'Sekolah memiliki berbagai kegiatan siswa.',
  },

  {
    title: '📞 Kontak Sekolah',
    image: '/images/kontak.jpg',
    content:
      'WhatsApp sekolah: 081225339424',
  },
]
if (loading) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-700 text-white">

      <img
        src="/images/logo.png"
        className="w-32 h-32 mb-6 animate-bounce"
      />

      <h1 className="text-3xl font-bold mb-2">
        SMP Negeri 1 Kangkung
      </h1>

      <p className="opacity-80">
        Memuat Website...
      </p>

    </div>
  )
}
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg z-50 border-b border-white/20">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    <div className="flex items-center gap-3">

      <img
        src="/images/logo.png"
        className="w-12 h-12"
      />

      <h1 className="text-white font-bold text-xl">
        SMPN 1 Kangkung
      </h1>

    </div>

    <div className="hidden md:flex gap-8 text-white font-semibold">

      <a href="#profil" className="hover:text-yellow-300 transition">
        Profil
      </a>

      <a href="#jadwal" className="hover:text-yellow-300 transition">
        Jadwal
      </a>

      <a href="#prestasi" className="hover:text-yellow-300 transition">
        Prestasi
      </a>

      <a href="#kontak" className="hover:text-yellow-300 transition">
        Kontak
      </a>

    </div>

  </div>

</nav>
      <section className="relative h-[280px] md:h-[450px] overflow-hidden rounded-b-3xl">

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source
      src="/videos/hero.mp4"
      type="video/mp4"
    />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex items-center justify-center h-full px-6">

    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">

      {/* LOGO */}
      <img
        src="/images/logo.png"
        alt="Logo Sekolah"
        className="w-20 h-20 md:w-40 md:h-40 object-contain"
      />

      {/* TEXT */}
      <div className="text-white text-center md:text-left">

        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          SPMB SMP Negeri 1 Kangkung
        </h1>

        <p className="text-lg md:text-2xl mb-6 opacity-90">
          Sistem Informasi Penerimaan Murid Baru
        </p>

        {/* VISI */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">
            Visi
          </h2>

          <p className="opacity-90">
            Berkarakter, Berprestasi, Peduli Lingkungan
          </p>
        </div>

        {/* MISI */}
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Misi
          </h2>

          <p className="opacity-90">
            Spika Berlian
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
<div className="bg-yellow-400 text-black py-3 overflow-hidden">

  <marquee
    behavior="scroll"
    direction="left"
    className="font-semibold text-lg"
  >
    📢 Selamat Datang di Website SPMB SMP Negeri 1 Kangkung • Pendaftaran Dibuka Mulai 1 Juni 2026 • Jalur Zonasi, Prestasi, dan Affirmasi
  </marquee>

</div>
<div className="py-10 bg-slate-100">

  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3000 }}
    loop={true}
    className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
  >

    <SwiperSlide>
      <img
        src="/images/slide1.jpg"
        alt="Slide 1"
        className="w-full h-[200px] md:h-[320px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="/images/slide2.jpg"
        alt="Slide 2"
        className="w-full h-[200px] md:h-[320px] object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src="/images/slide3.jpg"
        alt="Slide 3"
        className="w-full h-[200px] md:h-[320px] object-cover"
      />
    </SwiperSlide>

  </Swiper>
<section className="py-16 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-blue-600 text-white rounded-3xl p-8 text-center shadow-xl">
      <h2 className="text-4xl font-bold mb-2">
        850+
      </h2>
      <p>Siswa</p>
    </div>

    <div className="bg-green-600 text-white rounded-3xl p-8 text-center shadow-xl">
      <h2 className="text-4xl font-bold mb-2">
        45+
      </h2>
      <p>Guru</p>
    </div>

    <div className="bg-yellow-500 text-white rounded-3xl p-8 text-center shadow-xl">
      <h2 className="text-4xl font-bold mb-2">
        25+
      </h2>
      <p>Prestasi</p>
    </div>

    <div className="bg-red-500 text-white rounded-3xl p-8 text-center shadow-xl">
      <h2 className="text-4xl font-bold mb-2">
        15+
      </h2>
      <p>Ekstrakurikuler</p>
    </div>

  </div>

</section>
</div>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {menu.map((item, index) => (
            <motion.details
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  key={index}
  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-48 object-cover"
  />

  <summary className="text-2xl font-semibold text-blue-700 p-6 cursor-pointer">
    {item.title}
  </summary>

  <div className="px-6 pb-6">
  
  <p className="text-lg text-slate-700 mb-4">
    {item.content}
  </p>
  
      <div className="grid grid-cols-2 gap-4">

  <img
    src="/images/profil1.jpg"
    className="rounded-2xl shadow-lg"
  />

  <img
    src="/images/profil2.jpg"
    className="rounded-2xl shadow-lg"
  />

</div>

  <video
    controls
    className="w-full rounded-2xl mt-4"
  >
    <source
      src="/videos/profil.mp4"
      type="video/mp4"
    />
  </video>

</div>

</motion.details>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281225339424"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Hubungi Sekolah
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p>© 2026 SMP Negeri 1 Kangkung</p>
      </footer>
      <a
  href="https://wa.me/6281225339424"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 text-3xl"
>
  💬
</a>
{/* FOOTER */}

<footer className="bg-slate-900 text-white py-14 px-6 mt-16">

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    {/* SEKOLAH */}
    <div>

      <h2 className="text-2xl font-bold mb-4">
        SMP Negeri 1 Kangkung
      </h2>

      <p className="opacity-80 leading-8">
        Jl. Raden Patah Tanjungmojo Kangkung Kendal
      </p>

      <p className="mt-4 opacity-80">
        📞 081225339424
      </p>

      <p className="opacity-80">
        ✉️ smpn1kangkung@gmail.com
      </p>

    </div>

    {/* MENU */}
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Menu Cepat
      </h2>

      <ul className="space-y-3 opacity-80">

        <li>Profil Sekolah</li>
        <li>Jadwal SPMB</li>
        <li>Prestasi Sekolah</li>
        <li>Kegiatan Sekolah</li>

      </ul>

    </div>

    {/* SOSIAL MEDIA */}
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Sosial Media
      </h2>

      <div className="flex gap-4 text-3xl">
        {/* SOSIAL MEDIA */}
<div>

  <h2 className="text-2xl font-bold mb-4">
    Sosial Media
  </h2>

  <div className="flex gap-4 text-3xl mb-6">

    <a
      href="#"
      className="hover:scale-110 transition"
    >
      📘
    </a>

    <a
      href="#"
      className="hover:scale-110 transition"
    >
      📸
    </a>

    <a
      href="#"
      className="hover:scale-110 transition"
    >
      ▶️
    </a>

  </div>

  {/* GOOGLE MAPS */}

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18..."
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    className="rounded-3xl"
  ></iframe>

</div>

        <a
          href="#"
          className="hover:scale-110 transition"
        >
          📘
        </a>

        <a
          href="#"
          className="hover:scale-110 transition"
        >
          📸
        </a>

        <a
          href="#"
          className="hover:scale-110 transition"
        >
          ▶️
        </a>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}

  <div className="border-t border-white/20 mt-10 pt-6 text-center opacity-70">

    © 2026 SMP Negeri 1 Kangkung — All Rights Reserved

  </div>
<button
  onClick={() => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })}
  className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50"
>
  ↑
</button>

</footer>
    </div>
  );
}
