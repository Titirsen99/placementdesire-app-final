import React from "react";
import "../style/styles.css"

function Page() {
  const matrixProblems = [
    {
		topicName: 'Matrix',
		position: 1,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Matrix",
				"Problem": "Spiral traversal on a Matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/spiral-matrix_840698?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Search an element in a matriix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/search-a-2d-matrix/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/search-in-a-row-wise-and-column-wise-sorted-matrix_839811?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Find median in a row wise sorted matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/median-in-matrix_981178?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Find row with maximum no. of 1's",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/row-with-maximum-1-s_1112656?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Print elements in sorted order using row-column wise sorted matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/sorted-matrix_758931?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Maximum size rectangle",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/maximum-size-rectangle-sub-matrix-with-all-1-s_893017?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Find a specific pair in matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-a-specific-pair-in-the-matrix_1115467?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Rotate matrix by 90 degrees",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/inplace-rotate-matrix-90-degree_839734?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Kth smallest element in a row-column wise sorted matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kth-minimum-floor_1115470?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Matrix",
				"Problem": "Common elements in all rows of a given matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/common-elements-present-in-all-rows-of-a-matrix_1118111?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Matrix Problems</h1>
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
            {matrixProblems.map((topic, index) =>
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
