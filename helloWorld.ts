(function(){
    let isDone : boolean = false;
    enum MyEnum{
        MyE1,
        MyE2
    }

    interface IPerson{
        FirstName : string;
        LastName : string;
    }

    class Worker implements IPerson{
        public FirstName: string;
        public LastName: string;
        public Title : string;

        Work() : void{
            console.log("Does some work");
        }
    }

    class Developer implements IPerson{
        FirstName: string;
        LastName: string;
        constructor(fn : string, ln : string, public Age : number){
            this.FirstName = fn;
            this.LastName = ln;
        }

        // never type
        NeverFunction() : never{
            throw new Error("Never Function");
        }
    }

    let myEnum : MyEnum = MyEnum.MyE1;    
    let myArray : string[] = ["1", "2", "3"];
    
    let d1 = new Developer("Alex", "Sun", 28);
    let d2 = new Worker();
    
    let myTuple : Array<IPerson> = [d1];
    let b = myTuple[0] as Developer;
    let c = myTuple[0] as Worker;
    if(b != null){
        console.log(b.Age);
    }

    console.log(c.Title);

    let d : any = 123; 
})();