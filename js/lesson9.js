//============Array.prototype.sort(callback(currentEl, nextEl){})==========
// Array.prototype.sort(callback(currentEl, nextEl){})
// Сортирует и ИЗМЕНЯЕТ оригинальный массив
// По умолчанию:
// сортирует по возрастанию
// приводит элементы к строке и сортирует по [Unicode](https://
// unicode-table.com/en/)

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);

// const letters = ["b", "B", "a", "A"];
// letters.sort();

// console.log("letters", letters);
///////////////////////////////////////////////////////

//========функция сравнения (callback)==========================
// comparefunction - функция сравнения (callback)
// Элементы массива сортируются в соответствии с её возвращаемым значением
// ---если compareFunction(A, B) меньше 0, сортировка поставит А перед в
// ---если compareFunction(A, B) больше 0, сортировка поставит В перед А
// ---если compareFunction(A, B) вернёт 0, сортировка оставит А и В на
// неизменными по отношению друг к другу, но отсортирует их по отношению ко всем
// другим элементам.

// const numbers = [1, 9, 6, 2, 3];

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });

// console.log(numbers);
/////////////////////////////////////////////////////////////////

//===========сделать копию массива===========================
// Как сделать копию массива чтобы не сортировать оригинальный
// Array.prototype.slice()
// Операция spread

// const numbers = [1, 9, 6, 2, 3];

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log("descSorted Numbers", descSortedNumbers);

// console.log("ascSorted Numbers", ascSortedNumbers);

// console.log("numbers",  numbers);
/////////////////////////////////////////////////////////////////

//========Кастомная сортировка сложных типов==========================
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// // По игровому времени

// const sortedByBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.table(sortedByWorstPlayers);
///////////////////////////////////////////////////////////////////////////

// ============Array.prototype.flat(depth)============
// Array.prototype.flat(depth);
// Разглаживает массив до указанной глубины
// По умолчанию глубина 1
// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));
// console.log(array.flat(2));
// console.log(array.flat(1));
// console.log(array.flat(0));
///////////////////////////////////////////////////////

//==========Array.prototype.flatMap(callback)==============

// Array.prototype.flatMap(callback)
// - комбиначия мар + flat
//
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap((t) => t.tags);

// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(stats);
//////////////////////////////////////////////////////

//=========== Цепочки вызовов chaining==========
//

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);
//////////////////////////////////////////////////////

// ======Цепочка предыдущих трёх================
// const numbers = [1, 5, 2, 4, 3];
// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);
//////////////////////////////////////////////////////

//=========Сортируем тех кто онлайн по рангу==========
// Сортируем тех кто онлайн по рангу
// начала фильтруем
// потом сортируем

// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players

//   .filter((player) => player.isOnline)
//   .sort((playerA, playerB) => playerA.rank - playerB.rank);

// console.table(onlineAndSorted);
///////////////////////////////////////////////////////

// ======Chaining в методах объекта как jquery======

// const element = {
//   class: "",
//   hovered: false,

//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// element.toggleHovered().changeClass("open");

// console.log(element);
//////////////////////////////////////////
