// For loop structure
for(initialization, condition, increment/decrement) {
    // code goes here
  };


  for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  
  // 0 1 2 3 4 5

  for(let i = 5; i >= 0; i--){
    console.log(i)
  }
  
  // 5 4 3 2 1 0

  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }


  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]





const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15