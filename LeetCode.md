# 记录解题过程

## 1.两数之和

```js
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