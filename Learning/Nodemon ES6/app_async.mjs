import { createServer } from 'http';
import { fun2 as fun2ZModulu } from './lib.mjs';

const sayHello = (userName) => {
    return `Hello ${userName}`;
}

createServer((req, res) => {
    console.log("Przyszło zapytanie do serwera");
    console.log(sayHello("World"));
    console.log(fun2ZModulu("TORUŃ"));
    res.end();
}).listen(3000, async () => {
    console.log("Serwer nie pyta, serwer słucha");
    // import dynamiczny
    const obj = await import('./lib2.mjs');
    obj.funkcja();
});