import React from "react";
import "../style/styles.css"

function Page() {
  const trieProblems = [
    {
		topicName: 'Trie',
		position: 12,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Trie",
				"Problem": "Construct a trie from scratch",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/trie-insert-and-search/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/implement-trie_631356?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Trie",
				"Problem": "Find shortest unique prefix for every word in a given list",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/shortest-unique-prefix_1094887?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Trie",
				"Problem": "Word Break Problem | (Trie solution)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/word-break_1094901?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Trie",
				"Problem": "Given a sequence of words, print all anagrams together",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/group-anagrams_800285?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Trie",
				"Problem": "Implement a Phone Directory",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/phone-directory/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/implement-a-phone-directory_1062666?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Trie",
				"Problem": "Print unique rows in a given boolean matrix",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/unique-matrix_1214696?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Trie Problems</h1>
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
            {trieProblems.map((topic, index) =>
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
