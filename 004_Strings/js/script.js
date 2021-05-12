"use strict";

//==================02=======================

console.log("Вычисление объема цилиндра.");
//  V=π * r в квадрате * h
let V;
const Pi = 3.1415926535; // правильно использовать константу для подобных значений
// let r = 10; // радиус
// let h = 20; // высота

// let r = +prompt("Введите радиус целиндра");
// let h = +prompt("Введите высоту целиндра");

// V = Pi * r * r * h;
// console.log(parseFloat(V));

//===================03=======================

let productPrice = 101.5; // цена товара
let productQuantity = 50; // количество единиц товара на складе
// let inputQuantity = +prompt("Введите желаемое количество");

// if (inputQuantity > productQuantity) {
//   console.log(
//     `На складе нет такого количества товара. Доступное количество - ${productQuantity}`
//   );
// } else if (inputQuantity < 0) {
//   console.log(`Вы ввели не корректное значение`);
// } else {
//   let totalPrice = inputQuantity * productPrice;
//   let stockBalance = productQuantity - inputQuantity;

//   console.log(`К оплате ${totalPrice}\nОстаток на складе - ${stockBalance}`);
// }

//=========================04======================
// let screenWidth = 1980; // ширина экрана
// let margins = 10; // отступы межу блоками с описанием товара
// let desieredBlockCount = 5; // количество блоков с описанием, которые должны отобразиться в одну строку

// let width = null; // рассчитайте ширину блока и запишите в эту переменную

// let totalMargens = (desieredBlockCount - 1) * margins;
// let blocksWidth = screenWidth - totalMargens;
// width = blocksWidth / 5;
// console.log(width + "px");

//======================05=====================

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.5;

let productQuantity1 = +prompt(
  `Укажите количество продуктов '${product1}', цена ${productPrice1}`,
  0
);
let productQuantity2 = +prompt(
  `Укажите количество продуктов '${product2}', цена ${productPrice2}`,
  0
);
let productQuantity3 = +prompt(
  `Укажите количество продуктов '${product3}', цена ${productPrice3}`,
  0
);

let totalPriceProduct1 = productQuantity1 * productPrice1;
let totalPriceProduct2 = productQuantity2 * productPrice2;
let totalPriceProduct3 = productQuantity3 * productPrice3;

console.log(
  `Стоимость ${product1} - ${totalPriceProduct1}\nСтоимость ${product2} - ${totalPriceProduct2}\nСтоимость ${product3} - ${totalPriceProduct3}\nВсего к оплате - ${
    totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3
  }`
);
