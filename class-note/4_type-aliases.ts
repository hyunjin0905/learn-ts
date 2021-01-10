// interface Person {
//     name: string;
//     age: number;
// }

// 타입 별칭 타입은 확장이 안된다! 브리뷰가 가능
type Person = {
    name :string;
    age: number;
}

var luy : Person ={
    name: "ds",
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean};

function getTodo(todo: Todo) {

}
interface  Developer {
    name: string;
    skill: string;
}
