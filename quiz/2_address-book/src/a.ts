// 동기 코드 : 타입추론이 가능하다
function fetchItems(): string[] {
  // 리턴타입을 주지않더라도
  // 타입스크립트도 추론이 가능하다
  let items = ['a', 'b', 'c'];
  return items;
}

let result = fetchItems();
console.log(result);

// 비동기 코드 : 타입추론이 안된다
// 비동기는 반환값이 뭐다 라는게 먕확하게 명시가 되어있어야한다
// 기본적으로 제네릭타입을 넣고 그것을 돌려받는것
// 반환타입과
// resolve 된 반환타입이 같아야한다
function fetchItem(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
