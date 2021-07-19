// fungsi yang digunakan untuk mencari pivot index
function pivot(arr, start = 0, end = arr.length - 1) {
  // rubah posisi item index ke-idx1 dan idx2
  const swap = (arr, idx1, idx2) => {
    // const temp = arr[idx1];
    // arr[idx1] = arr[idx2]
    // arr[idx2] = temp

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // variable penampung index untuk pivot (index pertengahan
  // dari pivot/angka yang diambil dari index ke-start)
  // sisi kiri angka terkecil dari pivot sebelah kanan sebaliknya
  let swapIndex = start;
  let pivot = arr[start];

  // ulangi iterasi selama index i kurang atau sama dengan index end
  for (let i = start + 1; i <= end; i++) {
    // jika pivot/angka lebih besar dari angka di index ke-i
    // naikan swapIndex lalu tukar posisi angka di index ke-i dengan
    // angka di index ke-swapIndex
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  // tukar posisi angka/pivot di index ke-start menjadi index ke-swapIndex
  swap(arr, start, swapIndex);

  // kembalikan index pertengahan/pivot antara index ke-start dan index ke-end
  return swapIndex;
}

// O(n log n)
function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case, ulangi selama pointer sebelah kiri
  // kurang dari pointer sebelah kanan
  if (left < right) {
    // cari pivot index arr menggunakan pivot helper
    const pivotIndex = pivot(arr, left, right);
    // sisi sebelah kiri
    // pemanggilan recrusive untuk sisi sebelah kiri
    quickSort(arr, left, pivotIndex);
    // sisi sebelah kanan
    // pemanggilan recrusive untuk sisi sebelah kanan
    quickSort(arr, pivotIndex + 1, right);
  }

  // kembalikan array yang sudah berurutan
  return arr;
}

module.exports = quickSort;
