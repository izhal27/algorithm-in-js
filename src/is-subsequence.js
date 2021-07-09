// Tugas: diberikan dua string melalui parameter, periksa jika string kedua
// terdapat kecocokan dengan string yang pertama.
//
// contoh:
// isSubsequence('hello', 'hello world') = true
// isSubsequence('sing', 'sting') = true
// isSubsequence('abc', 'abracadabra') = true
// isSubsequence('abc', 'acb') = false (urutan huruf penting)

// O(n + m)
function isSubsequence(str1, str2) {
  // jika str1 kosong, kembalikan true
  if (!str1) {
    return true;
  }

  // koleksi char pada str1
  const collection = [];

  // tambahkan setiap char pada str1 ke array collection
  for (let i = 0; i < str1.length; i++) {
    collection.push(str1[i]);
  }

  // ambil char yang di index ke-0/pertama dari str2
  let char = collection.shift();

  // ulangi setiap char di str2
  for (let i = 0; i < str2.length; i++) {
    // jika char str1 saat ini sama dengan char str2
    // dan index kurang dari panjang str2 dikurangi 2
    // untuk menghidari kesamaan huruf str1 di akhir
    // str2 (karena urutan huruf penting),
    // lalu ambil kembali char berikutnya dari str2
    if (char === str2[i] && i < str2.length - 1) {
      char = collection.shift();
    }
  }

  // jika koleksi item di array kosong/habis,
  // maka terdapat kecocokan kata str1 di str2
  return !collection.length;
}

// O(n)
function isSubsequence2(str1, str2) {
  // variable penampung index huruf str1 dan str2
  var i = 0;
  var j = 0;

  // jika str1 kosong, kembalikan true
  if (!str1) {
    return true;
  }

  // ulangi selama j kurang dari panjang str2
  while (j < str2.length) {
    // jika char str1 dan str2 sama maka geser index i ke kanan
    // dengan cara menambahkan 1
    if (str2[j] === str1[i]) {
      i++;
    }

    // jika index i sama dengan sama dengan panjang str2
    // berarti terdapat kecocokan kata str1 di str2
    if (i === str1.length) {
      return true;
    }

    j++;
  }

  // tidak terdapat kecocokan
  return false;
}

module.exports = { isSubsequence, isSubsequence2 };
