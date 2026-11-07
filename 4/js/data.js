import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;

const DESCRIPTIONS = [
  'Отличный день на пляже!',
  'Завтрак чемпиона.',
  'Новый член семьи 🐶',
  'Заблудился в лесу, но фото вышло красивым.',
  'Моё рабочее место на сегодня.',
  'Никогда больше не буду столько есть...',
  'Архитектура этого города поражает.'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Мария', 'Иван', 'Ольга', 'Виктор', 'Елена', 'Дмитрий', 'Алиса', 'Максим'
];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_INDEX, MAX_AVATAR_INDEX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, MAX_COMMENTS) }, createComment)
});

// Вызываем генерацию сразу на нужное количество фото, чтобы скрыть эту логику внутри модуля
const generatePhotos = () => Array.from({ length: PHOTO_COUNT }, (_, index) => createPhoto(index + 1));

export { generatePhotos };
