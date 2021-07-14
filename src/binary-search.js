// Tugas: diberikan sebuah array berurutan, cari index sebuah angka
// dalam array, jika ditemukan kembalikan index, jika tidak kembalikan -1
//
// contoh:
// binarySearcy([1, 2, 3, 4, 5], 3) = 2
// binarySearcy([1, 2, 3, 4, 5], 1) = 0
// binarySearcy([1, 2, 3, 4, 5], 5) = 4
// binarySearcy([1, 2, 3, 4, 5], 6) = -1
// binarySearcy([1, 2, 3, 4, 5], 0) = -1

// O(log n)
function binarySearch(arr, numTarget) {
  // variable penampung pivot sebelah kiri, tengah dan kanan
  let left = 0;
  let right = arr.length - 1;
  // cari pivot tengah dengan menambahkan index ke-right dan ke-left
  // dibagi 2 lalu di bulatkan ke bawah (untuk menghindari hasil desimal)
  let middle = Math.floor((left + right) / 2);

  // ulangi selama pivot kiri kurang atau sama dengan pivot kanan
  while (left <= right) {
    // jika item array index ke-middle sama dengan angka
    // yang dicari, kembalikan index middle
    if (numTarget === arr[middle]) {
      return middle;
    }

    // jika angka target lebih besar dari angka index ke-middle
    // maka jadikan pivot sebelah kiri menjadi index ke-middle + 1
    // sebaliknya jika lebih kecil, maka jadika pivot sebelah kanan
    // menjadi index ke-middle - 1
    if (numTarget > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    // hitung kembali pivot middle, untuk mencari pivot tengah
    // sesuai dengan index ke-left/ke-right yang baru
    middle = Math.floor((left + right) / 2);
  }

  // kembalikan -1 jika angka yang dicari tidak ditemukan
  return -1;
}

module.exports = binarySearch;
