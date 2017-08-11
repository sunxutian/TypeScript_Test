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

    let f1 : ([a, b]) => void;
    f1 = f;

    f1([2,3]);
})();