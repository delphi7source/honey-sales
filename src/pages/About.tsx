import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Leaf, Heart, Clock, MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">О компании МедоДом</h1>
            <p className="text-xl text-gray-600 mb-8">
              Более 15 лет мы занимаемся производством и продажей натурального меда высшего качества. 
              Наша миссия — донести до каждого дома целебную силу природы.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <p className="text-gray-600">пасек партнеров</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">10000+</div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-4">
                Компания МедоДом была основана в 2009 году семьей потомственных пчеловодов. 
                Начав с небольшой пасеки в Тульской области, мы постепенно расширили 
                производство и сегодня работаем с лучшими пасечниками по всей России.
              </p>
              <p className="text-gray-600 mb-6">
                Наш принцип — качество превыше всего. Каждая партия меда проходит 
                строгий контроль качества и лабораторные исследования. Мы гордимся тем, 
                что можем предложить нашим клиентам только натуральный, экологически 
                чистый продукт.
              </p>
              <Button size="lg">Связаться с нами</Button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg" 
                alt="Наша пасека" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Строгий контроль на всех этапах производства и сертификация продукции
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Экология</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Пасеки расположены в экологически чистых районах вдали от промышленности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Забота</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Индивидуальный подход к каждому клиенту и забота о здоровье покупателей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Традиции</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Сохранение традиций русского пчеловодства и передача опыта поколений
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  alt="Иван Петров" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Иван Петров</h3>
                <p className="text-amber-600 mb-2">Основатель и главный пчеловод</p>
                <p className="text-gray-600 text-sm">
                  30 лет опыта в пчеловодстве. Потомственный пасечник в третьем поколении.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  alt="Мария Иванова" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Мария Иванова</h3>
                <p className="text-amber-600 mb-2">Технолог производства</p>
                <p className="text-gray-600 text-sm">
                  Кандидат биологических наук, специалист по контролю качества меда.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                  alt="Алексей Сидоров" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Алексей Сидоров</h3>
                <p className="text-amber-600 mb-2">Менеджер по продажам</p>
                <p className="text-gray-600 text-sm">
                  Эксперт по подбору меда, поможет выбрать идеальный продукт для вас.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и награды</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((cert) => (
              <Card key={cert} className="text-center">
                <CardContent className="p-6">
                  <Award className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Сертификат качества</h3>
                  <p className="text-sm text-gray-600">ГОСТ Р 54644-2011</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@honey-shop.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p>Москва, ул. Пчелиная, 15</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;