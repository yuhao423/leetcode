/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(!head) return null

    //虚拟头节点

    let dummy = new ListNode(-1)
    dummy.next = head

    let current = dummy

    //判断条件
    while(current.next && current.next.next){


        let first = current.next
        let second = current.next.next

        //交换两个变量
        first.next = second.next
        second.next = first
        current.next = second

        //这里很重要！
        current = first
    }

    //返回虚拟头节点的下一个，就是head头节点
    return dummy.next
};