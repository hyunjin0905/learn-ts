// 타입추론
var a = 'abc';

 function getB(b=10){
     var c= 'hi';
     return b+c;
 }

 // 타입추론 기본 2
// interface Dropdown<T> {
//      value: T;
//      title: string;
// }
//
// var shoppingItem: Dropdown<number> = {
//      value:1,
//      title: 'hi'
// }


// 타입추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}


interface DetailedDropDown<K>  extends Dropdown<K>{
    name: K;
    id: number;
}

var shoppingItem: DetailedDropDown<number> = {
    value: 1,
    title: 'hi',
    name: 1,
    id: 1

}




// Best Common Type  가장 근접한 타입을 추론한다  union 으로 묶어나간다!
var arr = [1,2,true] // (number \ boolean)[]


//