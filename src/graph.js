//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const create_graph = function (pairs) {
  return pairs.reduce((graph, path) => {
    const [from, to] = path;
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
    return graph;
  }, {});
}

const bfs = function (pairs, source, target) {
  const graph = create_graph(pairs);
  const visited = [];
  const search = function (from, to) {
    const children = graph[from] ? graph[from].slice() : [];
    for (each of children) {
      if (each == to) {
        return true;
      }
      if (!visited.includes(each)) {
        visited.push(each);
        if (search(each, to)) {
          return true;
        }
      }
    }
    return false;
  };
  return search(source, target);
}

module.exports = { bfs };
