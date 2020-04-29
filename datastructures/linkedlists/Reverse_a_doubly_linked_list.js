function reverse(head) {
    if(!head) return head

    let current = head
    let newHead = head
    while(current !== null){
        let prev = current.prev
        current.prev = current.next
        current.next = prev
        newHead = current
        current = current.prev
    }
    return newHead
}
