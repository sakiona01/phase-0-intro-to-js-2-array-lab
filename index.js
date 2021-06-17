// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
   cats.push(Ralph);
   return cats;
}

function destructivelyPrependCat(Bob) {
   cats.unshift(Bob);
   return cats;
}

function destructivelyRemoveLastCat() {
   cats.pop();
   return cats;
}

function destructivelyRemoveFirstCat() {
   cats.shift();
   return cats;
}

function appendCat(Broom) {
   var newCat = [...cats, Broom];
   return newCat;
}

function prependCat(Arnold) {
   var newCat = [Arnold,...cats];
   return newCat;
}

function removeLastCat() {
   var newArray = [...cats];
   newArray.pop();
   return newArray;
}

function removeFirstCat() {
   var newArray = [...cats];
   newArray.shift();
   return newArray;
}
