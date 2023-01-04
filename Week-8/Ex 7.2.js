/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateLeft = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  let tail = head;
  let length = 1;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head;

  let rotate = length - (k % length);

  for (let i = 0; i < rotate; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;
};
