/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
  const filteredArr = [];
    arr.forEach((ArrVal, i) => {
        if(fn(ArrVal, i)) {
            filteredArr.push(ArrVal)
        }
    })
    return filteredArr;
};