// Tugas: diberikan sebuah arrah integer positive dan sebuah angka
// positive lewat parameter,
// carilah pasangan terkecil berurutan yang jumlahnya sama atau
// lebih dengan angka yang ditentukan lewat parameter
//
// contoh:
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) = 2 --> karena [4, 3] pasangan terkecil
// minSubArrayLen([2, 1, 6, 5, 4], 9) = 2 --> karena [5, 4] pasangan terkecil
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) = 1 --> karena [62] is lebih besar dari 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) = 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10],55) = 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) = 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10],95) = 0

// O(n^2)
function minSubArrayLen(arr, sum) {
  // variable penampung jumlah pasangan terkecil
  // di isi dengan angka terbesar (dalam JavaScript
  // angka terbesar adalah Infinity)
  let smallest = Infinity;
  // variable index penampung posisi terakhir jika ditemukan
  // pasangan yang jumlahnya sama atau lebih besar dengan angka yang ada
  let end = 0;
  // variable penampung jumlah yang ingin di cek
  let total = 0;

  // ulangi iterasi sepanjang array
  for (let i = 0; i < arr.length; i++) {
    // isi total dengan angka dengan array index ke-i
    total = arr[i];
    // jadikan index end di belakang/setelah index saat ini
    end = i + 1;

    // ulangi iterasi selama index end kurang dari panjang array
    // dan jumlah kurang dari angka yang ditentukan
    while (end < arr.length && total < sum) {
      // tambahkan perulangan angka index ke-end ke variable total
      // lalu naikan index end secara bertahap
      total += arr[end];
      end++;
    }

    // jika total lebih atau sama dengan angka yang ada,
    // maka cari jarak antara index end dengan index i
    // dengan cara end dikurangi dengan i,
    // lalu bandingkan dengan ukuran terkecil saat ini
    if (total >= sum) {
      smallest = Math.min(end - i, smallest);
    }
  }

  // jika smallest masih Infinity kembalikan 0, tidak ditemukan
  // jumlah pasangan item dalam array yang lebih/sama dengan angka yang ada,
  // sebaliknya kembalikan jumlah pasangan terkecil
  return smallest === Infinity ? 0 : smallest;
}

// O(n)
function minSubArrayLen2(nums, sum) {
  // variable penampung jumlah pasangan terkecil
  // di isi dengan angka terbesar (dalam JavaScript
  // angka terbesar adalah Infinity)
  let minLen = Infinity;
  // variable penampung jumlah yang ingin di cek
  let total = 0;
  // variable penampung index start dan end pasangan item array
  let start = 0;
  let end = 0;

  // ulangi selama index awal kurang dari panjang array
  while (start < nums.length) {
    // jika total kurang dari angka yang ada dan
    // index end kurang dari panjang array,
    // tambahkan angka index ke-end ke variable total
    // lalu naikan index end secara bertahap
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
      // jika total lebih atau sama dengan angka yang ada,
      // maka cari jarak antara index start dengan index end
      // dengan cara end dikurangi dengan start,
      // lalu bandingkan dengan ukuran terkecil saat ini,
      // lalu kurangi total dengan angka pada index ke-start
      // naikan index start secara bertahap
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      // tidak ditemukan pasangan/angka yang lebih atau
      // sama dengan angka yang ada
      break;
    }
  }

  // jika minLen masih Infinity kembalikan 0, tidak ditemukan
  // jumlah pasangan item dalam array yang lebih/sama dengan angka yang ada,
  // sebaliknya kembalikan jumlah pasangan terkecil
  return minLen === Infinity ? 0 : minLen;
}

module.exports = { minSubArrayLen, minSubArrayLen2 };
