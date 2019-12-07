// PROMISES in Javascript
// Works only in latest version of Chrome/ Firefox/ Safari, 
// ES 6  or
// use BlueBird Library

/* Promise(functon (resolve, reject) ) */


function fakeDownloadPromise(correct){
    console.log("Downloading Data !!!")
    return new Promise( function (resolve, reject) {
        setTimeout(() => {
            let dowmloadedData = "Some data from the Internet";
            
            if(correct){
                resolve(dowmloadedData);
            }
            else{
                reject(new Error("Error Downloading this file !"))
            }
        }, 1000);
    }); 
}
let download = fakeDownloadPromise(true);
download.catch(function (err){
    console.log(err);
})

download.then(function (data){
    setTimeout(() => {
        console.info(data);
    }, 1000);
})






const a = 2;
let p = new Promise((resolve, reject) => {
    let b = a + 10;
    if(b > 10){
        resolve('Succeed')
    }
    else{
        reject('Failed')
    }
});

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});







const recordedVideo1 = new Promise((resolve, reject) => {
    resolve("Video 1 recorded...")
})

const recordedVideo2 = new Promise((resolve, reject) => {
    resolve("Video 2 recorded....")
})

const recordedVideo3 = new Promise((resolve, reject) => {
    resolve("Video 3 not recorded !!!")
})

Promise.all([
    recordedVideo1,
    recordedVideo2,
    recordedVideo3
]).then((message) => {
    console.log(message)
})


Promise.race([
    recordedVideo1,
    recordedVideo2,
    recordedVideo3
]).then((message) => {
    console.log(message)
})



