const assert = require('assert');
const {bfs} = require('../src/graph.js');

describe('Breadth First Search', () => {
  it('should find path for single node connected to itself', () => {
    const pairs = [['a', 'a']];
    assert.equal(bfs(pairs, 'a', 'a'), true);
  });
  it('should not find path for same node not connected to itself', () => {
    const pairs = [['a', 'b']];
    assert.equal(bfs(pairs, 'a', 'a'), false);
  });
  it('should find path for two nodes directly connected', () => {
    const pairs = [['a','b']];
    assert.equal(bfs(pairs, 'a', 'b'), true);
  });
  it('should not find path for two nodes not connected', () => {
    const pairs = [['a','a'], ['b','b']];
    assert.equal(bfs(pairs, 'a', 'b'), false);
  });
  it('should find path if there is cycle to the same node', () => {
    const pairs = [['a','b'], ['b','c'], ['c','a']];
    assert.equal(bfs(pairs, 'a', 'a'), true);
  });
  it('should not find path if there is no cycle to the same node', () => {
    const pairs = [['a','b'], ['b','c'], ['c','d']];
    assert.equal(bfs(pairs, 'a', 'a'), false);
  });
  it('should give path for densely connected nodes if connected', () => {
    const pairs = [
      ['a','b'],['a','c'],['a','d'],['a','e'],['a','f'],
      ['b','a'],['b','c'],['b','k'],['b','e'],['b','d'],
      ['c','a'],['c','b'],['c','d'],['c','m'],['c','f'],
      ['d','b'],['d','a'],['d','n'],['d','e'],['d','f'],
      ['e','l'],['e','b'],['e','k']
    ];
    assert.equal(bfs(pairs, 'a', 'l'), true);
  });
  it('should not find path for densely connected nodes if not connected', () => {
    const pairs = [
      ['a','b'],['a','c'],['a','d'],['a','e'],['a','f'],
      ['b','a'],['b','c'],['b','k'],['b','e'],['b','d'],
      ['c','a'],['c','b'],['c','d'],['c','m'],['c','f'],
      ['d','b'],['d','a'],['d','n'],['d','e'],['d','f'],
      ['e','l'],['e','b'],['e','j'],['r','z']
    ];
    assert.equal(bfs(pairs, 'a', 'z'), false);
  });
});

