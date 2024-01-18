const nums = [1, 3, 6, 9, 11, 15, 21, 25, 28, 30, 32, 34, 36, 40, 44, 45]

// 1
const getSquares = (nums) => { 
    return nums.map((number) => {
        return number ** 2
    })
}

// 2
const isDivBy3 = (nums) => {
    return nums.map((number) => {
        return number % 3 === 0
    })
}

// 3
const filterOdds = (nums) => { 
    return nums.filter((number) => {
        return number % 2 === 1
    })
}

// 4
const filterEvens = (nums) => { 
    return nums.filter((number) => {
        return number % 2 === 0
    })
}

// 5
const filterDivBy4 = (nums) => { 
    return nums.filter((number) => {
        return number % 4 === 0
    })
}

// 6
const addAllUp = (nums) => { 
    return nums.reduce((accumulator, value) => {
        return accumulator + value
    }, 0)
}

// 7
const multiplyAllNums = (nums) => { 
    return nums.reduce((accumulator, value) => {
        return accumulator * value
    }, 0)
}

// BONUS
const sumSquareAllNums = (nums) => { 
    return nums.reduce((accumulator, value) => {
        return accumulator + (value ** 2)
    }, 0)
}

// BONUS
const addAllAges = (nums) => {
    return nums.map((item) => {
        return item.age
    }).reduce((accumulator, value) => {
        return accumulator + value
    })
}
const names = [ { name: 'Carl', age: 30 }, { name: 'Cara', age: 10 }, { name: 'Carmen', age: 15 } ]
addAllAges(names)