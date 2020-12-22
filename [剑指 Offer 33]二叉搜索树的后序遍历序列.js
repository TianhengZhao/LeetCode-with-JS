//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。 
//
// 
//
// 参考以下这颗二叉搜索树： 
//
//      5
//    / \
//   2   6
//  / \
// 1   3 
//
// 示例 1： 
//
// 输入: [1,6,3,2,5]
//输出: false 
//
// 示例 2： 
//
// 输入: [1,3,2,6,5]
//输出: true 
//
// 
//
// 提示： 
//
// 
// 数组长度 <= 1000 
// 
// 👍 151 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let len = postorder.length
    if (len === 1 || len === 0) {
        return true
    }
    let lastNum = postorder[len-1]
    let index = len-2
    let left
    while (postorder[index] > lastNum) {
        index --
    }
    for (let i=index;i>-1;i--) {
        if (postorder[i] > lastNum) {
            return false
        }
    }
    return verifyPostorder(postorder.slice(0, index+1)) && verifyPostorder(postorder.slice(index+1, len-1))
};
//leetcode submit region end(Prohibit modification and deletion)
