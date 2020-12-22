//给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可
//能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。 
//
// 
//
// 示例 1: 
//
// 输入: 12258
//输出: 5
//解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi" 
//
// 
//
// 提示： 
//
// 
// 0 <= num < 231 
// 
// 👍 162 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let dp0 = 1, dp1 = 1
    let numStr = num.toString()
    for (let i = 1; i < numStr.length; i++) {
        let preCur = Number(numStr.slice(i-1, i+1))    // 类型转换
        let tmp = dp1
        if (9 < preCur && preCur < 26) {   // 不能9 < preCur < 26
            tmp += dp0
        }
        dp0 = dp1
        dp1 = tmp
    }
    return dp1
};
//leetcode submit region end(Prohibit modification and deletion)
