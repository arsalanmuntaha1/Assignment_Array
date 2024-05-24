// ----------------------------------------> ASSIGNMENT OF ARRAYS <------------------------------------------------

//-----------------------------------------> QUESTION-1 <---------------------------------------------------------

const fruits:string[] = ["Apple","Banana","Mango","Orange"];
console.log('fruits:',fruits)
// The output will be "fruits: [ 'Apple', 'Banana', 'Mango', 'Orange' ]"

//-----------------------------------------> QUESTION-2 <---------------------------------------------------------

const numbers:number[] = [10, 20, 30, 40 ];
console.log('number:',numbers)
// The output will be "number: [ 10, 20, 30, 40 ]"

//-----------------------------------------> QUESTION-3 <---------------------------------------------------------

const thirdFruit= fruits[2];
console.log('thirdFruit:',thirdFruit)
// The output will be "thirdFruit: Mango"

//-----------------------------------------> QUESTION-4 <---------------------------------------------------------

let chngNumber = numbers;
chngNumber[1] = 25;
console.log('changeNumber:',chngNumber)
// The output will be "changeNumber: [ 10, 25, 30, 40 ]"

//-----------------------------------------> QUESTION-5 <---------------------------------------------------------

let addFruit = fruits;
addFruit.push('Grape');
console.log('addFruit:',addFruit)
// The output will be "addFruit: [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grape' ]"

//-----------------------------------------> QUESTION-6 <---------------------------------------------------------

let lastFruit = fruits
lastFruit.pop();
console.log('lastFruit:', lastFruit)
// The output will be "lastFruit: [ 'Apple', 'Banana', 'Mango', 'Orange' ]"


//-----------------------------------------> QUESTION-7 <---------------------------------------------------------

let firstFruit = fruits;
fruits.shift();
console.log('firstFruit:', firstFruit)
// The output will be "firstFruit: [ 'Banana', 'Mango', 'Orange' ]"

//-----------------------------------------> QUESTION-8 <---------------------------------------------------------

let newFruit= fruits;
newFruit.unshift('Kiwi');
console.log('newFruit:', newFruit)
// The output will be "newFruit: [ 'Kiwi', 'Banana', 'Mango', 'Orange' ]"

//-----------------------------------------> QUESTION-9 <---------------------------------------------------------

let remove2Element = fruits;
remove2Element.splice(1,2);
console.log('remove2Element:', remove2Element)
// The output will be "remove2Element: [ 'Kiwi', 'Orange' ]"

//-----------------------------------------> QUESTION-10 <--------------------------------------------------------

let addNewFruit = fruits;
addNewFruit.splice(2, 0, 'Pineapple','Pear');
console.log('addNewFruit:', addNewFruit)
// The output will be "addNewFruit: [ 'Kiwi', 'Orange', 'Pineapple', 'Pear' ]"

//-----------------------------------------> QUESTION-11 <--------------------------------------------------------

let citrusFruit = fruits.slice(0,2)
console.log('citrusFruit:', citrusFruit)
// The output will be "citrusFruit: [ 'Kiwi', 'Orange' ]"

//-----------------------------------------> QUESTION-12 <--------------------------------------------------------

let lastTwoFruits = fruits.slice(-2);
console.log('lastTwoFruits:',lastTwoFruits)
// The output will be "lastTwoFruits: [ 'Pineapple', 'Pear' ]"