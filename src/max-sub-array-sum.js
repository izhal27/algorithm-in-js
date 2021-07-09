// Tugas: diberikan arrah dan angka melalui parameter,
// carilah pasangan maksimal sesuai dengan angka yang di parameter,
// jumlah pasangan item harus berurutan, dengan contoh dibawah ini
// [100, 200] berurutan
// [100, 300] tidak termasuk
// jika tidak ditemukan kembalikan null
//
// contoh:
// maxSubarraySum([100, 200, 300, 400], 2) = 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) = 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) = 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) = 5
// maxSubarraySum([2, 3], 3) = null

// O(n)
function maxSubarraySum(arr, num) {
  // jika panjang kurang dari jumlah pasangan
  // kembalikan null
  if (arr.length < num) {
    return null;
  }

  // variable penampung item pasangan sesuai dengan
  // jumlah pasangan yang ada di parameter
  let start = 0;
  let end = num - 1; // karena index dimulai dari 0
  // variable penampung jumlah mksimal
  let max = 0;

  // hitung jumlah maksimal sesuai panjang pasangan
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  // jadikan jumlah sementara sama dengan jumlah maksimal saat ini
  // lalu iterasi selama end kurang dari panjang array dikurangi satu
  // untuk menghindari index end melebih panjang array ketika akan
  // dijumlahkan
  let tempSum = max;
  while (end < arr.length - 1) {
    // cari jumlah maksimal sementara dengan cara
    // menambahkan jumlah sementara dengan angka di belakang
    // angka terakhir dalam urutan dan mengurangi dengan
    // angka yang berada pada posisi pertama,
    // lalu bandingkan jumlah maksimal saat ini dan jumlah
    // sementara untuk mencari jumlah terbesar
    tempSum += arr[end + 1] - arr[start];
    max = Math.max(max, tempSum);

    // tambahkan 1 index awal dan akhir dalam setiap iterasi
    start++;
    end++;
  }

  // kembalikan jumlah maksimal yang ditemukan
  return max;
}

// O(n)
function maxSubarraySum2(arr, num) {
  // jika panjang kurang dari jumlah pasangan
  // kembalikan null
  if (arr.length < num) {
    return null;
  }

  // variable penampung jumlah maksimal
  let total = 0;

  // hitung jumlah maksimal sesuai panjang pasangan
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  // jadikan jumlah sementara sama dengan jumlah maksimal saat ini
  let currentTotal = total;

  // iterasi dimulai dari index yang berada di akhir pasangan
  for (let i = num; i < arr.length; i++) {
    // jumlahkan jumlah maksimal saat ini dengan angka
    // terakhir dalam antrian lalu kurangi dengan angka
    // pertama dalam antrian, lalu cari jumlah maksimal terbesar
    // antara jumlah maksimal sementara saat ini dengan jumlah maksimal saat ini
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }

  // kembalikan jumlah maksimal yang ditemukan
  return total;
}

module.exports = { maxSubarraySum, maxSubarraySum2 };
