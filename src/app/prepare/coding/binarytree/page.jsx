import React from "react";
import "../style/styles.css"

function Page() {
  const btProblems = [
    {
		topicName: 'Binary Trees',
		position: 5,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Binary Trees",
				"Problem": "level order traversal",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/level-order-traversal_796002?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Reverse Level Order traversal",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-level-order-traversal_764339?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Height of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/calculate-the-height-of-binary-tree-using-inorder-and-level-order-traversal_841416?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Diameter of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/diameter-of-the-binary-tree_920552?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Mirror of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/invert-binary-tree/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/convert-binary-tree-to-mirror-tree_873140?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Inorder Traversal of a tree both using recursion and Iteration",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/tree-traversal_981269?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Preorder Traversal of a tree both using recursion and Iteration",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/preorder-traversal_2035934?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Postorder Traversal of a tree both using recursion and Iteration",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/name_2035933?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Left View of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/left-view-of-a-binary-tree_920519?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Right View of Tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/right-view_764605?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Top View of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/top-view-of-the-tree_799401?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Bottom View of a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bottom-view-of-binary-tree_893110?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Zig-Zag traversal of a binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/zigzag-binary-tree-traversal_920532?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if a tree is balanced or not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/is-height-balanced-binary-tree_975497?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Diagonal Traversal of a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/diagonal-traversal_893029?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Boundary traversal of a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/boundary-traversal_790725?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Construct Binary Tree from String with Bracket Representation",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/binary-tree-from-bracket_1118117?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Convert Binary tree into Doubly Linked List",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bst-to-sorted-dll_1263694?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Convert Binary tree into Sum tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/convert-a-binary-tree-to-its-sum-tree_920395?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Construct Binary tree from Inorder and preorder traversal",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/construct-binary-tree-from-inorder-and-postorder-traversal_1266106?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Find minimum swaps required to convert a Binary tree into BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-swaps-to-convert-binary-tree-into-bst_1118109?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if Binary tree is Sum tree or not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/sum-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-if-binary-tree-is-sum-tree-or-not_1164404?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if all leaf nodes are at same level or not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/level-leaf_3210614?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-for-duplicate-subtree_1089641?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if 2 trees are mirror or not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-for-mirror-trees_3125887?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Sum of Nodes on the Longest path from root to leaf node ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/longest-path_3210613?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Check if given graph is tree or not.  [ IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/check-given-graph-tree/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/is-graph-tree_1115787?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Find Largest subtree sum in a tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/maximum-subtree-sum_1082330?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Maximum Sum of nodes in Binary tree such that no two are adjacent ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/maximum-sum-of-nodes-in-a-binary-tree-such-that-no-two-nodes-are-adjacent_1118112?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Print all \"K\" Sum paths in a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/number-of-ways-for-the-sum-k_1164407?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Find LCA in a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/least-common-ancestor_1092611?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Find distance between 2 nodes in a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/distance-between-two-nodes-of-a-tree_800303?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Kth Ancestor of node in a Binary tree",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kth-ancestor-of-a-node-in-binary-tree_842561?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Find all Duplicate subtrees in a Binary tree [ IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/duplicate-subtrees_920530?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Trees",
				"Problem": "Tree Isomorphism Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/isomorphic-trees_794946?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Binary Tree Problems</h1>
      <hr />
      <div className="table-container">
        <table className="problem-table">
          <thead>
            <tr>
			<th>Done</th>
              <th>Problem</th>
              <th>GeeksforGeeks</th>
              <th>Coding Ninjas</th>
            </tr>
          </thead>
          <tbody>
            {btProblems.map((topic, index) =>
              topic.questions.map((question, i) => (
                <tr key={`${index}-${i}`}>
					<td>
                    <input type="checkbox" /> {/* Checkbox */}
                  </td>
                  <td>{question.Problem}</td>
                  <td>
                    {question.URL ? (
                      <a
                        href={question.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    ) : (
                      <span>❌</span>
                    )}
                  </td>
                  <td>
                    {question.URL2 ? (
                      <a
                        href={question.URL2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    ) : (
                      <span>❌</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
