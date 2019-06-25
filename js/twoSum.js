
let twoSum =  ([nums, target]) => {
    let result;
    nums.forEach(
        (value, index) => {
            if(result){
                return
            }else{
                for(let i = index + 1; i < nums.length; i++) {
                    if (value + nums[i] == target) {
                        result = [index, i]
                    }
                }
            }
        }
    )
    return result
};

export {twoSum}