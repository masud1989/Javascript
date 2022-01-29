var student1 = {id: 115,                       //id, name, marks, phone etc are called property or key
    name:'Abir Hossain',
    marks: 81,
    phone: 666554};

var mobile = {
    color: 'black',
    price: 20000,
    screenSize: 6,
    storage: '16gb'
};

var book = {
    title: 'Start with us',
    author: 'Masud Rana',
    price: 450,
    pages: 250,
    publisher: 'Demo Publisher'
};



//Object Property=========================================================================================

var computer = {
    price: 50000,
    storage: '500 gb',
    processor: 'core i5',
    color:'silver'
}; 
// console.log(computer);
// console.log(computer.color);
var computerColor = computer.color;
console.log(computerColor);
computer.price = 40000;
computer['price'] = 30000;

var priceProperty = "price";
computer[priceProperty]=20000;
console.log(computer);