// O(n^2)
function insertionSort(arr) {
  // iterasi dari angka di index k-1 sampai akhir
  for (let i = 1; i < arr.length; i++) {
    // tetapkan angka index ke-i sebagai angka saat ini yang ingin dicek
    const currentVal = arr[i];

    // iterasi angka dari index ke-i - 1 dan cek jika angka di index ke-j
    // lebih besar dari angka di variable currentVal
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // jika angka di index ke-j lebih besar dari angka di variable currentVal
      // jadikan angka di index ke-j + 1 menjadi angka di index ke-j
      arr[j + 1] = arr[j];
    }

    // tetapkan/jadikan angka di index ke-j + 1
    // dengan angka di variable currentVal
    arr[j + 1] = currentVal;
  }

  return arr;
}

module.exports = insertionSort;
