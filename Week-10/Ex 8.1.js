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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = -Infinity;
  let curr = 1;
  if (!root) return 0;

  function dfs(node) {
    if (node.left) {
      curr++;
      dfs(node.left);
    }
    if (node.right) {
      curr++;
      dfs(node.right);
    }
    if (curr > max) max = curr;
    //In case of backtracking
    curr--;
    return true;
  }
  dfs(root);
  return max;
};
