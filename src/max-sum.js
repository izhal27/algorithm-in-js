// Tugas: carilah jumlah terbanyak dari sebuay array
// dengan banyaknya urutan ditentukan oleh sebuah angka,
// jika urutan angka yang ada lebih dari panjang array,
// kembalikan null sebagai hasilnya
//
// contoh:
// maxSum([1, 2, 3, 4, 5], 3) = 12
// maxSum([3, 1, 1, 2, 1], 3) = 5
// maxSum([1, 2, 3, 4, 5], 6) = null
// maxSum([1, 2, 3,], 4) = null

// O(n)
function maxSum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  // variable penampung jumlah maksimal
  let maxSum = 0;
  // variable penampung jumlah sementara
  let tempSum = 0;

  // hitung jumlah maksimum sesuai urutan yang ada
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // atur jumlah sementara sesuai jumlah maksimum yang ada
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // jumlah maksimum sementara dikurangi dengan angka yang
    // yang ada di index ke-(i - num) lalu ditambahkan dengan angka
    // yang ada di index ke-i,
    // lalu periksa mana yang terbesar di antara jumlah maksimum yang ada
    // dan jumlah maksimum sementara
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  // kembalikan jumlah maksimum yang didapat
  return maxSum;
}

module.exports = maxSum;
