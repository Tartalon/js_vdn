"use strict";

// ==============01==================

function min(a, b) {
  return a < b ? a : b;
}
// console.log(min(10, 12));

// ===============02=================

function avg(a, b, c) {
  let res = 1;

  if (!b && !c) {
    res = a;
  } else if (!c) {
    res = (a + b) / 2;
  } else {
    res = (a + b + c) / 3;
  }

  return res;
}

// console.log(avg(5, 3));

// ===============03=================
let names = [];
names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
names[1] = "Биндеры для бумаги 51 мм";
names[2] = "Ручка шариковая синяя";

// цены на товар
let prices = [];
prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
prices[1] = 56; // Биндеры для бумаги 51 мм
prices[2] = 12.5; // Ручка шариковая синяя

let count = [];

// getCount();
// getTotalSum();

function getCount() {
  for (let i = 0; i < names.length; i++) {
    const productName = names[i];
    let counttoBuy = +prompt("Укажите количество для " + productName);

    if (isNaN(counttoBuy)) counttoBuy = 0;

    count.push(counttoBuy);
  }
}

function getTotalSum() {
  let totalSum = 0;
  for (let i = 0; i < names.length; i++) {
    const productName = names[i];
    const productPrice = prices[i];
    const boughtCount = count[i];

    let price = productPrice * boughtCount;
    totalSum += price;
    console.log(`Куплено ${productName} на сумму ${price}`);
  }

  console.log("Всего продуктов куплено на " + totalSum);
}

// ===================04====================

// let throwCount = +prompt("Сколько раз вы хотите бросить шестигранный кубик?");

// for (let i = 0; i < throwCount; i++) {
//   const result = random(1, 6);
//   console.log(result);
// }

// function random(a, b) {
//   let rand = a + Math.random() * (b + 1 - a);
//   return Math.floor(rand);
// }

//=================== 05 ====================

function duplicateValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        newArr.push(arr[i]);
      }
    }
  }
  if (newArr.length === 0) {
    newArr = null;
  }
  return newArr;
}

console.log(duplicateValues([2, 3, 4, 5]));
