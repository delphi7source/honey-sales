import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  const dataTypes = [
    {
      type: 'Персональные данные',
      description: 'Имя, фамилия, email, телефон',
      purpose: 'Обработка заказов и связь с клиентами',
      retention: '3 года после последнего заказа'
    },
    {
      type: 'Данные заказов',
      description: 'История покупок, предпочтения',
      purpose: 'Улучшение сервиса и персонализация',
      retention: '5 лет для налогового учета'
    },
    {
      type: 'Технические данные',
      description: 'IP-адрес, cookies, данные браузера',
      purpose: 'Аналитика и безопасность сайта',
      retention: '1 год'
    },
    {
      type: 'Платежные данные',
      description: 'Данные банковских карт (зашифрованы)',
      purpose: 'Обработка платежей',
      retention: 'Не храним, передаем платежной системе'
    }
  ];

  const rights = [
    'Получить информацию о ваших данных',
    'Исправить неточные данные',
    'Удалить ваши данные',
    'Ограничить обработку данных',
    'Перенести данные к другому оператору',
    'Отозвать согласие на обработку'
  ];

  const securityMeasures = [
    'SSL-шифрование всех данных',
    'Регулярные аудиты безопасности',
    'Ограниченный доступ к данным',
    'Резервное копирование',
    'Мониторинг подозрительной активности',
    'Обучение персонала'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Политика конфиденциальности</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных и соблюдаем 
            все требования законодательства РФ.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600">
            Последнее обновление: 15 января 2024 года
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              Общие положения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
              персональных данных пользователей сайта honey-shop.ru (далее — «Сайт»). 
              Администрация Сайта обязуется соблюдать конфиденциальность персональных данных 
              и обеспечивать их безопасность при обработке.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2 text-green-600" />
              Какие данные мы собираем
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {dataTypes.map((data, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-semibold mb-2">{data.type}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Что собираем:</span>
                      <p>{data.description}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Для чего:</span>
                      <p>{data.purpose}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Срок хранения:</span>
                      <p>{data.retention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="w-6 h-6 mr-2 text-purple-600" />
              Ваши права
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              В соответствии с Федеральным законом «О персональных данных» вы имеете право:
            </p>
            <ul className="space-y-2">
              {rights.map((right, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              Для реализации ваших прав обращайтесь по email: privacy@honey-shop.ru
            </p>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-6 h-6 mr-2 text-red-600" />
              Безопасность данных
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Мы применяем современные технические и организационные меры для защиты ваших данных:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center">
                  <Lock className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm">{measure}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-6 h-6 mr-2 text-orange-600" />
              Использование cookies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Наш сайт использует файлы cookies для улучшения пользовательского опыта:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span className="font-medium">Необходимые cookies</span>
                  <p className="text-sm text-gray-600">Обеспечивают работу корзины и авторизации</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span className="font-medium">Аналитические cookies</span>
                  <p className="text-sm text-gray-600">Помогают улучшать сайт (Яндекс.Метрика)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <span className="font-medium">Маркетинговые cookies</span>
                  <p className="text-sm text-gray-600">Для показа релевантной рекламы</p>
                </div>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Вы можете отключить cookies в настройках браузера, но это может ограничить функциональность сайта.
            </p>
          </CardContent>
        </Card>

        {/* Third Parties */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Передача данных третьим лицам</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Мы можем передавать ваши данные только в следующих случаях:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <span>Курьерским службам для доставки заказов</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <span>Платежным системам для обработки платежей</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <span>По требованию государственных органов</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                <span>С вашего письменного согласия</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Контакты по вопросам конфиденциальности</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2 text-gray-500" />
                <span>Email: privacy@honey-shop.ru</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                <span>Телефон: +7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start">
                <FileText className="w-4 h-4 mr-2 text-gray-500 mt-1" />
                <span>Почтовый адрес: 123456, Москва, ул. Пчелиная, д. 15</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;