// Tugas: carilah dua buah angka yang berjumlah 0 dari sebuah array
// yang berurutan
//
// contoh:
// [-6, -5, -4, -3, -2, -1, 0, 1, 2] = [-2, 2]
// [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4] = [-4, 4]
// [-6, -5, -2, 0, 1, 3, 4] = undefined
// [-3, -2, -1, 0, 4, 5, 6] = undefined

// O(n)
function sumZero(arr) {
  // variable pointer sebelah kiri
  let left = 0;
  // variable pointer sebelah kanan
  let right = arr.length - 1;

  // ulangi selama pointer sebelah kiri kurang dari
  // pointer sebelah kanan
  while (left < right) {
    // jumlah antara nomor pada pointer sebelah kiri dan kanan
    const sum = arr[left] + arr[right];

    // jika jumlahnya 0 kembalikan sebuah array berisi
    // nomor sesuai pointer sebelah kiri dan kanan
    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    // jika jumlahnya lebih dari 0 maka,
    // ubah posisi pointer sebelah kanan kekiri,
    // sebaliknya jika kurang dari 0 maka,
    // ubah posisi pointer sebelah kiri ke kanan
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

module.exports = sumZero;
