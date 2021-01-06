//一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。 
//
// 
//
// 示例 1： 
//
// 输入：nums = [4,1,4,6]
//输出：[1,6] 或 [6,1]
// 
//
// 示例 2： 
//
// 输入：nums = [1,2,10,4,1,4,3,3]
//输出：[2,10] 或 [10,2] 
//
// 
//
// 限制： 
//
// 
// 2 <= nums.length <= 10000 
// 
//
// 
// 👍 280 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let xor_res = 0
    for (let i = 0; i < nums.length; i++) {
        xor_res ^= nums[i]
    }
    let sig = 1
    // 位运算时用括号增加优先级
    while ((xor_res & sig) === 0) {
        sig *= 2
    }
    let num1 = 0, num2 = 0
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & sig) === 0){
            num1 ^= nums[i]
        } else {
            num2 ^= nums[i]
        }
    }
    return [num1, num2]

};
//leetcode submit region end(Prohibit modification and deletion)
