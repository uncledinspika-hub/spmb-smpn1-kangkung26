export default function SPMBSchoolWebsite() {
  const menu = [
    {
      title: 'Profil Sekolah',
      content:
        'SMP Negeri 1 Kangkung beralamat di Jl. Raden Patah Tanjungmojo Kangkung Kendal dengan visi Berkarakter, Berprestasi, Peduli Lingkungan.',
    },
    {
      title: 'Jadwal SPMB',
      content:
        'Jadwal SPMB dapat diedit sesuai kebutuhan sekolah.',
    },
    {
      title: 'Jalur SPMB',
      content:
        'Tersedia jalur Zonasi, Prestasi, dan Affirmasi.',
    },
    {
      title: 'Prestasi Sekolah',
      content:
        'Prestasi sekolah dapat ditambahkan dan diedit kapan saja.',
    },
    {
      title: 'Kegiatan Sekolah',
      content:
        'Sekolah memiliki berbagai kegiatan seperti Pramuka, OSIS, dan ekstrakurikuler lainnya.',
    },
    {
      title: 'Kontak Sekolah',
      content:
        'WhatsApp sekolah: 081225339424',
    },
  ];

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
        <div className="space-y-6">
          {menu.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
            >
              <summary className="text-2xl font-semibold text-blue-700">
                {item.title}
              </summary>

              <p className="mt-4 text-lg text-slate-700">
                {item.content}
              </p>
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
