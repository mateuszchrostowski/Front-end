const myFun1 = (name) => {
    //return "Hello " + name;
    return `Hello ${name}`;
}

const myFun2 = async (name) => {
    return new Promise( (resolve, reject) => {
        let res = '';
        setTimeout( () => {
            res = `Hello ${name}!`;
            console.log(res);
            resolve(res);
        }, 5000);
    });
}

const wrapFun2 = async () => {
    const res = await myFun2("Matt");
    console.log(`Wywołanie myFun2 zwróciło: ${res}`);
}

console.log(`Wywołanie myFun1 zwróciło: ${myFun1("Matt")}`);
myFun2("Matt").then( (res) => {
    console.log(`Wywołanie myFun2 zwróciło: ${res}`);
});
for ( i=0; i<10; i++ ){
    setTimeout( () => {
        console.log(i);
    }, 1000);
}

wrapFun2();

