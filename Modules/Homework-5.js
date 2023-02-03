
// Due date: Feb-4 (eod)

/**
 * Q1:
 * create a variable myNumber and assign any (numeric) value to it.
 * 
 * if myNumber-value is divisible by 5, print 'divisible by 5'
 * if myNumber-value is divisible by 3, print 'divisible by 3'
 * if myNumber-value is divisible by 5 and 3, print 'divisible by 5 and 3'
 * if myNumber-value is NOT divisible by 5 or 3, print the value of myNumber
 * 
 * myNumber = 17
 * 
 */
console.log('\nQuestion 1\n')
let myNumber = 15;

if((myNumber % 5) == 0 && (myNumber % 3) == 0){ // I added this line of code first just incase a number like '15' was chosen, so we know it would result into a log of 'divisible by 5 and 3'
    console.log('divisible by 5 and 3');
} else if((myNumber % 3) == 0){
    console.log('divisible by 3');
} else if((myNumber % 5) == 0){
    console.log('divisible by 5');
} else {
    console.log(myNumber);
}
    
/**
 * Q2:
 * const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
 * 
 * if Basketball is present at index-2 (ignoring cases), Print 'Basketball is present at index-2
 * if Baseketball is not present at index-2 (ignoring cases), print 'Basketball is not present at index-2'
 * if Basketball is not present in the array, replace, index-2-value with 'Basketball; and print sports-array
 * 
 * 
 */
console.log('\nQuestion 2\n')
const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];


if(sports[2].toLowerCase() == 'Basketball'.toLowerCase()){
    console.log('Basketball is present at index-2');
  } else if(sports.includes('Basketball') === true && sports[2].toLowerCase() != 'Basketball'.toLowerCase()) {
    console.log('Basketball is not present at index-2');
  } else if(sports.includes('Basketball') === false) {
    sports[2] = 'Basketball';
    console.log(sports);
  } 

/**
 * Q3:
 * const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
 * 
 * if the 'Earth' (ignoring cases) is present as the first-element in the array, print "Earth is present at the correct place"
 * otherwise, Add 'Earth' as the first-element in the array; then print the planets-array
 * 
 */
console.log('\nQuestion 3\n')
const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];

if(planets[0].toLowerCase() == 'Earth') {
    console.log('Earth is present at the correct place.');
} else {
    planets[0] = 'Earth';
    console.log(planets);
}



// Fahim Shahriar 2/2