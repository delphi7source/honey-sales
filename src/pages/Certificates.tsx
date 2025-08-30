import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, FileText, Shield, CheckCircle, Download, Eye } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: '1',
      name: 'Сертификат соответствия ГОСТ',
      number: 'РОСС RU.АГ99.Н00123',
      issueDate: '15.03.2024',
      validUntil: '15.03.2027',
      issuer: 'Ростест-Москва',
      description: 'Подтверждает соответствие меда требованиям ГОСТ Р 54644-2011',
      type: 'quality',
      status: 'active'
    },
    {
      id: '2',
      name: 'Декларация о соответствии',
      number: 'ТС N RU Д-RU.АГ99.В.00456',
      issueDate: '20.02.2024',
      validUntil: '20.02.2027',
      issuer: 'Центр сертификации',
      description: 'Декларация соответствия техническому регламенту Таможенного союза',
      type: 'declaration',
      status: 'active'
    },
    {
      id: '3',
      name: 'Ветеринарное свидетельство',
      number: 'ВС-77-123456',
      issueDate: '01.04.2024',
      validUntil: '01.04.2025',
      issuer: 'Россельхознадзор',
      description: 'Подтверждает ветеринарную безопасность продукции',
      type: 'veterinary',
      status: 'active'
    },
    {
      id: '4',
      name: 'Сертификат ISO 22000',
      number: 'ISO-22000-2024-789',
      issueDate: '10.01.2024',
      validUntil: '10.01.2027',
      issuer: 'SGS Россия',
      description: 'Система менеджмента безопасности пищевых продуктов',
      type: 'iso',
      status: 'active'
    },
    {
      id: '5',
      name: 'Экологический сертификат',
      number: 'ECO-RU-2024-001',
      issueDate: '05.02.2024',
      validUntil: '05.02.2026',
      issuer: 'Экосерт-Русь',
      description: 'Подтверждает экологическую чистоту продукции',
      type: 'eco',
      status: 'active'
    },
    {
      id: '6',
      name: 'Лабораторный анализ',
      number: 'ЛА-2024-0312',
      issueDate: '12.03.2024',
      validUntil: '12.03.2025',
      issuer: 'Центральная лаборатория',
      description: 'Результаты микробиологических и химических исследований',
      type: 'analysis',
      status: 'active'
    }
  ];

  const getCertificateIcon = (type: string) => {
    switch (type) {
      case 'quality': return Award;
      case 'declaration': return FileText;
      case 'veterinary': return Shield;
      case 'iso': return CheckCircle;
      case 'eco': return Shield;
      case 'analysis': return FileText;
      default: return FileText;
    }
  };

  const getCertificateColor = (type: string) => {
    switch (type) {
      case 'quality': return 'bg-blue-100 text-blue-800';
      case 'declaration': return 'bg-green-100 text-green-800';
      case 'veterinary': return 'bg-purple-100 text-purple-800';
      case 'iso': return 'bg-orange-100 text-orange-800';
      case 'eco': return 'bg-emerald-100 text-emerald-800';
      case 'analysis': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Сертификаты и документы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Вся наша продукция имеет необходимые сертификаты качества и безопасности. 
            Мы гарантируем соответствие всем стандартам.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quality Guarantee */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">100% гарантия качества</h2>
              <p className="text-green-700 mb-6">
                Каждая партия меда проходит строгий контроль качества и имеет все необходимые документы
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <p className="text-sm text-green-700">натуральность</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <p className="text-sm text-green-700">добавок</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <p className="text-sm text-green-700">лет опыта</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificates Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Наши сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => {
              const IconComponent = getCertificateIcon(cert.type);
              return (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                      <Badge className={getCertificateColor(cert.type)}>
                        {cert.status === 'active' ? 'Действующий' : 'Истек'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Номер:</span>
                        <span className="font-mono">{cert.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Выдан:</span>
                        <span>{cert.issueDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Действует до:</span>
                        <span>{cert.validUntil}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Орган:</span>
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        Просмотр
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-1" />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quality Control Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Процесс контроля качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Сбор образцов</h3>
                <p className="text-sm text-gray-600">Отбор проб с каждой пасеки</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Лабораторный анализ</h3>
                <p className="text-sm text-gray-600">Проверка состава и чистоты</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Сертификация</h3>
                <p className="text-sm text-gray-600">Получение документов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Допуск к продаже</h3>
                <p className="text-sm text-gray-600">Только после всех проверок</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Laboratory Tests */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Лабораторные исследования</h2>
          <Card>
            <CardHeader>
              <CardTitle>Что мы проверяем</CardTitle>
              <CardDescription>
                Каждая партия меда проходит комплексное исследование в аккредитованной лаборатории
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Физико-химические показатели:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Содержание воды</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Диастазное число</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Содержание сахарозы</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Кислотность</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Содержание пролина</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Микробиологические показатели:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Отсутствие патогенных микроорганизмов</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Дрожжи и плесени</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Общее микробное число</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Отсутствие антибиотиков</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Тяжелые металлы</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Certificates;