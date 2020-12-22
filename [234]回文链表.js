//请判断一个链表是否为回文链表。 
//
// 示例 1: 
//
// 输入: 1->2
//输出: false 
//
// 示例 2: 
//
// 输入: 1->2->2->1
//输出: true
// 
//
// 进阶： 
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ 
// Related Topics 链表 双指针


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    /*
    翻转后一半链表
    与前一半依次比较
     */
    if (!head || !head.next) {
        return true
    }
    let firstEnd = endOfFirstHalf(head)
    let secStart = reverseList(firstEnd.next)
    let first = head, sec = secStart
    let res = true
    // sec比前一半短或一样长，所以用sec判断
    while (res && sec) {
        if (first.val !== sec.val) {
            res = false
        }
        sec = sec.next
        first = first.next
    }
    return res
    
};
var endOfFirstHalf = function(head) {
    /*
    找链表中间结点
    从同一结点head出发，快指针一次走两步，慢指针一次走一步
    结束时慢指针为中间结点【按数组规则: mid_pos =（len-1）// 2】
     */
    let slow = head, fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

var reverseList = function(head) {
    /*
    翻转链表
     */
    // left初始是null
    let left = null, cur = head
    while (cur) {
        // 先暂存cur此次循环后应在的位置
        let tmp = cur.next
        cur.next = left
        left = cur
        cur = tmp
    }
    return left
};
//leetcode submit region end(Prohibit modification and deletion)
