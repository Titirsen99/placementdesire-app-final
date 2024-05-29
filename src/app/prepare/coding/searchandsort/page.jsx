import React from "react";
import "../style/styles.css"

function Page() {
  const searchandsortProblems = [
    {
		topicName: 'Search & Sort',
		position: 3,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Searching & Sorting",
				"Problem": "Find first and last positions of an element in a sorted array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/first-and-last-position-of-an-element-in-sorted-array_1082549?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Find a Fixed Point (Value equal to index) in a given array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/value-equal-to-the-index-value_1115771?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Search in a rotated sorted array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/search-in-rotated-sorted-array_1082554?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "square root of an integer",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/count-squares3649/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/square-root-integral_893351?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Maximum and minimum of an array using minimum number of comparisons",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/middle-of-three_1118283?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Optimum location of point to minimize total distance",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/optimum-location_1116097?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Find the repeating and the missing",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-the-repeating-and-missing-number_1062727?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "find majority element",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/majority-element/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/majority-element_842495?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Searching in an array where adjacent differ by at most k",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-student_3161883?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "find a pair with a given difference",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/pair-difference-k_1089634?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "find four elements that sum to a given value",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-four-elements-that-sums-to-a-given-value_983605?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "maximum sum such that no 2 elements are adjacent",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/is-it-a-tree_630511?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Count triplet with sum smaller than a given value",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/3-sum-smaller_3161884?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "merge 2 sorted arrays",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/merge-two-sorted-arrays/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ninja-and-sorted-arrays_1214628?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "print all subarrays with 0 sum",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/subarrays-with-zero-sum_3161876?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Product array Puzzle",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/product-of-array-except-self_630271?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Sort array according to count of set bits",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/sort-an-array-according-to-the-count-of-set-bits_873142?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "minimum no. of swaps required to sort the array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-swaps-to-sort-array_1806885?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Bishu and Soldiers",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.hackerearth.com/problem/algorithm/bishu-and-soldiers-227/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/search-in-the-array_1116099?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Rasta and Kheshtak",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ninja-and-his-sword_1164268?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Kth smallest number again",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kth-smallest-integer-in-ranges_1115609?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Find pivot element in a sorted array",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/game-of-largest-element_1170064?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "K-th Element of Two Sorted Arrays",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-th-element-of-2-sorted-array_1164159?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Aggressive cows",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.spoj.com/problems/AGGRCOW/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/chess-tournament_981299?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Book Allocation Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ayush-gives-ninjatest_1097574?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "EKOSPOJ:",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.spoj.com/problems/EKO/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kevin-and-his-fruits_1164267?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Job Scheduling Algo",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/weighted-job-scheduling_1094885?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Missing Number in AP",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/missing-number-in-ap_975498?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Smallest number with atleastn trailing zeroes infactorial",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/smallest-number-with-at-least-n-trailing-zeros-in-factorial_1115774?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Painters Partition Problem:",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/painter-s-partition-problem_1089557?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "ROTI-Prata SPOJ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.spoj.com/problems/PRATA/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/cooking-ninjas_1164174?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "DoubleHelix SPOJ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.spoj.com/problems/ANARC05B/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/maximize-the-sum_1118624?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Subset Sums",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.spoj.com/problems/SUBSUMS/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/city-of-happy-people_1199336?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Find the inversion count",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/equal-global-and-local-inversions_1463976?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Implement Merge-sort in-place",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/in-place-merge-sort/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/merge-sort-in-place_1118623?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Searching & Sorting",
				"Problem": "Partitioning and Sorting Arrays with Many Repeated Entries",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
				"URL2": "https://www.codingninjas.com/codestudio/problems/partitioning-and-sorting-arrays-with-many-repeated-entries_1170515?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Searching & Sorting Problems</h1>
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
            {searchandsortProblems.map((topic, index) =>
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
