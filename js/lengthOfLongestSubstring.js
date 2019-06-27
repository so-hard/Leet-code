let strLengthFun = (s) =>{
    let start = 0, end = 1,max = 0,len = s.length;
    while(end <len){
        let sonStr = s.slice(start,end);
        let repeatPlace = sonStr.indexOf(s[end]);
        start = repeatPlace == -1?start: start+ 1+repeatPlace;
        end++;
        max = end - start> max? end-start : max 
    }
    return max = len == 1? 1: max
}
export {strLengthFun}
// let i = 0,
// y;
// console.log(y= i++, i)
// strLengthFun("")
