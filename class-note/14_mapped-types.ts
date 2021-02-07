
// 맵드 타입 
type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = {[K in Heroes] : number}
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}

// for in
var arr  = ['a','b','c'];

for(var key in arr) {
    console.log("index:" + key);
    console.log("value:"+arr[key]);


}
