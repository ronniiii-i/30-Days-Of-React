// Exercise 1

import countries from './countries.js'
import webTechs from './web_techs.js'

console.log(`1: Countries -> ${countries} | WebTechs -> ${webTechs}`);

// Exercise 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var text2 = text.replace(/[^a-zA-Z ]/g, "");
var words = text2.split(' ')
console.log(`2: ${words} \n${words.length}`);

// Exercise 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergy = true;

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
if (allergy == true) {
    shoppingCart.splice(shoppingCart.indexOf('honey')-1, 1)
}
let i = 0;
while (i < shoppingCart.length) {
    if (shoppingCart[i] == 'Tea') {
        shoppingCart[i] = 'Green Tea'
    }
    i++;
}
console.log('3:', shoppingCart);

// Exercise 4
let cIndex = countries.indexOf('Ethiopia');
if (cIndex != -1) {
    console.log('4: ETHIOPIA');
} else{
    countries.push('Ethiopia');
}

// Exercise 5
let wIndex = webTechs.indexOf('Sass');
if (wIndex != -1) {
    console.log('5: Sass is a CSS preprocess');
} else{
    webTechs.push('Sass');
    console.log('5:', webTechs);
}

// Exercise 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log('6:', fullStack)