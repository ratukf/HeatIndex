// Data indeks nilai beban kerja
var dataBebanKerja = {
  jenisPekerjaan: [
    {
      nama: "1",
      kategoriPekerjaan: [
        {
          nama: "I",
          contoh: "menulis dan merajut",
          posisiKerja: {
            duduk: 0.60,
            berdiri: 0.90,
            berjalan: 3.30,
            berjalanmendaki: 4.10,
          },
        },
        {
          nama: "II",
          contoh: "menyetrika",
          posisiKerja: {
            duduk: 1.20,
            berdiri: 1.50,
            berjalan: 3.90,
            berjalanmendaki: 4.50,
          },
        },
        {
          nama: "III",
          contoh: "mengetik",
          posisiKerja: {
            duduk: 1.40,
            berdiri: 1.50,
            berjalan: 3.90,
            berjalanmendaki: 4.90,
          },
        },
      ],
    },
    {
      nama: "2",
      kategoriPekerjaan: [
        {
          nama: "I",
          contoh: "menyapu lantai",
          posisiKerja: {
            duduk: 1.20,
            berdiri: 1.50,
            berjalan: 3.90,
            berjalanmendaki: 4.70,
          },
        },
        {
          nama: "II",
          contoh: "menggergaji",
          posisiKerja: {
            duduk: 1.90,
            berdiri: 2.20,
            berjalan: 4.60,
            berjalanmendaki: 5.40,
          },
        },
        {
          nama: "III",
          contoh: "memukul paku",
          posisiKerja: {
            duduk: 2.60,
            berdiri: 2.90,
            berjalan: 5.30,
            berjalanmendaki: 6.10,
          },
        },
      ],
    },
    {
      nama: "3",
      kategoriPekerjaan: [
        {
          nama: "I",
          contoh: "menambal logam dan mengemas barang dalam dus",
          posisiKerja: {
            duduk: 1.55,
            berdiri: 1.85,
            berjalan: 4.25,
            berjalanmendaki: 5.05,
          },
        },
        {
          nama: "II",
          contoh: "memompa dan menempa besi",
          posisiKerja: {
            duduk: 2.55,
            berdiri: 2.85,
            berjalan: 5.25,
            berjalanmendaki: 6.05,
          },
        },
        {
          nama: "III",
          contoh: "mendorong kereta bermuatan",
          posisiKerja: {
            duduk: 3.55,
            berdiri: 3.85,
            berjalan: 6.25,
            berjalanmendaki: 7.05,
          },
        },
      ],
    },
    {
      nama: "4",
      kategoriPekerjaan: [
        {
          nama: "I",
          contoh: "pekerjaan administrasi",
          posisiKerja: {
            duduk: 4.05,
            berdiri: 4.35,
            berjalan: 6.75,
            berjalanmendaki: 7.55,
          },
        },
        {
          nama: "II",
          contoh: "membersihkan karpet dan mengepel",
          posisiKerja: {
            duduk: 9.05,
            berdiri: 9.35,
            berjalan: 11.75,
            berjalanmendaki: 12.55,
          },
        },
        {
          nama: "III",
          contoh: "menggali lobang dan menebang pohon",
          posisiKerja: {
            duduk: 14.05,
            berdiri: 14.35,
            berjalan: 16.75,
            berjalanmendaki: 17.55,
          },
        },
      ],
    },
  ],
};

// Fungsi untuk memisahkan kata 'mendaki' dengan spasi dan mengkapitalkan huruf awal
function hurufKapital(string) {
  // Pisahkan kata "mendaki" dengan spasi jika ditemukan
  string = string.replace(/mendaki/g, ' mendaki');

  // Kapitalisasi hanya huruf awal dari string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fungsi untuk validasi apakah form beban kerja sudah terisi
function identifikasiNilaiBebanKerja() {
  var jenisPekerjaan = document.getElementById("jenisPekerjaan").value;
  var kategoriPekerjaan = document.getElementById("kategoriPekerjaan").value;
  var posisiKerja = document.getElementById("posisiKerja").value;
  if (!jenisPekerjaan || !kategoriPekerjaan || !posisiKerja) {
    alert("Mohon isi form jenis pekerjaan, kategori pekerjaan, dan posisi kerja.");
  } else {
    cariBebanKerja();
  }
}

// Fungsi untuk mengidentifikasi nilai indeks beban kerja
function cariBebanKerja() {
  var jenisPekerjaan = document.getElementById("jenisPekerjaan").value;
  var kategoriPekerjaan = document.getElementById("kategoriPekerjaan").value;
  var posisiKerja = document.getElementById("posisiKerja").value;
  var nilaiBebanKerja = 0;
  dataBebanKerja.jenisPekerjaan.forEach(function (jenis) {
    if (jenis.nama === jenisPekerjaan) {
      jenis.kategoriPekerjaan.forEach(function (kategori) {
        if (kategori.nama === kategoriPekerjaan) {
          nilaiBebanKerja = kategori.posisiKerja[posisiKerja];
        }
      });
    }
  });

  // Mengidentifikasi jenis pekerjaan berdasarkan input
  var jenisPekerjaanText = "";
  switch (jenisPekerjaan) {
    case "1":
      jenisPekerjaanText = "Pekerjaan dengan tangan";
      break;
    case "2":
      jenisPekerjaanText = "Pekerjaan dengan satu tangan";
      break;
    case "3":
      jenisPekerjaanText = "Pekerjaan dengan dua lengan";
      break;
    case "4":
      jenisPekerjaanText = "Pekerjaan menggunakan gerakan tangan";
      break;
    default:
      jenisPekerjaanText = "Tidak teridentifikasi";
  }
  
  var kategoriPekerjaanText = dataBebanKerja.jenisPekerjaan.find(jenis => jenis.nama === jenisPekerjaan)
  .kategoriPekerjaan.find(kategori => kategori.nama === kategoriPekerjaan).contoh;

  document.getElementById("jenisPekerjaanText").textContent = 
    jenisPekerjaanText;
  document.getElementById("kategoriPekerjaanText").textContent = 
    kategoriPekerjaan;
  document.getElementById("posisiKerjaText").textContent = 
    hurufKapital(posisiKerja);
  document.getElementById("contohPekerjaanText").textContent = 
    hurufKapital(kategoriPekerjaanText);
  document.getElementById("indeksBebanKerjaText").textContent =
    nilaiBebanKerja || "Nilai tidak ditemukan";



  var hasilIdentifikasi = document.getElementById('hasilIdentifikasiNilaiBebanKerja');
  if (nilaiBebanKerja) {
    hasilIdentifikasi.style.display = 'block'; // Menampilkan div jika ada nilai beban kerja
  } else {
    hasilIdentifikasi.style.display = 'none'; // Menyembunyikan div jika tidak ada nilai beban kerja
  }
}

// Fungsi untuk validasi apakah form profil pekerja
function hitungMetabolismeBasal() {
  var jenisKelamin = document.getElementById("jenisKelamin").value;
  var beratBadan = document.getElementById("beratBadan").value;
  if (!jenisKelamin || !beratBadan) {
    alert("Mohon isi form jenis kelamin dan berat badan")
  } else {
    cariMetabolismeBasal();
  }
}

// Fungsi untuk menghitung nilai metabolisme basal pekerja
function cariMetabolismeBasal() {
  var jenisKelamin = document.getElementById("jenisKelamin").value;
  var beratBadan = document.getElementById("beratBadan").value;
  var lakiLaki = 1; // Indeks kalori laki-laki
  var perempuan = 0.9; // Indeks kalori perempuan
  var nilaiMetabolismeBasal = 0;

  if (jenisKelamin == "lakiLaki") {
    nilaiMetabolismeBasal = beratBadan * lakiLaki * 1;
  } else {
    nilaiMetabolismeBasal = beratBadan * perempuan * 0.9;
  }

  document.getElementById("nilaiMetabolismeBasal").textContent =
    nilaiMetabolismeBasal || "Input salah";

  var hasilIdentifikasi = document.getElementById("hasilPerhitunganMetabolismeBasal");
  if (hasilIdentifikasi) {
    hasilIdentifikasi.style.display = 'block';
  } else {
    hasilIdentifikasi.style.display = 'none';
  }
}