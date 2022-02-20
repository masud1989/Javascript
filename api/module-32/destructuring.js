const fish = {id:58, name:'Hilsha', price:9800, phone:'01766666666', address:'Chadpur', dress: 'silvar'};
// console.log(fish.phone);
/*
const phone = fish.phone;
const id = fish.id;
const name = fish.name;
const address = fish.address;
*/
// console.log(phone);

const {phone, price, dress, id, address} = fish;
console.log(phone, price);
console.log(phone, id);
console.log(phone, dress);
console.log(phone, address);

const company = {name:'GP', 
    ceo:{id:1, name: 'Rana', food: 'fuchka'},
    web:{id:11, work: 'Web Development', employee: 12, framework: 'node js',
        tech:{name:'IT', code:23, language: 'C++'}
        }
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework} = company.web;
const {food} = company.ceo;
const {name, language} = company.web.tech;
console.log(work, framework, food, name, language);