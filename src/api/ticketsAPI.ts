import { Ticket } from '../types';


const fakeApiDelay = 500; // Имитация задержки запроса к фейковому API

const fakeTickets: Ticket[] = [
  {
    id: 1,
    from: 'Санкт-Петербург',
    to: 'Москва',
    company: 'Победа',
    price: 5600,
    currency: 'RUB',
    time: { startTime: '09:00', endTime: '11:30' },
    duration: 150,
    date: '2023-06-01',
    connectionAmount: 0,
    imageUrl: '../assets/pobeda.png',
    travelTime: '',
    iconFrom: '../assets/spb.png',
    iconTo: '../assets/mos.png',
    right: '../assets/right.png'
  },
  {
    id: 2,
    from: 'Владивосток',
    to: 'Санкт-Петербург',
    company: 'S7 Airlines',
    price: 11500,
    currency: 'RUB',
    time: { startTime: '12:00', endTime: '17:00' },
    duration: 180,
    date: '2023-06-02',
    connectionAmount: 1,
    imageUrl: '../assets/s7.png',
    travelTime: '',
    iconFrom: '../assets/vlad.png',
    iconTo: '../assets/spb.png',
    right: '../assets/right.png'
  },
  {
    id: 3,
    from: 'Санкт-Петербург',
    to: 'Дубаи',
    company: 'Red Wings',
    price: 44500,
    currency: 'RUB',
    time: { startTime: '15:00', endTime: '22:30' },
    duration: 180,
    date: '2023-06-02',
    connectionAmount: 3,
    imageUrl: '../assets/redwings.png',
    travelTime: '',
    iconFrom: '../assets/spb.png',
    iconTo: '../assets/dub.png',
    right: '../assets/right.png'
  },
  {
    id: 4,
    from: 'Москва',
    to: 'Владивосток',
    company: 'Победа',
    price: 8500,
    currency: 'RUB',
    time: { startTime: '07:00', endTime: '23:00' },
    duration: 180,
    date: '2023-06-02',
    connectionAmount: 0,
    imageUrl: '../assets/pobeda.png',
    travelTime: '',
    iconFrom: '../assets/mos.png',
    iconTo: '../assets/vlad.png',
    right: '../assets/right.png'
  },
  {
    id: 5,
    from: 'Краснодар',
    to: 'Санкт-Петербург',
    company: 'S7 Airlines',
    price: 9500,
    currency: 'RUB',
    time: { startTime: '12:00', endTime: '17:00' },
    duration: 180,
    date: '2023-06-02',
    connectionAmount: 2,
    imageUrl: '../assets/s7.png',
    travelTime: '',
    iconFrom: '../assets/kras.png',
    iconTo: '../assets/spb.png',
    right: '../assets/right.png'
  },
  {
    id: 6,
    from: 'Санкт-Петербург',
    to: 'Turkey',
    company: 'Red Wings',
    price: 38500,
    currency: 'RUB',
    time: { startTime: '13:00', endTime: '18:10' },
    duration: 180,
    date: '2023-06-02',
    connectionAmount: 2,
    imageUrl: '../assets/redwings.png',
    travelTime: '',
    iconFrom: '../assets/spb.png',
    iconTo: '../assets/tur.png',
    right: '../assets/right.png'
  },
  {
    id: 7,
    from: 'Санкт-Петербург',
    to: 'Пермь',
    company: 'Победа',
    price: 3600,
    currency: 'RUB',
    time: { startTime: '17:00', endTime: '18:30' },
    duration: 150,
    date: '2023-06-01',
    connectionAmount: 0,
    imageUrl: '../assets/pobeda.png',
    travelTime: '',
    iconFrom: '../assets/spb.png',
    iconTo: '../assets/perm.png',
    right: '../assets/right.png'
  },

];

export const fetchTickets = async (): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeTickets);
    }, fakeApiDelay);
  });
};