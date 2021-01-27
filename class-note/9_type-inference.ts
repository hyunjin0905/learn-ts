// 타입추론
var a = 'abc';

 function getB(b=10){
     var c= 'hi';
     return b+c;
 }

 // 타입추론 기본 2
interface Dropdown<T> {
     value: T;
     title: string;
}

var shoppingItem: Dropdown<number> = {
     value:1,
     title: 'hi'
}