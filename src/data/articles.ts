import { Article } from '@/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Польза меда для здоровья',
    content: 'Мед - это не только вкусное лакомство, но и мощное природное лекарство...',
    excerpt: 'Узнайте о целебных свойствах меда и его влиянии на организм человека',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    author: 'Доктор Иванов',
    publishedAt: new Date('2024-01-15'),
    category: 'Здоровье',
    tags: ['здоровье', 'польза', 'лечение']
  },
  {
    id: '2',
    title: 'Как выбрать качественный мед',
    content: 'При выборе меда важно обращать внимание на несколько ключевых факторов...',
    excerpt: 'Практические советы по выбору натурального и качественного меда',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    author: 'Пчеловод Петров',
    publishedAt: new Date('2024-01-10'),
    category: 'Советы',
    tags: ['выбор', 'качество', 'советы']
  }
];