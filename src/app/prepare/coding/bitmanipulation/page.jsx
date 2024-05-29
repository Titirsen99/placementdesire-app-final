import React from "react";
import "../style/styles.css"

function Page() {
  const bmProblems = [
    {
		topicName: 'Bit Manipulation',
		position: 14,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Bit Manipulation",
				"Problem": "Count set bits in an integer",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/set-bits_1164179?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Find the two non-repeating elements in an array of repeating elements",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/unique-pair-using-bits_972997?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Count number of bits to be flipped to convert A to B",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/bit-difference/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/number-of-flips_3125902?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Count total set bits in all numbers from 1 to n",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/count-set-bits_1112627?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Program to find whether a no is power of two",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/power-of-2/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/power-of-two_893061?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Find position of the only set bit",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-the-lone-set-bit_1062725?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Copy set bits in a range",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/copy-bits-in-range_3150011?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Divide two integers without using multiplication, division and mod operator",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/divide-two-integers_1112617?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Calculate square of a number without using *, / and pow()",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/calculate-square-of-a-number_1112623?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Bit Manipulation",
				"Problem": "Power Set",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/power-set4302/1",
				"URL2": ""
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Bit Manipulation Problems</h1>
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
            {bmProblems.map((topic, index) =>
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
