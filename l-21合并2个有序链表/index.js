

/**
 *  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 *  输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
 */


/**
* Definition for singly-linked list.
* class ListNode {
*     val: number
*     next: ListNode | null
*     constructor(val?: number, next?: ListNode | null) {
*         this.val = (val===undefined ? 0 : val)
*         this.next = (next===undefined ? null : next)
*     }
* }
*/

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1, list2) {

    let head = new ListNode(0)
    let newList = head
    while (list1 && list2) {

        let val1 = list1.val
        let val2 = list2.val

        if (val1 >= val2) {
            newList.next = list2
            list2 = list2.next
        } else {
            newList.next = list1
            list1 = list1.next

        }

        newList = newList.next
    }

    newList.next = list1 ? list1 : list2

    console.log(newList,'sss');
    console.log(head,'bbb');
    return newList.next  //这样要 return head.next   而不是 return newList.next
};

const l1 = new ListNode(4)
l1.next = new ListNode(5)
l1.next = new ListNode(8)
console.log(l1);

const l2 = new ListNode(4)
l2.next = new ListNode(5)
l2.next = new ListNode(8)
console.log(l2);

mergeTwoLists(l1,l2)