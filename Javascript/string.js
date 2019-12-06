let str = "This is a string"
// console.log(str)

let str1 = 'This is Ankit\'s string'
// console.log(str1)

let p = 'Ankit'
let str2 = `This is ${p}'s string`
// console.log(str2)

let longstr = 'This \
is \
a \
very \
long string.'
// console.log(longstr)



// String Functions - length, indexOf(), lastindexOf()
let len = str.length

str = `This-is-a-very-easy-job.`
console.log(str.indexOf('is'))              // 2
console.log(str.indexOf('is', 3))           // 5

str1 = `ab abb ba abbbb ab aba`
 console.log(str1.lastIndexOf('ab'))        // 19
 console.log(str1.lastIndexOf('ab', 13))    // 10



// slice(), substring(), substr()
let slc = str.slice(5, 10)
console.log(slc)                             // is-a-

slc = str.slice(-17, -12)
console.log(slc)                             // -a-ve

substring1 = str.substring(5, 10)
console.log(substring1)                      // is-a-

substring2 = str.substr(3, 5);
console.log(substring2)                      //  s-is-

substring2 = str.substr(-10, 5);
console.log(substring2)                      //  -easy

