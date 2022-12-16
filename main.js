function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
 if(head == null)
   return 0
  else
   return 1 + length(head.next)
 
}

function count(head, data) {
 if(head == null)
   return 0
  let count = 0
  while(head != null){
    if(head.data == data)
      count++
      head = head.next
  }
  return count
}
