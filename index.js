// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 
// this is an array

function destructivelyAppendCat (name) {
    cats.push(name);
  } // push array method
  
  function destructivelyPrependCat (name) {
    cats.unshift(name);
  } //unshift methos// 
  
  function destructivelyRemoveLastCat () {
    cats.pop();
  }// pop method
  
  function destructivelyRemoveFirstCat () {
    cats.shift();
  }// shift method
  
  function appendCat (name) {
    return [...cats, name];
  }// spread opperater 
  
  function prependCat (name) {
    return [name, ...cats];
  }// spread operator
  
  function removeFirstCat () {
    return cats.slice(1);
  }// slice method
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }//slice metod