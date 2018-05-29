/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  for(let z = -1; z < str.length-1; z ++){
    let swapedStr = '';
    let nextStr;
    for(let j = 0; j < str.length; j++){
      if(z === j){
        swapedStr += str[j+1];
        nextStr = j+1;
        continue;
      }
      if(j === nextStr){
        swapedStr += str[nextStr-1];
        continue;
      }
      swapedStr += str[j];
     } if(isPalindrome(swapedStr) === true){
      return true;
     };
   }return false;
}


/**
* @function isPalindrome
* Cek apabila kata merupakan palindromeSwapper
* @param {string} str - input kata yang dicek bila palindrom
* @returns {boolean} true bila kata adalah palindrom
*/
function isPalindrome(str) {
if (str.split('').reverse().join('') === str) {
  return true;
}
return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
