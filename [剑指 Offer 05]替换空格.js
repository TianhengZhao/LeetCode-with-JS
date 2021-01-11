//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。 
//
// 
//
// 示例 1： 
//
// 输入：s = "We are happy."
//输出："We%20are%20happy." 
//
// 
//
// 限制： 
//
// 0 <= s 的长度 <= 10000 
// 👍 56 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let tmp = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            tmp.push('%20')
        } else {
            tmp.push(s[i])
        }
    }
    return tmp.join('')
};
//leetcode submit region end(Prohibit modification and deletion)
