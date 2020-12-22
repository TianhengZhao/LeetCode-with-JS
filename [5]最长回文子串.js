//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。 
//
// 示例 1： 
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
// 
//
// 示例 2： 
//
// 输入: "cbbd"
//输出: "bb"
// 
// Related Topics 字符串 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length
    let res = s[0], max_len = 1
    let dp = Array(len)
    for (let i = 0; i < len;i++) {
        dp[i] = Array(len)
    }
    // 从下往上
    for (let i = len-1; i >= 0;i--) {
        for (let j = i; j < len;j++) {
            if (i === j) {
                dp[i][j] = false
            // 两个或三个字符 直接比较首尾
            } else if (j-i < 3) {
                dp[i][j] = s[i] === s[j]
            } else {
                dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]
            }
            //console.log(i,j,dp[i][j])
            if (dp[i][j]) {
                res = (j-i) >= max_len ? s.slice(i, j+1) : res
                max_len = Math.max(max_len, j-i+1)
            }
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
