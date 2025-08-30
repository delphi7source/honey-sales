import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Clock, MapPin, Package, Shield, CreditCard } from 'lucide-react';

const Delivery: React.FC = () => {
  const deliveryOptions = [
    {
      id: 'courier',
      name: 'Курьерская доставка',
      description: 'Доставка курьером по Москве и МО',
      price: 'от 300₽',
      time: '1-2 дня',
      icon: Truck,
      features: ['Доставка до двери', 'Оплата при получении', 'SMS уведомления']
    },
    {
      id: 'pickup',
      name: 'Самовывоз',
      description: 'Забрать заказ в нашем офисе',
      price: 'Бесплатно',
      time: 'В день заказа',
      icon: MapPin,
      features: ['Без доплат', 'Дегустация', 'Консультация специалиста']
    },
    {
      id: 'post',
      name: 'Почта России',
      description: 'Доставка по всей России',
      price: 'от 400₽',
      time: '3-7 дней',
      icon: Package,
      features: ['По всей России', 'Отслеживание', 'Страхование']
    }
  ];

  const regions = [
    { name: 'Москва', price: '300₽', time: '1-2 дня' },
    { name: 'Московская область', price: '400₽', time: '1-3 дня' },
    { name: 'Санкт-Петербург', price: '500₽', time: '2-3 дня' },
    { name: 'Другие регионы', price: 'от 400₽', time: '3-7 дней' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Доставка и оплата</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы доставляем наш натуральный мед по всей России. 
            Выберите удобный способ доставки и оплаты.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Free Delivery Banner */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Бесплатная доставка от 2000₽
            </h2>
            <p className="text-green-700">
              При заказе от 2000 рублей доставка по Москве и МО бесплатно!
            </p>
          </CardContent>
        </Card>

        {/* Delivery Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryOptions.map((option) => (
              <Card key={option.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <option.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle>{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-amber-600">{option.price}</div>
                    <div className="text-sm text-gray-600">{option.time}</div>
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Regions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Стоимость доставки по регионам</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Регион</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Стоимость</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Срок доставки</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {regions.map((region, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{region.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{region.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{region.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Банковской картой</h3>
                <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">При получении</h3>
                <p className="text-sm text-gray-600">Наличными или картой</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Банковский перевод</h3>
                <p className="text-sm text-gray-600">Для юридических лиц</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Рассрочка</h3>
                <p className="text-sm text-gray-600">0% на 3 месяца</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Как происходит доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Оформление заказа</h3>
              <p className="text-sm text-gray-600">Выберите товары и оформите заказ на сайте</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Подтверждение</h3>
              <p className="text-sm text-gray-600">Мы свяжемся с вами для подтверждения</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Упаковка</h3>
              <p className="text-sm text-gray-600">Бережная упаковка и подготовка к отправке</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Получение</h3>
              <p className="text-sm text-gray-600">Получите заказ и наслаждайтесь медом</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли изменить адрес доставки после оформления заказа?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, вы можете изменить адрес доставки до момента передачи заказа курьеру. 
                  Свяжитесь с нами по телефону +7 (495) 123-45-67.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как отследить мой заказ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  После отправки заказа вы получите SMS с трек-номером для отслеживания. 
                  Также информацию можно получить в личном кабинете.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что делать, если товар пришел поврежденным?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы заменим поврежденный товар бесплатно. Сфотографируйте повреждения 
                  и свяжитесь с нами в течение 24 часов после получения.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Delivery;