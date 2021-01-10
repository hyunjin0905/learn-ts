// 약속
interface User {
   age: number;
   name: string;
}

// 변수에 활용한 인터페이스 활용
var seho: User = {
    age: 33,
    name: "ak"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: "캡틴",
    age: 100
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number){
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}
// 배열 접근했을때 몇번째에 있는 요소
var arr = ['a','b','c'];

// 딕셔너리 패턴

interface StringRegexDictionary {
    [kye: string]: RegExp;
}

var obj: StringRegexDictionary  = {
    //    sth:/abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

///obj['cssFile'] = 'a';
Object.keys(obj).forEach(function (value, index, array){

});

// 인터페이스  상위 개념
interface  Person {
    name: string;
    age: number;
}

// 하위개념 확장 작은 집합일수록 더 많은 정보를 알 수 있다
interface  Developer extends Person{
    language: string;
}

var lucy: Developer ={
    name: "lucy",
    age: 29,
    language: "ts"
}

