

// class Person {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
//     data() {
//         console.log(this.name,this.age);
//     }
//     static staticTest () {
//         console.log('静态方法')

//     }
// }

function Animal(name, age) {
    this.name = name
    this.age = age
    Animal.prototype.data = function () {
        console.log(this.name, this.age);
    }
}
Animal.staticTest = function () {
    console.log('静态方法')
}


function Person (name,age) {
    this.name2 = 'cqy'
    Person.prototype = new Animal(name, age)
    Person.prototype.eat = function () {
        console.log('吃')
    }
}


let a= new Person ('cqy', 21)
console.log(a)

// let a = new Person('ddfsfdd', 19)
// a.data()

// // console.log(a)
// Person.staticTest()




