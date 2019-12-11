
const utils = require('util');

function download(URL, downloaded){

    console.log(`Downloading from ${URL}`)

    setTimeout(() => {
       let fileName = URL.split('/').pop()
       
       // ERROR-first Callback
       if(!URL.startsWith('http'))
            return downloaded(new Error(`URL is incorrect`), fileName)

        console.log(`Downloaded and saved as ${fileName}`)

        if(typeof downloaded === 'function')
            downloaded(null, fileName)
    }, 3000);
}

function compress(FILE, FORMAT, compressed){

    console.log(`Compressing ${FILE} to ${FILE.split('.')[0]}.${FORMAT}`)

    setTimeout(() => {
        let archive = FILE.split('.')[0] + '.' + FORMAT

        // ERROR-first Callback
        if(['zip', 'lzip', '7z'].indexOf(FORMAT) === -1)
            return compressed(new Error(`Compression Format Invalid !!!!`), archive)

        console.log(`Compressed and saved as ${archive}`)

        if(typeof compressed === 'function')
            compressed(null, archive)
    }, 3000);
}

function upload(SERVER, FILE, uploaded){

    console.log('Uploading to server')

    setTimeout(() => {
        let remotePath = SERVER + '/' + FILE

        // ERROR-first Callback
        if(!SERVER.startsWith('ftp'))
            return uploaded(new Error('Cannot upload to Server'))

        console.log(`Uploaded to ${remotePath}`)

        if(typeof uploaded === 'function')
            uploaded(null)
    }, 3000);
}

// download('http://www.somesite.com/image.jpg', (err, File) => {
//     if(err)
//         throw err

//     compress(File, 'zip', (err, Archive) => {
//         if(err)
//             console.warn(err)

//         upload('ftp://www.files.com', Archive, (err) => {
//             if(err)
//                 throw err
//         })
//     })
// })


const downloadPromise = utils.promisify(download)
const compressPromise = utils.promisify(compress)
const uploadPromise = utils.promisify(upload)

download('http://www.somesite.com/image.jpg')
.then((File) => compress(File, 'zip'))
.then((Archive) => upload('ftp://www.files.com', Archive))
.catch((err) => console.error(err))