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
 var deleteDuplicates = function(head) {


    let vistural = new ListNode(-1)
    vistural.next = head

    let prev = vistural
    let cur = head

    while(cur.next && cur.next.next){


        //下一个 和下下一个，有问题现在

        if(cur.next.val === cur.next.next.val){
            let val = cur.next.val
            while(cur.next && val === cur.next.val){ //删除多个重复的值
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next;

        }
    }

    return prev.next
};


var sv = ()=>{

    let b = 5
    while(b--){
        console.log(b);
    }
}

sv()