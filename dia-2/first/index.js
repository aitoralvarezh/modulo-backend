const faker = require ('faker');

console.log(faker.address.city());

console.log(faker.image.city());
console.log('cambio autoejecutable con nodemon');

//usar ./node_modules/.bin/nodemon'
const lodash = require ('lodash')

const myarr = [1,2,3,4,5,6,6,7,8,8,9,9];
const myarr2 = [28, 29]
const myarrNoDups = lodash.uniq(myarr);

console.log(myarrNoDups);

// o usar npm run dev