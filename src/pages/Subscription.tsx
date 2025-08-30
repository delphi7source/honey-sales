import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar, Package, Percent, Clock, Gift, Truck, Star } from 'lucide-react';

const Subscription: React.FC = () => {
  const [subscriptionData, setSubscriptionData] = useState({
    frequency: 'monthly',
    products: [] as string[],
    startDate: '',
    deliveryDay: 'any'
  });

  const frequencies = [
    { 
      id: 'weekly', 
      name: 'Еженедельно', 
      discount: '20%', 
      description: 'Каждую неделю',
      price: 'от 680₽'
    },
    { 
      id: 'biweekly', 
      name: 'Раз в 2 недели', 
      discount: '15%', 
      description: 'Каждые 2 недели',
      price: 'от 722₽'
    },
    { 
      id: 'monthly', 
      name: 'Ежемесячно', 
      discount: '10%', 
      description: 'Каждый месяц',
      price: 'от 765₽'
    },
    { 
      id: 'quarterly', 
      name: 'Раз в квартал', 
      discount: '5%', 
      description: 'Каждые 3 месяца',
      price: 'от 807₽'
    }
  ];

  const subscriptionProducts = [
    {
      id: '1',
      name: 'Липовый мед 500г',
      price: 850,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      popular: true
    },
    {
      id: '2',
      name: 'Гречишный мед 500г',
      price: 920,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      popular: false
    },
    {
      id: '3',
      name: 'Акациевый мед 500г',
      price: 1200,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      popular: true
    },
    {
      id: '5',
      name: 'Мед с прополисом 250г',
      price: 1450,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      popular: false
    }
  ];

  const benefits = [
    'Скидка до 20% на все товары',
    'Бесплатная доставка',
    'Приоритетное обслуживание',
    'Возможность изменить или пропустить доставку',
    'Эксклюзивные предложения',
    'Первыми узнавайте о новинках'
  ];

  const handleProductToggle = (productId: string) => {
    setSubscriptionData(prev => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter(id => id !== productId)
        : [...prev.products, productId]
    }));
  };

  const selectedFrequency = frequencies.find(f => f.id === subscriptionData.frequency);
  const selectedProducts = subscriptionProducts.filter(p => subscriptionData.products.includes(p.id));
  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);
  const discountAmount = totalPrice * (parseInt(selectedFrequency?.discount || '0') / 100);
  const finalPrice = totalPrice - discountAmount;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Подписка на мед</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получайте свежий мед регулярно со скидкой до 20%. 
            Никогда не останетесь без любимого лакомства!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Banner */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  Преимущества подписки
                </h2>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
                <p className="text-green-700">максимальная скидка</p>
                <div className="text-2xl font-bold text-green-600 mt-4 mb-2">0₽</div>
                <p className="text-green-700">стоимость доставки</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subscription Setup */}
          <div className="lg:col-span-2 space-y-6">
            {/* Frequency Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Частота доставки
                </CardTitle>
                <CardDescription>Выберите, как часто вы хотите получать мед</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={subscriptionData.frequency} 
                  onValueChange={(value) => setSubscriptionData({...subscriptionData, frequency: value})}
                  className="space-y-4"
                >
                  {frequencies.map((freq) => (
                    <div key={freq.id} className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value={freq.id} id={freq.id} />
                      <Label htmlFor={freq.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{freq.name}</p>
                            <p className="text-sm text-gray-600">{freq.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-green-100 text-green-800 mb-1">
                              -{freq.discount}
                            </Badge>
                            <p className="text-sm font-semibold">{freq.price}</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Product Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Выберите товары
                </CardTitle>
                <CardDescription>Отметьте товары, которые хотите получать регулярно</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subscriptionProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        subscriptionData.products.includes(product.id)
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleProductToggle(product.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold">{product.name}</h3>
                            {product.popular && (
                              <Badge className="bg-orange-100 text-orange-800 text-xs">
                                Популярный
                              </Badge>
                            )}
                          </div>
                          <p className="text-amber-600 font-bold">{product.price}₽</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Настройки доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="startDate">Дата первой доставки</Label>
                  <input
                    type="date"
                    id="startDate"
                    value={subscriptionData.startDate}
                    onChange={(e) => setSubscriptionData({...subscriptionData, startDate: e.target.value})}
                    className="w-full p-2 border rounded-md mt-1"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <Label>Предпочтительный день доставки</Label>
                  <Select 
                    value={subscriptionData.deliveryDay} 
                    onValueChange={(value) => setSubscriptionData({...subscriptionData, deliveryDay: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Любой день</SelectItem>
                      <SelectItem value="monday">Понедельник</SelectItem>
                      <SelectItem value="tuesday">Вторник</SelectItem>
                      <SelectItem value="wednesday">Среда</SelectItem>
                      <SelectItem value="thursday">Четверг</SelectItem>
                      <SelectItem value="friday">Пятница</SelectItem>
                      <SelectItem value="saturday">Суббота</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Ваша подписка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedProducts.length > 0 ? (
                    <>
                      {selectedProducts.map((product) => (
                        <div key={product.id} className="flex items-center space-x-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-gray-600">{product.price}₽</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Стоимость товаров:</span>
                          <span>{totalPrice.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Скидка ({selectedFrequency?.discount}):</span>
                          <span>-{discountAmount.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Доставка:</span>
                          <span className="text-green-600">Бесплатно</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t pt-2">
                          <span>К оплате {selectedFrequency?.description.toLowerCase()}:</span>
                          <span>{finalPrice.toLocaleString()}₽</span>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <p className="text-sm text-amber-800 text-center">
                          Экономия: {discountAmount.toLocaleString()}₽ за доставку
                        </p>
                      </div>
                      
                      <Button className="w-full" size="lg">
                        Оформить подписку
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Выберите товары для подписки</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Subscription Benefits */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Преимущества подписки</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Percent className="w-4 h-4 text-green-500 mr-2" />
                    <span>Скидки до 20%</span>
                  </li>
                  <li className="flex items-center">
                    <Truck className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Бесплатная доставка</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 text-purple-500 mr-2" />
                    <span>Гибкое управление</span>
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-4 h-4 text-red-500 mr-2" />
                    <span>Подарки и бонусы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-12">Как работает подписка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Выберите товары</h3>
                <p className="text-sm text-gray-600">Отметьте нужные сорта меда</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Настройте частоту</h3>
                <p className="text-sm text-gray-600">Выберите удобный интервал</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Получайте мед</h3>
                <p className="text-sm text-gray-600">Автоматическая доставка</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Управляйте</h3>
                <p className="text-sm text-gray-600">Изменяйте в любое время</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-12">Отзывы о подписке</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Очень удобно! Мед приходит регулярно, не нужно помнить о заказе. 
                  Качество всегда отличное."
                </p>
                <p className="text-sm text-gray-600">— Мария К.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Экономлю время и деньги. Скидка существенная, а доставка всегда вовремя. 
                  Рекомендую!"
                </p>
                <p className="text-sm text-gray-600">— Алексей П.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Подписка — это находка! Всегда свежий мед дома, а цены приятно удивляют."
                </p>
                <p className="text-sm text-gray-600">— Елена С.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subscription;