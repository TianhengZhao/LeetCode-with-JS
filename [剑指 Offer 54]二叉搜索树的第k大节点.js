//给定一棵二叉搜索树，请找出其中第k大的节点。 
//
// 
//
// 示例 1: 
//
// 输入: root = [3,1,4,null,2], k = 1
//   3
//  / \
// 1   4
//  \
//   2
//输出: 4 
//
// 示例 2: 
//
// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1
//输出: 4 
//
// 
//
// 限制： 
//
// 1 ≤ k ≤ 二叉搜索树元素个数 
// Related Topics 树


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest1 = function(root, k) {
    var res = []
    inorder(root, res)
    return res[res.length-k]
};
var inorder = function(root, res) {
    if (!root) {
        return
    }
    inorder(root.left, res)
    res.push(root.val)
    inorder(root.right, res)
}
var kthLargest2 = function(root, k) {
    let stack = []
    let node = root
    while (stack.length || node) {
        if (node) {
            stack.push(node)
            node = node.right
        } else{
            let tmp = stack.pop()
            if (--k === 0) {
                return tmp.val
            }
            if (tmp.left) {
                node = tmp.left
            }
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)
