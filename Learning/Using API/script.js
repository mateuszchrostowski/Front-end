const url = new URL('https://api.open-meteo.com/v1/forecast?latitude=53.02&longitude=18.60&hourly=temperature_2m,precipitation,weathercode,windspeed_10m');

const geoApiURL = new URL('https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=0bbadca72db34dd3ab5361baec6f8d15');


const position = {
    lon: 0,
    lat: 0
};

const parseObject = (obj) => {
    if ( typeof(obj) == 'object' ){
        Object.entries(obj).forEach( entry => {
            const [key, val] = entry;
            if ( typeof(val) == 'object' ){
                parseObject(val);
            } else {
                return `${key} = ${val}`;
            }
        });
    } else {
        return obj;
    }
}

navigator.geolocation.getCurrentPosition( (x) => {
    console.log(x);
    position.lon = x.coords.longitude;
    position.lat = x.coords.latitude;

    url.searchParams.set('longitude', position.lon);
    url.searchParams.set('latitude', position.lat);

    geoApiURL.searchParams.set("lon", position.lon);
    geoApiURL.searchParams.set("lat", position.lat);


    fetch( url.toString().replaceAll("%2C", ","), { method: 'GET'}).then( res => res.json() ).then( data => {
        console.log(data);
    });

    fetch( geoApiURL, { method: "GET" }).then( res => res.json()).then( data => {
        console.log(data);
    })
})



// fetch(url, {
//     method: "GET"
// }).then( res => res.json() ).then( data => {
//     console.log(data);

//     // for ( const field in data ){
//     //     console.log( field + " = " + data[field]);
//     // }

//     // Object.keys(data).forEach( key => {
//     //     console.log( key + " = " + data[key]);
//     // });

//     const paragraf = document.getElementById('dane');

//     Object.entries(data).forEach( entry => {
//         const [key, val] = entry;
//         console.log( key + " = " + val );
//         if ( typeof(val) != 'object' ){
//             paragraf.innerHTML += (key + " = " + val + "<br>"); 
//         } else {
//             Object.entries(val).forEach( entry => {
//                 const [key, val] = entry;
//                 paragraf.innerHTML += (key + " = " + val + "<br>"); 
//             })
//         }
//     })
    
// });