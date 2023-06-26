
// fetch("https://tt-test.ablewski.pl/peerServer", {
//     method: "GET"
// }).then( res => {
//     console.log(res.status);
//     return res.json();
// }).then( data => {
//     console.log(data);
// })
// console.log("Zaraz po fetch'u...");

const myFun = async () => {
    const res = await fetch("https://tt-test.ablewski.pl/peerServer", { method: "GET" });
    const data = await res.json();
    console.log(data); 
}

myFun();
