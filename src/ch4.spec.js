/*global expect*/
let E = require('./ch4.js');

test('Curry functions',()=> {
  it('Exercise 1',() => {
    expect(E.words("Jingle bells Batman smells")).toEqual(['Jingle', 'bells','Batman','smells']);
  });

  it('Exercise 1a', () => {
    expect(E.sentences(['Jingle bells Batman smells', 'Robin laid an egg'])).toEqual([['Jingle', 'bells','Batman','smells'],[ 'Robin', 'laid', 'an', 'egg' ]])
  });

  it('Exercise 2', () => {
    expect(E.filterQs(['quick', 'camels','quarry','over','quails'])).toEqual([ 'quick', 'quarry', 'quails' ]);
  });

  it('Exercise 3', () => {
    expect(E.max([323,523,554,123,5244])).toEqual(5244);
  });

  it('Bonus 1', () => {
    expect(E.slice(1)(3)(['a','b','c'])).toEqual(['b','c']);
  });
  it('Bonus 2', () => {
    expect(E.take(2)(['a','b','c'])).toEqual(['a','b']);
  });

})
