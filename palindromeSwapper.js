/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) { //penulisan i++ diganti menjadi j++
      if (i === j) {
        newStr += str[j+1];//yang dilakukan perubahan adalah str[j++] menjadi str[j+1] karena yang diinginkan adalah penukaran pada karakter setelahnya
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
      debugger
    }
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true; //dilakukan pengecekan penulisan join() menjadi join('')
  debugger                                                   //dan ketika dilakukan 'return' tidak perlu menggunakan console.log lagi sehingga diganti langsung return true
  return false;//sama seperti yang return true, dihapus return console.log menjadi return false
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
