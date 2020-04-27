function CompareLists(llist1, llist2) {

    if(llist1 == null && llist2 == null){
        console.log(1)
        return 1
    }
    while(llist1 && llist2){
        if(llist1.data !== llist2.data){
            break
        }

        if(llist1.next == null && llist2.next==null){
            console.log(1)
            return 1
        }
        llist1 = llist1.next
        llist2 = llist2.next
    }
    console.log(0)
    return 0
}
