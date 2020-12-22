//给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 提示： 
//
// 
// 树中节点数目在范围 [0, 100] 内 
// -100 <= Node.val <= 100
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
// Related Topics 栈 树 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var inorderTraversal1 = function(root) {
    let res = []
    helper(root, res)
    return res
};
var helper = function (root, res) {
    if (!root) {
        return
    }
    helper(root.left, res)
    res.push(root.val)
    helper(root.right, res)
}

var inorderTraversal = function(root) {
    let stack = [], res = [], p = root
    while (stack.length > 0 || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        let node = stack.pop()
        res.push(node.val)
        p = node.right
    }
    return res
}
//leetcode submit region end(Prohibit modification and deletion)
