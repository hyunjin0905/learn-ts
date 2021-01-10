// 함수에 타입을 정의 하는 방식
// function sum(a:number ,b:number) {
//     return a + b;
// }
sum(10, 20); // 반함값 number a+b 는 당연히 숫자 , 타입추론 이라고 함

// 함수의 반환 값에 타입을 정의 하는 방식
function add(): number{
     return 10;
}

// 함수에 타입을 정의 하는 방식  함수의 스펙, 함수의 규칙
function sum(a:number ,b:number): number {
    return a + b;
}
//sum(10, 20, 30, 50); // 스펙에 어긋남


// 함수의 옵셔널 파라미터  타입스크립트에 에서 제공하는 예약어  => ? : 써도되고 안써도되고
function log(a: string, b?: string, c?: string) {

}

log("hi"); // 하나만 넘겨도 에러가 나지 않음  생략이 가능하다

