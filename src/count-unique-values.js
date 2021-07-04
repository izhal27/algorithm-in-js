// Tugas: hitunglah banyaknya angka unik dalam sebuah array yang berurutan
//
// contoh:
// [] = 0
// [1, 2, 3, 4, 5] = 5
// [-1, 0, 1, 1, 3] = 4
// [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] = 7

// O(n)
function countUniqueValues(arr) {
  // variable penampung angka yang unique
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    // periksa jika angka sekarang ada di lookup
    // jika belum ada, maka set angka sekarang sebagai key object lookup
    if (!lookup[current]) {
      lookup[current] = true;
    }
  }

  // kembalikan panjang key yang ada di object lookup
  return Object.keys(lookup).length;
}

// O(n)
function countUniqueValues2(arr) {
  if (!arr.length) {
    return 0;
  }

  // variable pointer untuk angka yang unique
  let currentUnique = 0;

  for (let i = 1; i < arr.length; i++) {
    // jika angka yang di index ke-currentUnique tidak sama
    // dengan angka yang di arr index ke-i, maka angka yang
    // di arr index ke-i di atur ke angka di index ke-currentUnique
    if (arr[currentUnique] !== arr[i]) {
      currentUnique++;
      arr[currentUnique] = arr[i];
    }
  }

  // tambahkan 1, karena index dimulai dari 0
  return ++currentUnique;
}

module.exports = { countUniqueValues, countUniqueValues2 };
