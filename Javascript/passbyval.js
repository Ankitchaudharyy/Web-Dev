// In Javascript, values to a function are passed only by value

// for primitive data-types
var a = 10
function printNO( A ){                // Pass by value
    var A = 20
    console.log(A)
}
printNO(a)
console.log(a)



// for arrays and objects
var arr = [ 1, 2, 3]

// original array
console.log(arr)                     // [1, 2, 3]

function printArr(Arr){
    Arr[0] = 10
    Arr[1] = 20
    Arr[2] = 30
}
printArr(arr)

// Array changed
console.log(arr)                   // [10, 20, 30]


/* Arrays and objects are passed by value to the functions. It is just the reference of the variable which is passed by value */
