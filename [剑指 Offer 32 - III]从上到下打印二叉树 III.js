//请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。 
//
// 
//
// 例如: 
//给定二叉树: [3,9,20,null,null,15,7], 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
// 
//
// 返回其层次遍历结果： 
//
// [
//  [3],
//  [20,9],
//  [15,7]
//]
// 
//
// 
//
// 提示： 
//
// 
// 节点总数 <= 1000 
// 
// Related Topics 树 广度优先搜索 
// 👍 57 👎 0


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let que = [root], res = [], flag = true
    while(que.length > 0) {
        let tmp = []
        let len = que.length
        for (let i=0; i<len; i++) {
            let node = que.shift()
            tmp.push(node.val)
            if (node.left) {
                que.push(node.left)
            }
            if (node.right) {
                que.push(node.right)
            }
        }
        if (flag) {
            res.push(tmp)
        } else {
            res.push(tmp.reverse())
        }
        flag = !flag

    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
