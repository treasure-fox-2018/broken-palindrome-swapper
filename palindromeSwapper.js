/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }

    if (isPalindrome(newStr) === true) {
        return true;
    }

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
  let compareStr = '';

  for (let i = str.length-1; i >= 0; i--) {
      compareStr += str[i];
  }

  if (compareStr === str) {
      return true;
  } else {
      return false;
  }
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
// Test case 'racecar' should be returned false because not creating a newStr that palindrome
console.log(palindromeSwapper('recacar')); // FALSE
