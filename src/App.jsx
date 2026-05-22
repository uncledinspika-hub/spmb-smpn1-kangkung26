import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
export default function SPMBSchoolWebsite() {
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

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <section className="relative h-screen overflow-hidden">

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

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

    <img
      src="/images/logo.png"
      alt="Logo Sekolah"
      className="w-32 h-32 object-contain mb-6"
    />

    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      SPMB SMP Negeri 1 Kangkung
    </h1>

    <p className="text-xl md:text-2xl opacity-90">
      Sistem Informasi Penerimaan Murid Baru
    </p>

  </div>

</section>
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

</div>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {menu.map((item, index) => (
            <details
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

  <div className="grid grid-cols-2 gap-4 mb-4">
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
    className="w-full rounded-2xl"
  >
    <source
      src="/videos/profil.mp4"
      type="video/mp4"
    />
  </video>
</div>
</details>
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
    </div>
  );
}
