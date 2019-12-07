// CLOSURES in Javascript

var count = (function (){
   
   var privateCounter = 0;
   function add(val){
       privateCounter += val;
   } 

   function subtract(val){
       privateCounter -= val;
   }

   return {
       increment: function(){
            return add(2);
       },

       decrement: function(){
           return subtract(2);
       },

       value: function(){
           return privateCounter;
       }
   };
})();

console.log(count.value());
count.increment();
count.increment();
console.log(count.value());

count.decrement();
count.decrement();
count.increment();
console.log(count.value());