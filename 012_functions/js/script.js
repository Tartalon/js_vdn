"use strict";

// ==================== 01 ==================
// названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";

// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56; // Биндеры для бумаги 51 мм
// prices[2] = 12.5; // Ручка шариковая синяя
// let count = [];

// initCountArray();
// calculateSum();

// function initCountArray() {
//   for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     let counttoBuy = +prompt("Укажите количество для " + productName);

//     if (isNaN(counttoBuy)) counttoBuy = 0;

//     count.push(counttoBuy);
//   }
// }

// function calculateSum() {
//   let totalSum = 0;
//   for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     const productPrice = prices[i];
//     const boughtCount = count[i];

//     let price = productPrice * boughtCount;
//     totalSum += price;
//     console.log(`Куплено ${productName} на сумму ${price}`);
//   }
//   console.log("Всего продуктов куплено на " + totalSum);
// }

// ================= 02 ====================

// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";

// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56; // Биндеры для бумаги 51 мм
// prices[2] = 12.5; // Ручка шариковая синяя

// let count = [];

// let initCountArray = function () {
//   for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     let counttoBuy = +prompt("Укажите количество для " + productName);

//     if (isNaN(counttoBuy)) counttoBuy = 0;

//     count.push(counttoBuy);
//   }
// };

// let calculateSum = function () {
//   let totalSum = 0;
//   for (let i = 0; i < names.length; i++) {
//     const productName = names[i];
//     const productPrice = prices[i];
//     const boughtCount = count[i];

//     let price = productPrice * boughtCount;
//     totalSum += price;
//     console.log(`Куплено ${productName} на сумму ${price}`);
//   }
//   console.log("Всего продуктов куплено на " + totalSum);
// };

// initCountArray();
// calculateSum();

// ================ 03 ===================

// var data = [1, 2, 3, 4, 5];
// var result = data.map((value) => value * value);
// result.forEach((e) => console.log(e));

// ================ 04 ===================

let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
let oddValues = [];
let evenValues = [];
let oddValuesPosition = 0;
let evenValuesPosition = 0;

// for (let value of values) {
//   if (value % 2 == 0) {
//     evenValues[evenValuesPosition] = value;
//     evenValuesPosition++;
//   } else {
//     oddValues[oddValuesPosition] = value;
//     oddValuesPosition++;
//   }
// }

evenValues = values.filter((even) => even % 2 == 0);
oddValues = values.filter((even) => even % 2 != 0);

// console.log("Нечетные значения");
// oddValues.forEach((elem) => console.log(elem));

// for (let oddVal of oddValues) {
//   console.log(oddVal);
// }

// console.log("Четные значения");
// evenValues.forEach((elem) => console.log(elem));

// for (let evenVal of evenValues) {
//   console.log(evenVal);
// }

// ====================== 05 =====================

let inputNum = +prompt("Введите число");
getAllNumbers(inputNum);

function getAllNumbers(num) {
  console.log(num);

  if (num == 1) return 1;
  else {
    getAllNumbers(num - 1);
  }
}
