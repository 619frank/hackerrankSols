function findMergeNode(headA, headB) {
    let current_one = headA
    let current_two = headB
    while(current_one !== current_two){
        if(current_one.next === null){
            current_one = headB
        }else{
            current_one = current_one.next
        }
        if(current_two.next === null){
            current_two = headA
        }else{
            current_two.next = current_two.next
        }
    }
    return current_one.data
}
