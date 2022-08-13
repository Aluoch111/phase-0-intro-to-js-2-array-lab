// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
// const newCats = [...cats];
function appendCat(){
 const newCats=[...cats,"Broom"];
  return newCats;
}
function prependCat(){
    const otherCats=["Arnold",...cats];
    return otherCats;
}
function removeLastCat(){
    const lastCat =cats.slice(0,-1);
    return lastCat;
}
function removeFirstCat(){
    const firstCat = cats.slice(1);
    return firstCat;
}