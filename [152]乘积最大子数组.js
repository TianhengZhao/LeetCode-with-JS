//给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。 
//
// 
//
// 示例 1: 
//
// 输入: [2,3,-2,4]
//输出: 6
//解释: 子数组 [2,3] 有最大乘积 6。
// 
//
// 示例 2: 
//
// 输入: [-2,0,-1]
//输出: 0
//解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。 
// Related Topics 数组 动态规划 
// 👍 871 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    /*
    求子串、子数组，先固定一端，另一端长度变化，139也是
    特殊情况就是0和负数
    0在求curMax时由于max（... nums[i] ...）,把子串从0处断开
    遇到负数，max依旧会从负数处断开，min会记录负数乘积，这样有偶数个负数会得到正确结果
    preMin, preMax, curMin, curMax存的都是以nums[i]结尾的子串中乘积最大（小）的
    遍历i的过程中遇到过的最大的值就是最终结果
    * */
    let preMax = nums[0], preMin = nums[0], res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let curMax = Math.max(preMax * nums[i], nums[i], preMin * nums[i])
        let curMin = Math.min(preMax * nums[i], nums[i], preMin * nums[i])
        res = Math.max(curMax, res)
        ;[preMin, preMax] = [curMin, curMax]
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
