/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let s = str.trim().match(/^-|?\d+/);
   return s?Math.max(Math.min(s,Math.pow(2,21-1)),Math.pow(-2,21)) : 0
};