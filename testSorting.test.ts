import { sortArray } from "./src";

class Test {
    a: number;
    b: number;
    c: number;
    d: number;
    
    constructor(a: number, b: number, c: number, d: number){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    sameTest(test: Test) {
        return this.a === test.a && this.b === test.b && this.c === test.c && this.d === test.d;
    }

    static sameTestArray(tests0: Test[], tests1: Test[]){
        return tests0.map((item, index) => item.sameTest(tests1[index])).reduce((n, c) => c && n);
    }
}

const tests = [
    [5, 1, 3, 20],
    [2, 1, 10, 1],
    [3, 7, 7, 15],
    [3, 4, 10, 12],
].map(l => new Test(l[0], l[1], l[2], l[3]));

test("Ordenar por a y luego b", () => {
    expect(
        Test.sameTestArray(
            sortArray(
                tests, t => t.a, t => t.b
            ),
            [
                [2, 1, 10, 1],
                [3, 4, 10, 12],
                [3, 7, 7, 15],
                [5, 1, 3, 20],
            ].map(l => new Test(l[0], l[1], l[2], l[3]))
        )
    ).toBe(true);
});

test("Ordenar por c y luego d", () => {
    expect(
        Test.sameTestArray(
            sortArray(
                tests, t => t.c, t => t.d
            ),
            [
                [5, 1, 3, 20],
                [3, 7, 7, 15],
                [2, 1, 10, 1],
                [3, 4, 10, 12],
            ].map(l => new Test(l[0], l[1], l[2], l[3]))
        )
    ).toBe(true)
});