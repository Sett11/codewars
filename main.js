function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newHead = null
  newHead = new Node(data)
  newHead.next = head
  return newHead
}

function buildOneTwoThree() {
  let tail = null
  tail = push(tail, 3)
  tail = push(tail, 2)
  tail = push(tail, 1)
  return tail
}
