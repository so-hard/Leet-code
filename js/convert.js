/**
 * @description: 
 * @param {String} s 
 * @param {Number} num
 * @return: 
 */
const convert = (s,num) =>{
  let arr = new Array(num).fill('')
  let [i,flag] = [0,1];
  for (const sub of s) {
    arr[i] += sub;
    i+=flag
    flag = i == 0||i== num-1?-flag: flag
    console.log(i,flag,arr)
  }
  return arr.join()
}
convert("PAYPALISHIRING",3)
