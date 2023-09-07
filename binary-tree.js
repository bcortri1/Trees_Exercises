/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth(root = this.root, count = 0) {
        if (root !== null) {
            if ((root.left) && (root.right)) {
                let left = this.minDepth(root.left, count + 1);
                let right = this.minDepth(root.right, count + 1);
                return left < right ? left : right;
            }
            else if (root.left !== null) {
                return this.minDepth(root.left, count + 1);
            }
            else if (root.right !== null) {
                return this.minDepth(root.right, count + 1);
            }
            else {
                return count + 1
            }
        }
        else {
            return count;
        }
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth(root = this.root, count = 0) {
        if (root !== null) {
            if ((root.left) && (root.right)) {
                let left = this.maxDepth(root.left, count + 1);
                let right = this.maxDepth(root.right, count + 1);
                return left > right ? left : right;
            }
            else if (root.left !== null) {
                return this.maxDepth(root.left, count + 1);
            }
            else if (root.right !== null) {
                return this.maxDepth(root.right, count + 1);
            }
            else {
                return count + 1
            }
        }
        else {
            return count;
        }
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum(node = this.root) {
        let sum = 0;
        function maxUtil(node) {
            if (node === null) {
                return 0;
            }
            else {
                //Find max on the left paths
                let left = maxUtil(node.left);
                //Find max on the right paths
                let right = maxUtil(node.right);
                //Check if the current sum is greater than the current nodes val and max of left and right paths
                sum = Math.max(sum, node.val + left + right)
                //returns so that left and right get values when called recursively
                return Math.max(left + node.val, right + node.val);
            }
        }
        maxUtil(node);
        return sum;

    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound , root = this.root) {
        let largerNum = null;
        function largerUtil(lowerBound, node){
            if (node === null) {
                return null;
            }
            largerUtil(lowerBound, node.left);
            largerUtil(lowerBound, node.right);
            if((node.val > lowerBound) && ((largerNum > node.val) || (largerNum === null))){
                largerNum = node.val;
            }
        }
        largerUtil(lowerBound, root)
        return largerNum;
    }

}

module.exports = { BinaryTree, BinaryTreeNode };
