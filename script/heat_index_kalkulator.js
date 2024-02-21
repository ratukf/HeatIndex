function calculateHeatIndex() {
  // Ambil nilai suhu udara dan kelembaban relatif dari input
  var temperature = parseFloat(document.getElementById('temperatureInput').value);
  var humidity = parseFloat(document.getElementById('humidityInput').value);

  // Cari indeks baris dan kolom di matriks heatIndexMatrix
  var rowIndex = findIndex(heatIndexMatrix[0], humidity);
  var columnIndex = findIndex(heatIndexMatrix.map(row => row[0]), temperature);

  // Jika tidak ditemukan, tampilkan pesan error
  if (rowIndex === -1 || columnIndex === -1) {
    alert("Data tidak valid. Silakan cek kembali nilai suhu dan kelembaban relatif.");
    return;
  }

  // Dapatkan nilai heat index dari matriks heatIndexMatrix
  var heatIndexValue = heatIndexMatrix[columnIndex][rowIndex];

  // Inisiasi variabel kategori bahaya, rekomendasi kerja:istirahat, dan kebutuhan air mineral
  var category, recommendation, waterRequirement;

  // Logika untuk menentukan kategori bahaya, rekomendasi kerja:istirahat, dan kebutuhan air mineral berdasarkan nilai heat index
  if (heatIndexValue >= 52 || typeof heatIndexValue === 'string') {
    category = "Bahaya Ekstrem**";
    recommendation = "20:10";
    waterRequirement = "1 gelas setiap 10 menit";
  } else if (heatIndexValue >= 39) {
    category = "Bahaya";
    recommendation = "30:10";
    waterRequirement = "1 gelas setiap 15 menit";
  } else if (heatIndexValue >= 30) {
    category = "Sangat Hati-Hati";
    recommendation = "50:10";
    waterRequirement = "1 gelas setiap 20 menit";
  } else  {
    category = "Hati-Hati";
    recommendation = "Normal/Scheduled";
    waterRequirement = "1 gelas setiap 20 menit";
  }

  // Tampilkan hasil dalam tabel
  document.getElementById('resultCategory').innerText = category;
  document.getElementById('resultRecommendation').innerText = recommendation;
  document.getElementById('resultWaterRequirement').innerText = waterRequirement;
  document.getElementById('resultHeatIndex').innerText = heatIndexValue;
  document.getElementById('bariskolom').innerText = "(Baris, kolom) data heat index: " + "(" + (columnIndex+1) + "," + (rowIndex+1) + ")";
}

function findIndex(array, value) {
  // Cari indeks dari nilai dalam array
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1; // Return -1 jika tidak ditemukan
}

// Chart Heat Index Matrix
var heatIndexMatrix = [
  [null, 10, 20, 30, 40, 50, 60, 70, 80, 90],
  [50, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [50, 48, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [49, 47, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [48, 45, 53, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [47, 44, 51, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [46, 43, 49, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [45, 42, 47, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [44, 41, 46, 52, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [43, 40, 44, 49, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [42, 39, 42, 47, 54, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [41, 38, 41, 45, 51, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [40, 37, 39, 43, 48, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [39, 36, 38, 41, 46, 52, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [38, 35, 37, 39, 43, 49, 55, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [37, 34, 35, 38, 41, 46, 51, "Tidak Diperkenankan", "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [36, 33, 34, 36, 39, 43, 48, 54, "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [35, 32, 33, 35, 37, 41, 45, 50, "Tidak Diperkenankan", "Tidak Diperkenankan"],
  [34, 31, 32, 33, 35, 38, 42, 47, 52, "Tidak Diperkenankan"],
  [33, 31, 31, 32, 34, 36, 40, 44, 48, 54],
  [32, 30, 30, 31, 32, 34, 37, 40, 44, 49],
  [31, 29, 29, 30, 31, 33, 35, 38, 41, 45],
  [30, 28, 28, 29, 30, 31, 33, 35, 38, 41],
  [29, 27, 27, 28, 29, 30, 31, 33, 35, 37],
  [28, 27, 27, 27, 28, 28, 29, 31, 32, 34],
  [27, 26, 26, 26, 27, 27, 28, 29, 30, 31],
  [26, 25, 25, 26, 26, 27, 27, 27, 28, 28]
];
