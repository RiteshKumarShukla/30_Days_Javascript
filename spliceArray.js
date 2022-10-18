const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers)                // -> remove all items


const num = [1, 2, 3, 4, 5]
numbers.splice(0,1)
console.log(num)            // remove the first item

const nums = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(nums.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items