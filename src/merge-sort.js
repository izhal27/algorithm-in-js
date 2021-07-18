// fungsi yang digunakan untuk menggabungkan
// dua buah array berurutan
function merge(arr1, arr2) {
  // variable penampung penggambungan dua buah array dan
  // index pointer untuk arr1 dan arr2
  const result = [];
  let i = 0;
  let j = 0;

  // ulangi iterasi selama index i kurang dari panjang arr1
  // dan juga index j kurang dari panjang arr2
  while (i < arr1.length && j < arr2.length) {
    // jika angka di index ke-i pada arr1 lebih kecil daripada
    // angka di index ke-j pada arr2, maka masukan angka pada index ke-i
    // dari arr1 ke result, lalu geser ke kanan pointer i dengan menambahkan
    // index i + 1, sebaliknya masukan angka di index ke-j dari arr2
    // ke result, lalu geser ke kanan pointer j dengan menambahkan
    // index j + 1
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // jika index pointer i kurang dari panjang arr1
  // masukkan semua angka di arr1 ke result dimulai dari index ke-i
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // jika index pointer j kurang dari panjang arr1
  // masukkan semua angka di arr2 ke result dimulai dari index ke-j
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // kembalikan kedua array yang telah digabung
  return result;
}

// O(n log n)
function mergeSort(arr) {
  // base case, jika arr kurang dari atau sama dengan 1 kembalikan array
  if (arr.length <= 1) {
    return arr;
  }

  // variable penampung pointer pertengahan pada array
  const middle = Math.floor(arr.length / 2);
  // variable penampung array sisi sebelah kiri yang dihasilkan
  // secara recrusive dimulai dari index ke-0 sampai index ke-middle
  const left = mergeSort(arr.slice(0, middle));
  // variable penampung array sisi sebelah kanan yang dihasilkan
  // secara recrusive dimulai dari index ke-middle
  const right = mergeSort(arr.slice(middle));

  // gabungkan ke dua array lalu kembalikan array yang sudah berurutan
  return merge(left, right);
}

module.exports = mergeSort;
