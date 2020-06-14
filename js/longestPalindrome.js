//暴力破解
/**
 * @description: 
 * @param {type} 
 * @return: 
 */
let longestPalindrome = function(s) {
  var ans = '',len = s.length
  for (var i = 0; i < len ; i++) {
  //找到一个字串后，增加步长继续暴力。
      for (var j = ans.length + i + 1; j <= s.length; j++) {
          var sub = s.substring(i, j);
          if (isPalindrome(sub)) {
              ans = sub;
          }
      }
  }
  return ans
  function isPalindrome(s) {
      var len = s.length;
      for (var i = 0; i < len / 2; i++) {
        console.log(s[i] != s[len - i - 1])
          if (s[i] != s[len - i - 1]) {
              return false;
          }
      }
      return true;
  }
  };

  longestPalindrome('a')