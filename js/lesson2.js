/**
  |=================================switch================================================
  | напиши скрипт выбора отеля по количеству звезд
  | 1*=20$  2*= 40$   3*=60$  4*=80$ 5*=100$
  |
  |если в проверочном значении нет цифр 1-5 вывести сообщения 'такого количества звезд нет
  |========================================================================================
*/

// два варианта решение через IF или через switch

//решение через------------if ------------

// const stars = 4;
// let message;

// if (stars === 1) {
//   message = "20$";
// } else if (stars === 2) {
//   message = "40$";
// } else if (stars === 3) {
//   message = "60$";
// } else if (stars === 4) {
//   message = "80$";
// } else if (stars === 5) {
//   message = "100$";
// } else {
//   message = "такого количества звезд нет";
// }
// console.log(message);

// решение через ---------switch------------------
// const stars = 6;
// let message;

// switch (stars) {
//   case 1:
//     message = "20$";
//     break;
//   case 2:
//     message = "40$";
//     break;
//   case 3:
//     message = "60$";
//     break;
//   case 4:
//     message = "80$";
//     break;
//   case 5:
//     message = "100$";
//     break;

//   default:
//     message = "такого количества звезд нет";
//     break;
// }

// console.log(message)
//
//////////////////////////////////////////////////////////////////////////////////////////

/**
  |======================================switch===========================================
  | напиши скрипт выбора отеля по количеству звезд
  | 1,2*=30$  3,4*= 60$   5*=90$  
  |
  |если в проверочном значении нет цифр 1-5 вывести сообщения 'такого количества звезд нет
  |========================================================================================
*/

// два варианта решение через IF или через switch

//решение через------------if ------------

// const stars = 8;
// let message;

// if (stars === 1 || stars === 2) {
//   message = "30$";
// } else if (stars === 3 || stars === 4) {
//   message = "60$";
// } else if (stars === 5) {
//   message = "90$";
// } else {
//   message = "такого количества звезд нет";
// }
// console.log(message);

// решение через ---------switch------------------
// const stars = 3;
// let message;

// switch (stars) {
//   case 1:
//   case 2:
//     message = "30$";
//     break;
//   case 3:
//   case 4:
//     message = "60$";
//     break;
//   case 5:
//     message = "90$";
//     break;

//   default:
//     message = "такого количества звезд нет";
//     break;
// }

// console.log(message);

/////////////////////////////////////////////////////////////////////////////////////////

/**
  |=======================================switch==========================================
  | напиши скрипт выбора опции доставки товара
  |опции хранятся в переменной option :1 самовывоз, option :2 курьер, option :3 почта,
  |
  |в переменою message записать сообщение в зависимости от опции 
  |-' Вы сможете забрать товар завтра с 12 в нашем офисе '
  |-' Курьер доставит заказ с 9 до 18'
  |-' Посылка будет отправлена сегодня '
  |-' С вами свяжется менеджер  '
  |========================================================================================
  */
// 1. Сделать 2 переемных
// 2. решение будет через switch  1 2 3
// 3. в каждом кейсе записать строку message c ответом
// 4. вывести ответ в лог message
//
// решение через ---------switch------------------

// const option = 6;
// let message = "";

// switch (option) {
//   case 1:
//     message = " Вы сможете забрать товар завтра с 12 в нашем офисе ";
//     break;
//   case 2:
//     message = " Курьер доставит заказ с 9 до 18";
//     break;
//   case 3:
//     message = " Посылка будет отправлена сегодня ";
//     break;
//   default:
//     message = " С вами свяжется менеджер  ";
//     break;
// }

// console.log(message);

////////////////////////////////////////////////////////////////////////////////////////////////

/**
  |================================for======================================================
  | for (инициализация ; условие ; пост -выражение ) {
  
     тело цикла ;
  
      }
  |==========================================================================================
*/
//тест 1
// for (let i = 0; i <= 3; i += 1) {
//   console.log(i);
//   //ответ 0 1 2 3
// }

//тест 1 аналог, решение такое-же
// for (let i = 0; i <= 3; i = i + 1) {
//   console.log(i);
//   //ответ 0 1 2 3
// }

// тест 2
// for (let i = 0; i <= 90; i += 30) {
//   console.log(i);
//   //ответ 0 30 60 90
// }

// тест 3
// for (let i = 4; i >= 0; i -= 1) {
//   console.log(i);
//   //ответ 4 3 2 1 0
// }

// тест 4
// for (let i = 50; i >= 0; i -= 25) {
//   console.log(i);
//   //ответ 0 25 50
// }

/**
  |================================for======================================================
  задача 
    Напиши скрип который подсчитает  общую сумму зарплат работников
    количество работников храниться в переменной elements
    зарплата каждого работника єто случайное число от 500 до 5000
    записать и сложить сумму всех Зп  в totalSalary и вывести в консоль
  |==========================================================================================
*/
//
//решение

// const elements = 5;
// let totalSalary = 0;

// const a = 500;
// const b = 5000;

// for (let i = 1; i <= elements; i = i + 1) {
//   let x = Math.round(Math.random() * (a - b) + b);
//   console.log(`ЗП работника  ${i} = ${x} грн`);

//   totalSalary += x;
// }
// console.log(`Всего выдано ${totalSalary} грн`);
//============================================================================================

/**
  |================================for======================================================
  задача
    Напиши скрип который подсчитает  сумму всех четных чисел
    которые входят в переменные с min до max
   например если min 0 а max 5 то єто должно быть 2 и 4 потом сложить и получить 6
  |==========================================================================================
*/

// // //решение 1
// const min = 9;
// const max = 21;
// let totalMinMax = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     //остаток от числа
//     console.log("четное", i);

//     totalMinMax += i;
//   }
// }
// console.log(totalMinMax);

// // //решение 2
// const min = 9;
// const max = 21;
// let totalMinMax = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     //пропускает все не четные и отправляет на итерацию
//     continue;
//   }
//   console.log("четное", i);

//   totalMinMax += i;
// }
// console.log(totalMinMax);
// //============================================================================================

/**
  |===================================if========================================================
  задача
    Напиши скрип обработки покупки в магазине
          Баланс клиента храниться в переменной balance
          сумма покупки храниться в переменной payment

    перед проверкой вывести сообщения \
   общая стоимость заказа { число } кредитов. проверим количество доступных кредитов на счету.

   - Если сума не превышает баланс :
        - Вычесть из баланса сумму покупки 
        - Вывести сообщения на счету осталось ( число)
    
   - Если сума превышает баланс :
        - Вывести сообщения "на счету не достаточно средств для проведенная операции 


  - В конце вывести сообщения "операция завершена"  :
    
  |=============================================================================================
*/

// // //решение 1
// let balance = 10000;
// const payment = 13000;

// console.log(
//   `общая стоимость заказа ${payment} кредитов. проверим количество доступных кредитов на счету.`
// );

// if (payment <= balance) {
//   balance -= payment;

//   console.log(`на счету осталось ${balance}`);
// } else {
//   console.log("на счету не достаточно средств для проведенная операции ");
// }

// console.log("операция завершена");

// //============================================================================================

/**
  |===================================if========================================================
  задача
   -напиши скрипт подсчета суммы покупки со скидкой с условиями от потраченной суммы за все время
   (партнерская программа)

   -общая сумма потраченного храниться в totalSpend
   -сумма текущего платежа храниться payment
   - скидка храниться в переменной discount

   -Если потрачено от (от 100 до 1000) то бронзовый партнер 2%
   -Если потрачено от (от 1000 до 2000) то серебряный партнер 3%
   -Если потрачено от (от 2000 до 4000) то золотой партнер 4%
   -Если потрачено от (от 4000 до 8000) то платиновый партнер 5%
   -Если потрачено 100 то не партнер 0%

  в результате вывести сообщения 
  оформлен заказ на сумму (сумма) со скидкой (скидка) %


  |=============================================================================================
*/

//Решение

// let totalSpend = 6000;
// let payment = 500;
// let discount = 0;

// if (totalSpend < 99) {
//   discount = 0;
//   console.log(
//     `Вы ещ не набрали нужный баланс для партнерской программы  ${
//       discount * 100
//     } % `
//   );
// } else if (totalSpend >= 100 && totalSpend <= 1000) {
//   discount = 0.02;
//   console.log(`Вы бронзовый партнер ${discount * 100} % `);
// } else if (totalSpend >= 1001 && totalSpend <= 2000) {
//   discount = 0.03;
//   console.log(`Вы серебряный партнер ${discount * 100} % `);
// } else if (totalSpend >= 2001 && totalSpend <= 4000) {
//   discount = 0.04;
//   console.log(`Вы золотой партнер ${discount * 100} % `);
// } else {
//   discount = 0.05;
//   console.log(`Вы платиновый партнер ${discount * 100} % `);
// }

// payment -= discount * payment; //payment = payment - discount * payment;

// console.log(
//   `оформлен заказ на сумму ${payment} грн. уже с учетом скидки ${
//     discount * 100
//   } %`
// );

// totalSpend += payment;

// console.log(totalSpend);

//////////////////////////////////////////////////////////////////////////////////////////
