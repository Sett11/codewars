function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
if (index == 0){
  return push(head, data)
} else{
   head.next = insertNth(head.next, index - 1, data)
  return head
}
}
