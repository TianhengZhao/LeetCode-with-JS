//给你一个整数数组 nums，请你将该数组升序排列。 
//
// 
//
// 
// 
//
// 示例 1： 
//
// 输入：nums = [5,2,3,1]
//输出：[1,2,3,5]
// 
//
// 示例 2： 
//
// 输入：nums = [5,1,1,2,0,0]
//输出：[0,0,1,1,2,5]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 50000 
// -50000 <= nums[i] <= 50000 
// 
// 👍 191 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray1 = function(nums) {
    /*快排*/
    return quick(nums, 0, nums.length-1)
};
let quick = function(nums, left, right) {
    if (left >= right) {
        return nums
    }
    let base = left+Math.floor(Math.random()*(right-left+1))
    ;[nums[left], nums[base]] = [nums[base], nums[left]]
    let i= left, j = right
    while (i < j) {
        while (nums[j] > nums[left] && i < j) {
            j--
        }
        while (nums[i] <= nums[left] && i < j) {
            i++
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    [nums[left], nums[j]] = [nums[j], nums[left]]
    quick(nums, left, j-1)
    quick(nums, j+1, right)
    return nums
}
var sortArray2 = function(nums) {
    /*堆排序*/
    let len = nums.length
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        sink(nums, i, nums.length)
    }
    for (let i = len - 1; i >= 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]
        sink(nums, 0, i)
    }
    return nums
};
var sink = function(nums, start, end) {
    let target = nums[start], pos = start
    let childPos = pos * 2 + 1
    while (childPos < end) {
        let rightPos = childPos + 1
        if (rightPos < end && nums[childPos] <= nums[rightPos]) {
            childPos = rightPos
        }
        if (target < nums[childPos]) {
            nums[pos] = nums[childPos]
            pos = childPos
            childPos = pos * 2 + 1
        } else {
            break
        }
    }
    nums[pos] = target
}
var sortArray3 = function(nums) {
    /*归并排序*/
    let len = nums.length
    if (len <= 1) {
        return nums
    }
    let mid = Math.floor(len / 2)
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid, len))
    return merge(left, right)
};
var merge = function(left, right) {
    let res = Array()
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i += 1
        } else {
            res.push(right[j])
            j += 1
        }
    }
    if (i <left.length) {
        res.push(...left.slice(i, left.length))
    } else {
        res.push(...right.slice(j, right.length))
    }
    return res
}
var sortArray4 = function(nums) {
    /*冒泡排序*/
    let len = nums.length
    for (let end = len - 1; end > 0; end--) {
        let flag = false
        for (let cal = 0; cal < end; cal++) {
            if (nums[cal] > nums[cal + 1]) {
                [nums[cal], nums[cal + 1]] = [nums[cal + 1], nums[cal]]
                flag = true
            }
        }
        if (!flag) {
            return nums
        }
    }
    return nums
};
var sortArray5 = function(nums) {
    /*选择排序，选择最小的排在已排序序列的末尾*/
    for (let sortedEnd = 0; sortedEnd < nums.length ; sortedEnd++) {
        let min = Math.max(...nums) + 1
        let idx = 0
        for (let cal = sortedEnd; cal < nums.length; cal++) {
            if (nums[cal] < min) {
                idx = cal
                min = nums[cal]
            }
        }
        [nums[idx], nums[sortedEnd]] = [nums[sortedEnd], nums[idx]]
    }
    return nums
};
var sortArray6 = function(nums) {
    /*插入排序*/
    for (let pivot = 1; pivot < nums.length; pivot++) {
        let pos = pivot
        while (pos > 0) {
            if (nums[pos] < nums[pos - 1]) {
                [nums[pos], nums[pos - 1]] = [nums[pos - 1], nums[pos]]
                pos--
            } else {
                break
            }
        }
    }
    return nums
}
//leetcode submit region end(Prohibit modification and deletion)
