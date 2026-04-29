// ===============================
// UTIL UKUR WAKTU
// ===============================
function ukurWaktu(label, fn) {
  const mulai = performance.now();
  const hasil = fn();
  const selesai = performance.now();
  console.log(`${label}: ${(selesai - mulai).toFixed(2)} ms`);
  return hasil;
}

// ===============================
// FUNGSI A: INTERSECTION ARRAY
// ===============================

// O(n^2) time | O(1) space
function intersectionBrute(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// O(n) time | O(n) space
function intersectionOptimal(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];

  for (let val of arr1) {
    if (set2.has(val) && !result.includes(val)) {
      result.push(val);
    }
  }
  return result;
}

// ===============================
// FUNGSI B: KELOMPOK ANAGRAM
// ===============================

// O(n * k log k) time | O(n * k) space
function groupAnagrams(arr) {
  const map = {};

  for (let word of arr) {
    const key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
}

// ===============================
// FUNGSI C: SUM = KUADRAT
// ===============================

// O(n^3) time | O(1) space
function sumSquareBrute(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          if (arr[i] + arr[j] === arr[k] * arr[k]) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// O(n log n) time | O(n) space
function sumSquareOptimal(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  const squares = arr.map((x) => x * x);

  for (let k = n - 1; k >= 0; k--) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === squares[k]) {
        return true;
      } else if (sum < squares[k]) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

// ===============================
// DATA BESAR UNTUK TEST
// ===============================
const N = 5000;

const arr1 = Array.from({ length: N }, (_, i) => i);
const arr2 = Array.from({ length: N }, (_, i) => i + N / 2);

const words = [];
for (let i = 0; i < 2000; i++) {
  words.push("abc", "bca", "cab", "xyz", "yzx");
}

const numbers = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 100),
);

// ===============================
// EKSEKUSI & PERBANDINGAN
// ===============================

console.log("\n=== FUNGSI A: INTERSECTION ===");
ukurWaktu("O(n^2) Brute", () => intersectionBrute(arr1, arr2));
ukurWaktu("O(n) Optimal", () => intersectionOptimal(arr1, arr2));

console.log("\n=== FUNGSI B: ANAGRAM ===");
ukurWaktu("Group Anagram", () => groupAnagrams(words));

console.log("\n=== FUNGSI C: SUM = KUADRAT ===");
ukurWaktu("O(n^3) Brute", () => sumSquareBrute(numbers));
ukurWaktu("O(n log n) Optimal", () => sumSquareOptimal(numbers));
