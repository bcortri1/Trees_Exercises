const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

let smallTree;
let largeTree;
let complexTree;
let emptyTree;

beforeEach(function () {
    emptyTree = new BinaryTree();

    // build small tree;
    let smallLeft = new BinaryTreeNode(5);
    let smallRight = new BinaryTreeNode(5);
    let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
    smallTree = new BinaryTree(smallRoot);

    //complicated small
    let extra = new BinaryTree(2);
    let sLeft = new BinaryTreeNode(5, extra);
    let sRight = new BinaryTreeNode(5);
    let sRoot = new BinaryTreeNode(6, sLeft, sRight);
    sTree = new BinaryTree(sRoot);

    // build large tree
    let node6 = new BinaryTreeNode(1);
    let node5 = new BinaryTreeNode(1);
    let node4 = new BinaryTreeNode(2);
    let node3 = new BinaryTreeNode(3, node4, node6);
    let node2 = new BinaryTreeNode(5, node3, node5);
    let node1 = new BinaryTreeNode(5);
    let root = new BinaryTreeNode(6, node1, node2);
    largeTree = new BinaryTree(root);

    // build a higher complexity tree
    let n7 = new BinaryTreeNode(2);
    let n6 = new BinaryTreeNode(1, n7);
    let n5 = new BinaryTreeNode(1, n6);
    let n4 = new BinaryTreeNode(2);
    let n3 = new BinaryTreeNode(3, n4);
    let n2 = new BinaryTreeNode(5, n3, n5);
    let n1 = new BinaryTreeNode(5);
    let r = new BinaryTreeNode(6, n1, n2);
    complexTree = new BinaryTree(r);
});

describe("minDepth", function () {
    it("handles simple trees", function () {
        expect(smallTree.minDepth()).toBe(2);
    });

    it("handles more complex trees", function () {
        expect(largeTree.minDepth()).toBe(2);
    });

    it("handles higher complexity trees", function () {
        expect(complexTree.minDepth()).toBe(2);
    });

    it("handles empty trees", function () {
        expect(emptyTree.minDepth()).toBe(0);
    });
});

describe("maxDepth", function () {
    it("handles simple trees", function () {
        expect(smallTree.maxDepth()).toBe(2);
    });

    it("handles more complex trees1", function () {
        expect(largeTree.maxDepth()).toBe(4);
    });

    it("handles higher complexity trees", function () {
        expect(complexTree.maxDepth()).toBe(5);
    });

    it("handles empty trees", function () {
        expect(emptyTree.maxDepth()).toBe(0);
    });
});

describe("maxSum", function () {
    it("handles simple trees", function () {
        expect(smallTree.maxSum()).toBe(16);
    });

    it("handles empty trees", function () {
        expect(emptyTree.maxSum()).toBe(0);
    });

    it("handles more complex trees", function () {
        expect(largeTree.maxSum()).toBe(21);
    });

    it("handles negative values", function () {
        let node100 = new BinaryTreeNode(100);
        let node8 = new BinaryTreeNode(8);
        let nodeNeg4 = new BinaryTreeNode(-4);
        let node2 = new BinaryTreeNode(2, nodeNeg4);
        let nodeNeg3 = new BinaryTreeNode(-3, node8, node100);
        let root = new BinaryTreeNode(10, node2, nodeNeg3);
        let tree = new BinaryTree(root);

        expect(tree.maxSum()).toBe(109);
    });
});

describe("nextLarger", function () {
    it("handles simple trees", function () {
        expect(smallTree.nextLarger(4)).toBe(5);
        expect(smallTree.nextLarger(5)).toBe(6);
        expect(smallTree.nextLarger(6)).toBe(null);
    });

    it("handles empty trees", function () {
        expect(emptyTree.nextLarger(0)).toBe(null);
    });

    it("handles more complex trees", function () {
        expect(largeTree.nextLarger(1)).toBe(2);
        expect(largeTree.nextLarger(2)).toBe(3);
        expect(largeTree.nextLarger(3)).toBe(5);
        expect(largeTree.nextLarger(4)).toBe(5);
        expect(largeTree.nextLarger(5)).toBe(6);
        expect(largeTree.nextLarger(6)).toBe(null);
    });
});

