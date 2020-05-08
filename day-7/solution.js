/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var findDepth = (root, node, depth = 0) => {
    if(!root) return null
    if(root.val === node) return depth;
    return findDepth(root.left, node, depth + 1) || findDepth(root.right, node, depth + 1)
}

var sameParent = (root, x, y) => {
    if(!root) return false;
    if(root.left && root.right && root.left.val === x && root.right.val === y) return true;
    if(root.left && root.right && root.left.val === y && root.right.val === x) return true;
    console.log(root);
    return sameParent(root.left, x, y) || sameParent(root.right, x, y)
}

var isCousins = function(root, x, y) {
    return (!sameParent(root, x, y) && findDepth(root, x) === findDepth(root, y))
};