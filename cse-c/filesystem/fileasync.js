const fspromise = require('fs/promises');

const read=async () => {
    const data =await fspromise.readFile("./data.txt","utf-8");
    console.log(data)
}
const write=async () => {
    await fspromise.writeFile("./data2.txt","my name is anant","utf-8");
    console.log(data)
}
read();
write()