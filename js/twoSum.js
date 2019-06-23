
let twoSum = function ([nums, target]) {
    let hash = {},
        result,
        diff;
    nums.forEach(
        (value, index) => {
            if (result) {
                return
            } else {
                diff = target - value
                if (value in hash) {
                    result = [hash[value], index]
                }
                else {
                    hash[diff] = index
                }
            }
        }
    )
};

twoSum([[1, 2, 5, 8], 3])

module.exports = twoSum