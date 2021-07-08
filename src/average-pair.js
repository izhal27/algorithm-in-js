// Tugas: carilah jika terdapat pasangan rata2 dari sebuah array berurutan
// yang target rata2-nya di berikan lewat parameter
//
// contoh:
// averagePair([1, 2, 3], 2.5) = true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) = true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) = false
// averagePair([], 4) = false

// O(n log n)
function averagePair(arr, avg) {
  // variable penampung index pengecekan awal dan akhir
  let start = 0;
  let end = arr.length - 1;

  // ulangi selama index awal kurang dari index akhir
  while (start < end) {
    // rata2 dari kedua item array
    let currentAvg = (arr[start] + arr[end]) / 2;

    // jika rata2 saat ini sama dengan rata2 target,
    // kembalikan true (terdapat rata2 yang sama denga rata2 target).
    //
    // jika rata2 saat ini kurang dari rata2 target,
    // geser index awal kekanan dengan menambahkan 1,
    // sebaliknya jika rata2 saat ini lebih besar dari rata2 target,
    // geser index akhir kekiri dengan mengurangi 1
    if (currentAvg === avg) {
      return true;
    } else if (currentAvg < avg) {
      start++;
    } else {
      end--;
    }
  }

  // tidak terdapat pasangan rata2
  return false;
}

module.exports = averagePair;
