
const getBaseNameAndExtName = (file) => {
    const splitted = file.split('/');
    const fileName = splitted.slice(-1)[0];
    const index = fileName.lastIndexOf('.');
    const basename = fileName.slice(0, index);
    const extname = fileName.slice(index);
    return [ basename, extname ];
}

const [baseName, extName ] = getBaseNameAndExtName('/folder/myfilename.txt');
console.log(`getBaseNameAndExtName(/folder/file.txt): basename = ${baseName}, extname = ${extName}`);
