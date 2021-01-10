// Ts 문자열 선언
let str: string  = "hello";
let num: number = 10;

// Ts 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];

let heroes: Array <string> = ['capt', 'thors', "Hulk"];

// Ts 튜플  모든 인덱스에 타입이 정해진다
let address: [string, number] = ['gangnam', 10];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };

let person: {name:string, age:number} = {
    name: "lucy",
    age: 1000
}

// TS 진위값
let show: boolean = true;