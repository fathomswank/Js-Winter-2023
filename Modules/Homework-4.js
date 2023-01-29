
// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = 'John Gig';
userName1Array = userName1.split(' ');
console.log(`Did the user provide first and last name? -> ${userName1Array.length === 2}`);

/**
 * Q2: Create abbreviation for a 4-word sentence
 * 
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 * 
 */
let sentence2 = 'you NEVEr waLK aLOne'
let abbr = sentence2.substr(0,1) + sentence2.substr(4,1) + sentence2.substr(10,1) + sentence2.substr(15,1);
abbr = (abbr.toUpperCase());

console.log(`abbr -> ${abbr}`);     // YNWA



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let sentenceAsArray = sentence3.split(' ');
console.log(`How many words in this sentence? -> ${sentenceAsArray.length}`);

// Fahim Shahriar 1/28