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
            duduk: 0.6,
            berdiri: 0.9,
            berjalan: 3.3,
            berjalanmendaki: 4.1,
          },
        },
        {
          nama: "II",
          contoh: "menyetrika",
          posisiKerja: {
            duduk: 1.2,
            berdiri: 1.5,
            berjalan: 3.9,
            berjalanmendaki: 4.5,
          },
        },
        {
          nama: "III",
          contoh: "mengetik",
          posisiKerja: {
            duduk: 1.4,
            berdiri: 1.5,
            berjalan: 3.9,
            berjalanmendaki: 4.9,
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
            duduk: 1.2,
            berdiri: 1.5,
            berjalan: 3.9,
            berjalanmendaki: 4.7,
          },
        },
        {
          nama: "II",
          contoh: "menggergaji",
          posisiKerja: {
            duduk: 1.9,
            berdiri: 2.2,
            berjalan: 4.6,
            berjalanmendaki: 5.4,
          },
        },
        {
          nama: "III",
          contoh: "memukul paku",
          posisiKerja: {
            duduk: 2.6,
            berdiri: 2.9,
            berjalan: 5.3,
            berjalanmendaki: 6.1,
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

// Fungsi untuk menduplikat card
function duplikatCard() {
  var container = document.getElementById("cardBebanKerja");
  var cardAsli = document.querySelector(".card.custom-card.shadow.p-5.mt-4");
  var cardDuplikat = cardAsli.cloneNode(true);

  // Mengatur judul untuk card baru berdasarkan jumlah card yang ada
  var jumlahCard = container.getElementsByClassName("card").length + 1;
  cardDuplikat.querySelector(".cardTitle").innerText =
    "Beban Kerja " + jumlahCard;

  // Menambahkan button hapus pada card baru
  var buttonHapus = document.createElement("button");
  buttonHapus.classList.add("btn", "btn-danger", "btn-sm");
  buttonHapus.innerText = "Hapus";
  buttonHapus.setAttribute("onclick", "hapusCardIni(this)");
  cardDuplikat.appendChild(buttonHapus);

  container.appendChild(cardDuplikat);
}

// Fungsi untuk menghapus card
function hapusCardIni(element) {
  var container = document.getElementById("cardBebanKerja");
  var cardYangAkanDihapus = element.closest(".card.custom-card");
  container.removeChild(cardYangAkanDihapus);
  perbaruiJudulCard();
}

// Fungsi untuk memperbarui judul pada semua card
function perbaruiJudulCard() {
  var semuaCard = document.querySelectorAll(
    "#cardBebanKerja .card.custom-card"
  );
  semuaCard.forEach((card, index) => {
    var judulCard = card.querySelector(".cardTitle");
    judulCard.innerText = "Beban Kerja " + (index + 1);
  });
}

// Fungsi untuk memvalidasi apakah semua form telah terisi
function validasiInput() {
    var inputs = document.querySelectorAll(
      "#cardBebanKerja .custom-card input[required], select[required], #cardProfilPekerja .card input[required], select[required]"
    );
    var total = 0;
    var valid = true;
  
    inputs.forEach(function (input) {
      if (!input.value) {
        valid = false; 
        input.classList.add("is-invalid"); 
      } else {
        total += Number(input.value);
        input.classList.remove("is-invalid");
      }
    });
  
    if (!valid) {
      alert("Semua kolom harus diisi.");
      return;
    }
    hitungBK();
    
  }
  
// Fungsi untuk mengidentifikasi nilai indeks beban kerja dan menyimpannya dalam array
function hitungBK() {
  var semuaCard = document.querySelectorAll('.custom-card');
  var bebanKerjaArray = [];
  
  semuaCard.forEach(function(card) {
    var jenisPekerjaanInput = card.querySelector('.jenisPekerjaan').value;
    var kategoriPekerjaanInput = card.querySelector('.kategoriPekerjaan').value;
    var posisiKerjaInput = card.querySelector('.posisiKerja').value;
    
    var jenisPekerjaanFound = dataBebanKerja.jenisPekerjaan.find(jenis => jenis.nama === jenisPekerjaanInput);
    if (!jenisPekerjaanFound) {
      console.error("Jenis pekerjaan tidak ditemukan.");
      return;
    }

    var kategoriPekerjaanFound = jenisPekerjaanFound.kategoriPekerjaan.find(kategori => kategori.nama === kategoriPekerjaanInput);
    if (!kategoriPekerjaanFound) {
      console.error("Kategori pekerjaan tidak ditemukan.");
      return;
    }

    var nilaiBebanKerja = kategoriPekerjaanFound.posisiKerja[posisiKerjaInput];
    if (!nilaiBebanKerja) {
      console.error("Posisi kerja tidak ditemukan.");
      return;
    }

    bebanKerjaArray.push(nilaiBebanKerja);
  });

  console.log(bebanKerjaArray);
  document.getElementById('infoBK').textContent = bebanKerjaArray.join(', ');
  simpanDataProfil();
}

// Fungsi untuk menyimpan data profil pekerja 

function simpanDataProfil() {
  var inputJenisKelamin = document.getElementById('jenisKelamin').value;
  var inputBeratBadan = document.getElementById('beratBadan').value;

  document.getElementById('infoJenisKelamin').textContent = inputJenisKelamin;
  document.getElementById('infoBeratBadan').textContent = inputBeratBadan;

  simpanDataWaktu();
}

// Fungsi untuk menyimpan data waktu kerja dalam array
function simpanDataWaktu() {
  var waktuKerjaArray = [];
  var cards = document.querySelectorAll('.custom-card');

  cards.forEach(function(card) {
      var waktuKerja = card.querySelector('.waktuKerja').value;
      waktuKerjaArray.push(waktuKerja);
  });

  // Menyimpan atau menampilkan data
  console.log(waktuKerjaArray);

  document.getElementById('infoWaktuKerja').textContent = waktuKerjaArray.join(', ');
}






