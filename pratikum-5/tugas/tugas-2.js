// ===============================
// IMPORT PERFORMANCE (Node.js)
// ===============================
const { performance } = require('perf_hooks');

// ===============================
// FUNGSI-FUNGSI BIG O
// ===============================

// O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n)
function fn_OnLogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }
  return count;
}

// O(n^2)
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// ===============================
// UTIL UKUR WAKTU
// ===============================
function ukur(fn, n) {
  const mulai = performance.now();
  fn(n);
  const selesai = performance.now();
  return (selesai - mulai).toFixed(4);
}

// ===============================
// BENCHMARK SEMUA
// ===============================
function benchmarkSemua(ukuranData) {
  console.log("=== BENCHMARK BIG O ===\n");

  for (let n of ukuranData) {
    console.log(`Ukuran data: ${n}`);

    const t1 = ukur(fn_O1, n);
    const t2 = ukur(fn_On, n);
    const t3 = ukur(fn_OnLogn, n);
    const t4 = ukur(fn_On2, n);

    console.log(`O(1)      : ${t1} ms`);
    console.log(`O(n)      : ${t2} ms`);
    console.log(`O(n log n): ${t3} ms`);
    console.log(`O(n^2)    : ${t4} ms`);
    console.log("---------------------------");
  }
}

// ===============================
// EKSEKUSI
// ===============================
benchmarkSemua([100, 500, 1000, 5000, 10000]);

