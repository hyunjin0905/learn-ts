enum Shoes {
    Nike = "나이키",
    Adidas ="아이다스"
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제

enum Answer {
    Yes="Y",
    No = "N"
}
function askQuestion(answer: Answer){
    if (answer === Answer.Yes) console.log("정답");
    if (answer === Answer.No) console.log("오답");
}

//askQuestion("에스"); // 다양한 형태로 넣을수 있는데
askQuestion(Answer.Yes); // 다양한 형태로 넣을수 있는데
// 이넘 (에서만 제공하는 데이터 만 가능) 으로 제약을 걸 수 있다
// 정확한 코드를 쓸수 있고
// 예외 케이스들을 잡을수있다








