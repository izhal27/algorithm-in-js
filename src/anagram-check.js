// Tugas: diberikan dua buah argumen, periksa jika kedua argumen
// merupakan tipe anagram,
// kembalikan true jika kedua argumen adalah kata dengan tipe anagram
//
// contoh:
// anagramCheck('', '') = true
// anagramCheck('anagram', 'nagaram') = true
// anagramCheck('data', 'adat') = true
// anagramCheck('aaz', 'zza') = false
// anagramCheck('rat', 'car') = false

// O(n)
function anagramCheck1(str1, str2) {
  // kembalikan false jika kedua kata tidak sama panjang
  if (str1.length !== str2.length) {
    return false;
  }

  // variable penampung seberapa banyak kata yang ada di str1
  const frequencyItemStr1 = {};
  // variable penampung seberapa banyak kata yang ada di str2
  const frequencyItemStr2 = {};

  // buat data seberapa banyak frekuensi kata yang ada di str1
  for (const str of str1) {
    frequencyItemStr1[str] = (frequencyItemStr1[str] || 0) + 1;
  }

  // buat data seberapa banyak frekuensi kata yang ada di str2
  for (const str of str2) {
    frequencyItemStr2[str] = (frequencyItemStr2[str] || 0) + 1;
  }

  for (const key in frequencyItemStr1) {
    // jika frequensi kata str2 tidak sama dengan yang ada di str1,
    // kembalikan false
    if (frequencyItemStr2[key] !== frequencyItemStr1[key]) {
      return false;
    }
  }

  return true;
}

// O(n)
function anagramCheck2(str1, str2) {
  // kembalikan false jika kedua kata tidak sama panjang
  if (str1.length !== str2.length) {
    return false;
  }

  // variable penampung banyakya setiap huruf yang ada pada str1,
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];

    // jika huruf belum ada pada variable lookup,
    // maka atur default huruf menjadi 1,
    // sebaliknya jika sudah ada, tambahkan 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];

    // jika huruf str2 yang berada di index ke-i tidak berada di lookup,
    // kembalikan false
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

module.exports = { anagramCheck1, anagramCheck2 };
