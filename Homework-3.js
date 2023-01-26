/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */

let replacedSentence1 = sentence1.replace(/A/ig, 'Queen and King');
console.log(`Replaced Sentence 1 = ${replacedSentence1}`);

const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */
/**
 * localeCompare
 * substring/slice
 * split
 */

console.log(`\nLength of Sentence 2 = ${sentence2.length}`);

let pattern = "COM"
let patternLowered = pattern.toLowerCase();
let loweredSent2 = sentence2.toLowerCase();
let result = loweredSent2.startsWith(patternLowered);
console.log(`\nDoes sentence2 start with 'COM'? = ${result}`);

let pattern2Lowered = "Google news".toLowerCase
console.log(`\nDoes sentence 2 end with 'Google news'? = ${loweredSent2.endsWith(pattern2Lowered)}`);

// I couldn't figure out how to do question 2 part 4.

console.log(`\nThe character present at second-last index in the String = ${sentence2[sentence2.length-2]}`);