// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */
let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];

function smallestValue(arr){
    let result = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
      if(arr[i].length <= result.length){
        result = arr[i];
      } 
    }
    return result;
  }
  
 console.log(smallestValue(words));

/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */

let numbers = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];

let firstNumberLessThan10 = numbers.find(n => n > 10);

console.log(firstNumberLessThan10);

/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */

let arr1 = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];

function smallestNumberValue(arr){
  let smallestArr = arr[0]
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] <= smallestArr){
      smallestArr = arr[i];
    }
  }
  return smallestArr;
}

console.log(smallestNumberValue(arr1));