var addTwoNumbers = function (l1, l2) {
    let listNode = new ListNode,
        l = listNode,
        num,
        flag = 0;
    do {
        let val1 = l1 == null ? 0 : l1.val,
            val2 = l2 == null ? 0 : l2.val;
        l1 = l1 == null ? null : node1.next
        l2 = l2 == null ? null : l2.next
        num = val1 + val2 + flag
        flag = parseInt(num / 10)
        console.log(val1, val2, flag, num)
        l = l.next = new ListNode(num % 10)
    } while (l1 || l2);
    if (flag == 1) {
        nodes.next = new ListNode(1)
    }
    return listNode.next
};
