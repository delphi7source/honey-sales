import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Star, Droplets, Sun, Flower } from 'lucide-react';

const HoneyTypes: React.FC = () => {
  const honeyTypes = [
    {
      id: 'linden',
      name: 'Липовый мед',
      description: 'Светлый мед с нежным ароматом липового цвета',
      color: 'Светло-желтый',
      taste: 'Нежный, сладкий',
      benefits: ['Успокаивающее действие', 'Помогает при простуде', 'Улучшает сон'],
      season: 'Июнь-Июль',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Leaf,
      rating: 4.9
    },
    {
      id: 'buckwheat',
      name: 'Гречишный мед',
      description: 'Темный мед с богатым вкусом и высоким содержанием железа',
      color: 'Темно-коричневый',
      taste: 'Насыщенный, терпкий',
      benefits: ['Повышает гемоглобин', 'Укрепляет сосуды', 'Богат минералами'],
      season: 'Июль-Август',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Heart,
      rating: 4.7
    },
    {
      id: 'acacia',
      name: 'Акациевый мед',
      description: 'Прозрачный мед с деликатным вкусом, долго не кристаллизуется',
      color: 'Прозрачный',
      taste: 'Деликатный, цветочный',
      benefits: ['Гипоаллергенный', 'Подходит детям', 'Нормализует давление'],
      season: 'Май-Июнь',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Star,
      rating: 4.8
    },
    {
      id: 'sunflower',
      name: 'Подсолнечный мед',
      description: 'Золотистый мед с характерным ароматом подсолнуха',
      color: 'Золотисто-желтый',
      taste: 'Сладкий, фруктовый',
      benefits: ['Богат витаминами', 'Укрепляет иммунитет', 'Источник энергии'],
      season: 'Июль-Сентябрь',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Sun,
      rating: 4.6
    },
    {
      id: 'wildflower',
      name: 'Разнотравье',
      description: 'Мед из нектара различных луговых трав и цветов',
      color: 'Янтарный',
      taste: 'Многогранный, цветочный',
      benefits: ['Комплекс витаминов', 'Общеукрепляющее', 'Антиоксиданты'],
      season: 'Май-Сентябрь',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Flower,
      rating: 4.8
    },
    {
      id: 'clover',
      name: 'Клеверный мед',
      description: 'Светлый мед с мягким вкусом и приятным ароматом',
      color: 'Светло-янтарный',
      taste: 'Мягкий, сладкий',
      benefits: ['Очищает организм', 'Улучшает обмен веществ', 'Антисептик'],
      season: 'Июнь-Август',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      icon: Droplets,
      rating: 4.5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Виды меда</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый сорт меда уникален по своему составу, вкусу и полезным свойствам. 
            Узнайте больше о наших сортах меда.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Honey Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {honeyTypes.map((honey) => (
            <Card key={honey.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img 
                  src={honey.image} 
                  alt={honey.name}
                  className="w-full h-48 lg:h-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <honey.icon className="w-8 h-8 text-amber-600" />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(honey.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">{honey.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{honey.name}</h3>
                  <p className="text-gray-600 mb-4">{honey.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Цвет:</span>
                      <span>{honey.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Вкус:</span>
                      <span>{honey.taste}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Сезон сбора:</span>
                      <span>{honey.season}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Полезные свойства:</h4>
                    <ul className="space-y-1">
                      {honey.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">Купить этот мед</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Сравнение сортов меда</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Сорт</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Цвет</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Вкус</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Основная польза</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Рейтинг</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {honeyTypes.map((honey) => (
                      <tr key={honey.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{honey.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{honey.color}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{honey.taste}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{honey.benefits[0]}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{honey.rating}/5</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HoneyTypes;