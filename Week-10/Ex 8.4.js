/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let graph = {};

  for (let i = 0; i < edges.length; i++) {
    if (graph[edges[i][0]]) graph[edges[i][0]].push(edges[i][1]);
    else graph[edges[i][0]] = [edges[i][1]];

    if (graph[edges[i][1]]) graph[edges[i][1]].push(edges[i][0]);
    else graph[edges[i][1]] = [edges[i][0]];
  }

  //Using BFS to traverse.

  const stack = [source];
  const visited = new Array(n).fill(false);

  while (stack.length > 0) {
    let currVertex = stack.pop();

    if (currVertex == destination) return true;

    if (!visited[currVertex]) visited[currVertex] = true;

    for (let i = 0; i < graph[currVertex].length; i++) {
      let edge = graph[currVertex][i];
      if (visited[edge]) continue;
      stack.push(edge);
    }
  }

  return false;
};
