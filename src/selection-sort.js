// O(n^2)
function selectionSort(arr) {
  // rubah posisi item index ke-idx1 dan idx2
  var swap = (arr, idx1, idx2) => {
    // const temp = arr[idx1];
    // arr[idx1] = arr[idx2]
    // arr[idx2] = temp

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // iterasi dari index awal ke index akhir array
  for (let i = 0; i < arr.length; i++) {
    // atur angka terkecil saat ini index ke-i
    let lowest = i;

    // iterasi dari index ke-i + 1 sampai akhir array
    for (let j = i + 1; j < arr.length; j++) {
      // jika angka index ke-j lebih kecil dari index ke-lowest
      // jadikan index angka terkecil menjadi index j
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // jika index i tidak sama dengan lowest
    // maka lakukan pertukaran angka di index ke-i dengan index ke-lowest
    // (lowest: index angka paling terkecil dalam antrian)
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
}

module.exports = selectionSort;
