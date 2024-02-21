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
  
  function hitungBebanKerjaRataRata() {
      var inputs = document.querySelectorAll(
        "#cardBebanKerja .custom-card input[required], select[required]"
      );
      var total = 0;
      var valid = true; // Flag untuk mengecek validitas input
    
      inputs.forEach(function (input) {
        if (!input.value) {
          valid = false; // Jika ada input yang kosong, set valid menjadi false
          input.classList.add("is-invalid"); // Optional: Tambahkan class untuk menandai input tidak valid
        } else {
          total += Number(input.value);
          input.classList.remove("is-invalid"); // Optional: Hapus class tidak valid jika input diisi
        }
      });
    
      if (!valid) {
        alert("Semua kolom harus diisi.");
        return;
      } else {
        hitungBK();
      }
    }
    
    function hitungBK() {
      var cards = document.querySelectorAll(".card.custom-card");
      var hasilPerhitungan = []; // Array untuk menyimpan hasil perhitungan
    
      cards.forEach(function (card) {
        var jenisPekerjaan = card.querySelector('[name="jenisPekerjaan"]').value;
        var kategoriPekerjaan = card.querySelector(
          '[name="kategoriPekerjaan"]'
        ).value;
        var posisiKerja = card.querySelector('[name="posisiKerja"]').value;
    
        var indeksBebanKerja = dataBebanKerja.jenisPekerjaan
          .find((jenis) => jenis.nama === jenisPekerjaan)
          .kategoriPekerjaan.find((kategori) => kategori.nama === kategoriPekerjaan)
          .posisiKerja[posisiKerja];
        
        hasilPerhitungan.push(indeksBebanKerja); // Tambahkan hasil perhitungan ke dalam array
      });
    
      // Tampilkan hasil perhitungan dalam elemen dengan ID "infoBK"
      document.getElementById("infoBK").textContent = hasilPerhitungan.join(', ');
      console.log(hasilPerhitungan);
    }
    
  