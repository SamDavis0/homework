//Homework - Anonymous Functions & Callbacks


// 1. Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
var nums = [1, 5, -2, -4, 0, -1, 2]
let positives = nums.filter(num => num > 0)

console.log(positives);


// 2. Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
var nums2 = [5, 10, 66, 23, 29, 30, 40]
let evens = nums2.filter(num => num % 2 == 0)

console.log(evens);


// 3. Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
var nums3 = [1, 2, 3]
let squareTheNums = nums3.map(num =>{ 
    return num * num
    })
    console.log(squareTheNums);


// 4. Cities 1
// Write a function which takes an array of city objects like such:
var cities = [
{ name: 'Los Angeles', temperature: 60.0},
{ name: 'Atlanta', temperature: 52.0 },
{ name: 'Detroit', temperature: 48.0 },
{ name: 'New York', temperature: 80.0 } ];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
let coolTemp = cities.filter(obj => obj.temperature < 70)

console.log(coolTemp);



// 5. Cities 2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
let cityNames = cities.map(obj => obj.name)

console.log(cityNames);



// 6. Good Job!
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.
let congrats = people.map(obj => {
    obj.people
    return `Good Job, ${obj}!`
})
console.log(congrats);





// 7. Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

let abcNames = people.sort()

console.log(abcNames);



// 8. Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

let lengthNames = people.sort((a, b) => a.length - b.length)

console.log(lengthNames);



// 9. Sort an array, 3
// Given an array of array of numbers like:

var arr = [
[1, 3, 4],
[2, 4, 6, 8],
[3, 6] ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
function sum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum+= array[i]
    }
    return sum
}
let arrSum = arr.sort((a,b) => sum(a) - sum(b))

console.log(arrSum);

// 10. 3 times
// Given this function:

function call3Times(fun) { fun(); fun(); fun(); }
// Use the call3Times function to print "Hello, world!" 3 times.
var hello = () => console.log("Hello world!");

call3Times(hello);



// 11. n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.
function callNTimes(num, fun) {
    for(i = 0; i < num; i++){
        fun()
    }
}

var hello = () => console.log("Hello world!");

callNTimes(5, hello)


// 12. Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3])
// 6
let arr2 = [1, 5, 5]
function sum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum+= array[i]
    }
    return sum
}
console.log(sum(arr2));


// 13. Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

let arr5 = ['very', 'important', 'person']
let arr6 = ['national', 'aeronautics', 'space', 'administration'] //'NASA'

let str = arr5.toString()

let acro = str.split(" ").map(x => x[0]).join("")
console.log(acro);













