export default function HomePage() {

  const pengumuman =
    localStorage.getItem('pengumumanSekolah')

    const galeri =
  JSON.parse(
    localStorage.getItem('galeriSekolah')
  ) || []

  return (

    <div className="min-h-screen bg-slate-100 p-10">

      {/* JUDUL WEBSITE */}

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold">
          WEBSITE BARU TEST VERCEL
        </h1>

      </div>

      {/* PENGUMUMAN */}

      {/* GALERI */}

<div className="bg-white p-6 rounded-3xl shadow-xl">

  <h2 className="text-3xl font-bold mb-6">
    🖼️ Galeri Sekolah
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {galeri.map((item, index) => (

      <img
        key={index}
        src={item}
        className="
          w-full
          h-48
          object-cover
          rounded-2xl
          shadow-lg
          hover:scale-105
          transition
          duration-300
        "
      />

    ))}

  </div>

</div>

      <div className="max-w-5xl mx-auto">

        <div className="bg-yellow-100 border border-yellow-300 rounded-3xl p-8 shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            📢 Pengumuman Sekolah
          </h2>

          <p className="text-lg text-slate-700 leading-8">

            {pengumuman || 'Belum ada pengumuman'}

          </p>

        </div>

      </div>

    </div>

  )
}