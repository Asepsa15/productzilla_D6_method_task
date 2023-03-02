// mengunakan method anonymous function
const biodata = function (nama, asal, suku){
  console.log(`Nama: ${nama}`);
  console.log(`Asal: ${asal}`);
  console.log(`Suku: ${suku}`);
};

// mengunakan method arow fungction
const asalKampusDanJurusan = (asal, jurusan) => {
  console.log(`Asal Kampus: ${asal}`);
  console.log(`Jurusan: ${jurusan}`);
};

// contoh penggunaan anonymous function
biodata("Asep saripudin", "Jatinangor", "Sunda");
// contoh penggunaan arow fungction
asalKampusDanJurusan(
  "Universitas komputer indonesia (UNIKOM) ",
  "Sistem informasi"
);
