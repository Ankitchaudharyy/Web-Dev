/* 
    Ideally we want to write

    const file = download('https://www.somesite.com/image.jpg')
    const zip = compress(file, 'zip')
    upload('https://www.files.com', zip)

    Promises can do that.
*/

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
/* download('http://www.somesite.com/image.jpg')
    .then((File) => compress(File, 'zip'))
    .catch((err) => console.error(err))
    .then((Archive) => upload('ftp://www.files.com', Archive))
    .catch((err) => console.error(err))
    .catch((err) => console.error(err))
 */

download('http://www.somesite.com/image.jpg')
.then((File) => compress(File, 'zip'))
.then((Archive) => upload('ftp://www.files.com', Archive))
.catch((err) => console.error(err))
    