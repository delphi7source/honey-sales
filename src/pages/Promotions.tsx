import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Percent, Clock, Star, Users, Calendar, Tag } from 'lucide-react';

const Promotions: React.FC = () => {
  const activePromotions = [
    {
      id: '1',
      title: 'Скидка 20% на первый заказ',
      description: 'Новым клиентам скидка 20% на любой заказ',
      discount: '20%',
      code: 'FIRST20',
      validUntil: new Date('2024-02-29'),
      type: 'discount',
      minOrder: 1000,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'
    },
    {
      id: '2',
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка при заказе от 1500₽',
      discount: 'Бесплатно',
      code: 'FREEDEL',
      validUntil: new Date('2024-03-15'),
      type: 'delivery',
      minOrder: 1500,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'
    },
    {
      id: '3',
      title: '3+1 на мед с прополисом',
      description: 'При покупке 3 банок меда с прополисом — 4-я в подарок',
      discount: '25%',
      code: 'PROPOLIS3',
      validUntil: new Date('2024-02-20'),
      type: 'gift',
      minOrder: 0,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'
    }
  ];

  const seasonalOffers = [
    {
      title: 'Зимняя коллекция',
      description: 'Специальные сорта меда для укрепления иммунитета',
      products: ['Мед с прополисом', 'Липовый мед', 'Мед с маточным молочком'],
      discount: '15%',
      validUntil: new Date('2024-02-29')
    },
    {
      title: 'Подарочные наборы',
      description: 'Готовые подарочные наборы со скидкой',
      products: ['Набор "Здоровье"', 'Набор "Гурман"', 'Набор "Семейный"'],
      discount: '10%',
      validUntil: new Date('2024-03-08')
    }
  ];

  const loyaltyProgram = {
    currentLevel: 'Золотой',
    points: 2450,
    nextLevel: 'Платиновый',
    pointsToNext: 550,
    benefits: [
      'Скидка 10% на все товары',
      'Бесплатная доставка',
      'Приоритетная поддержка',
      'Эксклюзивные предложения'
    ]
  };

  const getPromotionIcon = (type: string) => {
    switch (type) {
      case 'discount': return Percent;
      case 'delivery': return Clock;
      case 'gift': return Gift;
      default: return Tag;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Акции и скидки</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выгодные предложения на натуральный мед. Экономьте на покупках 
            и получайте больше пользы для здоровья.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Active Promotions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Активные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePromotions.map((promo) => {
              const IconComponent = getPromotionIcon(promo.type);
              return (
                <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-32 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {promo.discount}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className="w-5 h-5 text-amber-600" />
                      <CardTitle className="text-lg">{promo.title}</CardTitle>
                    </div>
                    <CardDescription>{promo.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-gray-100 p-3 rounded text-center">
                        <p className="text-sm text-gray-600">Промокод:</p>
                        <p className="font-mono font-bold text-lg">{promo.code}</p>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Минимальный заказ:</span>
                        <span>{promo.minOrder > 0 ? `${promo.minOrder}₽` : 'Без ограничений'}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Действует до:</span>
                        <span>{promo.validUntil.toLocaleDateString('ru-RU')}</span>
                      </div>
                      
                      <Button className="w-full">Использовать</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Seasonal Offers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Сезонные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{offer.title}</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">{offer.discount}</Badge>
                  </div>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Товары в акции:</h4>
                      <ul className="space-y-1">
                        {offer.products.map((product, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Действует до:</span>
                      <span>{offer.validUntil.toLocaleDateString('ru-RU')}</span>
                    </div>
                    
                    <Button className="w-full">Смотреть товары</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Программа лояльности</CardTitle>
              <CardDescription>Покупайте больше — получайте больше выгод</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      {loyaltyProgram.currentLevel}
                    </div>
                    <p className="text-gray-600">Ваш текущий статус</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Баллы:</span>
                      <span className="font-bold">{loyaltyProgram.points}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-amber-500 h-2 rounded-full" 
                        style={{ width: `${(loyaltyProgram.points / (loyaltyProgram.points + loyaltyProgram.pointsToNext)) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      До статуса "{loyaltyProgram.nextLevel}": {loyaltyProgram.pointsToNext} баллов
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Ваши привилегии:</h4>
                  <ul className="space-y-2">
                    {loyaltyProgram.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-amber-500 mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Save */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Как сэкономить еще больше</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Приведи друга</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Получите 500 бонусных баллов за каждого приведенного друга
                </CardDescription>
                <Button variant="outline">Пригласить</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Подписка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Оформите подписку на регулярную доставку и получите скидку 15%
                </CardDescription>
                <Button variant="outline">Подписаться</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Gift className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Оптовые скидки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Скидки до 20% при покупке от 10 кг меда
                </CardDescription>
                <Button variant="outline">Узнать больше</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Promotions;