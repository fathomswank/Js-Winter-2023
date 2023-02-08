
// Due date: Feb-9 (Eod)
/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
const str1 = 'YOu lIVe ONlY ONcE';
let titleCaseStr1 = str1.toLowerCase().split(' ');             // final answer must be in the variable

for (let i = 0; i < titleCaseStr1.length; i++) {
    titleCaseStr1[i] = titleCaseStr1[i].charAt(0).toUpperCase() + titleCaseStr1[i].slice(1);
  }
titleCaseStr1 = titleCaseStr1.join(' ');

console.log('\nQuestion 1');
console.log(str1);                  // 'YOu ONlY lIVe ONcE'
console.log(titleCaseStr1);         // 'You Only Live Once'

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
const str2 = 'hello dear how are you doing';

let reverseStr2 = str2.split(' ').reverse().join(' ');          // final answer must be in the variable

console.log('\nQuestion 2');
console.log(str2);              // 'hello dear how are you doing'
console.log(reverseStr2);       // 'doing you are how dear hello'

/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
const arr3 = [1, 1, 1, 2, 3, 1, 2];
let avg;                // final answer must be in the variable
let sum = 0;

for (let i = 0 ; i < arr3.length ; i++){
    sum = sum + arr3[i] 
  }
  avg = sum / (arr3.length);

console.log('\n Question 3');
console.log(arr3);      // [1, 1, 1, 2, 3, 1, 2]
console.log(avg);       // 1.57

/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
const str4 = 'aPPlE bANAna chErRY';
let abbr = str4.split(' ');               // final answer must be in the variable

for(let i = 0 ; i < abbr.length ; i++){
    abbr[i] = abbr[i].substr(0,1).toUpperCase()
  }
abbr = abbr.join('');

console.log('\n Question 4');
console.log(str4);          // 'apple banana cherry'
console.log(abbr);          // ABC

/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];

arr5 = arr5.join(' ').toUpperCase().split(' ')

console.log('\n Question 5');
console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']