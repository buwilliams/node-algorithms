// Original post:
//      https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

// Breadth First Traversal (or Search) for a graph is similar to Breadth First 
// Traversal of a tree (See method 2 of this post). The only catch here is, 
// unlike trees, graphs may contain cycles, so we may come to the same node again. 
// To avoid processing a node more than once, we use a boolean visited array. For 
// simplicity, it is assumed that all vertices are reachable from the starting vertex. 

// For example, in the following graph, we start traversal from vertex 2. When we 
// come to vertex 0, we look for all adjacent vertices of it. 2 is also an adjacent 
// vertex of 0. If we don’t mark visited vertices, then 2 will be processed again 
// and it will become a non-terminating process. A Breadth First Traversal of 
// the following graph is 2, 0, 3, 1.

// See also:
//      Adjacency List: https://www.youtube.com/watch?v=DBRW8nwZV-g
//                      https://en.wikipedia.org/wiki/Adjacency_list

import test from '../test'

function bfsOfGraph(V: number, adj: any[]) {
    let answer = [];
    let visited = new Array(V).fill(false);
    let queue = [];
    
    visited[0] = true;
    queue.push(0);
    
    while(queue.length > 0) {
        let s = queue.shift();
        answer.push(s);
        for(let i=0; i<adj[s!].length; i++) {
            let n = parseInt(adj[s!][i]);
            if(!visited[n]) {
                visited[n] = true;
                queue.push(n);
            }
        }
    }
    
    return answer;
}

test([
    {
        input: [['1', '2', '3' ], [], ['4'], [], []],
        expected: [0, 1, 2, 3, 4],
        fn: input => bfsOfGraph(input.length, input)
    },
    {
        input: [['4', '2'], [], [], [], ['3']],
        expected: [0, 4, 2, 3],
        fn: input => bfsOfGraph(input.length, input)
    }
])