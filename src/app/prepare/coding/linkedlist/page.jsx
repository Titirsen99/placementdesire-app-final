import React from "react";
import "../style/styles.css"

function Page() {
  const llProblems = [
    {
		topicName: 'Linked List',
		position: 4,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "LinkedList",
				"Problem": "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/reverse-a-linked-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-the-singly-linked-list_799897?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Reverse a Linked List in group of Given Size. [Very Imp]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-a-ll_2271431?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Write a program to Detect loop in a linked list.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/detect-the-cycle_1822910?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Write a program to Delete loop in a linked list.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/detect-and-remove-cycle_920523?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Find the starting point of the loop. ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/detect-the-first-node-of-the-loop_1112628?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Remove Duplicates in a sorted Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/unique-sorted-list_2420283?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Remove Duplicates in a Un-sorted Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/remove-duplicates-from-unsorted-linked-list_1069331?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Write a Program to Move the last element to Front in a Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/deleting-and-adding-the-last-node_1170051?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Add “1” to a number represented as a Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/add-one-to-linked-list_920456?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Add two numbers represented by linked lists.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/add-two-numbers-as-linked-lists_1170520?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Intersection of two Sorted Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/intersection-of-linked-lists_3210610?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Intersection Point of two Linked Lists.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/intersection-of-linked-list_630457?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Merge Sort For Linked lists.[Very Important]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/mergesort-linked-list_630514?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Quicksort for Linked Lists.[Very Important]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/quick-sort-on-linked-list_893099?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Find the middle Element of a linked list.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/middle-of-the-linked-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/middle-of-linked-list_973250?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Check if a linked list is a circular linked list.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/is-it-a-circular-linked-list_981265?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Split a Circular linked list into two halves.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/split-a-circular-linked-list_1071003?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Write a Program to check whether the Singly Linked list is a palindrome or not.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/palindrom-linked-list_799352?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Deletion from a Circular Linked List.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/deletion-and-reverse-in-linked-list/1/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/deletion-in-circular-linked-list_630409?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Reverse a Doubly Linked list.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-a-doubly-linked-list_1116098?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Find pairs with a given sum in a DLL.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-pair-with-a-given-sum-in-a-doubly-linked-list_1164172?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Count triplets in a sorted DLL whose sum is equal to given value “X”.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/count-triplets_873377?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Sort a “k”sorted Doubly Linked list.[Very IMP]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.codingninjas.com/codestudio/problems/sort-a-k-sorted-doubly-linked-list_1118118",
				"URL2": "https://www.codingninjas.com/codestudio/problems/sort-a-k-sorted-doubly-linked-list_1118118?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Rotate DoublyLinked list by N nodes.",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/rotate-dll_1115782?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-dll-nodes-in-groups_920399?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Can we reverse a linked list in less than O(n) ?",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/can-we-reverse-a-linked-list-in-less-than-on/",
				"URL2": ""
			},
			{
				"Topic": "LinkedList",
				"Problem": "Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/",
				"URL2": ""
			},
			{
				"Topic": "LinkedList",
				"Problem": "Flatten a Linked List",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/flatten-a-linked-list_1112655?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Sort a LL of 0's, 1's and 2's",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/sort-linked-list-of-0s-1s-2s_1071937?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Clone a linked list with next and random pointer",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/clone-linked-list-with-random-pointer_873376?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Merge K sorted Linked list",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/merge-k-sorted-lists_992772?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Multiply 2 no. represented by LL",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/multiply-linked-lists_983603?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Delete nodes which have a greater value on right side",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/delete-nodes-which-have-a-greater-value-on-right-side_1115785?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Segregate even and odd nodes in a Linked List",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/segregate-even-and-odd-nodes-in-a-linked-list_1116100?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Program for n’th node from the end of a Linked List",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-th-node-from-the-end-of-the-linked-list_1171164?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "LinkedList",
				"Problem": "Find the first non-repeating character from a stream of characters",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/first-unique-character-in-a-string_893404?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">LinkedList Problems</h1>
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
            {llProblems.map((topic, index) =>
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
