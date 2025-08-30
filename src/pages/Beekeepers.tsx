import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Users, Calendar, Phone, Star } from 'lucide-react';

const Beekeepers: React.FC = () => {
  const beekeepers = [
    {
      id: '1',
      name: 'Иван Петрович Медведев',
      region: 'Тульская область',
      experience: 25,
      speciality: 'Липовый и гречишный мед',
      description: 'Потомственный пчеловод в третьем поколении. Специализируется на производстве премиального липового меда.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      hives: 150,
      rating: 4.9,
      awards: ['Лучший пчеловод области 2023', 'Золотая медаль выставки']
    },
    {
      id: '2',
      name: 'Анна Сергеевна Пчелкина',
      region: 'Алтайский край',
      experience: 18,
      speciality: 'Горный мед и разнотравье',
      description: 'Эксперт по горному меду. Ее пасеки расположены на высоте 1200 метров над уровнем моря.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      hives: 200,
      rating: 4.8,
      awards: ['Эко-сертификат 2024', 'Диплом качества']
    },
    {
      id: '3',
      name: 'Михаил Александрович Нектаров',
      region: 'Краснодарский край',
      experience: 30,
      speciality: 'Акациевый и подсолнечный мед',
      description: 'Один из самых опытных пчеловодов юга России. Поставляет мед для нашей компании уже 10 лет.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      hives: 300,
      rating: 5.0,
      awards: ['Мастер пчеловодства', 'Почетный пасечник России']
    }
  ];

  const requirements = [
    'Опыт пчеловодства не менее 5 лет',
    'Экологически чистое расположение пасек',
    'Соблюдение технологий производства',
    'Регулярные лабораторные анализы',
    'Сертификация продукции',
    'Прозрачность процесса производства'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Наши пасечники</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы работаем только с проверенными пчеловодами, которые разделяют 
            наши принципы качества и заботы о природе.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <p className="text-gray-600">пасечников-партнеров</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <p className="text-gray-600">регионов России</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-600">лет среднего опыта</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                <p className="text-gray-600">пчелиных семей</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Beekeepers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Наши лучшие пасечники</h2>
          <div className="space-y-8">
            {beekeepers.map((beekeeper) => (
              <Card key={beekeeper.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <img 
                      src={beekeeper.image} 
                      alt={beekeeper.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{beekeeper.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{beekeeper.region}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{beekeeper.experience} лет опыта</span>
                          </div>
                        </div>
                        <Badge className="bg-amber-100 text-amber-800 mb-4">
                          {beekeeper.speciality}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{beekeeper.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{beekeeper.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Количество ульев:</span>
                        <div className="font-semibold">{beekeeper.hives}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Рейтинг:</span>
                        <div className="font-semibold">{beekeeper.rating}/5.0</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 block mb-2">Награды и сертификаты:</span>
                      <div className="flex flex-wrap gap-2">
                        {beekeeper.awards.map((award, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Связаться с пасечником
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Требования к партнерам</h2>
          <Card>
            <CardHeader>
              <CardTitle>Стандарты качества МедоДом</CardTitle>
              <CardDescription>
                Мы тщательно отбираем пасечников, которые соответствуют нашим высоким стандартам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Хотите стать нашим партнером?</h2>
              <p className="text-gray-600 mb-6">
                Если вы пчеловод и производите качественный мед, мы будем рады сотрудничеству
              </p>
              <Button size="lg">Стать партнером</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Beekeepers;