var swap = (arr, idx1, idx2) => {
  // const temp = arr[idx1];
  // arr[idx1] = arr[idx2]
  // arr[idx2] = temp

  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// O(n)
function bubleSort(arr) {
  // iterasi dari akhir ake awal
  for (let i = arr.length; i > 0; i--) {
    // iterasi dari awal sampai index ke-i - 1
    for (let j = 0; j < i - 1; j++) {
      // jika item index ke-j lebih besar dari item index ke-j + 1
      // tukar posisi
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubleSort;
