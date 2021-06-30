// Tugas: diberikan 2 array sebagai argumen,
// cek jika memiliki persamaan dalam kelipatan 2
// dengan beberapa kondisi kembalian dibawah ini:
// - true jika panjang kedua array sama dan juga kelipatan duanya sama
// - false jika kedua array panjangnya tidak sama
// - false jika kedua array panjangnya sama namun kelipatan duanya tidak sama.
//
// contoh:
// ([1, 2, 3, 4], [1, 4, 9, 16]) true
// ([1, 3, 2, 3], [9, 4, 9, 1]) true (posisi tidak penting)
// ([1, 2, 3, 4], [1, 4, 9]) false (kedua array memiliki panjang tidak sama)
// ([1, 1, 2, 3], [9, 1, 1, 25]) false

// O(n^2)
function same1(arr1, arr2) {
  // kembalikan false jika kedua array tidak sama panjang
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // cari posisi index dari kelipatan item arra1 ke-i
    const indexPosition = arr2.indexOf(arr1[i] ** 2);

    // jika index kurang dari 0 atau tidak ditemukan
    // kembalikan false
    if (indexPosition === -1) {
      return false;
    }

    // hapus setiap item arr2 di index ke-indexPosition
    arr2.splice(indexPosition, 1);
  }

  return true;
}

// O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // variable penampung seberapa banyak item yang ada di arr1
  let frequencyValueOfArr1 = {};
  // variable penampung seberapa banya item kelipatan yang ada di arr2
  let frequencyValueOfArr2 = {};

  // buat data seberapa banyak frekuensi item yang ada di arr1
  for (const item of arr1) {
    frequencyValueOfArr1[item] = (frequencyValueOfArr1[item] || 0) + 1;
  }

  // buat data seberapa banyak frekuensi item kelipatan yang ada di arr2
  for (const item of arr2) {
    frequencyValueOfArr2[item] = (frequencyValueOfArr2[item] || 0) + 1;
  }

  for (const key in frequencyValueOfArr1) {
    // jika frequensi item kelipatan di arr2 tidak sama dengan di arr1/tidak ditemukan,
    // kembalikan false
    if (frequencyValueOfArr2[key ** 2] !== frequencyValueOfArr1[key]) {
      return false;
    }
  }

  return true;
}

module.exports = { same1, same2 };
