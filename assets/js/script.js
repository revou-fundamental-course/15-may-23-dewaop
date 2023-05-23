function hitung_luas() {
  // mengambil nilai sisi luas
  var nilai_sisi = document.getElementById("sisi-luas").value;
  var hasil_sisi_luas = nilai_sisi * nilai_sisi;

  // Mengakses output
  var output_luas = document.getElementById("output_luas");

  // Menambahkan HTML baru ke dalam output
  output_luas.innerHTML += "<p>L = S x S</p>";
  output_luas.innerHTML += "<p>L = " + nilai_sisi + " x " + nilai_sisi + "</p>";
  output_luas.innerHTML += "<p>L = " + hasil_sisi_luas + "</p>";
}
function hitung_keliling() {
  // mengambil nilai sisi keliling
  var nilai_keliling = document.getElementById("sisi-keliling").value;
  var hasil_sisi_keliling = 4 * nilai_keliling;

  // Mengakses output
  var output_luas = document.getElementById("output_keliling");

  // Menambahkan HTML baru ke dalam output
  output_luas.innerHTML += "<p>K = 4 x S</p>";
  output_luas.innerHTML += "<p>K = 4 x " + nilai_keliling + "</p>";
  output_luas.innerHTML += "<p>K = " + hasil_sisi_keliling + "</p>";
}
