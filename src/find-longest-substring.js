// Tugas: carilah sebuah kata terpanjang yang mengandung
// huruf berbeda
//
// contoh:
// findLongestSubstring('') = 0
// findLongestSubstring('rithmschool') = 7
// findLongestSubstring('thisisawesome') = 6
// findLongestSubstring('thecatinthehat') = 7
// findLongestSubstring('bbbbbb') = 1
// findLongestSubstring('longestsubstring') = 8
// findLongestSubstring('thisishowwedoit') = 6

// O(n^2)
function findLongestSubstring(str) {
  // jika tidak ada string kembalikan 0
  if (!str.length) {
    return 0;
  }

  // variable penampung kata terpanjang
  let longest = 0;
  // variable penampung huruf yang berbeda
  let lookup = {};

  // ulangi iterasi sepanjang kata
  for (let i = 0; i < str.length; i++) {
    // tetapakan huruf index ke-i telah ada sebelumnya
    lookup[str[i]] = true;
    // variable penampung index dan huruf selanjutnya
    let next = i + 1;
    let char = str[next];

    // ulangi selama index ke-next kurang dari panjang kata
    // dan huruf sekarang belum ada di key object lookup
    while (next < str.length && !lookup[char]) {
      // tetapkan huruf sekarang dalam object lookup telah ada
      //
      lookup[str[next]] = true;
      next++;
      char = str[next];
    }

    longest = Math.max(next - i, longest);
    lookup = {};
  }

  // kembalikan kata jumlah terpanjang
  return longest;
}

// O(n)
function findLongestSubstring2(str) {
  // variable penampung kata terpanjang
  let longest = 0;
  // variable penampung huruf yang telah melalui iterasi
  let seen = {};
  // variable penampung index awal setelah huruf duplikat ditemukan
  let start = 0;

  // ulangi iterasi selama panjang kata
  for (let i = 0; i < str.length; i++) {
    // huruf saat ini yang diperiksa
    let char = str[i];

    // jika huruf saat ini sudah ada dalam objek seen/duplikat
    // tetapkan index start setelah huruf saat ini yang ditemukan index ke-i + 1
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // periksa kata terpanjang dengan mengurangi index i dengan start
    // dan ditambahkan 1 (karena index dimulai dari 0).
    // lalu tambahkan huruf saat ini ke object seen dengan data index
    // i ditambah 1 (karena index dimulai dari 0)
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  // kembalikan kata jumlah terpanjang
  return longest;
}

module.exports = { findLongestSubstring, findLongestSubstring2 };
