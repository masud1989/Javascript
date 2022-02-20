const friends = ['Rubel', 'Polash', 'Bulbul', 'Mithu', 'Tushar', 'Mamun'];

// finding length of name 
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
                    {name:'Water Bottle', price:40, color:'Yellow'},
                    {name:'Screw Driver', price:400, color:'Green'},
                    {name:'Printer', price:24000, color:'Black'},
                    {name:'Mobile', price:40000, color:'Gray'},
                    {name:'Table', price:14000, color:'Wood'}
                ]

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// console.log(productNames);
// console.log(productPrices);
products.map(product => console.log(product));
