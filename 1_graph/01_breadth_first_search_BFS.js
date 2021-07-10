// https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

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

function bfsOfGraph(V, adj) {
    let answer = []
    let visited = new Array(V).fill(false);
    let queue = [];
    
    visited[0] = true;
    queue.push(0)
    
    
    while(queue.length > 0) {
        let s = queue.shift();
        answer.push(s);
        for(let i=0; i<adj[s].length; i++) {
            let n = parseInt(adj[s][i]);
            if(!visited[n]) {
                visited[n] = true;
                queue.push(n);
            }
        }
    }
    
    return answer
}

function checkEquality(expected, actual) {
    return JSON.stringify(expected) == JSON.stringify(actual);
}

function test() {
    let tests = [
        {
            input: [['1', '2', '3' ], [], ['4'], [], []],
            expected: [0, 1, 2, 3, 4]
        },
        {
            input: [['4', '2'], [], [], [], ['3']],
            expected: [0, 4, 2, 3]
        }
    ]

    let passAll = true;

    for(let i=0; i<tests.length; i++) {
        let test = tests[i];
        let testNumber = i+1;
        let actual = bfsOfGraph(test.input.length, test.input);
        let pass = checkEquality(test.expected, actual);
        if(passAll) passAll = pass;
        console.log(`Test ${testNumber}:`, pass ? 'pass': 'fail', test.expected);
    }

    if(passAll) {
        console.log('All tests passed.');
    } else {
        console.log('One or more tests failed.');
    }
}

test();