// Ensure the DOM is fully loaded before executing JavaScript code
var address = document.getElementById("address");
var userName = document.getElementById("name");
var contactNumber = document.getElementById("contactNumber");
var message = document.getElementById("message");
const cards = document.querySelector(".cards");

let users = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

function submitForm() {
  if (
    userName.value === "" ||
    address.value === "" ||
    contactNumber.value === ""
  ) {
    message.innerText = "Please fill in all the input fields";
  } else {
    message.innerText = "Data stored in local storage successfully!";
    const userData = {
      id: Math.floor(Math.random() * 100) + 1,
      name: userName.value,
      address: address.value,
      contact: contactNumber.value,
    };

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    renderCards();

    userName.value = "";
    address.value = "";
    contactNumber.value = "";
    message.innerText = "";
  }
}

function removeItem(user_id) {
  users = users.filter((user) => user.id != user_id);
  localStorage.setItem("users", JSON.stringify(users));
  renderCards();
}

function renderCards() {
  cards.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    var userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <div class="first-line">
        <p>Name: ${users[i].name}</p>
        <p onclick="removeItem(${users[i].id})" class="remove">x</p>
      </div>
      <p>Address: ${users[i].address}</p>
      <p>Contact Number: ${users[i].contact}</p>
    `;
    cards.appendChild(userCard);
  }
}
renderCards();

// function test(callback2, callback3) {
//   callback2(callback3);
// }

// function test2(fn) {
//   fn();
// }
// function test3() {
//   console.log("test3 function has been called from test2");
// }
// test(test2, test3); // test2 is a callback function // test is hight order funtion

// function num(a, b){
//   a(b);
// }
// function num2(a) {
//     console.log("num2 function");
//     a()
// }
// function num3() {
//   console.log("num3 has been called from num2");
  
// }
// num(num2, num3);




// const arr = [1, 2, 3, 4, 5];
// function displayItem(num) {
//   console.log(num);
// }
// arr.forEach(displayItem);

// const filterArr = arr.filter((num) => {
//   return num < 4;
// });
// console.log("filterArr:");
// console.log(filterArr);


// const mapArr = arr.map((num) => {
//   return num * 2;
// });
// console.log("mapArr:");
// console.log(mapArr)

// const total = arr.reduce((initial, current) => {
//   return initial + current;
// }, 0);

// console.log("Total:");

// console.log(total);

// Practice
// let arr1 = [2,4,6,8,10];
// function displayNum(num) {
//   console.log(num);
// }
// arr1.forEach(displayNum);


// let filterArr = arr1.filter((a) =>{
//   return a < 6;
// })
// console.log("filter");
// console.log(filterArr);

// let mapArr = arr1.map((a) =>{
//   return a *4;
// })
// console.log("MapArr");
// console.log(mapArr);


// let total = arr1.reduce((previousNum, CurrentNum) =>{
//   return previousNum + CurrentNum;
// }, 0);
// console.log("Total");
// console.log(total);

