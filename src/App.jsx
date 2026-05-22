export default function SPMBSchoolWebsite() {
  const jadwal = [
    { kegiatan: 'Pendaftaran Online', tanggal: 'Bisa diedit' },
    { kegiatan: 'Verifikasi Berkas', tanggal: 'Bisa diedit' },
    { kegiatan: 'Pengumuman Hasil', tanggal: 'Bisa diedit' },
    { kegiatan: 'Daftar Ulang', tanggal: 'Bisa diedit' },
  ];

  const prestasi = [
    'Prestasi sekolah bisa diedit',
    'Juara Akademik bisa ditambahkan',
    'Prestasi Non Akademik bisa ditambahkan',
  ];

  const kegiatan = [
    'Kegiatan Pramuka',
    'Kegiatan OSIS',
    'Kegiatan Adiwiyata',
    'Kegiatan Ekstrakurikuler',
  ];

  const jalur = [
    'Zonasi',
    'Prestasi',
    'Affirmasi',
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Sistem Informasi SPMB
            </h1>
            <div className="flex items-center gap-4 mb-4">
  <img
    src="/images/logo.png"
    alt="Logo Sekolah"
    className="w-20 h-20 object-contain"
  />

  <h2 className="text-3xl font-semibold">
    SMP Negeri 1 Kangkung
  </h2>
</div>
            <p className="text-lg opacity-90 mb-6">
              Website resmi informasi Sistem Penerimaan Murid Baru (SPMB)
              SMP Negeri 1 Kangkung.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#jadwal"
                className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Lihat Jadwal
              </a>

              <a
                href="https://wa.me/6281225339424"
                target="_blank"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Hubungi Sekolah
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold">3</h3>
                <p>Jalur SPMB</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold">100%</h3>
                <p>Ramah Lingkungan</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold">Aktif</h3>
                <p>Kegiatan Siswa</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold">Modern</h3>
                <p>Informasi Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Profil Sekolah
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-semibold">Nama Sekolah:</span>{' '}
                SMP Negeri 1 Kangkung
              </p>

              <p>
                <span className="font-semibold">Alamat:</span>{' '}
                Jl. Raden Patah Tanjungmojo Kangkung Kendal
              </p>

              <p>
                <span className="font-semibold">No WA:</span>{' '}
                081225339424
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Visi & Misi
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visi</h3>
              <p className="text-lg">
                Berkarakter, Berprestasi, Peduli Lingkungan
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Misi</h3>
              <p className="text-lg">Spika Berlian</p>
            </div>
          </div>
        </div>
      </section>

      {/* JALUR */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Jalur SPMB
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {jalur.map((item, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-3">{item}</h3>
                <p>
                  Informasi jalur {item} dapat disesuaikan dan diedit sesuai
                  kebutuhan sekolah.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JADWAL */}
      <section id="jadwal" className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Jadwal SPMB
        </h2>

        <div className="grid gap-6">
          {jadwal.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{item.kegiatan}</h3>
              </div>

              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
                {item.tanggal}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEGIATAN */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Kegiatan Sekolah
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {kegiatan.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center"
              >
                <div className="text-5xl mb-4">🏫</div>
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTASI */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-600 mb-12">
          Prestasi Sekolah
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {prestasi.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-yellow-500"
            >
              <div className="text-5xl mb-4">🏆</div>
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              SMP Negeri 1 Kangkung
            </h2>

            <p className="opacity-80 mb-2">
              Sistem Informasi SPMB SMP Negeri 1 Kangkung.
            </p>

            <p className="opacity-80">
              Jl. Raden Patah Tanjungmojo Kangkung Kendal
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Kontak</h2>

            <p className="opacity-80 mb-2">WhatsApp: 081225339424</p>

            <a
              href="https://wa.me/6281225339424"
              target="_blank"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold transition"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center mt-10 opacity-60 text-sm">
          © 2026 SMP Negeri 1 Kangkung - Sistem Informasi SPMB
        </div>
      </footer>
    </div>
  );
}
