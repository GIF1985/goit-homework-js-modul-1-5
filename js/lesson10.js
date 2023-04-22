//модуль 5 = 9 занятие - не понял, пересмотреть

//================(this)===========================
//Контекст (this)

//Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
//Контекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦии, если он не привязан явно.

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();
////////////////////////////////////////////////////////////

//================(this)===========================
// Вызов без контекста
//в строгом режиме = undefined
//Не в строгом режиме = window

// const foo = function () {
//   console.log("foo -> this", this);
// };

// foo();
////////////////////////////////////////////////////

//================(this)===========================
//Как метод объекта, но объявлена как внешняя функция.
// в контексте объекта.

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this. tag", this.tag); // ошибка
// };
// showTag();

//без  ошибки
// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this. tag", this.tag); //без  ошибки
// };
// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user", user);
//  user.showUserTag();
// /////////////////////////////////////////////////////////

// ///////////////////////////=//////////////////////////////
// //////////////==========================/////////////////
// ////=======Кнопки уменьшить и увеличить============/////

// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment->this", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement->this", this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener("click", function () {
//   console.log("кликнули на decr");
//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("кликнули на incr");
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
