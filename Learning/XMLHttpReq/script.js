const xhr = new XMLHttpRequest();

xhr.open("GET", "https://tt-test.ablewski.pl/peerServer", true);
//xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15");
//xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost");
//xhr.setRequestHeader("Origin", "https://localhost");
xhr.send();

console.log( xhr.status );

setTimeout( () => {
    console.log( xhr.status );
    console.log(xhr.responseText);
}, 5000);