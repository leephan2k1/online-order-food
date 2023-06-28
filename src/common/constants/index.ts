import { Featured } from '~/common/interfaces/featured.interface';

export const SCREENS = {
  Home: 'Home',
  Restaurant: 'Restaurant',
  Cart: 'Cart',
  PreparingOrder: 'PreparingOrder',
  Delivery: 'Delivery',
};

const pallets = [
  {
    // orange
    text: '#f97316',
    bgColor: (opacity: number) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // dark gray
    text: '#334155',
    bgColor: (opacity: number) => `rgba(30, 41, 59, ${opacity})`,
  },
  {
    // purple
    text: '#7c3aed',
    bgColor: (opacity: number) => `rgba(167, 139, 250, ${opacity})`,
  },
  {
    // green
    text: '#009950',
    bgColor: (opacity: number) => `rgba(0, 179, 89, ${opacity})`,
  },
  {
    // teal
    text: '#14b8a6',
    bgColor: (opacity: number) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // red
    text: '#dc2626',
    bgColor: (opacity: number) => `rgba(248, 113, 113, ${opacity})`,
  },
];
export const themeColors = {
  ...pallets[1],
};

export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../../../assets/images/pizzaIcon.png'),
  },
];

export const featured: Featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../../../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
      ],
    },
    {
      id: 2,
      name: 'Papa Johns',
      image: require('../../../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
      ],
    },
    {
      id: 3,
      name: 'Papa Johns',
      image: require('../../../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10,
          image: require('../../../assets/images/pizzaDish.png'),
        },
      ],
    },
  ],
};
