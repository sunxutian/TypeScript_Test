(function () {
    'use strict';
    // array deconstructing
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first); // outputs 1
    console.log(second); // outputs 2
    function f(_a) {
        var first = _a[0], second = _a[1];
        console.log(first);
        console.log(second);
    }
    f([1, 2]);
    var f1;
    f1 = f;
    f1([2, 3]);
})();
//# sourceMappingURL=c:/Code/TypeScript_New/bin/t1.js.map