/*///===================Array.prototype.forEach====================
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 */

//Поэлементно перебирает оригинальный массив
//Ничего не возвращает
//Заменяет классический for, если не нужно прерывать цикл

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);
////////////////////////////////////////////////////////////////////////////////////////////

//===================Array.prototype.map================================
// Array.prototype.map()
//Поэлементно перебирает оригинальный массив
//Не изменяет оригинальный массив
//Возвращает новый массив такой-же длины

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//   return number * 3;
// });

//console.log('numbers', numbers);
//console.log('doubledNums', doubledNums);

//=======Array.prototype.map
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

//Получаем массив имён всех игроков
// const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);
// console.log("playerIds", playerIds);
/////

//====Array.prototype.map
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

//Увеличиваем кол-во поинтов каждого игрока на 10%

// const updatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.log(updatedPlayers);
//////

//====Array.prototype.map
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// // Увеличиваем кол - во часов игрока по id

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

// console.table(updatedPlayers);
///////////////////////////////////////////////////////////////////////////////////////////////

//==============Array.prototype.filter()=======================================================

//Поэлементно перебирает оригинальный массив
//Возвращает новый массив с элементами или пустой)
//Добавляет в возвращаемый массив элементы которые удовлетворяют условию
//коллбек-функции
//если коллбек вернул true элемент добавляется в возвращаемый массив
//если коллбек вернул false элемент НЕ добавляется в возвращаемый массив

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter((number) => number < 10 || number > 20);
// console.log(filteredNumbers);

//============Array.prototype.filter()
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// //Получаем массив всех онлайн игроков
// const onlinePlayers = players.filter(({ online }) => online);
// // console.table(onlinePlayers);

// // Получаем массив всех оффлайн игроков
// const offlinePlayers = players.filter((player) => !player.online);
// // console.table(offlinePlayers);

// // Получаем список хардкорных игроков с временем больше 250
// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// // console.table(hardcorePlayers);
//////////////////////////////////////////////////////////////////////////////////////////////////////

//================== Array.prototype.find()==========================================================

//Поэлементо перебирает оригинальный массив
//Возвращает первый элемент удовлетворяющий условию или undefined

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find((number) => number === 10);
// console.log(number);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// Ищем игрока по id
// const playerIdToFind = "player-3";
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

// Ищем несколько игроков по id
// const finPlayerById = (allPlayer, playerId) => {
// return allPlayer.find(({ id }) => id === playerId);
// };
// console.log(finPlayerById(players, "player-1"));
// console.log(finPlayerById(players, "player-4"));

// Ищем игрока по имени
// const playerNameToFind = "Poly";
// const playerWithName = players.find(
//   (player) => player.name === playerNameToFind
// );
// console.log(playerWithName);

///////////////////////////////////////////////////////////////////////////////////////////////

//==================== Array.prototype.every()================================================
//Поэлементо перебирает оригинальный массив
//Возвращает true если все элементы массива удовлетворяют условию

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// const isAllOnline = players.every((player) => player.online);
// console.log("isAllOnline:", isAllOnline);
///////////////////////////////////////////////////////////////////////////////////////////////

//===================== Array.prototype.some()=================================================
//Поэлементо перебирает оригинальный массив
//Возвращает true если хотя бы один элемент массива удовлетворяет условию

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// const isAnyOnline = players.some((player) => player.online);
// console.log("isAnyOnline: ", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcore Players: ", anyHardcorePlayers);
///////////////////////////////////////////////////////////////////////////////////////////////////

//================== Array.prototype.reduce()=================================================
//Поэлементно перебирает оригинальный массив
//Возвращает что угодно
//Заменяет всё на свете, но использовать нужно с умом

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number 25 -> return 50 + 25
/////////////////////////////////////////////////////

//================== Array.prototype.reduce()=====
// Считаем общую зарплату
// const salary = { mango: 100, poly: 50, ajax: 150 };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);

// console.log(totalSalary);
///////////////////////////////////////////////////

//================== Array.prototype.reduce()=====
// Считаем общее количество часов

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//   return totalTime + player.timePlayed;
// }, 0);

// console.log(totalTimePlayed);
//////////////////////////////////////////////////

//================== Array.prototype.reduce()=====
//Считаем общую сумму товаров корзины

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);

// console.log(totalAmount);

//////////////////////////////////////////////////////////////////////////////////////////////////
