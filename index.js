// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

////////////////////////////////////////////////////////////////
// Every
// Determine if every number is greater than or equal to 0.
// Determine if every word shorter than 8 characters.
////////////////////////////////////////////////////////////////

// function greaterOrEqual(num) {
//          return num >= 0;       
//    };
//  const num2 = nums.every(greaterOrEqual);

//  console.log(num2);


// function shorterThan(word) {
//     return word.length < 8;   
// }

// const shortWords = panagram.every((word) => word.length < 8);
// console.log(shortWords);

////////////////////////////////////////////////////////////////
// Filter
// filter the array for numbers less than 4.
// Filter words that have an even length.
////////////////////////////////////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// var lessThan = nums.filter(function(number) { 
//     return number < 4;
// });

// console.log(lessThan);


// const evenLength = panagram.filter((word) => 
//     word.length % 2 === 0);    

// console.log(evenLength);

////////////////////////////////
// Find
// Find the first value divisible by 5.
// Find the first word that is longer than 5 characters.
////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// const found = nums.find(element => element % 5 === 0);

// console.log(found);

// const foundWord = panagram.find((word) => word.length > 5);

// console.log(foundWord);

////////////////////////////////
// Find Index
// Find the index of the first number that is divisible by 3.
// Find the index of the first word that is less than 2 characters long.
////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// const divisibleBy = nums.findIndex((num) => num % 3 === 0);
// console.log(divisibleBy);

// const lessThan = panagram.findIndex((word) => word.length < 2);
// console.log(lessThan);

////////////////////////////////
// For Each
// Log each value of the array multiplied by 3.
// Log each word with an exclamation point at the end of it.
////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// nums.forEach((num) => {
//     const timesThree = num * 3;
//     console.log(timesThree);
// });

// panagram.forEach((word) => {
//     const exclaimPoint = word + '!';
//     console.log(exclaimPoint);
// });

////////////////////////////////
// Map
// Make a new array of each number multiplied by 100.
// Make a new array of all of the words in all uppercase.
////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// let newArray = nums.map((num) => num * 100);
// console.log(newArray);

// let secondArray = panagram.map(word => word.toUpperCase());
// console.log(secondArray);

////////////////////////////////////////////////////////////////
// Some
// Find out if some numbers are divisible by 7.
// Find out if some words have the letter a in them.
////////////////////////////////////////////////////////////////

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// let ifSome = nums.some((num) => {return (num % 7 === 0);});

// console.log(ifSome);

// let ifSomeTwo = panagram.some(word => word.includes('a'));
// console.log(ifSomeTwo);



















