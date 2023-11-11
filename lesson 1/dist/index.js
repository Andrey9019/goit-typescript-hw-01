// let total: number = 100;
// let name: string = 'Andrii'
// let isActive: boolean = true;
// let empty: null = null
// let qwe: undefined= undefined
function great(user) {
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
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Lesson 2
// type Fruits = {
//     apples: number,
//     banana: number,
//     orange: number,
// }
// type FrozeGoods = {
//     iceCream: number,
//     fish: number,
//     berry:number,
// }
// =>
// type Goods = {
//      [key:string]:number
//  }
// const fruits: Goods = {
//     apples: 15,
//     banana: 7,
//     orange: 4
// }
// const frozeGoods: Goods = {
//     iceCream: 30,
//     fish: 6,
//     berry:30,
// }
///
// type MixeType = {
//     [key: string]: string | number
// }
// const userInfo: MixeType = {
//     name: `Bot`,
//     age: 7,
//     contry: `UA`,
// }
// const bookDetails: MixeType = {
//     title: ` Bible`,
//     page: 123,
// }
///
// Genarics
// function identity<T>(arg: T): T {
//     return arg;
// }
// let output = identity<string>("hello")
function reverse(items) {
    return items.reverse();
}
let numbers = reverse([1, 2, 3, 4, 5]);
let string = reverse([`a`, `b`, `c`, `d`]);
//  extends and key of
//# sourceMappingURL=index.js.map