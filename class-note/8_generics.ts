// function logText(text) {
//     console.log(text);
//     return text;
// }
//
// logText(10);
// logText("하이");
// logText(true);




// 함수를 호출를 할때 인자 파라미터의 타입을 지정하면서 넘긴다
// 호출하는 시점에 문자열이 됬건 숫자가 됬건 타입을 넘겨줌
// 타입스크립트 랭기지 서버가 타입 추론을 함
//logText('10');
// logText<string>('하이');
//
// function logText2(text2: string) {
//     console.log(text2);
//     text2.split('').reverse().join();
//     return text2;
// }
// logText('a');
//
// function logNumber(n: number) {
//     console.log(n);// 출력
//     return n;// 반환
// }
//
// // 타입을 바꾸기 위해서  함ㅅ를 ㅁ나듬
// var num = logNumber(10);
//num.toExponential();

// 유지보수가 힘들어짐
// 기본문법과 제너릭의 차이점
function logText2(text2: string | number) {
    console.log(text2);
    return text2;
}

// 제너릭은
// 호출 할때 타입을 정의한다

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);


// 인터페이스에 제너릭을 선언하는 방법
interface Dropdown <T>{
    value: T;
    selected: boolean;
}

// const obj: Dropdown = { value: "string" , selected: false };

const obj: Dropdown<string> = { value: "string" , selected: false };
const obj2: Dropdown<number> = { value: 123 , selected: false };
// 얼마든지 value 타입을 바꿀 수 있다!


//제네릭 타입 제한 , 타입힌트 *** 조금 어렵군
function  logTextTextLength<T>(text: T[]): T[] {

    console.log(text.length) // 타입을 아직모르기 때문 개발자만 알지 타입스클비트 서버는 모름
    text.forEach((t)=>(console.log(t)));
    return text;
}
logTextTextLength<string>(['hi']);

// 제너릭 타입 제한 2  - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
         
function logLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logLength('a');
// 문자열 은 length 제공 한다
//logLength(10) // 10 은  제공하지 않음
// 어느정도 타입 제한이 생긴다  타입 힌트 ?
logLength({length:10});
// 이미정의된 타입에서 확장!

// 제너릭 타입 제한 3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends  keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
//getShoppingItemOption(10);
//getShoppingItemOption<string>('a');
getShoppingItemOption('name');

