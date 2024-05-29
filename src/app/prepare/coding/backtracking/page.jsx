import React from "react";
import "../style/styles.css"

function Page() {
  const backtrackingProblems = [
    {
		topicName: 'BackTracking',
		position: 8,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "BackTracking",
				"Problem": "Rat in a maze Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/rat-in-a-maze_1215030?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Printing all solutions in N-Queen Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/the-n-queens-puzzle_981286?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Word Break Problem using Backtracking",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/word-break-part-2/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/word-break-ii_983635?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Remove Invalid Parentheses",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/remove-invalid-parentheses/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/generate-all-valid-strings_1170524?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Sudoku Solver",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/sudoku-solver_699919?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "m Coloring Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/m-coloring-problem_981273?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Print all palindromic partitions of a string",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/palindrome-partitions_981290?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Subset Sum Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/partition-equal-subset-sum_892980?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "The Knight’s tour problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/knight-tour_1170518?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Tug of War",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/tug-of-war/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/tug-of-war_985253?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Find shortest safe route in a path with landmines",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/shortest-safe-route-in-a-field-with-landmines_1164264?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Combinational Sum",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/combination-sum/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/combination-sum_981296?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Find Maximum number possible by doing at-most K swaps",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-maximum-number-possible-by-doing-at-most-k-swaps_1169469?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Print all permutations of a string ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
				"URL2": ""
			},
			{
				"Topic": "BackTracking",
				"Problem": "Find if there is a path of more than k length from a source",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-if-there-is-a-path-of-more-than-k-length-from-a-source_1229512?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Longest Possible Route in a Matrix with Hurdles",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/longest-route_1170525?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Print all possible paths from top left to bottom right of a mXn matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/print-all-possible-paths-from-top-left-corner-to-bottom-right-corner-of-a-2-d-matrix_1171152?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Partition of a set intoK subsets with equal sum",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/partition-to-k-equal-sum-subsets_843262?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "BackTracking",
				"Problem": "Find the K-th Permutation Sequence of first N natural numbers",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/k-th-permutation-sequence-of-first-n-natural-numbers_1164403?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">BackTracking Problems</h1>
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
            {backtrackingProblems.map((topic, index) =>
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
