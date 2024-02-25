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

// Fungsi untuk mengedit judul pekerjaan
function editJudul(button) {
  var judul = button.closest('.card-body').querySelector('.cardTitle');

  judul.contentEditable = true;
  judul.focus(); 

  judul.addEventListener('blur', function () {
    judul.contentEditable = false;
  });
}

// Fungsi untuk tombol kembali ke page kalkulator ISBB dan profil pekerja
function backToISBBProfile() {
  var containerISBBProfile = document.getElementById("containerISBBProfile");
  var containerBebanKerja = document.getElementById("bebanKerja");
  containerISBBProfile.style.display = "block";
  containerBebanKerja.style.display = "none";
}

// Fungsi untuk kembali page beban kerja
function backToBebanKerja() {
  var containerBebanKerja = document.getElementById("bebanKerja");
  var containerHasil = document.getElementById("containerHasil");
  containerBebanKerja.style.display = "block";
  containerHasil.style.display = "none";
}

// Fungsi untuk menghitung ISBB
function hitungIndeksSuhu() {
  var suhuBasah = parseFloat(document.getElementById("suhuBasah").value);
  var suhuBola = parseFloat(document.getElementById("suhuBola").value);
  var suhuKering = parseFloat(document.getElementById("suhuKering").value);
  var suhuBolaBasah = (
    suhuBasah * 0.7 +
    suhuBola * 0.2 +
    suhuKering * 0.1
  ).toFixed(2);

  if (!suhuBasah || !suhuBola || !suhuKering) {
    alert("Harap isi form suhu basah, suhu bola, dan suhu kering.");
  } else {
    document.getElementById("ISBBText").textContent = suhuBolaBasah;
    document.getElementById("showISBB").style.display = "block";
    document.getElementById("ISBBText2").textContent = suhuBolaBasah;
  }
  console.log("SUHU BOLA BASAH:" + suhuBolaBasah);
  return suhuBolaBasah;
}

// Fungsi tombol berikutnya pada form profil pekerja
function nextPage() {
  var suhuBasah = parseFloat(document.getElementById("suhuBasah").value);
  var suhuBola = parseFloat(document.getElementById("suhuBola").value);
  var suhuKering = parseFloat(document.getElementById("suhuKering").value);
  var jenisKelamin = document.getElementById("jenisKelamin").value;
  var beratBadan = document.getElementById("beratBadan").value;

  if (!suhuBasah || !suhuBola || !suhuKering || !jenisKelamin || !beratBadan) {
    alert("Harap isi seluruh form.");
  } else {
    hideISBBProfile();
  }
}

function hideISBBProfile() {
  // Animasi fadeout dan feadein
  setTimeout(function () {
    $(".containerISBBProfile").fadeOut("slow", function () {
      $("#bebanKerja").fadeIn("slow");
    });
  }, 250);
}

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

// Mendefinisikan variabel global
var bebanKerjaArray = [];
var waktuKerjaArray = [];

// Fungsi untuk memvalidasi apakah semua form telah terisi
function validasiInput() {
  var inputs = document.querySelectorAll(
    ".kalkulatorBebanKerja input[required], select[required]"
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

  setTimeout(function () {
    $("#bebanKerja").fadeOut("slow", function () {
      $("#containerHasil").fadeIn("slow");
    });
  }, 250);

  hitungBK();
}

// Fungsi untuk mengidentifikasi nilai indeks beban kerja dan menyimpannya dalam array
function hitungBK() {
  var semuaCard = document.querySelectorAll(".custom-card");
  bebanKerjaArray = [];

  semuaCard.forEach(function (card) {
    var jenisPekerjaanInput = card.querySelector(".jenisPekerjaan").value;
    var kategoriPekerjaanInput = card.querySelector(".kategoriPekerjaan").value;
    var posisiKerjaInput = card.querySelector(".posisiKerja").value;

    // Mencari jenis pekerjaan yang sesuai di dalam data
    var jenisPekerjaanFound = dataBebanKerja.jenisPekerjaan.find(
      (jenis) => jenis.nama === jenisPekerjaanInput
    );
    if (!jenisPekerjaanFound) {
      console.error("Jenis pekerjaan tidak ditemukan.");
      return;
    }

    // Mencari kategori pekerjaan yang sesuai di dalam data
    var kategoriPekerjaanFound = jenisPekerjaanFound.kategoriPekerjaan.find(
      (kategori) => kategori.nama === kategoriPekerjaanInput
    );
    if (!kategoriPekerjaanFound) {
      console.error("Kategori pekerjaan tidak ditemukan.");
      return;
    }

    // Mencari posisi kerja yang sesuai di dalam data
    var nilaiBebanKerja = kategoriPekerjaanFound.posisiKerja[posisiKerjaInput];
    if (!nilaiBebanKerja) {
      console.error("Posisi kerja tidak ditemukan.");
      return;
    }

    console.log("BK: " + nilaiBebanKerja);
    bebanKerjaArray.push(nilaiBebanKerja);
  });

  console.log(bebanKerjaArray);
  simpanDataWaktu();
}

// Fungsi untuk menyimpan data waktu kerja dalam array dan menjumlahkannya
function simpanDataWaktu() {
  waktuKerjaArray = [];
  var totalWaktuKerja = 0;
  var cards = document.querySelectorAll(".custom-card");

  cards.forEach(function (card) {
    var waktuKerja = parseInt(card.querySelector(".waktuKerja").value);
    waktuKerjaArray.push(waktuKerja);
  });

  waktuKerjaArray.forEach((num) => {
    totalWaktuKerja += num;
  });

  document.getElementById("totalWaktuText").textContent = totalWaktuKerja;

  console.log("Array waktu kerja: " + waktuKerjaArray);
  console.log("Total waktu kerja: " + totalWaktuKerja + " menit");

  hitungBKRataRata();
}

// Fungsi untuk menghitung BK total
function hitungBKRataRata() {
  if (bebanKerjaArray.length !== waktuKerjaArray.length) {
    console.error("Panjang array tidak cocok.");
    return;
  }

  waktuKerjaArray = [];
  var totalWaktuKerja = 0;
  var cards = document.querySelectorAll(".custom-card");

  // Memasukkan seluruh data waktu kerja ke dalam array
  cards.forEach(function (card) {
    var waktuKerja = parseInt(card.querySelector(".waktuKerja").value);
    waktuKerjaArray.push(waktuKerja);
  });

  // Menghitung total waktu keseluruhan
  waktuKerjaArray.forEach((num) => {
    totalWaktuKerja += num;
  });

  // Menghitung beban kerja dari masing masing pekerjaan dan menyimpannya dalam array
  let totalBK = 0;
  let BK = 0;
  for (let i = 0; i < bebanKerjaArray.length; i++) {
    totalBK += bebanKerjaArray[i] * waktuKerjaArray[i];
    BK = bebanKerjaArray[i] * waktuKerjaArray[i];
    console.log("Beban kerja ke-" + i + ": " + bebanKerjaArray[i]);
    console.log("Waktu ke-" + i + ": " + waktuKerjaArray[i]);
    console.log("Hasil BK x T: " + BK);
  }

  // Menghitung nilai beban kerja rata-rata
  let BK_RataRata = (totalBK * 60) / totalWaktuKerja;

  console.log("Total waktu kerja: " + totalWaktuKerja);

  BK_RataRata = BK_RataRata.toFixed(2);

  console.log("Waktu kerja array: " + waktuKerjaArray + " menit");
  console.log("TotalBK: " + totalBK + " kkal/jam");
  console.log("Total waktu kerja: " + totalWaktuKerja + " menit");
  console.log("BK rata-rata: " + BK_RataRata);

  // Menghitung total beban kerja dengan mempertimbangkan jenis kelamin pekerja
  var beratBadan = document.getElementById("beratBadan").value;
  var kkalLakiLaki = 1;
  var kkalPerempuan = 0.9;
  let mb = 0;

  if (jenisKelamin == "lakiLaki") {
    mb = beratBadan * kkalLakiLaki;
  } else {
    mb = beratBadan * kkalPerempuan;
  }

  let BK_RataRataNumber = parseFloat(BK_RataRata);
  let mbNumber = parseFloat(mb);

  let totalBKRataRata = (BK_RataRataNumber + mbNumber).toFixed(2);

  console.log("Total BK rata-rata: " + totalBKRataRata);
  document.getElementById("BKText").textContent = totalBKRataRata + " kkal/jam";

  // Mengidentifikasi kategori total beban pekerjaan
  var kategoriBK;
  var persenWaktu = (totalWaktuKerja * 100) / 480;
  var batasISBB;

  if (totalBKRataRata <= 200) {
    var kategoriBK = "Ringan";
    if (persenWaktu <= 25) {
      var batasISBB = 32.5;
    } else if (persenWaktu <= 50) {
      var batasISBB = 32;
    } else {
      var batasISBB = 31;
    }
  } else if (totalBKRataRata <= 350) {
    var kategoriBK = "Sedang";
    if (persenWaktu <= 25) {
      var batasISBB = 31.5;
    } else if (persenWaktu <= 50) {
      var batasISBB = 30;
    } else if (persenWaktu <= 75) {
      var batasISBB = 29;
    } else {
      var batasISBB = 28;
    }
  } else if (totalBKRataRata <= 250) {
    var kategoriBK = "Berat";
    if (persenWaktu <= 25) {
      var batasISBB = 30.5;
    } else if (persenWaktu <= 50) {
      var batasISBB = 29;
    } else {
      var batasISBB = 27.5;
    }
  } else {
    var kategoriBK = "Sangat berat";
    if (persenWaktu <= 25) {
      var batasISBB = 30;
    } else {
      var batasISBB = 28;
    }
  }

  document.getElementById("kategoriBKText").textContent = kategoriBK;
  document.getElementById("suhuRekomendasiText").textContent = batasISBB;

  return batasISBB;
}

// Fungsi untuk menampilkan saran berdasarkan heat index yang muncul
function saran() {
  var suhuBolaBasah = hitungIndeksSuhu();
  var batasISBB = hitungBKRataRata();

  // Mengidentifikasi rekomendasi bekerja atau tidak bekerja
  if (suhuBolaBasah > batasISBB) {
    document.getElementById("saran").textContent =
      "Suhu bola basah berada di atas batas suhu batas rekomendasi untuk bekerja. Bekerja tidak disarankan.";
  } else if (suhuBolaBasah == batasISBB) {
    document.getElementById("saran").textContent =
      "Suhu bola basah sama dengan suhu maksimal rekomendasi untuk bekerja. Bekerja diperobolehkan namun harus tetap berhati-hati.";
  } else if (suhuBolaBasah < batasISBB) {
    document.getElementById("saran").textContent =
      "Suhu bola basah berada di bawah batas suhu rekomendasi untuk bekerja. Bekerja diperbolehkan.";
  } else {
    document.getElementById("saran").textContent = "Tidak teridentifikasi.";
  }

  console.log("Suhu bola basah = " + suhuBolaBasah);
  console.log("Batas suhu = " + batasISBB);
}
