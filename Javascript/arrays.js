// Homogeneous Arrays
let arr1 = [1, 2, 3]

// Heterogeneous Arrays
let arr2 = [1, "string", false, arr1];

// Length of an array
let l = arr2.length

// For-loops
// 1. for-loop
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i])         
}

// 2. for-of loop
for(let val of arr2){
    console.log(val)             
}

// 3. for-in loop
for(let index in arr2){
    console.log(arr2[index])    
}



// Push & Pop operations on arrays (from the end)
let fruits = ['apple', 'mango']

fruits.push('kiwi')                      // ['apple', 'mango', 'kiwi']
fruits.push('melon', 'banana')           // ['apple', 'mango', 'kiwi', 'melon', 'banana']
console.log(fruits)

fruits.pop();
console.log(fruits)                      // ['apple', 'mango', 'kiwi', 'melon']



// Shift & Unshift operations on arrays (from the front)
fruits.shift();
fruits.shift();
console.log(fruits)                      // ['kiwi', 'melon']

fruits.unshift('orange', 'grapes')
console.log(fruits)                     //  ['orange', 'grapes', 'kiwi', 'melon']


// Slice and Splice on arrays
let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do']

let omit = notes.slice(4)               // omit - [so', 'la', 'ti', 'do']
let omit2 = notes.slice(4, 6)           // omit2 - [so', 'la']
console.log(omit, omit2, notes)         // notes - ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do']

let omit3 = notes.splice(5)             // omit3 - ['la', 'ti', 'do']
let omit4 = notes.splice(0, 3, "DO", "RE", "MI")
console.log(omit3, notes)               // notes - ['do', 're', 'mi', 'fa', 'so']

let notes2 = ['sa','re', 'ga', 'ma', 'pa']
let notes3 = notes.concat('dha', 'ni')

console.log(notes2, notes3)             // notes2 - ['sa','re', 'ga', 'ma', 'pa']
                                        // notes3 - ['sa','re', 'ga', 'ma', 'pa', 'dha', 'ni']