
// 13. Write a function using filter() to find all words longer than 4
// letters in an array of strings.

function longWords(arr) {
  return arr.filter(function (word) {
    return word.length > 4;
  });
}

// example
let words = ["apple", "cat", "banana", "dog", "grapes"];
console.log(longWords(words));