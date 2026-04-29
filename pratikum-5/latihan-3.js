// ==============================
// LATIHAN 3: CARI PASANGAN ANGKA
// ==============================

// =====================================
// 1. METODE LAMBAT (NESTED LOOP)
// =====================================
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Big O Time: O(n²)
// Alasan: Nested loop → bandingkan semua pasangan
// Big O Space: O(1)
// Alasan: Tidak pakai struktur data tambahan

// =====================================
// 2. METODE CEPAT (SET)
// =====================================
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const pasangan = target - num;

    if (seen.has(pasangan)) {
      return [pasangan, num];
    }

    seen.add(num);
  }

  return null;
}

// Big O Time: O(n)
// Alasan: Hanya 1 loop
// Big O Space: O(n)
// Alasan: Menyimpan data di Set

// =====================================
// 3. TEST CASE KECIL
// =====================================
const arrTest = [2, 7, 11, 15];
const targetTest = 9;

console.log("=== TEST KECIL ===");
console.log("Lambat:", cariPasanganLambat(arrTest, targetTest));
console.log("Cepat:", cariPasanganCepat(arrTest, targetTest));

// =====================================
// 4. FUNGSI UKUR WAKTU
// =====================================
function ukurWaktu(fn, arr, target) {
  const start = Date.now();
  const result = fn(arr, target);
  const end = Date.now();

  console.log(`${fn.name} → waktu: ${end - start} ms, hasil:`, result);
}

// =====================================
// 5. TEST BESAR (50.000 DATA)
// =====================================
const ukuran = 50000;

// buat array random
const arrBesar = Array.from({ length: ukuran }, () =>
  Math.floor(Math.random() * 100000),
);

// target yang hampir pasti tidak ada
const targetBesar = -1;

console.log("\n=== TEST BESAR ===");

// WARNING: ini berat
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);

// ⚠️ HATI-HATI: lambat banget (O(n²))
// Bisa butuh waktu sangat lama
// ukurWaktu(cariPasanganLambat, arrBesar, targetBesar);
