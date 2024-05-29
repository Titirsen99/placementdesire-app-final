import React from "react";
import "../style/styles.css"

function Page() {
  const graphProblems = [
    {
		topicName: 'Graph',
		position: 11,
		started: false,
		doneQuestions: 0,
		questions: [
			{
				"Topic": "Graph",
				"Problem": "Create a Graph, print it",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5",
				"URL2": "https://www.codingninjas.com/codestudio/problems/create-a-graph-and-print-it_1214551?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Create a Graph (for practice)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/create-a-graph-and-print-it_1214551?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement BFS algorithm ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bfs-in-graph_973002?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement DFS Algo ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/dfs-traversal_630462?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Detect Cycle in Directed Graph using BFS/DFS Algo ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/detect-cycle-in-a-directed-graph_920545?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Detect Cycle in UnDirected Graph using BFS/DFS Algo ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/cycle-detection-in-undirected-graph_1062670?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Search in a Maze",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
				"URL2": ""
			},
			{
				"Topic": "Graph",
				"Problem": "Minimum Step by Knight",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-knight-moves_2179628?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "flood fill algo",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/flood-fill/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/flood-fill-algorithm_1089687?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Clone a graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/clone-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/clone-graph_1103394?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Making wired Connections",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-connection-changes_1171168?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "word Ladder ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/word-ladder/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/word-ladder_1102319?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Dijkstra algo",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/dijkstra-s-shortest-path_920469?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement Topological Sort ",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/topological-sort/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/topological-sort_982938?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kill-the-snipers-ii_1171163?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Find whether it is possible to finish all tasks or not from given dependencies",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/kill-the-snipers_1171161?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Find the no. of Islands",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/find-number-of-islands_630512?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Given a sorted Dictionary of an Alien Language, find order of characters",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ninja-and-alien_1171179?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement Kruskal’s Algorithm",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-spanning-tree_631769?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement Prim’s Algorithm",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/prim-s-mst_1095633?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Total no. of Spanning tree in a graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/total-number-of-spanning-trees-in-a-graph_1171196?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement Bellman Ford Algorithm",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bellmon-ford_2041977?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Implement Floyd Warshall Algorithm",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
				"URL2": "https://www.codingninjas.com/codestudio/problems/flloyd-warshall_2041979?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Travelling Salesman Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/travelling-salesman-problem_1385180?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Graph Colouring Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/graph-coloring-applications/",
				"URL2": ""
			},
			{
				"Topic": "Graph",
				"Problem": "Snake and Ladders Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/snakes-and-ladders/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/snake-and-ladder_630458?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Find bridge in a graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/bridge-in-a-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/bridges-in-graph_893026?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Count Strongly connected Components(Kosaraju Algo)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
				"URL2": "https://www.codingninjas.com/codestudio/problems/count-strongly-connected-components-kosaraju-s-algorithm_1171151?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Check whether a graph is Bipartite or Not",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/bipartite-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/check-graph-is-bipartite-or-not_920551?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Detect Negative cycle in a graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/negative-cycle-in-a-directed-graph_1090517?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Longest path in a Directed Acyclic Graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/longest-path-in-directed-graph_1172157?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Journey to the Moon",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ninja-and-fruits_1170757?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Cheapest Flights Within K Stops",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/saving-money_1171195?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Oliver and the Game",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/hide-and-seek_1172173?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Water Jug problem using BFS",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/ninja-and-vessels_1172168?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Find if there is a path of more thank length from a source",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
				"URL2": ""
			},
			{
				"Topic": "Graph",
				"Problem": "M-Colouring Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
				"URL2": ""
			},
			{
				"Topic": "Graph",
				"Problem": "Minimum edges to reverse to make path from source to destination",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/reverse-edges_1200162?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Paths to travel each nodes using each edge(Seven Bridges)",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/euler-path_1214547?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Vertex Cover Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/vertex-cover-problem_1081481?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Chinese Postman or Route Inspection",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-travel-time_1171046?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Number of Triangles in a Directed and Undirected Graph",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/number-of-triangles-in-directed-and-undirected-graphs_1214931?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Minimise the cashflow among a given set of friends who have borrowed money from each other",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/minimum-cash-flow_975372?topList=love-babbar-dsa-sheet-problems"
			},
			{
				"Topic": "Graph",
				"Problem": "Two Clique Problem",
				"Done": false,
				"Bookmark": false,
				"Notes": "",
				"URL": "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
				"URL2": "https://www.codingninjas.com/codestudio/problems/two-cliques_1214524?topList=love-babbar-dsa-sheet-problems"
			}
		],
	},
  ];

  return (
    <div>
      <h1 className="text-3xl text-center m-5">Graph Problems</h1>
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
            {graphProblems.map((topic, index) =>
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
