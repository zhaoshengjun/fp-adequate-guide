let R = require('ramda');

let match = R.curry((what, str) => str.match(what));

let words = R.split(' ');
// console.log(words("Jingle bells Batman smells"));

let sentences = R.map(words);
// console.log(sentences(['Jingle bells batman smells', 'Robin laid an egg']));

let filterQs = R.filter(match(/q/i));
// console.log(filterQs(['quick', 'camels','quarry','over','quails']));

let _keepHighest = (x,y) => x > y ? x : y;
let max = R.reduce(_keepHighest,-Infinity);
// console.log(max([323,523,554,123,5244]));

// let slice = R.slice();
// let take = R.take();
let slice = R.curry((start, end, ls) => ls.slice(start, end));
let take = slice(0);

module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
}