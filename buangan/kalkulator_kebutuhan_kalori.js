let dataJson; // Global variable to hold the JSON data

// Async function to load JSON data
async function loadData() {
    try {
        const response = await fetch('data.json'); // Adjust the path as necessary
        dataJson = await response.json();
        console.log("Data loaded successfully");
    } catch (error) {
        console.error("Failed to load data", error);
    }
}

async function cariBebanKerja() {
    if (!dataJson) {
        await loadData(); // Load data if not already loaded
    }

    const jenisPekerjaan = document.getElementById('jenisPekerjaan').value;
    const kategoriPekerjaan = document.getElementById('kategoriPekerjaan').value;
    const posisiKerja = document.getElementById('posisiKerja').value;

    // Mapping from input value to JSON structure
    const jenisPekerjaanMapping = {
        "1": "Pekerjaan dengan tangan",
        "2": "Pekerjaan dengan satu tangan",
        "3": "Pekerjaan dengan dua lengan",
        "4": "Pekerjaan dengan menggunakan gerakan tangan"
    };

    // Finding the corresponding job type in dataJson
    const jenis = dataJson.jenisPekerjaan.find(jenis => jenis.nama === jenisPekerjaanMapping[jenisPekerjaan]);
    if (!jenis) {
        console.error("Jenis pekerjaan tidak ditemukan");
        return;
    }

    // Finding the corresponding category in the job type
    const kategori = jenis.kategori.find(kat => kat.nama === kategoriPekerjaan);
    if (!kategori) {
        console.error("Kategori pekerjaan tidak ditemukan");
        return;
    }

    // Getting the workload value for the selected working position
    const nilaiBebanKerja = kategori.posisiBadan[posisiKerja];
    if (nilaiBebanKerja === undefined) {
        console.error("Posisi kerja tidak ditemukan");
        return;
    }

    // Display the workload value
    document.getElementById('indeksBebanKerja').innerText = nilaiBebanKerja;
    document.getElementById('hasilBebanKerjaContainer').classList.remove('hidden');
}

function showKebutuhanKaloriPekerja() {
    var nilaiKebutuhanKaloriPekerja = document.getElementById('nilaiKebutuhanKaloriPekerja');
    nilaiKebutuhanKaloriPekerja.classList.remove('hidden');
}

var bebanKerjaCounter = 1;

function tambahBebanKerja() {
    bebanKerjaCounter++;

    var bebanKerjaContainer = document.getElementById('bebanKerjaContainer');

    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'custom-card', 'shadow', 'p-5', 'mt-4');

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    var titleH2 = document.createElement('h2');
    titleH2.classList.add('mb-4');
    titleH2.textContent = 'Beban Kerja ' + bebanKerjaCounter;

    // Duplicate the form structure from Beban Kerja 1
    var formClone = document.getElementById('bebanKerjaForm').cloneNode(true);
    formClone.id = 'bebanKerjaForm' + bebanKerjaCounter;

    cardBodyDiv.appendChild(titleH2);
    cardBodyDiv.appendChild(formClone);
    cardDiv.appendChild(cardBodyDiv);
    bebanKerjaContainer.appendChild(cardDiv);
}

function hitungRataRataKebutuhanKalori() {
    // Logika untuk menghitung rata-rata kebutuhan kalori dari seluruh beban kerja
}