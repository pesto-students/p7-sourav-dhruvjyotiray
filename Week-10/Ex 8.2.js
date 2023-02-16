/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let list = []
  
  function dfsInOrder(node, list) {
    if (node.left) dfsInOrder(node.left, list);
    list.push(node.val);
    if (node.right) dfsInOrder(node.right, list);
    return list;
  }
  dfsInOrder(root, list);

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] >= list[i + 1]) return false;
  }

  return true;
};
