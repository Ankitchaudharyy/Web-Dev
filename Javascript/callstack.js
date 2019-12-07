function CEO(){
    console.log("Let's make a dent in the universe.")
    CTO()
}

function CTO(){
    console.log("Let's make a game changing product.")
    VPEngg()
}

function VPEngg(){
    console.log("Let's make a Javascript Framework.")
    TechLead()
}

function TechLead(){
    console.log("Let's port Angular to Typescript")
    Developer()
}

function Developer(){
    console.log("Let's copy some code from stackOverflow")
    throw new Error("It's an Error")
}

CEO();


// callstack.js:23 Uncaught Error: It's an Error
//     at Developer (file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:23:11)
//     at TechLead (file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:18:5)
//     at VPEngg (file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:13:5)
//     at CTO (file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:8:5)
//     at CEO (file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:3:5)
//     at file:///C:/Local%20Disk%20(D)/Projects/Web%20Development/Javascript/callstack.js:26:1