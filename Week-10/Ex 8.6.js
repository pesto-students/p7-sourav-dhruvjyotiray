/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  //using DFS
  let path = [],
    result = [];
  function DFS(current, target, path) {
    if (current == target) {
      result.push([...path, current]);
      return;
    }

    path.push(current);

    for (let neighbor of graph[current]) {
      DFS(neighbor, graph.length - 1, path);
    }

    path.pop();
  }

  DFS(0, graph.length - 1, path);

  return result;
};
