/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
 
 const transformingArr = [];

  arr.forEach((arr, i) => {
      transformingArr[i] = fn(arr, i);
  })
  return transformingArr;
};