const serwerek = require('http');
const hello = require('./lib');
const lib2 = require("./lib2");

const { fun2, fun3 } = require('./lib3');

const sayHello = (userName) => {
    return `Hello ${userName}`;
}

const server = serwerek.createServer((req, res) => {
    console.log("Req to server");
    console.log(sayHello("World"));
    console.log(hello.hello("Toruń"));
    console.log(lib2.fun2("World"));
    res.end();
});

server.listen(3000, () => {
    console.log("Server listenes");
})