import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Package, Info, Phone, FileText, Gift, Users, Award } from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      category: 'Основные страницы',
      icon: Home,
      pages: [
        { name: 'Главная', url: '/', description: 'Главная страница сайта' },
        { name: 'Каталог', url: '/catalog', description: 'Все товары с фильтрами' },
        { name: 'О нас', url: '/about', description: 'История и команда компании' },
        { name: 'Контакты', url: '/contacts', description: 'Контактная информация' }
      ]
    },
    {
      category: 'Продукция',
      icon: Package,
      pages: [
        { name: 'Виды меда', url: '/honey-types', description: 'Описание всех сортов меда' },
        { name: 'Польза меда', url: '/health-benefits', description: 'Лечебные свойства меда' },
        { name: 'Наши пасечники', url: '/beekeepers', description: 'Информация о производителях' },
        { name: 'Сертификаты', url: '/certificates', description: 'Документы качества' }
      ]
    },
    {
      category: 'Покупателям',
      icon: Users,
      pages: [
        { name: 'Корзина', url: '/cart', description: 'Товары в корзине' },
        { name: 'Оформление заказа', url: '/checkout', description: 'Процесс покупки' },
        { name: 'Отследить заказ', url: '/track-order', description: 'Статус доставки' },
        { name: 'Личный кабинет', url: '/profile', description: 'Управление аккаунтом' }
      ]
    },
    {
      category: 'Сервисы',
      icon: Gift,
      pages: [
        { name: 'Доставка и оплата', url: '/delivery', description: 'Условия доставки' },
        { name: 'Способы оплаты', url: '/payment', description: 'Варианты оплаты' },
        { name: 'Возврат товара', url: '/returns', description: 'Процедура возврата' },
        { name: 'Подарочные сертификаты', url: '/gift-cards', description: 'Покупка сертификатов' }
      ]
    },
    {
      category: 'Дополнительно',
      icon: Info,
      pages: [
        { name: 'Рецепты', url: '/recipes', description: 'Рецепты с медом' },
        { name: 'Блог', url: '/blog', description: 'Статьи о меде' },
        { name: 'Отзывы', url: '/reviews', description: 'Отзывы покупателей' },
        { name: 'FAQ', url: '/faq', description: 'Часто задаваемые вопросы' }
      ]
    },
    {
      category: 'Бизнес',
      icon: Award,
      pages: [
        { name: 'Оптовые продажи', url: '/wholesale', description: 'Условия для оптовиков' },
        { name: 'Подписка', url: '/subscription', description: 'Регулярная доставка' },
        { name: 'Консультация', url: '/consultation', description: 'Помощь специалистов' },
        { name: 'Акции', url: '/promotions', description: 'Текущие предложения' }
      ]
    },
    {
      category: 'Правовая информация',
      icon: FileText,
      pages: [
        { name: 'Условия использования', url: '/terms', description: 'Правила использования сайта' },
        { name: 'Политика конфиденциальности', url: '/privacy', description: 'Обработка персональных данных' },
        { name: 'Карта сайта', url: '/sitemap', description: 'Структура сайта' }
      ]
    },
    {
      category: 'Инструменты',
      icon: Package,
      pages: [
        { name: 'Поиск', url: '/search', description: 'Поиск по сайту' },
        { name: 'Сравнение', url: '/comparison', description: 'Сравнение товаров' },
        { name: 'Список желаний', url: '/wishlist', description: 'Избранные товары' }
      ]
    }
  ];

  const totalPages = siteStructure.reduce((sum, category) => sum + category.pages.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Карта сайта</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полная структура нашего сайта. Найдите нужную информацию быстро и легко.
          </p>
          <div className="mt-8">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
              {totalPages} страниц
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Site Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="w-6 h-6 mr-2 text-amber-600" />
                  {section.category}
                </CardTitle>
                <CardDescription>
                  {section.pages.length} страниц в разделе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        to={page.url}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-amber-700 hover:text-amber-800">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {page.description}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {page.url}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Navigation */}
        <section className="mt-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-center">Быстрая навигация</CardTitle>
              <CardDescription className="text-center">
                Самые популярные разделы сайта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col">
                  <Link to="/catalog">
                    <Package className="w-6 h-6 mb-2" />
                    Каталог
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col">
                  <Link to="/cart">
                    <Package className="w-6 h-6 mb-2" />
                    Корзина
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col">
                  <Link to="/delivery">
                    <Package className="w-6 h-6 mb-2" />
                    Доставка
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex flex-col">
                  <Link to="/contacts">
                    <Phone className="w-6 h-6 mb-2" />
                    Контакты
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Search Tip */}
        <section className="mt-16 text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Не нашли нужную страницу?</h3>
              <p className="text-gray-600 mb-6">
                Воспользуйтесь поиском по сайту или свяжитесь с нами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/search">Поиск по сайту</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Sitemap;