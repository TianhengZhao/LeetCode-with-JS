//给定一个二叉树，返回它的 后序 遍历。 
//
// 示例: 
//
// 输入: [1,null,2,3]  
//   1
//    \
//     2
//    /
//   3 
//
//输出: [3,2,1] 
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？ 
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
var postorderTraversal1 = function(root) {
    var res = []
    helper(root, res)
    return res
};
var helper = function (root, res) {
    if(!root) {
        return
    }
    helper(root.left, res)
    helper(root.right, res)
    res.push(root.val)
}
// 迭代
var postorderTraversal2 = function(root) {
    let stack = [], res = [], p = root
    while(stack.length > 0 || p) {
        while (p) {
            stack.push(p)
            if (p.left) {
                p = p.left
            } else {
                p = p.right
            }
        }
        let node = stack.pop()
        res.push(node.val)
        if (stack.length > 0 && stack[stack.length-1].left === node) {
            p = stack[stack.length-1].right
        } else {
            p = null
        }
    }
    return res
}
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let stack = [root], res = []
    while (stack.length > 0) {
        let node = stack.pop()
        res.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return res.reverse()
}
//leetcode submit region end(Prohibit modification and deletion)
