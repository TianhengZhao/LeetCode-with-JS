//在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为
// x、纵坐标为 y 的点。 
//
// 请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。 
//
// 
//
// 示例 1： 
//
// 
//
// 输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
//输出：true
// 
//
// 示例 2： 
//
// 
//
// 输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// 2 <= coordinates.length <= 1000 
// coordinates[i].length == 2 
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4 
// coordinates 中不含重复的点 
// 
// Related Topics 几何 数组 数学 
// 👍 76 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x1 = coordinates[0][0], y1 = coordinates[0][1]
    let x2 = coordinates[1][0], y2 = coordinates[1][1]
    if (x1 - x2 === 0) {
        var k = Number.MAX_VALUE
    } else {
        var k = (y1 - y2) / (x1 - x2)
    }
    for (let i = 2; i < coordinates.length; i++) {
        let x = coordinates[i][0], y = coordinates[i][1]
        if (k !== Number.MAX_VALUE) {
            if (x - x1 === 0 || (y - y1) / (x - x1) !== k) {
                return false
            }
        } else {
            if (x !== x1) {
                return false
            }
        }
    }
    return true
};
//leetcode submit region end(Prohibit modification and deletion)
