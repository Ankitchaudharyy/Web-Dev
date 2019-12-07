// setTimeout(function, delay, *arguments)

console.log("Wait starts !! ");
setTimeout(console.log, 2000, "After 2 seconds");

(function (){
    function sayHello(name){
        console.log(`Hello ${name} :)`);
    }
    setTimeout(sayHello, 2000, "Ankit");
})();



// setInterval(function, delay)
// setInterval function will not stop until it is being stopped.

let count = 0;
function anonymous(){
    count++;

    if(count > 5){
        clearInterval(intervalId);
    }
    console.log("After each second ....");
}

let intervalId = setInterval(anonymous, 1000);