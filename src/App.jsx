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
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/logo.png"
            alt="Logo Sekolah"
            className="w-28 h-28 mx-auto mb-6 object-contain"
          />

          <h1 className="text-4xl font-bold mb-4">
            SPMB SMP Negeri 1 Kangkung
          </h1>

          <p className="text-lg opacity-90">
            Sistem Informasi Penerimaan Murid Baru
          </p>
        </div>
      </section>

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
