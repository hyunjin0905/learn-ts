interface  Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
    something: object;
}


// 상품목록을 받아오기 위한 api 함수
function fetchProducts():Promise<Product[]> {


}

// pick 을 이용해서 붎필요한 타입코드들을 줄일 수 있다
interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// 유틸리티 타입, 또는 제너릭 타입 이라기도함
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function  displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}


// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
// 선택적으로 타입을 조정가능한 Partial
function upDateProductItem(productItem: Partial<Product>) {

}

//4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    userName: string;
    email: string;
    profilePhotoUrl: string
}

// interface UserProfileUpdate {
//     userName?: string;
//     email?: string;
//     profilePhotoUrl?: string
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['userName'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 맵뷰 타입
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4 Partial
type Subset<T> = {
    [p in keyof T]? : T[p]
}









