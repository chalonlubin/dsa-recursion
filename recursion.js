/** product: calculate the product of an array of numbers. */

// [1,2,3,4 ]
// 1 + [2,3,4]
// 3 + [3,4]
// 6 + [4]
// 10 + 0;

// unwind method
function product(nums, idx = 0) {
  // base case - when idx is === nums.length
  if (idx === nums.length) return 0;

  debugger;
  return nums[idx] + product(nums, ++idx);
}

/** longest: return the length of the longest word in an array of words. */
// chalon, chris, bob
function longest(words, idx=0) {
  // base case
  if (idx === words.length) return 0;

}

/** everyOther: return a string with every other letter. */

// "hello"
// unwind method
function everyOther(str, idx = 0) {
  // base case:
  if (idx >= str.length) return "";

  // progress: traverse across the str
  // increment idx by 2
  // continue saving the value to add to the call
  // return that evaluated value
  return str[idx] + everyOther(str, idx + 2);
}

/** find: return boolean depending on if val exists in array or not. */

// ["a","b"] undefined
// val = "c"
// build up method
function find(arr, val, idx = 0) {
  // base cases -
  if (val === arr[idx]) return true;
  if (idx > arr.length) return false;
  return find(arr, val, ++idx);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// hannah
// tacocat
// noon

function isPalindrome(str, start = 0, last = str.length -1) {
  let starLetter = str[start]
  let lastLetter = str[last]
  // base case1
  if (starLetter !== lastLetter) return false;
  // base case2
  if (start >= last) return true;
  // call itself

  // progress
  return isPalindrome(str, ++start, --last);
}
// isPalindrome('madam');
// console.log(isPalindrome('madam'));

/** revString: return a copy of a string, but in reverse. */
// unwind
function revString(str, idx = str.length - 1) {

  if (idx < 0) return "";

  let letter = str[idx];

  return letter + revString(str, idx - 1)

}
revString("chalon")

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
