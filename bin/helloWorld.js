(function () {
    var isDone = false;
    var MyEnum;
    (function (MyEnum) {
        MyEnum[MyEnum["MyE1"] = 0] = "MyE1";
        MyEnum[MyEnum["MyE2"] = 1] = "MyE2";
    })(MyEnum || (MyEnum = {}));
    var Worker = (function () {
        function Worker() {
        }
        Worker.prototype.Work = function () {
            console.log("Does some work");
        };
        return Worker;
    }());
    var Developer = (function () {
        function Developer(fn, ln, Age) {
            this.Age = Age;
            this.FirstName = fn;
            this.LastName = ln;
        }
        // never type
        Developer.prototype.NeverFunction = function () {
            throw new Error("Never Function");
        };
        return Developer;
    }());
    var myEnum = MyEnum.MyE1;
    var myArray = ["1", "2", "3"];
    var d1 = new Developer("Alex", "Sun", 28);
    var d2 = new Worker();
    var myTuple = [d1];
    var b = myTuple[0];
    var c = myTuple[0];
    if (b != null) {
        console.log(b.Age);
    }
    console.log(c.Title);
    var d = 123;
})();
//# sourceMappingURL=c:/Code/TypeScript_New/bin/helloWorld.js.map