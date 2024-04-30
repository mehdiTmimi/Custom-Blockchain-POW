// calculer le hash power  de votre machine
// calculer le taux de chance pour faire du mining dand Bitcoin

const { generateHashCustom } = require("./utils");

let count = 0 ;
let nonce=0;
let interval = 10
let startTime = Date.now()
let rawData ="0B+6fQrFl640qQj9quQ6bEn3QdQPTL4ztyInCaxopp5HtT89cuBvt7B09P7F5wns1GCcz4hxbkKitYy9kqWrXKPzWNncS0Gk+o2bLPNmo7gmNoj0oHEDYYVi2oK495MXoaL+nYPShS1S/aa4oV+LS2EAfiE8+8oS6RK79VbytoBzmXCuX9Y0awpXRHKy30weL+P5s17n7CGfuc0ATpFfHnhafxf4O2gD+UT49TUeJMG91ejyATI6e2HFXvJGXvi0fNdI8ne7j1m/VK5pgIByZdzPv24u1jqXayFxHcuPEi/O88rp8P5MMlib+j/l/VwD0O8vDU9hLDnFykTJuKo5gcw==317909"
while ( Date.now()- startTime < interval * 1000 ) {
    generateHashCustom(rawData +nonce)
    nonce++;
    count++;
}
let myHashrate= count/interval
console.log("hash rate is : ", myHashrate , " h/s");

// estimated time = 10/fraction of your hash rate
// fraction = my hash rate / hash rate global
let globalHashRate2024=620836827398963500000
let global2012 = 10000000000000
let global2010 = 8000000

let estiamted2012 = 10/(myHashrate/global2012)
estiamted2012=estiamted2012/(60*24) // jour
let estiamted2010 = 10/(myHashrate/global2010)
estiamted2010=estiamted2010/(60*24) // jour
let estiamted2024 = 10/(myHashrate/globalHashRate2024)
estiamted2024=estiamted2024/(60*24) // jour

console.log("average time on 2010 : ", estiamted2010 );
console.log("average time on 2012 : ", estiamted2012 );
console.log("average time on 2024 : ", estiamted2024 );
