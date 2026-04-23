// 04-inheritance.js
// ================================================
// INHERITANCE: EXTENDS, SUPER, OVERRIDE
// ================================================
// --- Parent Class ---
class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
    this.kecepatanSaatIni = 0;
  }
  akselerasi(tambahan) {
    this.kecepatanSaatIni += tambahan;
    console.log(
      `${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`,
    );
  }
  rem() {
    this.kecepatanSaatIni = 0;
    console.log(`${this.merk} ${this.model}: berhenti.`);
  }
  info() {
    return `${this.tahun} ${this.merk} ${this.model}`;
  }
}
// --- Child Class: Mobil ---
class Mobil extends Kendaraan {
  constructor(merk, model, tahun, jumlahPintu) {
    super(merk, model, tahun); // WAJIB: panggil constructor parent
    this.jumlahPintu = jumlahPintu; // property tambahan
  }
  // Method baru (tidak ada di parent)
  bunyikanKlakson() {
    console.log(`${this.merk}: Beep beep!`);
  }
  // Override method info() dari parent
  info() {
    const infoParent = super.info(); // ambil hasil parent
    return `${infoParent} (${this.jumlahPintu} pintu)`;
  }
}
// --- Child Class: Motor ---
class Motor extends Kendaraan {
  constructor(merk, model, tahun, jenisMotor) {
    super(merk, model, tahun);
    this.jenisMotor = jenisMotor;
  }
  wheelie() {
    if (this.kecepatanSaatIni > 50) {
      console.log(`${this.merk}: Wheelie!`);
    } else {
      console.log("Kecepatan terlalu rendah untuk wheelie.");
    }
  }
  info() {
    return `${super.info()} [${this.jenisMotor}]`;
  }
}
// --- Membuat instance ---
const mobil = new Mobil("Toyota", "Avanza", 2022, 4);
const motor = new Motor("Honda", "CBR600RR", 2021, "Sport");
console.log("=== Info Kendaraan ===");
console.log(mobil.info());
console.log(motor.info());
console.log("\n=== Aksi ===");
mobil.akselerasi(60); // method dari parent
mobil.bunyikanKlakson(); // method child
motor.akselerasi(80);
motor.wheelie();
motor.rem();
// --- instanceof: cek tipe object ---
console.log("\n=== instanceof ===");
console.log("mobil instanceof Mobil :", mobil instanceof Mobil); // true
console.log("mobil instanceof Kendaraan :", mobil instanceof Kendaraan); // true!
console.log("motor instanceof Mobil :", motor instanceof Mobil); // false
// --- Polymorphism: method info() berbeda untuk tiap class ---
console.log("\n=== Polymorphism ===");
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach((k) => console.log(k.info()));

// Latihan 3 Class BankAccount
class BankAccount {
  constructor(namaPemilik, saldoAwal = 0) {
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
  }

  // 3. Method setor(jumlah)
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah setor harus lebih dari 0");
      return;
    }

    this.saldo += jumlah;
    console.log(`${this.namaPemilik} menyetor Rp${jumlah}`);
  }

  // 4. Method tarik(jumlah)
  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah tarik harus lebih dari 0");
      return;
    }

    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi");
      return;
    }

    this.saldo -= jumlah;
    console.log(`${this.namaPemilik} menarik Rp${jumlah}`);
  }

  // 5. Method cekSaldo()
  cekSaldo() {
    console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
  }

  // 6. Static method transfer()
  static transfer(akun1, akun2, jumlah) {
    console.log(
      `Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik}`,
    );

    if (jumlah <= 0) {
      console.log("Error: Jumlah transfer harus lebih dari 0");
      return;
    }

    if (jumlah > akun1.saldo) {
      console.log("Saldo tidak mencukupi untuk transfer");
      return;
    }

    akun1.tarik(jumlah);
    akun2.setor(jumlah);
  }
}

// 7. Membuat dua instance akun
const akun1 = new BankAccount("Budi", 500000);
const akun2 = new BankAccount("Siti", 300000);

// Uji semua method

console.log("=== CEK SALDO AWAL ===");
akun1.cekSaldo();
akun2.cekSaldo();

console.log("=== SETOR ===");
akun1.setor(200000);
akun1.cekSaldo();

console.log("=== TARIK ===");
akun1.tarik(100000);
akun1.cekSaldo();

console.log("=== ERROR TARIK (SALDO TIDAK CUKUP) ===");
akun1.tarik(1000000);

console.log("=== ERROR SETOR (JUMLAH <= 0) ===");
akun1.setor(0);

console.log("=== TRANSFER ===");
BankAccount.transfer(akun1, akun2, 150000);

akun1.cekSaldo();
akun2.cekSaldo();

console.log("=== ERROR TRANSFER (SALDO TIDAK CUKUP) ===");
BankAccount.transfer(akun1, akun2, 1000000);
