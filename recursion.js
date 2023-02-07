/** product: calculate the product of an array of numbers. */

// [1,2,3,4 ]
// 1 + [2,3,4]
// 3 + [3,4]
// 6 + [4]
// 10 + 0;

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

  debugger;
  let curLen = words[idx].length;
  return Math.max(curLen, longest(words, idx + 1))
}



/** everyOther: return a string with every other letter. */

function everyOther(str) {}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

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
