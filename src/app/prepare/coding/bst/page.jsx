import React from "react";
import "../style/styles.css"

function Page() {
  const bstProblems = [
    {
		topicName: 'BST',
		position: 6,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find a value in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/search-a-node-in-bst/1/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-a-value-in-bst_1170063?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Deletion of a node in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/delete-node-in-a-bst/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/delete-node-in-bst_920381?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find min and max value in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/guess-price_3211264?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find inorder successor and inorder predecessor in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/_893049?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Check if a tree is a BST or not ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/validate-bst_799483?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Populate Inorder successor of all nodes",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/populate-inorder-successor-of-all-nodes-of-a-binary-tree_1118625?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find LCA  of 2 nodes in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/lca-in-a-bst_981280?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Construct BST from preorder traversal",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bst-from-preorder_2689307?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Convert Binary tree into BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/binary-tree-to-bst_893074?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Convert a normal BST into a Balanced BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/normal-bst-to-balanced-bst_920472?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Merge two BST [ V.V.V>IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/h_920474?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find Kth largest element in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-th-largest-number_920438?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find Kth smallest element in a BST",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kth-smallest-node-in-bst_920441?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Count pairs from 2 BST whose sum is equal to given value \"X\"",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/count-couples_3208653?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Find the median of BST in O(n) time and O(1) space",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/median-of-a-bst_893184?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Count BST nodes that lie in a given range",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bst-queries_1095658?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Replace every element with the least greater element on its right",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/least-greater-element_1164266?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Given \"n\" appointments, find the conflicting appointments",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-conflicting-meetings_1170047?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Check preorder is valid or not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-if-preorder-traversal-is-valid_1164410?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Check whether BST contains Dead end",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-for-dead-end-in-a-bst_1169457?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Largest BST in a Binary Tree [ V.V.V.V.V IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/largest-bst/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/largest-bst-subtree_893103?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Binary Search Trees",
				"Problem": "Flatten BST to sorted list",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/flatten-bst-to-a-sorted-list_1169459?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Binary Search Tree Problems</h1>
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
            {bstProblems.map((topic, index) =>
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
