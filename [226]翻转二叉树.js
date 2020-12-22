//翻转一棵二叉树。 
//
// 示例： 
//
// 输入： 
//
//      4
//   /   \
//  2     7
// / \   / \
//1   3 6   9 
//
// 输出： 
//
//      4
//   /   \
//  7     2
// / \   / \
//9   6 3   1 
//


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    const left = invertTree(root.right)
    const right = invertTree(root.left)
    root.left = left
    root.right = right
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
