let R = require('ramda');
let accounting = require('accounting');
// const CARS = [
//     {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
//     {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
//     {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
//     {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
//     {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
//     {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
//   ];

let inStock = R.prop('in_stock');
let last = R.last();
let isLastInStock = R.compose(inStock, last);

let name = R.prop('name');
let first = R.head();
let nameOfFirstCar = R.compose(name, first);

let _average = (xs) => R.reduce(R.add,0, xs) / xs.length;
let dollarValue = R.map(R.prop('dollar_value'));
let averageDollarValue = R.compose(_average,dollarValue);

let _underscore = R.replace(/\W+/g,'_');
let lowercase = R.toLower();
let sanitizeNames = R.map(R.compose(_underscore,lowercase,name));
// Array.prototype.map(a => a.name.toLower._underscore)

let availableCars = R.filter(inStock);
let join = R.curry((sep, ls) => ls.join(sep));
let joinBy = join(', ');
let mapToMoney = R.map(R.compose(accounting.formatMoney,R.prop('dollar_value')));
let availablePrices = R.compose(joinBy, mapToMoney,availableCars);

// let append = R.flip(R.concat);
let appendFromRight = R.curry((str1, str2) => str2 + str1);
let fastestCar =R.compose(appendFromRight(' is the fastest'), R.prop('name') , R.last, R.sortBy(R.prop('horsepower')));

module.exports = {
	isLastInStock: isLastInStock,
	nameOfFirstCar: nameOfFirstCar,
	averageDollarValue: averageDollarValue,
	sanitizeNames: sanitizeNames,
	availablePrices: availablePrices,
	fastestCar: fastestCar
}

// tips
// 1. write piece by piece, then combine using R.compose
// 2. use tests to verify
