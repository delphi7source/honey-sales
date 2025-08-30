import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, CreditCard, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Общие положения',
      content: [
        'Настоящие Условия использования регулируют отношения между ООО "МедоДом" и пользователями сайта honey-shop.ru',
        'Используя сайт, вы соглашаетесь с данными условиями',
        'Мы оставляем за собой право изменять условия с уведомлением пользователей',
        'Актуальная версия условий всегда доступна на данной странице'
      ]
    },
    {
      icon: CreditCard,
      title: 'Заказы и оплата',
      content: [
        'Заказ считается принятым после получения подтверждения от нашей компании',
        'Цены на товары могут изменяться без предварительного уведомления',
        'Оплата производится в рублях РФ',
        'При оплате картой средства списываются после подтверждения заказа',
        'Мы не храним данные банковских карт на наших серверах'
      ]
    },
    {
      icon: Truck,
      title: 'Доставка',
      content: [
        'Сроки доставки являются ориентировочными и могут изменяться',
        'Риск случайной гибели товара переходит к покупателю в момент передачи курьеру',
        'При отсутствии покупателя товар может быть возвращен на склад',
        'Стоимость повторной доставки оплачивается покупателем',
        'Мы не несем ответственности за задержки, вызванные форс-мажорными обстоятельствами'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Возврат и обмен',
      content: [
        'Возврат товара возможен в течение 14 дней с момента получения',
        'Товар должен быть в оригинальной упаковке и не иметь следов использования',
        'Возврат денежных средств осуществляется в течение 10 рабочих дней',
        'Стоимость доставки при возврате оплачивает покупатель (кроме случаев брака)',
        'Обмен товара производится при наличии аналогичного товара на складе'
      ]
    },
    {
      icon: Scale,
      title: 'Ответственность',
      content: [
        'Мы гарантируем качество товара в соответствии с ГОСТ',
        'Ответственность ограничивается стоимостью товара',
        'Мы не несем ответственности за ущерб от неправильного использования товара',
        'Покупатель несет ответственность за достоверность предоставленной информации',
        'Споры решаются в соответствии с законодательством РФ'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Ограничения',
      content: [
        'Запрещено использование сайта в незаконных целях',
        'Запрещено нарушение работы сайта или серверов',
        'Запрещено копирование контента без разрешения',
        'Мы можем ограничить доступ при нарушении условий',
        'Минимальный возраст пользователя — 18 лет'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Условия использования</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Правила и условия использования нашего интернет-магазина. 
            Пожалуйста, ознакомьтесь перед совершением покупок.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Company Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Информация о компании</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Полное наименование:</h4>
                <p className="text-gray-700">Общество с ограниченной ответственностью "МедоДом"</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ИНН:</h4>
                <p className="text-gray-700">7701234567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ОГРН:</h4>
                <p className="text-gray-700">1127746123456</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Юридический адрес:</h4>
                <p className="text-gray-700">123456, г. Москва, ул. Пчелиная, д. 15</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Телефон:</h4>
                <p className="text-gray-700">+7 (495) 123-45-67</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-700">info@honey-shop.ru</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="w-6 h-6 mr-2 text-amber-600" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact for Legal Issues */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Контакты по правовым вопросам</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              По вопросам, связанным с условиями использования и правовыми аспектами:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2 text-gray-500" />
                <span>Email: legal@honey-shop.ru</span>
              </div>
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2 text-gray-500" />
                <span>Юридический отдел: +7 (495) 123-45-68</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Acceptance */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Согласие с условиями</h3>
            <p className="text-gray-700">
              Продолжая использование сайта, вы подтверждаете, что ознакомились 
              с условиями использования и согласны с ними.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;