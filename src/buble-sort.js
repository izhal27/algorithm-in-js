// O(n)
function bubleSort(arr) {
  var swap = (arr, idx1, idx2) => {
    // const temp = arr[idx1];
    // arr[idx1] = arr[idx2]
    // arr[idx2] = temp

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // iterasi dari index akhir ke index awal array
  for (let i = arr.length; i > 0; i--) {
    // variable pengecekan jika tidak terjadi perbuahan posisi item
    // untuk menghindari array yang hampir berurutan
    // sehingga tidak melakukan pengecekan pada item yang telah
    // berurutan penuh
    let noSwaps = true;

    // iterasi dari awal sampai index ke-i - 1
    for (let j = 0; j < i - 1; j++) {
      // jika item index ke-j lebih besar dari item index ke-j + 1
      // tukar posisi
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    // jika tidak terjadi perubahan posisi pada item
    // hentikan iterasi
    if (noSwaps) {
      break;
    }
  }

  return arr;
}

module.exports = bubleSort;
