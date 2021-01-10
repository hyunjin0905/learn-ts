class Person {
    // 클래스 로직
    // 인스턴스를 만들기위한
    //초기화
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

var hyunjin = new Person('현진',30); // 생성해서 객체에 담음
console.log(hyunjin);
