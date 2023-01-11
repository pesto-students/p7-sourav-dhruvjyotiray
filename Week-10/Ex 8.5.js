/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n == 1) return n;

  const graph = {},
    judge = new Set();

  for (let i = 0; i < trust.length; i++) {
    if (graph[trust[i][0]]) {
      graph[trust[i][0]].push(trust[i][1]);
    } else {
      graph[trust[i][0]] = [trust[i][1]];
    }

    judge.add(trust[i][1]);
  }

  //Check if potential judges don't trust anybody else
  let potential = false;
  for (let key of judge) {
    if (graph[key]) judge.delete(key);
  }

  if (judge.size == 1) potential = [...judge][0];
  else return -1;

  for (let keys of Object.keys(graph)) {
    if (!graph[keys].includes(potential)) return -1;
  }

  return potential;
};
