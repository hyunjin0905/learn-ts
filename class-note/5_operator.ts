// function logMessage(value: any) {
//     console.log(value);
// }
//
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 타입을 장점을 살리면서 쓸수있는 방법
// 유니온 타입 하나의 타입을 이상을 쓸수있음
function logMessage(value: string | number) {
    console.log(value);
    if ( typeof value ==='number') value.toExponential()
    if (typeof value === "string") value.toString()

    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

var ly: string | number | boolean;

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// 모든 속성ㅇ들을 뱉어줄것이라고 예상했지만
// 유니온 타입은  name 고통속성만 접근가능하고 있다  둘다 되어야 하는 값  타입검증도 없이 써버리게 되면
// 타입 에러에 날수있다고 평가 할수 있음  공통된 , 보장된 속성만 제공한다
function askSomeone(someone: Developer | Person) {
    //someone.name
    //someone.age
    //someone.skill
}
askSomeone({name: 'Dev', skill: '웹개발'});
askSomeone({name: 'ㅎㅎ', age: 12});


// 인터섹션  타입가드가 필요없이 모든 속성들을 다 포함하는 타입이다 접근이 가능하다
// 실물에서 잘안쓰인다!  유니온 타입을 좀 더 쓴다
// function askSomeone(someone: Developer & Person) {
//     someone.name
//     someone.age
//     someone.skill
// }


// var ly: string | number | boolean;
// var luy: string & number & boolean;


