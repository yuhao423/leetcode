



/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。

    如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

    如果链表中存在环 ，则返回 true 。 否则，返回 false 
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
    constructor(val,next){
        this.val = val ?? 0
        this.next = next ?? null
    }
}




function hasCycle (head) {
   

   let slow = head
   let fast = head

    while(slow && slow.next){   //这里得用 fast 来作文循环判断的条件，而不是slow ，思考为什么？

    //快慢指针
      slow = slow.next
      fast = fast.next.next

       if(slow === fast){
        return true
      }

    }

    return false
    
};


