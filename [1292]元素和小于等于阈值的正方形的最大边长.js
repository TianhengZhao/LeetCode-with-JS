//给你一个大小为 m x n 的矩阵 mat 和一个整数阈值 threshold。 
//
// 请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 0 。 
// 
//
// 示例 1： 
//
// 
//
// 输入：mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
//输出：2
//解释：总和小于 4 的正方形的最大边长为 2，如图所示。
// 
//
// 示例 2： 
//
// 输入：mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], thres
//hold = 1
//输出：0
// 
//
// 示例 3： 
//
// 输入：mat = [[1,1,1,1],[1,0,0,0],[1,0,0,0],[1,0,0,0]], threshold = 6
//输出：3
// 
//
// 示例 4： 
//
// 输入：mat = [[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], threshold 
//= 40184
//输出：2
// 
//
// 
//
// 提示： 
//
// 
// 1 <= m, n <= 300 
// m == mat.length 
// n == mat[i].length 
// 0 <= mat[i][j] <= 10000 
// 0 <= threshold <= 10^5 
// 
// Related Topics 数组 二分查找


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    let m = mat.length, n = mat[0].length
    let matrix = Array(m+1)
    for (let i = 0;i < m+1;i++) {
        matrix[i] = Array(n+1).fill(0)
    }
    for (let i = 1;i < m+1;i++) {
        for(let j = 1;j < n+1;j++) {
            matrix[i][j] = mat[i-1][j-1] + matrix[i][j-1] + matrix[i-1][j] - matrix[i-1][j-1]
        }
    }
    let left = 1, right = Math.min(m, n)
    let res = 0
    while (left <= right) {
        let flag = false
        let mid = Math.floor((left + right) / 2)
        for (let i = mid;i < m+1;i++) {
            for(let j = mid;j < n+1;j++) {
                let tmp = matrix[i][j] - matrix[i-mid][j] - matrix[i][j-mid] + matrix[i-mid][j-mid]
                if (tmp <= threshold) {
                    res = mid
                    flag = true
                }
            }
        }
        if (flag) {
            left = mid+1
        } else {
            right = mid-1
        }

    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
