//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。 
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。 
//
// 
//
// 示例: 
//
// 输入："23"
//输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 
//
// 说明: 
//尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。 
// Related Topics 字符串 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    let dic = {'2':'abc','3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}
    let res = Array()
    backtrack(dic, res, digits, 0, '')
    return res
};
var backtrack = function (dic, res, digits, index, cur) {
    if (index >= digits.length) {
        res.push(cur)
        return
    }
    let str = dic[digits[index]]
    // for...of 遍历数组的value
    for (let s of str) {
        backtrack(dic, res, digits, index+1, cur+s)
    }
}
//leetcode submit region end(Prohibit modification and deletion)
