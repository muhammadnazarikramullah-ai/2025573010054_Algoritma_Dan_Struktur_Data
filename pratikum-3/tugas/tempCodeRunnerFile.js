// 2. Function rekursif pangkat
function pangkat(basis, eksponen) {
  // base case
  if (eksponen === 0) return 1;

  // recursive case
  return basis * pangkat(basis, eksponen - 1);
}

// Uji function pangkat
console.log("=== Uji Fungsi Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`);
console.log(`5^2 = ${pangkat(5, 2)}`);
console.log(`7^0 = ${pangkat(7, 0)}`);

// 3. Function rekursif balikString
function balikString(str) {
  // base case
  if (str.length <= 1) return str;

  // recursive case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balikString
console.log("\n=== Uji Balik String ===");
console.log(`halo -> ${balikString("halo")}`);
console.log(`javascript -> ${balikString("javascript")}`);

// 4. Function cekPalindrom
function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}

// Uji palindrom
console.log("\n=== Uji Palindrom ===");
const kataUji = ["katak", "civic", "level", "buku"];

kataUji.forEach((kata, index) => {
  const hasil = cekPalindrom(kata) ? "Palindrom" : "Bukan Palindrom";
  console.log(`${index + 1}. ${kata} -> ${hasil}`);
});
