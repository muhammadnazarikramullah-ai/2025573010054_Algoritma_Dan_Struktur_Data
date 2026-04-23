// 2. Deklarasi array dataMahasiswa
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 },
];

// 3. Function hitungStatistik (pakai reduce)
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs, index) => {
      acc.total += 1;
      acc.jumlahNilai += mhs.nilai;

      if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
      if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;

      return acc;
    },
    {
      total: 0,
      jumlahNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  return {
    total: hasil.total,
    rataRata: (hasil.jumlahNilai / hasil.total).toFixed(2),
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

// 4. Function filterLulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// 5. Function tambahGrade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 6. Panggil semua function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Tampilkan statistik
console.log("=== Statistik Mahasiswa ===");
console.log(`Total       : ${statistik.total}`);
console.log(`Rata-rata   : ${statistik.rataRata}`);
console.log(`Tertinggi   : ${statistik.tertinggi}`);
console.log(`Terendah    : ${statistik.terendah}`);

// Tampilkan mahasiswa lulus
console.log("\n=== Mahasiswa Lulus (>= 70) ===");
mahasiswaLulus.forEach((mhs, index) => {
  console.log(`${index + 1}. ${mhs.nama} - ${mhs.nilai}`);
});

// Tampilkan semua mahasiswa + grade
console.log("\n=== Data Mahasiswa + Grade ===");
mahasiswaDenganGrade.forEach((mhs, index) => {
  console.log(`${index + 1}. ${mhs.nama} - ${mhs.nilai} (Grade: ${mhs.grade})`);
});
