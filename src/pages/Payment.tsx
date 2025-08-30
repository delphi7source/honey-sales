import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Building, Package, Shield, Clock, CheckCircle } from 'lucide-react';

const Payment: React.FC = () => {
  const paymentMethods = [
    {
      id: 'cards',
      icon: CreditCard,
      title: 'Банковские карты',
      description: 'Visa, MasterCard, МИР',
      features: ['Мгновенное списание', 'Безопасные платежи', '3D Secure'],
      commission: '0%',
      processing: 'Мгновенно'
    },
    {
      id: 'cash',
      icon: Package,
      title: 'При получении',
      description: 'Наличными или картой курьеру',
      features: ['Оплата при доставке', 'Осмотр товара', 'Без предоплаты'],
      commission: '0%',
      processing: 'При получении'
    },
    {
      id: 'bank-transfer',
      icon: Building,
      title: 'Банковский перевод',
      description: 'Для юридических лиц',
      features: ['Безналичный расчет', 'Полный пакет документов', 'Отсрочка платежа'],
      commission: '0%',
      processing: '1-3 дня'
    },
    {
      id: 'installment',
      icon: Clock,
      title: 'Рассрочка',
      description: '0% на 3 месяца',
      features: ['Без переплат', 'Быстрое одобрение', 'Онлайн оформление'],
      commission: '0%',
      processing: '5 минут'
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'SSL-шифрование',
      description: 'Все данные передаются в зашифрованном виде'
    },
    {
      icon: CheckCircle,
      title: 'PCI DSS',
      description: 'Соответствие международным стандартам безопасности'
    },
    {
      icon: CreditCard,
      title: '3D Secure',
      description: 'Дополнительная защита карточных платежей'
    },
    {
      icon: Building,
      title: 'Лицензированные партнеры',
      description: 'Работаем только с проверенными платежными системами'
    }
  ];

  const faqItems = [
    {
      question: 'Безопасно ли платить картой на сайте?',
      answer: 'Да, мы используем современные технологии шифрования и не храним данные карт на наших серверах. Все платежи обрабатываются через защищенные платежные системы.'
    },
    {
      question: 'Можно ли оплатить заказ частями?',
      answer: 'Да, мы предоставляем рассрочку на 3 месяца без процентов и переплат. Одобрение происходит онлайн за несколько минут.'
    },
    {
      question: 'Что делать, если платеж не прошел?',
      answer: 'Проверьте данные карты и наличие средств. Если проблема не решается, свяжитесь с банком или нашей поддержкой.'
    },
    {
      question: 'Когда списываются деньги?',
      answer: 'При оплате картой деньги списываются сразу после подтверждения заказа. При оплате при получении — в момент доставки.'
    },
    {
      question: 'Можно ли получить чек?',
      answer: 'Да, мы выдаем кассовые чеки при любом способе оплаты. Электронный чек отправляется на email автоматически.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Способы оплаты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ оплаты. Все платежи защищены современными 
            технологиями шифрования.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Доступные способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <method.icon className="w-8 h-8 text-amber-600" />
                    <div>
                      <CardTitle>{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {method.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <span className="text-sm text-gray-500">Комиссия:</span>
                        <p className="font-semibold text-green-600">{method.commission}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Обработка:</span>
                        <p className="font-semibold">{method.processing}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Безопасность платежей</h2>
          <Card className="bg-green-50 border-green-200 mb-8">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">100% безопасные платежи</h3>
              <p className="text-green-700">
                Мы используем банковский уровень защиты для всех онлайн-платежей. 
                Ваши данные надежно защищены.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Как происходит оплата</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Выбор товаров</h3>
                <p className="text-sm text-gray-600">Добавьте товары в корзину</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Оформление</h3>
                <p className="text-sm text-gray-600">Заполните данные заказа</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Оплата</h3>
                <p className="text-sm text-gray-600">Выберите способ оплаты</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Подтверждение</h3>
                <p className="text-sm text-gray-600">Получите подтверждение</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="mt-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Нужна помощь с оплатой?</h3>
              <p className="text-gray-700 mb-6">
                Наши специалисты помогут выбрать удобный способ оплаты и ответят на все вопросы
              </p>
              <Button size="lg">Связаться с поддержкой</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Payment;