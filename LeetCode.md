# 记录解题过程

## 两数之和

>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。      
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。


```js
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//双层循环解决
let twoSum = function (nums, target) {
    let result;
    nums.forEach(
        (value, index) => {
            for (let i = index + 1; i < nums.length; i++) {
                if (value + nums[i] == target) {
                    result = [index, i]
                }
            }
        }
    )
    return result
};
```

## 两数相加

>  给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位数字。      
>如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。      
>您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```js
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
var addTwoNumbers = function (l1, l2) {
    let listNode = new ListNode,//初始化一个节点
        l = listNode,//指向初始化节点
        num,
        flag = 0;//进位
    do {
        let val1 = l1 == null ? 0 : l1.val,//获取l1节点的值如果节点为空则为0
            val2 = l2 == null ? 0 : l2.val;
        l1 = l1 == null ? null : l1.next//指向下一个节点
        l2 = l2 == null ? null : l2.next
        num = val1 + val2 + flag
        flag = parseInt(num / 10)//判断是否进位
        l = l.next = new ListNode(num % 10)
    } while (l1 || l2);
    if (flag == 1) {
        nodes.next = new ListNode(1)
    }
    return listNode.next
};
```

## 无重复字符的最长子串

>给定一个字符串输出他的最长子串的长度       
输入: "pwwkew"     
输出: 3     
解释: 因为无重复字符的最长子串是 "wke"，所以其长度 为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是 一个子序列，
不是子串。


```js
// 1. 判断传入的字符串长度，长度为0直接返回0，若为1返回1
// 2. 截取字符串，判断下一个字符是否重复
// 3. 如果重复替换其实位置
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
```

## 统计字符串字符出现的次数

> 输入一串字符串，统计每个字符串出现的次数。  
"aaabbb"=>"a3b3"

```js
let collectReStr = (str)=> {
    let map = new Map()；
    for (const list of str) {
        map.has(list) ?map.set(list,map.get(list)+1) : map.set(list,1)
    }
    return [].concat(...map).join("")
}
```
