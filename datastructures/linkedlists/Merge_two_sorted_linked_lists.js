function mergeLists(head1, head2) {
    let list1 = head1
    let list2 = head2
    let list3 = new SinglyLinkedListNode
    let pointer = list3
    while(list1 && list2){
        if(list1.data <= list2.data){
            list3.data = list1.data
            list1 = list1.next
        }else if(list2.data < list1.data){
            list3.data = list2.data
            list2 = list2.next
        }
        list3.next = new SinglyLinkedListNode
        list3 = list3.next
    }
    while(list1){
        list3.data = list1.data
        list1 = list1.next
        if(list1){
        list3.next = new SinglyLinkedListNode
        list3 = list3.next
        }
    }
    while(list2){
        list3.data = list2.data
        list2 = list2.next
        if(list2){
            list3.next = new SinglyLinkedListNode
            list3 = list3.next
        }
    }
    return pointer
}
