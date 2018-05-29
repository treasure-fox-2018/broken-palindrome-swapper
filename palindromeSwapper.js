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
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        // console.log(str[j+1])
        newStr += str[j+1]; // before newStr += str[j++]
        newStr += str[i]; // before newStr += str[j]
        // console.log(newStr)
        j++;
        // console.log(j)
      } else {
        newStr += str[j];
      }
      // debugger;
    }
    // debugger;
    // console.log(isPalindrome(newStr))
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
  if (str.split('').reverse().join("") === str) return true; // before join(), before console.log(return true)
  return false; // before console.log(return false)
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
