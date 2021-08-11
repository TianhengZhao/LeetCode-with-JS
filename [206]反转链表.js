//反转一个单链表。 
//
// 示例: 
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL 
//
// 进阶: 
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ 
// Related Topics 链表


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
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let p = null, cur = head, q
    while (cur) {
        q = cur.next
        cur.next = p
        p = cur
        cur = q
    }
    return p
};

// 递归
var reverseList1 = function(head) {
    if (!head || !head.next) {
        return head
    }
    return loop(null, head)
}
function loop(p, q) {
    if (!q) {
        return p
    }
    let tmp = q.next
    q.next = p
    return loop(q, tmp)
}
//leetcode submit region end(Prohibit modification and deletion)
