//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复
//的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 示例： 
//
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]
// 
// Related Topics 数组 双指针


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums === null || nums.length < 3) return []
    var res = Array()
    nums.sort((a,b) => a-b)
    for (var first = 0;first < nums.length-2; first ++){
        var sec = first+1, third = nums.length-1
        if (nums[first] > 0) return res
        if(first > 0 && nums[first-1] === nums[first]) continue
        while(sec < third){
            if(nums[first]+nums[sec]+nums[third] === 0) {
                res.push([nums[first], nums[sec], nums[third]])
                // 去重
                while (sec+1 < third && nums[sec] === nums[sec+1]) sec ++
                while (third-1 > sec && nums[third-1] === nums[third]) third --
                sec ++
                third --
            }
            else if(nums[first]+nums[sec]+nums[third] < 0) {
                sec ++
                // 去重
                while (sec < third && nums[sec] === nums[sec - 1]) sec += 1
            } else {
                third --
                // 去重
                while (sec < third && nums[third] === nums[third+1]) third -= 1
            }
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
