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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let list = [];
  let queue = [root];

  while (queue.length > 0) {
    let currentLevel = [];
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    list.push(currentLevel);
    currentLevel = [];
  }

  return list;
};
