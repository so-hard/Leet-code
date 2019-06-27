import { strLengthFun } from './../js/lengthOfLongestSubstring'
const strArr = [
    {
        str: 'a',
        description: '1,test reapte str',
        expect: 1
    },
    {
        str: 'abcd',
        description: '2, test no reapte str',
        expect: 4
    },
    {
        str: '',
        description: '3, test null str',
        expect: 0
    }, {
        str: 'abccbcbb',
        description: '4, test null str',
        expect: 3
    }

]


strArr.forEach(
    (val) => {
        test(val.description, () => {
            expect(strLengthFun(val.str)).toBe(val.expect)
        })
    }
)

