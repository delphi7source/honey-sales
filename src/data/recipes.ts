import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Медовые пряники',
    description: 'Традиционные русские пряники с ароматным медом',
    ingredients: [
      '300г муки',
      '150г меда',
      '100г сливочного масла',
      '1 яйцо',
      '1 ч.л. соды',
      'Специи по вкусу'
    ],
    instructions: [
      'Растопить мед с маслом',
      'Добавить яйцо и специи',
      'Всыпать муку с содой',
      'Замесить тесто',
      'Раскатать и вырезать пряники',
      'Выпекать 15 минут при 180°C'
    ],
    prepTime: 45,
    difficulty: 'easy',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    category: 'Выпечка'
  },
  {
    id: '2',
    title: 'Медовый торт',
    description: 'Нежный медовый торт со сметанным кремом',
    ingredients: [
      '400г муки',
      '200г меда',
      '3 яйца',
      '500мл сметаны',
      '200г сахара',
      '1 ч.л. соды'
    ],
    instructions: [
      'Взбить яйца с сахаром',
      'Добавить мед и соду',
      'Всыпать муку',
      'Выпечь коржи',
      'Приготовить крем',
      'Собрать торт'
    ],
    prepTime: 120,
    difficulty: 'medium',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    category: 'Торты'
  }
];