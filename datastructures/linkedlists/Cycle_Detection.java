    static boolean hasCycle(SinglyLinkedListNode head) {

        if (head == null){
            return false;
        } 
        SinglyLinkedListNode slow = head;
        SinglyLinkedListNode fast = head.next;
        while (fast != null && fast.next != null){
            if (fast == slow){
                return true;
            }                 
            slow = slow.next;
            fast = fast.next.next;
        }

        return false;
    }
