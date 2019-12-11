
/*
callbackify -> Converts a Function returning Promise to a 
*/

const utils = require('util');

function download(URL){
    console.log(`Downloading from ${URL}`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fileName = URL.split('/').pop()
            
            if(!URL.startsWith('http'))
                 return reject(new Error(`URL is incorrect`))
     
             console.log(`Downloaded and saved as ${fileName}`) 
             resolve(fileName)
         }, 3000);
    })
}

function compress(FILE, FORMAT){
    console.log(`Compressing ${FILE} to ${FILE.split('.')[0]}.${FORMAT}`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let archive = FILE.split('.')[0] + '.' + FORMAT

            if(['zip', 'lzip', '7z'].indexOf(FORMAT) === -1)
                return reject(new Error(`Compression Format Invalid !!!!`))
    
            console.log(`Compressed and saved as ${archive}`)
            resolve(archive)
        }, 3000);
    })
}

function upload(SERVER, FILE, uploaded){
    console.log('Uploading to server')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let remotePath = SERVER + '/' + FILE
    
            if(!SERVER.startsWith('ftp'))
                return reject(new Error('Cannot upload to Server'))
    
            console.log(`Uploaded to ${remotePath}`)
            resolve(null)
        }, 3000);
    })
}


const downloadCB = utils.callbackify(download)
const compressCB = utils.callbackify(compress)
const uploadCB = utils.callbackify(upload)

downloadCB('http://www.somesite.com/image.jpg', (err, File) => {
    if(err)
        throw err

    compressCB(File, 'zip', (err, Archive) => {
        if(err)
            console.warn(err)

        uploadCB('ftp://www.files.com', Archive, (err) => {
            if(err)
                throw err
        })
    })
})