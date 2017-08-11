for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 100 * i);
    })(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(j);
    }, 100 * i);
}