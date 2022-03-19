const arr = ['John', 'Jane']

const mapArr = arr.map((name, index) => index + '.' + name + ' ' + 'Doe')

console.log(mapArr) // Result: [ '0.John Doe', '1.Jane Doe' ]

// Write your own myMap method
// expect result is exactly same map method

// const myMapArr = arr.myMap((name, index) => index + '.' + name + ' ' + 'Doe')

// console.log(myMapArr)
