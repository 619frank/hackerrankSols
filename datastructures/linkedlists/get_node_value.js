function getNode(head, positionFromTail) {    
    let pointer = head
    let counter = -1
    while(head !== null){
        head = head.next
        if(counter < positionFromTail){
            counter++
        }else{
            pointer = pointer.next
        }
    }
    return pointer.data
}
