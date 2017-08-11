(function () {
    'use strict';
    // array deconstructing
    let input: number[] = [1, 2];
    let [first, second] = input;
    console.log(first); // outputs 1
    console.log(second); // outputs 2

    function f([first, second]: [number, number]) {
        console.log(first);
        console.log(second);
    }
    f([1, 2]);

    let f1: ([a, b]) => void;
    f1 = f;

    f1([2, 3]);

    // ...
    let [a1, a2, ...aRest] = [1, 2, 3, 4];
    console.log(a1);
    console.log(a2);
    console.log(aRest);

    // object destructing
    let b1 = {
        "name": "Alex",
        "age": 28,
        "geneder": "M"
    };

    let { name: n1, age: n2 } = b1;
    let { name: m1, ...m2 } = b1;
    console.log(m1);
    console.log(m2.age);
    console.log(m2.geneder);

    // default value
    let f2: (a: string, b?: number) => any;
    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let { a, b = 1001 } = wholeObject;
    }

})();