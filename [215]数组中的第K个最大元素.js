//在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。 
//
// 示例 1: 
//
// 输入: [3,2,1,5,6,4] 和 k = 2
//输出: 5
// 
//
// 示例 2: 
//
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
//输出: 4 
//
// 说明: 
//
// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。 
// Related Topics 堆 分治算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0, right = nums.length-1
    let target = nums.length - k
    while (left <= right) {
        let index = patition(nums, left, right)
        if (index === target) {
            return nums[index]
        } else if (index > target) {
            right = index - 1
        } else {
            left = index + 1
        }
    }
};
var patition = function(nums, left, right) {
    let rand = left + Math.floor(Math.random() * (right - left + 1))
    ;[nums[left], nums[rand]] = [nums[rand], nums[left]]
    let leftP = left, rightP = right
    while(left < right) {
        while (left < right && nums[leftP] < nums[right]) {
            right--
        }
        while (left < right && nums[leftP] >= nums[left]) {
            left++
        }
        [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    [nums[leftP], nums[right]] = [nums[right], nums[leftP]]
    return right
};
//leetcode submit region end(Prohibit modification and deletion)
