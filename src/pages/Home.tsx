import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, Award, Heart, Leaf, Users, Clock, Gift, Phone } from 'lucide-react';
import { products } from '@/data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Натуральный мед
                <span className="text-amber-600 block">высшего качества</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Прямо с пасеки к вашему столу. Более 15 лет опыта в производстве 
                экологически чистого меда от лучших пчеловодов России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/catalog">Смотреть каталог</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg" 
                alt="Натуральный мед" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-semibold">100% натуральный</p>
                    <p className="text-sm text-gray-600">Сертифицированный продукт</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все наши продукты проходят строгий контроль качества и имеют сертификаты
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставляем по всей России. Бесплатная доставка от 2000 рублей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <CardTitle>Экологично</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Наши пасеки расположены в экологически чистых районах России
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <CardTitle>С любовью</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Каждая баночка меда создана с заботой о вашем здоровье
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
            <p className="text-gray-600">Самые любимые сорта меда наших покупателей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-500">
                    Хит продаж
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    {product.name}
                    <span className="text-amber-600 font-bold">{product.price}₽</span>
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <Link to={`/product/${product.id}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/catalog">Смотреть все товары</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Benefits */}
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-red-500 mb-2" />
                <CardTitle>Польза для здоровья</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Мед укрепляет иммунитет, улучшает пищеварение и обладает 
                  антибактериальными свойствами. Натуральный источник энергии.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/health-benefits">Узнать больше →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Honey Types */}
            <Card>
              <CardHeader>
                <Leaf className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>Виды меда</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Липовый, гречишный, акациевый, подсолнечный - каждый сорт 
                  имеет уникальный вкус и полезные свойства.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/honey-types">Изучить сорта →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recipes */}
            <Card>
              <CardHeader>
                <Gift className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle>Рецепты с медом</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Откройте для себя удивительные рецепты выпечки, напитков 
                  и десертов с использованием натурального меда.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/recipes">Смотреть рецепты →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quality Guarantee */}
            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-amber-500 mb-2" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все наши продукты сертифицированы и проходят лабораторные 
                  исследования. Гарантируем 100% натуральность.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/certificates">Сертификаты →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Beekeeping */}
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle>Наши пасечники</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работаем с опытными пчеловодами из разных регионов России. 
                  Многолетний опыт и традиции пчеловодства.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/beekeepers">О пасечниках →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fast Delivery */}
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставляем по всей России от 1 дня. Несколько способов 
                  доставки на выбор. Бережная упаковка.
                </CardDescription>
                <Button variant="link" className="p-0 mt-2" asChild>
                  <Link to="/delivery">Условия доставки →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Есть вопросы?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши специалисты помогут выбрать идеальный мед для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">
                <Phone className="w-4 h-4 mr-2" />
                Связаться с нами
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600" asChild>
              <Link to="/consultation">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;