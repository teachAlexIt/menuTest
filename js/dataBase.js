const dishesList = [
  // Начало категории "Основные блюда"
  {
    category: {
      ru: 'Шашлык / Кебаб',
      tr: 'Kebablar',
      en: 'Kebabs',
      es: 'Kebabs' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Мясное Ассорти",
          "tr": "Karışık Izgara",
          "en": "Mixed Grilled Meat",
          "es": "Carne Mixta a la Parrilla" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "1100" },
          { "name": "2", "cost": "2200" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Бараньи Отбивные",
          "tr": "Kuzu Pirzola",
          "en": "Lamb Chops",
          "es": "Chuletas de Cordero" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "480" },
          { "name": "1.5", "cost": "720" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Шашлык из Баранины",
          "tr": "Kuzu Şiş",
          "en": "Lamb Shish",
          "es": "Shish de Cordero" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "370" },
          { "name": "1.5", "cost": "555" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Кебаб Адана или Урфа",
          "tr": "Adana veya Urfa Kebap",
          "en": "Adana or Urfa Kebab",
          "es": "Kebab Adana o Urfa" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "260" },
          { "name": "1.5", "cost": "390" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Кебаб Бейти",
          "tr": "Beyti Sarma",
          "en": "Beyti Wrap",
          "es": "Wrap Beyti" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "300" },
          { "name": "1.5", "cost": "450" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Котлеты на Гриле",
          "tr": "Izgara Köfte",
          "en": "Grilled Meatball",
          "es": "Albóndiga a la Parrilla" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "260" },
          { "name": "1.5", "cost": "390" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Печень",
          "tr": "Ciğer",
          "en": "Liver",
          "es": "Hígado" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "300" },
          { "name": "1.5", "cost": "450" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Кебаб с Помидорами",
          "tr": "Domatesli Kebap",
          "en": "Kebab with Tomato",
          "es": "Kebab con Tomate" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "320" },
          { "name": "1.5", "cost": "480" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Кебаб с Баклажаном",
          "tr": "Patlıcanlı Kebap",
          "en": "Kebab with Eggplant",
          "es": "Kebab con Berenjena" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "320" },
          { "name": "1.5", "cost": "480" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Шашлык",
          "tr": "Tavuk Şiş",
          "en": "Chicken Shish",
          "es": "Shish de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "250" },
          { "name": "1.5", "cost": "375" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриные Крылышки",
          "tr": "Tavuk Kanat",
          "en": "Chicken Wings",
          "es": "Alitas de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "260" },
          { "name": "1.5", "cost": "390" }
        ]
      }
    ],
  },
  // Конец категории "Основные блюда"

  // Начало категории "Дёнеры с мясом или курицей"
  {
    category: {
      ru: 'Дёнеры с мясом или курицей',
      tr: 'Et ve Tavuk Dönerler',
      en: 'Meat and Chicken Doners',
      es: 'Döner de Carne y Pollo' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Мясной Донер",
          "tr": "Sade Et Döner",
          "en": "Plain Meat Doner",
          "es": "Döner de Carne Sencillo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "260" },
          { "name": "150 gr", "cost": "390" },
          { "name": "200 gr", "cost": "520" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Мясной Донер с Рисом",
          "tr": "Pilav Üstü Et Döner",
          "en": "Meat Doner with Rice",
          "es": "Döner de Carne con Arroz" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "260" },
          { "name": "150 gr", "cost": "390" },
          { "name": "200 gr", "cost": "520" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Мясной Искендер",
          "tr": "Et İskender",
          "en": "Meat Iskender",
          "es": "Iskender de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "260" },
          { "name": "150 gr", "cost": "390" },
          { "name": "200 gr", "cost": "520" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Закрытый Донер с Мясом",
          "tr": "Kapalı Et Döner",
          "en": "Closed Doner Meat",
          "es": "Döner de Carne Cerrado" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "300" },
          { "name": "1.5", "cost": "450" }
        ]
      },
      {
        "img": "", // надо удалить
        "name": {
          "ru": "Закрытый донер с курицей",
          "tr": "Kapalı Döner Tavuk",
          "en": "Closed Doner Chicken",
          "es": "Döner de Pollo Cerrado" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "280" },
          { "name": "1.5", "cost": "420" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Искендер с Котлетами",
          "tr": "İskender Köfte",
          "en": "Iskender Meatball",
          "es": "Iskender de Albóndiga" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "150 gr", "cost": "260" },
          { "name": "200 gr", "cost": "390" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Донер",
          "tr": "Sade Tavuk Döner",
          "en": "Plain Chicken Doner",
          "es": "Döner de Pollo Sencillo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "200" },
          { "name": "150 gr", "cost": "300" },
          { "name": "200 gr", "cost": "400" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Донер с Рисом",
          "tr": "Pilav Üstü Tavuk Döner",
          "en": "Chicken Doner with Rice",
          "es": "Döner de Pollo con Arroz" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "200" },
          { "name": "150 gr", "cost": "300" },
          { "name": "200 gr", "cost": "400" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Искендер",
          "tr": "Tavuk İskender",
          "en": "Chicken Iskender",
          "es": "Iskender de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100 gr", "cost": "220" },
          { "name": "150 gr", "cost": "330" },
          { "name": "200 gr", "cost": "440" }
        ]
      },
    ],
  },
  // Конец категории "Дёнеры с мясом или курицей"

  // Начало категории "Пиде"
  {
    category: {
      ru: 'пиде',
      tr: 'pideler',
      en: 'pitas',
      es: 'pitas' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Пиде с Мясным Фаршем",
          "tr": "Kıymalı Pide",
          "en": "Pita with Ground Meat",
          "es": "Pita con Carne Molida" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "190" },
          { "name": "1.5", "cost": "285" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с Сыром",
          "tr": "Kaşarlı Pide",
          "en": "Pita with Kashar Cheese",
          "es": "Pita con Queso Kashar" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "190" },
          { "name": "1.5", "cost": "285" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с Кусочками Мяса",
          "tr": "Kuşbaşılı Pide",
          "en": "Pita with Meat Cubes",
          "es": "Pita con Cubos de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "220" },
          { "name": "1.5", "cost": "330" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с Мясным Фаршем и Сыром",
          "tr": "Kıymalı Kaşarlı Pide",
          "en": "Pita with Kashar Cheese and Ground Meat",
          "es": "Pita con Queso Kashar y Carne Molida" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "220" },
          { "name": "1.5", "cost": "330" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с Кусочками Мяса и Сыром",
          "tr": "Kuşbaşılı Kaşarlı Pide",
          "en": "Pita with Meat Cubes and Kashar Cheese",
          "es": "Pita con Cubos de Carne y Queso Kashar" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "250" },
          { "name": "1.5", "cost": "375" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с Колбасой и Сыром",
          "tr": "Sucuklu Kaşarlı Pide",
          "en": "Pita with Soujouk and Kashar Cheese",
          "es": "Pita con Sucuk y Queso Kashar" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "220" },
          { "name": "1.5", "cost": "330" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде Ассорти",
          "tr": "Karışık Pide",
          "en": "Mixed Pita",
          "es": "Pita Mixta" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "240" },
          { "name": "1.5", "cost": "360" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Лахмаджун",
          "tr": "Lahmacun",
          "en": "Lahmacun",
          "es": "Lahmacun" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "2", "cost": "200" }
        ]
      },
    ],
  },
  // Конец категории "Пиде"

  // Начало категории "тушеное мясо"
  {
    category: {
      ru: 'тушеное мясо',
      tr: 'güveçler',
      en: 'stews',
      es: 'guisos' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Мясное Рагу",
          "tr": "Et Güveç",
          "en": "Meat Stew",
          "es": "Guiso de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "400" },
          { "name": "1.5", "cost": "600" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриное Рагу",
          "tr": "Tavuk Güveç",
          "en": "Chicken Stew",
          "es": "Guiso de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "280" },
          { "name": "1.5", "cost": "420" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Рагу с Котлетами",
          "tr": "Köfte Güveç",
          "en": "Meatball Stew",
          "es": "Guiso de Albóndigas" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "290" },
          { "name": "1.5", "cost": "435" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Рагу с Грибами и Сыром",
          "tr": "Kaşarlı Mantar Güveç",
          "en": "Stew with Mushroom and Kashar Cheese",
          "es": "Guiso con Champiñones y Queso Kashar" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "220" },
        ]
      },
    ],
  },
  // Конец категории "тушеное мясо"

  // Начало категории "бургеры"
  {
    category: {
      ru: 'бургеры',
      tr: 'burgerler',
      en: 'burgers',
      es: 'hamburguesas' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Гамбургер",
          "tr": "Hamburger",
          "en": "Hamburger",
          "es": "Hamburguesa" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "195" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Чизбургер",
          "tr": "Çizburger",
          "en": "Cheeseburger",
          "es": "Cheeseburger" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "230" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Бургер с Куриным Донером",
          "tr": "Tavuk Döner Burger",
          "en": "Chicken Doner Burger",
          "es": "Hamburguesa de Döner de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "195" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Бургер с Мясным Донером",
          "tr": "Et Döner Burger",
          "en": "Meat Doner Burger",
          "es": "Hamburguesa de Döner de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "250" }
        ]
      }
    ],
  },
  // Конец категории "бургеры"
  // Начало категории "пиццы"
  {
    category: {
      ru: 'пиццы',
      tr: 'pizzalar',
      en: 'pizzas',
      es: 'pizzas' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Пицца Маргарита",
          "tr": "Margarita Pizza",
          "en": "Margarita Pizza",
          "es": "Pizza Margarita" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "190" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пицца Ассорти",
          "tr": "Karışık Pizza",
          "en": "Mixed Pizza",
          "es": "Pizza Mixta" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "200" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Овощная пицца",
          "tr": "Sebzeli Pizza",
          "en": "Vegetable Pizza",
          "es": "Pizza Vegetal" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "200" }
        ]
      }
    ],
  },
  // Конец категории "пиццы"
  // Начало категории "салаты"
  {
    category: {
      ru: 'салаты',
      tr: 'salatalar',
      en: 'salad',
      es: 'ensaladas' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Салат Пастуха",
          "tr": "Çoban Salata",
          "en": "Shepherd Salad",
          "es": "Ensalada del Pastor" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "100" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Салат Сезон",
          "tr": "Mevsim Salata",
          "en": "Salad with Season's Vegetables",
          "es": "Ensalada con Verduras de Temporada" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "100" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Салат из Баклажанов",
          "tr": "Patlıcan Salatası",
          "en": "Eggplant Salad",
          "es": "Ensalada de Berenjenas" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "100" }
        ]
      },
    ],
  },
  // Конец категории "салаты"
  // Начало категории "донеры"
  {
    category: {
      ru: 'шаурма и гобит',
      tr: 'dürümler ve gobitler',
      en: 'wraps and gobits',
      es: 'wraps y gobits' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Куриная Шаурма",
          "tr": "Tavuk Dürüm",
          "en": "Chicken Wrap",
          "es": "Wrap de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100gr", "cost": "110" },
          { "name": "150gr", "cost": "165" },
          { "name": "200gr", "cost": "220" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Мясная Шаурма",
          "tr": "Et Dürüm",
          "en": "Meat Wrap",
          "es": "Wrap de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100gr", "cost": "220" },
          { "name": "150gr", "cost": "330" },
          { "name": "200gr", "cost": "440" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Гобит",
          "tr": "Tavuk Gobit",
          "en": "Chicken Gobit",
          "es": "Gobit de Pollo" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100gr", "cost": "110" },
          { "name": "150gr", "cost": "165" },
          { "name": "200gr", "cost": "220" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Мясной Гобит",
          "tr": "Et Gobit",
          "en": "Meat Gobit",
          "es": "Gobit de Carne" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "100gr", "cost": "220" },
          { "name": "150gr", "cost": "330" },
          { "name": "200gr", "cost": "440" }
        ]
      },                        
    ],
  },
  // Конец категории "донеры"
  // Начало категории "прохлодительные напитки"
  {
    category: {
      ru: 'холодные напитки',
      tr: 'soğuk içecekler',
      en: 'cold drinks',
      es: 'bebidas frías' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Бутылка Кока-Кола Зеро",
          "tr": "Şişe Coca-Cola-Zero",
          "en": "Bottle Coca-Cola Zero",
          "es": "Botella de Coca-Cola Zero" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Фанта",
          "tr": "Fanta",
          "en": "Fanta",
          "es": "Fanta" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Спрайт",
          "tr": "Sprite",
          "en": "Sprite",
          "es": "Sprite" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Фруктовый Сок",
          "tr": "Meyve Suları",
          "en": "Fruit Juice",
          "es": "Jugo de Frutas" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Фьюз Ти",
          "tr": "Fuse Tea",
          "en": "Fuse Tea",
          "es": "Fuse Tea" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Айран",
          "tr": "Ayran",
          "en": "Ayran",
          "es": "Ayran" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "25" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Домашний Айран",
          "tr": "Yayık Ayran",
          "en": "Buttermilk Drink",
          "es": "Bebida de Suero de Leche" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "40" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Фруктовая Газированная Вода",
          "tr": "Meyveli Soda",
          "en": "Fruit Sparkling Water",
          "es": "Agua con Gas de Frutas" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "25" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Газированная Вода",
          "tr": "Soda",
          "en": "Sparkling Water",
          "es": "Agua con Gas" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "25" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Лимонад",
          "tr": "Limonata",
          "en": "Lemonade",
          "es": "Limonada" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "45" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Свекольный Напиток",
          "tr": "Şalgam",
          "en": "Beet",
          "es": "Remolacha" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "30" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Вода",
          "tr": "Su",
          "en": "Water",
          "es": "Agua" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "10" }
        ]
      },                                                                                               
    ],
  },
  // Конец категории "прохлодительные напитки"
  // Начало категории "горячие напитки"
  {
    category: {
      ru: 'горячие напитки',
      tr: 'sıcak içecekler',
      en: 'hot drinks',
      es: 'bebidas calientes' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Традиционный Турецкий Кофе",
          "tr": "Geleneksel Türk Kahvesi",
          "en": "Traditional Turkish Coffee",
          "es": "Café Turco Tradicional" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "50" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Капучино",
          "tr": "Cappuccino",
          "en": "Cappuccino",
          "es": "Cappuccino" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "50" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Нескафе",
          "tr": "Nescafe",
          "en": "Nescafe",
          "es": "Nescafé" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "50" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Чай",
          "tr": "Çay",
          "en": "Tea",
          "es": "Té" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": " ", "cost": "15" }
        ]
      },                                               
    ],
  },
  // Конец категории "горячие напитки"
  // Начало категории "дополнительное"
  {
    category: {
      ru: 'дополнительное',
      tr: 'ekstra',
      en: 'additional',
      es: 'adicional' // добавлено
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Кюнефе",
          "tr": "Künefe",
          "en": "Kunefe",
          "es": "Künefe" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "100" },
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Суп Дня",
          "tr": "Günün Çorbası",
          "en": "Soup of the day",
          "es": "Sopa del Día" // добавлено
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": "",
          "es": "" // добавлено
        },
        "portionList": [
          { "name": "1", "cost": "100" },
        ]
      },                         
    ],
  },
  // Конец категории "дополнительное"

];

// Функция для обновления img поля
function updateDishesWithImage() {
  dishesList.forEach(categoryObj => {
    const categoryNameEn = categoryObj.category.en.toLowerCase().replace(/\s+/g, '-');
    categoryObj.dishes.forEach(dish => {
      const dishNameEn = dish.name.en.toLowerCase().replace(/\s+/g, '-');
      dish.img = `${categoryNameEn}/${dishNameEn}`; // Заполнение поля img в формате 'category[en]/name[en]'
    });
  });
}

// Обновляем данные
updateDishesWithImage();

export default dishesList;