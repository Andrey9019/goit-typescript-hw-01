// let total: number = 100;
// let name: string = 'Andrii'
// let isActive: boolean = true;
// let empty: null = null
// let qwe: undefined= undefined
 
// name = false
 
// const numbers: number[] = [ 1, 2, 3, "4", false]
// numbers.push('12')
 
// const user: {
//     name: string,
//     age: number
// } = {
//     name: `Bot`,
//     age: 7
// }
 
// type User = {
//     name: string,
//     age : number | string
// }

// const user: User = {
//     name: `Bot`,
//     age: 7
// }
 
// user.age = '5'
// user.name = true

// let age: any = 10
// age = "Bot"

// let name: unknown = "Bot"
// name = 7
// name.toFixed()

// type size = "small" | "medium" | "large"

// enum Sizes {
//     small = "small",
//     medium = "medium",
//     large = "large"
// }

// const btn: size = "large"
// const bnt2: Sizes = Sizes.large

////////////////

// function add(num1: number, num2: number):string{
//     return `${num1} + ${num2}`;
// }
// add(1, 1)

type User = {
    name: string;
}

function great(user:User): void {
    console.log(`hello ${user.name}`);
}

// type User = {
//     name: string,
//     age: number,
//     hobby: string,
// }
    
// function userConstructor(name: string, age: number, hobby: string):User {
//     return{
//         name,
//         age,
//         hobby
//     }
// }

/////

// type Car = {
//     color: string,
//     price: number,
//     currenty: string,
//     start: () => {}
// }
// const Car = {
//     color: "red",
//     price: 1000,
//     currenty: "UAH",
//     start() {
//      console.log("Start");
//     }
// }

// type User = {
//     name: string,
//     age: number, 
//     role?: string
// }
// const user: User = {
//     name: "Bot",
//     age:7
// }
// const Admin = {
//     name: "Andrii",
//     age: 25,
//     role: "admin"
// }
