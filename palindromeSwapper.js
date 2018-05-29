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
    for (var j = 0; j < str.length; j++) { //previous was i++ , it should be j++ to increase j value each loop
      if (i === j+1 && i !== 0) { // change i === j+1 and add !==0 , this will skip swap when index i = 0 to approach test case 2
        newStr += str[j+1]; //previous was j++ , we should add to string index j+1, to swap with next index
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    debugger; //add debugger
    if (isPalindrome(newStr)) return true;
    newStr='';
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
  if (str.split('').reverse().join("") === str) return true; //previous was join() this make the joined string splitted by ',', should be join("")
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('raecaer')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
