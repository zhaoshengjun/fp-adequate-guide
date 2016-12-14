/*global expect*/
let E = require('./ch5');

const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// test("Compose functions", () => {
  it('Exercise 1', () => {
		expect(E.isLastInStock(CARS)).toBe(false);
  });

  it('Exercise 2', () => {
    expect(E.nameOfFirstCar(CARS)).toBe("Ferrari FF");
  });

  it('Exercise 3', () => {
    expect(E.averageDollarValue(CARS)).toBe(790700);
  });

  it('Exercise 4', () => {
    expect(E.sanitizeNames(CARS)).toEqual(['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
  });

  it('Bonus 1', () => {
    expect(E.availablePrices(CARS)).toBe('$700,000.00, $1,850,000.00');
  });

  it('Bonus 2', () => {
    expect(E.fastestCar(CARS)).toBe('Aston Martin One-77 is the fastest');
  });
// });
