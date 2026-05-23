import { useState } from 'react'

export default function AdminDashboard() {

  const [menu, setMenu] = useState('dashboard')

  return (

    <div className="min-h-screen flex bg-slate-100">

      {/* SIDEBAR */}

      <div className="w-72 bg-slate-900 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          Admin SPMB
        </h1>

        <div className="space-y-4">

          <button
            onClick={() => setMenu('dashboard')}
            className={`w-full text-left p-4 rounded-2xl transition ${
              menu === 'dashboard'
                ? 'bg-blue-600'
                : 'bg-slate-800 hover:bg-blue-600'
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => setMenu('jadwal')}
            className={`w-full text-left p-4 rounded-2xl transition ${
              menu === 'jadwal'
                ? 'bg-blue-600'
                : 'bg-slate-800 hover:bg-blue-600'
            }`}
          >
            📅 Jadwal SPMB
          </button>

          <button
            onClick={() => setMenu('prestasi')}
            className={`w-full text-left p-4 rounded-2xl transition ${
              menu === 'prestasi'
                ? 'bg-blue-600'
                : 'bg-slate-800 hover:bg-blue-600'
            }`}
          >
            🏆 Prestasi
          </button>

          <button
            onClick={() => setMenu('galeri')}
            className={`w-full text-left p-4 rounded-2xl transition ${
              menu === 'galeri'
                ? 'bg-blue-600'
                : 'bg-slate-800 hover:bg-blue-600'
            }`}
          >
            🖼️ Galeri
          </button>

          <button
            onClick={() => setMenu('pengumuman')}
            className={`w-full text-left p-4 rounded-2xl transition ${
              menu === 'pengumuman'
                ? 'bg-blue-600'
                : 'bg-slate-800 hover:bg-blue-600'
            }`}
          >
            📢 Pengumuman
          </button>

        </div>

      </div>

      {/* CONTENT */}

      <div className="flex-1 p-10">

        {/* TOPBAR */}

        <div className="bg-white rounded-3xl shadow-xl p-6 flex justify-between items-center mb-10">

          <div>

            <h1 className="text-3xl font-bold">
              Dashboard Admin
            </h1>

            <p className="text-slate-500">
              SMP Negeri 1 Kangkung
            </p>

          </div>

          <img
            src="/images/logo.png"
            className="w-16 h-16"
          />

        </div>

        {/* DASHBOARD */}

        {menu === 'dashboard' && (

          <div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">

              <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">

                <h2 className="text-4xl font-bold">
                  850
                </h2>

                <p>Total Siswa</p>

              </div>

              <div className="bg-green-600 text-white p-8 rounded-3xl shadow-xl">

                <h2 className="text-4xl font-bold">
                  120
                </h2>

                <p>Pendaftar</p>

              </div>

              <div className="bg-yellow-500 text-white p-8 rounded-3xl shadow-xl">

                <h2 className="text-4xl font-bold">
                  25
                </h2>

                <p>Prestasi</p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-2xl font-bold mb-4">
                Selamat Datang Admin
              </h2>

              <p className="text-slate-600 leading-8">
                Dashboard ini digunakan untuk mengelola website
                SPMB SMP Negeri 1 Kangkung.
              </p>

            </div>

          </div>

        )}

        {/* JADWAL */}

        {menu === 'jadwal' && (

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Kelola Jadwal SPMB
            </h2>

            <textarea
              className="w-full border rounded-2xl p-4 h-40"
              placeholder="Masukkan jadwal..."
            />

            <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-2xl">

              Simpan

            </button>

          </div>

        )}

        {/* PRESTASI */}

        {menu === 'prestasi' && (

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Kelola Prestasi
            </h2>

            <textarea
              className="w-full border rounded-2xl p-4 h-40"
              placeholder="Masukkan prestasi..."
            />

            <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-2xl">

              Simpan

            </button>

          </div>

        )}

        {/* GALERI */}

        {/* GALERI */}

{menu === 'galeri' && (

  <div className="bg-white rounded-3xl shadow-xl p-8">

    <h2 className="text-2xl font-bold mb-6">
      Upload Galeri
    </h2>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => {

        const file = e.target.files[0]

        const reader = new FileReader()

        reader.onloadend = () => {

          const oldGallery =
            JSON.parse(
              localStorage.getItem('galeriSekolah')
            ) || []

          const newGallery = [
            ...oldGallery,
            reader.result
          ]

          localStorage.setItem(
            'galeriSekolah',
            JSON.stringify(newGallery)
          )

          alert('Foto berhasil diupload')

        }

        if (file) {
          reader.readAsDataURL(file)
        }

      }}
    />

  </div>

)}

        {/* PENGUMUMAN */}

{menu === 'pengumuman' && (

  <div className="bg-white rounded-3xl shadow-xl p-8">

    <h2 className="text-2xl font-bold mb-6">
      Kelola Pengumuman
    </h2>

    <textarea
      id="pengumumanText"
      className="w-full border rounded-2xl p-4 h-40"
      placeholder="Masukkan pengumuman..."
    />

    <button
      onClick={() => {

        const text =
          document.getElementById('pengumumanText').value

        localStorage.setItem(
          'pengumumanSekolah',
          text
        )

        alert('Pengumuman berhasil disimpan')

      }}
      className="mt-6 bg-yellow-500 text-white px-8 py-3 rounded-2xl"
    >

      Simpan

    </button>

  </div>

)}

      </div>

    </div>

  )
}