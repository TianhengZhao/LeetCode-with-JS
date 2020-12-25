//给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。 
//
// 说明： 
//
// 
// 拆分时可以重复使用字典中的单词。 
// 你可以假设字典中没有重复的单词。 
// 
//
// 示例 1： 
//
// 输入: s = "leetcode", wordDict = ["leet", "code"]
//输出: true
//解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 
//
// 示例 2： 
//
// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
//输出: true
//解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//     注意你可以重复使用字典中的单词。
// 
//
// 示例 3： 
//
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
//输出: false
// 
// Related Topics 动态规划 
// 👍 788 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length, maxLen = 0
    let dic = new Map(), dp = Array(len + 1).fill(false)
    dp[0] = true
    for (let word of wordDict) {
        dic.set(word, word.length)
        maxLen = Math.max(maxLen, word.length)
    }
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < Math.min(i + maxLen + 1, len + 1); j++) {
            if (dp[i] && dic.has(s.slice(i, j))) {
                dp[j] = true
            }
        }
    }
    return dp[len]
};
//leetcode submit region end(Prohibit modification and deletion)
