'use strict';

// ==================== 02 ==================
// Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства lastName и firstName полученного объекта на экран.

const user1 = {
  firstName: 'Vovka',
  lastName: 'Morkovka',
};

const user12 = new Object();
user12.firstName = 'Polka';
user12.lastName = 'Kolka';

function print(obj) {
  // console.log(obj.firstName, obj.lastName);
}
print(user1);
print(user12);

// ==================== 03 ==================
// Поменяйте сценарий. Выведите информацию только о тех пользователях, кто работает в компании Keebler LLC
// массив создан с помощью https://jsonplaceholder.typicode.com/users
// все свойства в объектах, которые находятся в массиве, взяты в "". Такой формат данных
let users1 = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

for (const user of users1) {
  if (user.company.name === 'Keebler LLC') {
    // console.log(user.name + ' from ' + user.company.name);
  }
  // console.log(user.name + ' from ' + user.address.city);
}

// ==================== 04 ==================
// Выведите на экран свойства first и last из вложенного объекта name. Поменяйте значение свойства balance на '$2000'. Удалите свойство email.
// Выведите на экран все содержимое объекта с помощью кода console.log(user)
let user2 = {
  balance: '$1,250.89',
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
  ],
  favoriteFruit: 'strawberry',
};

user2.balance = '$2000';
delete user2.email;

// console.log(user2);

// ==================== 05 ==================
// Все объекты в массиве users2 имеют одинаковую структуру.
// Выведите на экран:
// 1) Адреса электронной почты всех пользователей (email)
// 2) Имя и фамилию пользователей с наибольшим количеством друзей (свойства name и friends)
// 3) Компанию пользователя с наибольшим балансом и компанию пользователя с наименьшим балансом (свойства company и balance)
// массив сгенерирован с помощью https://next.json-generator.com/

function showUsersEmails() {
  for (let user of users2) {
    console.log(user.email);
  }
}

function showHigestFriendCount() {
  let max = Number.MIN_VALUE;

  users2.forEach(elem => {
    if (elem.friends.length > max) {
      max = elem.friends.length;
    }
  });

  users2
    .filter(user => user.friends.length == max)
    .forEach(user =>
      console.log(`${user.name.first} ${user.name.last} has ${max} friends`)
    );
}

function showMinMaxBalance() {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  users2.forEach(user => {
    let currentBalance = +user.balance;
    if (currentBalance > max) {
      max = currentBalance;
    }
    if (currentBalance < min) {
      min = currentBalance;
    }
  });

  users2
    .filter(user => user.balance == max)
    .forEach(user => console.log(user.company));
  users2
    .filter(user => user.balance == min)
    .forEach(user => console.log(user.company));
}

let users2 = [
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

// showUsersEmails();
// showHigestFriendCount();
showMinMaxBalance();
