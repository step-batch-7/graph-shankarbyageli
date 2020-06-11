//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const create_graph = function(pairs) {
  return pairs.reduce((graph, path) => {
    const [from, to] = path;
    if(!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
    return graph;
  }, {});
}

const bfs = function(pairs, source, target) {
  const graph = create_graph(pairs);
  const visited = [];
  const queue = graph[source];
  while(queue.length) {
    current_element = queue.shift();
    if(current_element == target) {
      return true;
    }
    graph[current_element] && graph[current_element].forEach(value => {
      if(!visited.includes(value) && !queue.includes(value)) {
        queue.push(value);
      }
    });
    visited.push(current_element);
  }
  return false;
}

module.exports = {bfs};

