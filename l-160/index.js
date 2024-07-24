/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getListLen = function(head) {

    //获取链表的长度
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
} 
var getIntersectionNode = function(headA, headB) {
    let curA = headA,curB = headB, 
        lenA = getListLen(headA),
        lenB = getListLen(headB);

        //a 小于 b 的时候，交互2个变量
    if(lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }

    //得到差值
    let i = lenA - lenB;

    //单独前进 curA
    while(i-- > 0) {
        curA = curA.next
    }


    //一起前进，直到 cur === curB
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};
