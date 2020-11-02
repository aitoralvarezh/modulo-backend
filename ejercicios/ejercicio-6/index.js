const fecha = new Date ();
const dateFns = require('date-fns');
// const {add, sub} = require('date-fns')

console.log(fecha.getTime());

const date2 = dateFns.add(fecha, {months:2, days: 4 })
console.log(date2);

const date3 = dateFns.sub(date2, { years: 5})
console.log(date3);

const formatDate3 = dateFns.format(date3, "dd/MM/yyyy")

console.log(formatDate3);