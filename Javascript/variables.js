// var, let and const

var a = 10
a = 11
console.log(a++)                           // 12

let b = 20
b++;
console.log(b)                             // 21

const c = 31
 // c++;         - ERROR
console.log(c);


// const variable cannot be used to assign
const obj = {
    k1: 100,
    k2: 'Ankit',
    k3: '19'
}
console.log(obj)             //  { k1: 100, k2: 'Ankit', k3: '19' }
obj.k4 = 'Delhi'
console.log(obj)             //  { k1: 100, k2: 'Ankit', k3: '19', k4: 'Delhi' }


const arr = [1, 2, 3]
console.log(arr)            // [1, 2, 3]
arr.push(4)
console.log(arr)            // [1, 2, 3, 4]



// Scopes of var, let & const
// var -> function scoped

var a = 10

function sayNo(a){
    console.log(a)         // 10
    var a = 20
    console.log(a)         // 20
}

console.log(a)            // 10
sayNo(a)
console.log(a)            // 10


// let, const -> block scoped

let x = 'Ankit'
console.log(x)                             // Ankit

function printName() {
    console.log(x)                         // Ankit

    // New Scope
    if(true){                              
        let x = 'Ankit Chaudhary'
        console.log(x)                     // Ankt Chaudhary
    }
    console.log(x)                        // Ankit
}

printName(x)

{
    let x = 'Y'                           
    console.log(x)                        // Y

    // Scope inherited
    {                                         
        console.log(x)                    // Y
    }
}

console.log(x)                            // Ankit
