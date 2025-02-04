import React from "react";
import "../style/styles.css"

function Page() {
  const heapProblems = [
    {
		topicName: 'Heap',
		position: 10,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Heap",
				"Problem": "Implement a Maxheap/MinHeap using arrays and recursion.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/building-heap-from-array/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/build-min-heap_1171167?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Sort an Array using heap. (HeapSort)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/heap-sort/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/heap-sort_1262153?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Maximum of all subarrays of size k.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/maximum-of-all-subarrays-of-size-k_1170789?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "“k” largest element in an array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-largest-element_1062624?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Kth smallest and largest element in an unsorted array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kth-smallest-element-in-an-unsorted-array_1170531?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Merge “K” sorted arrays. [ IMP ]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Merge 2 Binary Max Heaps",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/merge-two-binary-max-heaps_1170049?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Kth largest sum continuous subarrays",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-th-largest-sum-contiguous-subarray_920398?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Leetcode- reorganize strings",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/reorganize-string/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/rearrange-the-array_975383?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Merge “K” Sorted Linked Lists [V.IMP]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
				"URL2": ""
			},
			{
				"Topic": "Heap",
				"Problem": "Smallest range in “K” Lists",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/smallest-range-from-k-sorted-list_1069356?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Median in a stream of Integers",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/median-in-a-stream_975268?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Check if a Binary Tree is Heap",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/is-binary-heap-tree_893136?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Connect “n” ropes with minimum cost",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
				"URL2": ""
			},
			{
				"Topic": "Heap",
				"Problem": "Convert BST to Min Heap",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/convert-bst-min-heap/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/convert-bst-to-min-heap_920498?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Convert min heap to max heap",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/convert-min-heap-to-max-heap_1381084?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Heap",
				"Problem": "Rearrange characters in a string such that no two adjacent are same.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/rearrange-characters4649/1",
				"URL2": ""
			},
			{
				"Topic": "Heap",
				"Problem": "Minimum sum of two numbers formed from digits of an array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-sum-of-two-numbers-formed-from-digits-of-an-array_1171162?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Heap Problems</h1>
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
            {heapProblems.map((topic, index) =>
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
