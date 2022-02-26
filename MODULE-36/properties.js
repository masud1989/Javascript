const bottle = { 
                    color: 'RED', 
                    Hold: 'Water', 
                    price: 120, 
                    isCleaned: true 
                };
// getting all Properties======================

// getting all keys 
const keys = Object.keys(bottle);
// console.log(keys);

// getting all values 
const values = Object.values(bottle);
console.log(values);

// getting entries 
const pairs = Object.entries(bottle);
// console.log(pairs);

// control delete option 
Object.seal(bottle);
Object.freeze(bottle);
bottle.price=200;
// delete 
delete bottle.isCleaned;
console.log(bottle);

