const twoSum = require('./../js/twoSum');

const testAray = [
    {
        description: '相邻的元素测试',
        arrayArg: [[5, 20, 50, 70], 25],
        expectedArray: [0, 1]
    },
    {
        description: '有间隔相加测试',
        arrayArg: [[5, 20, 50, 70], 75],
        expectedArray: [0, 3]
    },
]


testAray.forEach(
    (val) => {
        test(val.description, ()=>{
            expect(twoSum(val.arrayArg)).toEqual(val.expectedArray)
        })
})

