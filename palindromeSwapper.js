/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {

  for (var i = 0; i <= str.length; i++) { //kurang =
      let newStr = ''; //pindah posisi
    for (var j = 0; j < str.length; j++) { //diganti jadi j++
      if (i === j) {
        newStr += str[j+1];//kurang +1
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr))
    return true; //salah posisi
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
  if (str.split('').reverse().join("") === str) return true; //kurang "" di join & tidak pakai console.log()
  return false; //tidak pakai console.log
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
