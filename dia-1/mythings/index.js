setTimeout(() => {
    console.log('hoola');
}, 1000);

const interval = setInterval(() => {
    console.log('hello  form setInterval');
}, 1000);

const timeout = setTimeout(() => {
    console.log('another timeout');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout);
}, 2000); //AL TENER UN CLEAR MENOR AL TIMEOUT NO LLEGA A EJECUTARSE EL TIMEOUT PORQUE EL CLEAR LO CORTA.

setTimeout(() => {
    clearInterval(interval)
}, 8000);