// Tugas: Periksa jika terdapat item yang sama dalam argumen
// yang diberikan
//
// contoh:
// areThereDuplicates(1, 1) = true
// areThereDuplicates(1, 2, 2) = true
// areThereDuplicates('a', 'b', 'c', 'a') = true
// areThereDuplicates(1, 2, 3) = false
// areThereDuplicates(3, 5, 1, 8, 7, 4, 2, 9) = false

// O(n log n)
const areThereDuplicates = (...args) => {
  // urutkan arguments(array) secara ascending
  args.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return a.toString().localeCompare(b.toString());
    }
  });

  // variable penampung pasangan item yang ingin dicek
  let start = 0;
  let next = 1;

  // ulangi selama nilai next kurang dari panjang arguments
  while (next < args.length) {
    // jika terdapat item yang sama, maka kembalikan true
    if (args[start] === args[next]) {
      return true;
    }

    // naikan nilai setiap kali iterasi
    start++;
    next++;
  }

  // tidak terdapat item yang sama
  return false;
};

module.exports = areThereDuplicates;
