

//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head,n){
    
    let vistural = new ListNode(0)
    vistural.next = head

    let fast = vistural
    let slow = vistural

    while(n--){
        fast = fast.next;
    }

    if(!fast){
        return vistural.next;  //这里不确定的
    }


    //循环fast 和fast.next 的区别
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return vistural.next
    
}