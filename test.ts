export interface TestCase {
    input: any,
    expected: any,
    fn: (input: any) => any
}

export interface TestCases extends Array<TestCase>{}

function checkEquality(expected: any, actual: any) {
    return JSON.stringify(expected) == JSON.stringify(actual);
}

export default function test(tests: TestCases) {
    let passAll = true;

    for(let i=0; i<tests.length; i++) {
        let test = tests[i];
        let testNumber = i + 1;
        let actual = test.fn(test.input);
        let pass = checkEquality(test.expected, actual);
        if(passAll) passAll = pass;
        console.log(`Test ${testNumber}:`, pass ? 'pass': 'fail', test.expected);
    }

    let message = passAll ? 'All tests passed.' : 'One or more tests failed.';
    console.log(message);
}