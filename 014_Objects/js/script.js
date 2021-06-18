'use strict';

// ==================== 02 ==================
// Используя цикл for in выведите на экран имена и значения всех строковых свойств объекта.
let user = {
  balance: '$1,250.89',
  age: 24,
  name: 'Golden Clements',
  company: 'EWAVES',
  email: 'golden.clements@ewaves.io',
  friends: 5,
  favoriteFruit: 'strawberry',
};

for (let key in user) {
  if (typeof user[key] === 'string') {
    // console.log(user[key]);
  }
}

// ==================== 03 ==================
// Создайте фабричный метод для создания объектов со свойствами name, price, ordered. Поменяйте код, который инициализирует массив products.
// Воспользуйтесь фабричным методом для инициализации массива.
// let products = [
//   {
//     name: 'Бумага офисная А4, 80 г/м2, 500 л',
//     price: 280.25,
//     ordered: 0,
//   },
//   {
//     name: 'Биндеры для бумаги 51 мм',
//     price: 56,
//     ordered: 0,
//   },
//   {
//     name: 'Ручка шариковая синяя',
//     price: 12.5,
//     ordered: 0,
//   },
// ];

function createProducts(name, price, order) {
  return {
    name: name,
    price: price,
    order: order,
  };
}

let products = [];

products.push(createProducts('Бумага офисная А4, 80 г/м2, 500 л', 280.25, 0));
products.push(createProducts('Биндеры для бумаги 51 мм', 56, 0));
products.push(createProducts('Ручка шариковая синяя', 12.5, 0));

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
  const name = products[index].name;
  const price = products[index].price;

  // products[index].ordered = +prompt(
  //   `Укажите количество продуктов '${name}', цена ${price}`,
  //   0
  // );
}

// цикл для расчета общей цены купленных продуктов
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price * products[index].ordered;
}

// alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) {
  // иногда в условии используется только одна переменная.
  // alert('Доставка будет бесплатной.');
}

// ==================== 04 ==================
// Перепишите код. Сделайте фабричный метод, который будет принимать два параметра firstName и lastName и создавать объект с двумя свойствами firstName и lastName.
// Сделайте так, чтобы функция print стала методом объекта, который создается через фабричную функцию.
// Используйте shorthand методы и shorthand свойства.

// let obj1 = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
// };

// let obj2 = {
//   firstName: 'Jhon',
//   lastName: 'Doe',
// };

function createObject(firstName, lastName) {
  return {
    firstName,
    lastName,

    print() {
      console.log(`First Name: ${this.firstName}`);
      console.log(`Last Name: ${this.lastName}`);
    },
  };
}

let obj1 = createObject('Ivan', 'Ivanov');

function print(obj) {
  console.log('First Name: ' + obj.firstName);
  console.log('Last Name: ' + obj.lastName);
}
obj1.print();

// print(obj1);
// print(obj2);

// ==================== 05 ==================
// Реализуйте метод showMostFavoritedFruit. Метод должен отображать фрукт, который чаще всего указывали как любимый на основе данных по пользователям из массива users.
let users = [
  {
    balance: '1250.89',
    age: 24,
    name: {
      first: 'Golden',
      last: 'Clements',
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
      {
        id: 0,
        name: 'Buchanan Austin',
      },
      {
        id: 1,
        name: 'Richmond Garrison',
      },
      {
        id: 2,
        name: 'Burns Cook',
      },
      {
        id: 3,
        name: 'Sally Mcpherson',
      },
      {
        id: 4,
        name: 'Nina Hood',
      },
      {
        id: 5,
        name: 'Rhonda Anderson',
      },
      {
        id: 6,
        name: 'Mathis Bowen',
      },
      {
        id: 7,
        name: 'Janie Carlson',
      },
      {
        id: 8,
        name: 'Brooke Reilly',
      },
      {
        id: 9,
        name: 'Peters Oliver',
      },
    ],
    favoriteFruit: 'strawberry',
  },
  {
    balance: '3637.94',
    age: 23,
    name: {
      first: 'Francis',
      last: 'Hebert',
    },
    company: 'XPLOR',
    email: 'francis.hebert@xplor.biz',
    friends: [
      {
        id: 0,
        name: 'Clements Glass',
      },
      {
        id: 1,
        name: 'Gutierrez Padilla',
      },
      {
        id: 2,
        name: 'Noelle Wilkinson',
      },
      {
        id: 3,
        name: 'Kim Sampson',
      },
      {
        id: 4,
        name: 'Luz Palmer',
      },
    ],
    favoriteFruit: 'apple',
  },
  {
    balance: '1106.44',
    age: 31,
    name: {
      first: 'Hale',
      last: 'Cross',
    },
    company: 'EARTHPURE',
    email: 'hale.cross@earthpure.us',
    friends: [
      {
        id: 0,
        name: 'Terri Clark',
      },
      {
        id: 1,
        name: 'Marie Joyce',
      },
      {
        id: 2,
        name: 'Howell Moses',
      },
      {
        id: 3,
        name: 'Juarez Marshall',
      },
      {
        id: 4,
        name: 'Corinne Grant',
      },
      {
        id: 5,
        name: 'Chandra Ferrell',
      },
      {
        id: 6,
        name: 'Emily Kidd',
      },
      {
        id: 7,
        name: 'Claudine Pollard',
      },
      {
        id: 8,
        name: 'Walter Cooper',
      },
      {
        id: 9,
        name: 'Isabella Hays',
      },
    ],
    favoriteFruit: 'strawberry',
  },
  {
    balance: '2502.43',
    age: 25,
    name: {
      first: 'Delores',
      last: 'Sykes',
    },
    company: 'ASSITIA',
    email: 'delores.sykes@assitia.com',
    friends: [
      {
        id: 0,
        name: 'Amy Fox',
      },
      {
        id: 1,
        name: 'Laurel Gaines',
      },
      {
        id: 2,
        name: 'Mcguire French',
      },
      {
        id: 3,
        name: 'Savage Rocha',
      },
      {
        id: 4,
        name: 'Durham Fowler',
      },
      {
        id: 5,
        name: 'Jacobson Clay',
      },
      {
        id: 6,
        name: 'Hamilton Pierce',
      },
      {
        id: 7,
        name: 'Johns Jefferson',
      },
      {
        id: 8,
        name: 'Avery Campbell',
      },
    ],
    favoriteFruit: 'strawberry',
  },
  {
    balance: '3651.54',
    age: 21,
    name: {
      first: 'Ryan',
      last: 'Bolton',
    },
    company: 'MOLTONIC',
    email: 'ryan.bolton@moltonic.biz',
    friends: [
      {
        id: 0,
        name: 'Weaver Buchanan',
      },
      {
        id: 1,
        name: 'Francesca Rice',
      },
      {
        id: 2,
        name: 'Sheppard Calhoun',
      },
      {
        id: 3,
        name: 'Schmidt Murray',
      },
    ],
    favoriteFruit: 'apple',
  },
  {
    balance: '1345.79',
    age: 21,
    name: {
      first: 'Carey',
      last: 'Schwartz',
    },
    company: 'UXMOX',
    email: 'carey.schwartz@uxmox.info',
    friends: [
      {
        id: 0,
        name: 'Lilia Wiggins',
      },
      {
        id: 1,
        name: 'Snider Tanner',
      },
      {
        id: 2,
        name: 'Taylor Perez',
      },
      {
        id: 3,
        name: 'Raquel Castaneda',
      },
      {
        id: 4,
        name: 'Burris Mcmahon',
      },
      {
        id: 5,
        name: 'Henderson Osborn',
      },
      {
        id: 6,
        name: 'Carrillo Ortiz',
      },
      {
        id: 7,
        name: 'Herminia Puckett',
      },
      {
        id: 8,
        name: 'Shelby Ware',
      },
    ],
    favoriteFruit: 'banana',
  },
  {
    balance: '3261.11',
    age: 30,
    name: {
      first: 'Trevino',
      last: 'Mullins',
    },
    company: 'TERRASYS',
    email: 'trevino.mullins@terrasys.org',
    friends: [
      {
        id: 0,
        name: 'Corine Deleon',
      },
      {
        id: 1,
        name: 'Alta Walker',
      },
      {
        id: 2,
        name: 'Jeannie Santana',
      },
      {
        id: 3,
        name: 'Velazquez Oneill',
      },
      {
        id: 4,
        name: 'Perry Merrill',
      },
      {
        id: 5,
        name: 'Tabitha Mcintosh',
      },
      {
        id: 6,
        name: 'Shields Castillo',
      },
    ],
    favoriteFruit: 'banana',
  },
  {
    balance: '1659.17',
    age: 20,
    name: {
      first: 'Gilliam',
      last: 'Mendez',
    },
    company: 'ZENTHALL',
    email: 'gilliam.mendez@zenthall.tv',
    friends: [
      {
        id: 0,
        name: 'Nora Ratliff',
      },
      {
        id: 1,
        name: 'Simone Michael',
      },
      {
        id: 2,
        name: 'Lang Rose',
      },
      {
        id: 3,
        name: 'Priscilla Hester',
      },
      {
        id: 4,
        name: 'Stuart Barker',
      },
      {
        id: 5,
        name: 'Florine Mcintyre',
      },
      {
        id: 6,
        name: 'Karin Rosa',
      },
      {
        id: 7,
        name: 'Vinson Rutledge',
      },
    ],
    favoriteFruit: 'strawberry',
  },
  {
    balance: '2340.54',
    age: 32,
    name: {
      first: 'Brewer',
      last: 'Vargas',
    },
    company: 'QIMONK',
    email: 'brewer.vargas@qimonk.co.uk',
    friends: [
      {
        id: 0,
        name: 'Tamera Sharp',
      },
      {
        id: 1,
        name: 'Jackie Parks',
      },
      {
        id: 2,
        name: 'Wanda Merritt',
      },
      {
        id: 3,
        name: 'Castillo Sloan',
      },
    ],
    favoriteFruit: 'apple',
  },
  {
    balance: '1736.91',
    age: 24,
    name: {
      first: 'Newman',
      last: 'Wynn',
    },
    company: 'VISALIA',
    email: 'newman.wynn@visalia.name',
    friends: [
      {
        id: 0,
        name: 'Lopez Mccarthy',
      },
      {
        id: 1,
        name: 'Melinda Diaz',
      },
      {
        id: 2,
        name: 'Silva Shepherd',
      },
      {
        id: 3,
        name: 'Claudia Contreras',
      },
      {
        id: 4,
        name: 'Jenna Golden',
      },
      {
        id: 5,
        name: 'Blair Hayden',
      },
      {
        id: 6,
        name: 'Antonia Woods',
      },
      {
        id: 7,
        name: 'Felecia Greer',
      },
      {
        id: 8,
        name: 'Sherry Howard',
      },
      {
        id: 9,
        name: 'Montgomery Cohen',
      },
    ],
    favoriteFruit: 'apple',
  },
];

function showAllEmails() {
  console.log('Электронные адреса пользователей:');
  users.forEach(user => console.log(user.email));
}

function showHigestFriendCount() {
  console.log('Пользователи с наибольшим количеством друзей');

  let max = Number.MIN_VALUE;

  users.forEach(user => {
    if (max < user.friends.length) max = user.friends.length;
  });

  users
    .filter(user => user.friends.length == max)
    .forEach(user => console.log(user.name.first + ' ' + user.name.last));
}

function showMinMaxBalance() {
  let minBalance = Number.MAX_VALUE;
  let maxBalance = Number.MIN_VALUE;

  users.forEach(user => {
    const currentBalance = +user.balance;
    if (currentBalance > maxBalance) maxBalance = currentBalance;
    else if (currentBalance < minBalance) {
      minBalance = currentBalance;
    }
  });

  console.log('Компании пользователей с наибольшим балансом:');
  users
    .filter(user => user.balance == maxBalance)
    .forEach(user => console.log(user.company));

  console.log('Компании пользователей с наименьшим балансом:');
  users
    .filter(user => user.balance == minBalance)
    .forEach(user => console.log(user.company));
}

function showMostFavoritedFruit() {
  let counters = {};

  users.forEach(user => {
    if (counters[user.favoriteFruit]) {
      counters[user.favoriteFruit]++;
    } else {
      counters[user.favoriteFruit] = 1;
    }
  });

  let max = Number.MIN_VALUE;
  let favoriteFruit = '';

  for (const key in counters) {
    if (counters[key] > max) {
      max = counters[key];
      favoriteFruit = key;
    }
  }
  console.log(`Favorite fruit is ${favoriteFruit}`);
}

// showAllEmails();
// showHigestFriendCount();
// showMinMaxBalance();
showMostFavoritedFruit();
