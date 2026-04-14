// console.log("First Demo")
// console.log("Second One")
// console.log("Third One")

// let a: number = 12
// a = 90

// let b: string = "ABC"
// console.log(a,b)

// let c: number= 12.1
// console.log(c)

// var vs let vs const
// var => function scope
// let and const => block scope
// 1) Scope
// 2) Re-declaration
// 3) Hoisting

// var we declare a variable with var keyword, it is function scoped, which means it is accessible within the function it is declared in. If declared outside of any function, it becomes globally scoped. Variables declared with var can be re-declared and updated within its scope. Additionally, var declarations are hoisted to the top of their scope, meaning they can be accessed before their declaration without causing an error (though they will be undefined until the declaration is reached).

// let we declare a variable with let keyword, it is block scoped, which means it is only accessible within the block (enclosed by curly braces {}) it is declared in. Variables declared with let can be updated but not re-declared within the same scope. Additionally, let declarations are hoisted to the top of their block scope, but they are not initialized until their declaration is evaluated, which means accessing them before the declaration will result in a ReferenceError.

// const we declare a variable with const keyword, it is block scoped, which means it is only accessible within the block (enclosed by curly braces {}) it is declared in. Variables declared with const can neither be updated nor re-declared within the same scope. Additionally, const declarations are hoisted to the top of their block scope, but they are not initialized until their declaration is evaluated, which means accessing them before the declaration will result in a ReferenceError.

function test(){
    if(true){
        var x = 10
        let y = 20
        const z = 30
    }
    console.log(x) // 10
    // console.log(y) // ReferenceError: y is not defined
    // console.log(z) // ReferenceError: z is not defined
}
test()
