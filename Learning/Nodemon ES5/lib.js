const sayHelloFromLib = (userName) => {
    return `Hello ${userName}`;
}

module.exports.hello = sayHelloFromLib;