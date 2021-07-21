// fungsi yang digunakan untuk mendapatkan angka di index ke-i
// index satuan dimulai dari belakang/paling akhir
//
// getDigitNum(1234, 0) = 4
// getDigitNum(1234, 1) = 3
// getDigitNum(1234, 3) = 1
// getDigitNum(1234, 5) = 0
function getDigitNum(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// fungsi yang digunakan untuk menghitung banyaknya digit dari sebuah angka
//
// digitCount(1234) = 4
// digitCount(33) = 2
// digitCount(1) = 1
// digitCount(0) = 1
function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// fungsi yang digunakan untuk mencari digit angka maksimal dalam sebuah array
function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

// O(nk)
function radixSort(arr) {
  // dapatkan digit terbanyak dalam array
  const maxDigits = mostDigits(arr);

  // ulangi iterasi sampai maksimal digit yang ada
  for (let i = 0; i < maxDigits; i++) {
    // buat array penampung angka sebanyak 10
    const bucket = Array.from({ length: 10 }, () => []);

    // ulangi iterasi sepanjang array
    for (let j = 0; j < arr.length; j++) {
      // ambil angka sesuai index ke-i
      // lalu masukan ke variable bucket sesuai angka
      //
      // contoh:
      // arr[j] => 27
      // getDigitNum(27, 0) => 7
      // bucket[7].push(27)
      const digit = getDigitNum(arr[j], i);
      bucket[digit].push(arr[j]);
    }

    // masukan semua angka di bucket ke variable array
    arr = bucket.flat();
  }

  return arr;
}

module.exports = radixSort;
