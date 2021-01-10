// 타이핑 typing: 타입이 정의 되지 않은 코드에 타입을 입혀주는 행위
let todoItems: { id: number; title: string; done: boolean }[];

// 타입 별칭
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
// object 로 이루어진 배열이다
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

// todo의  매개변수 는 object 다
// void 는 반환값이 없다
function addTodo(todo: { id: number; title: string; done: boolean }): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void{
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo: { id: number; title: string; done: boolean }
): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item2 = { id: 4, title: '타입', done: false };
  addTodo(item2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
