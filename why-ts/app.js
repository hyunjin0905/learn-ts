// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function fetchUser(){
  return axios.get(url);
}
console.log(fetchUser());
fetchUser();

function startApp() {
  // axios
  // .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerHTML = user.username;
      email.innerHTML = user.email;
      address.innerHTML = user.address[0]
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
