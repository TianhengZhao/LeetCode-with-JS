//给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 提示：
// 树中节点数目在范围 [0, 100] 内 
// -100 <= Node.val <= 100
// Related Topics 栈 树


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归
var preorderTraversal1 = function(root) {
    let res = Array()
    helper(root, res)
    return res
};
var helper = function(root, res) {
    if (!root) {
        return
    }
    res.push(root.val)
    helper(root.left, res)
    helper(root.right, res)
}

// 迭代
var preorderTraversal = function(root) {
    let stack = [], res = []
    if (root) stack.push(root)
    // 判断栈是否为空
    while (stack.length > 0) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
