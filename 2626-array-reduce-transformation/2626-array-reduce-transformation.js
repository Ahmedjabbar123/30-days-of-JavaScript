/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  let res = init;

    for(const N of nums) {
        res = fn(res, N)
    }
    return res
};
