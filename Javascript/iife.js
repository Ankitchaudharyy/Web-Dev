// IIFE's -> Immediately Invoked Function Expression

function printHello(){
    console.log('Hello')
}
printHello();

// IIFE
(function (){
    console.log('Hello')
})();

// IIFE's can be used to create local (block) scope in ES5 (& ES6) in global scope
(function (){
    var a = 10
    var b = a/5
    console.log(a+b)
})()
// console.log(a)               // ERROR - out of scope

if(true){
    (function (){
        var a = 20
        console.log(a)
    })()
     // console.log(a)         // EROOR - out of scope
}


// IIFE's are also used for function minimization
function doMath(){
    console.log("3^4 = " + Math.pow(3,4))
    console.log("4^3 = " + Math.pow(4,3))
    console.log("root 2 = " + Math.sqrt(2))
    console.log("sin10 = " + Math.sin(10))
}
doMath();

// in IIFE
(function (l, p, r, s){
    l("3^4 = " + p(3,4))
    l("4^3 = " + p(4,3))
    l("root 2 = " + r(2))
    l("sin10 = " + s(10))
})(console.log, Math.pow, Math.sqrt, Math.sin);


//
for (var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}                                  // 5, 5, 5, 5, 5

for (let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}                                 // 0, 1, 2, 3, 4

for (var i=0; i<5; i++){
    (function (j){
        setTimeout(function (){
            console.log(j)
        }, 100)
    })(i);                       // 0, 1, 2, 3, 4
}

for (var i=0; i<5; i++){
    setTimeout(console.log, 100, i)
}                                // 0, 1, 2, 3, 4

