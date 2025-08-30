import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, TrendingDown, Truck, Clock, Users, Calculator, FileText, Phone } from 'lucide-react';

const Wholesale: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    volume: '',
    message: ''
  });

  const priceRanges = [
    { volume: '50-100 кг', discount: '5%', price: 'от 650₽/кг' },
    { volume: '100-500 кг', discount: '10%', price: 'от 600₽/кг' },
    { volume: '500-1000 кг', discount: '15%', price: 'от 550₽/кг' },
    { volume: '1000+ кг', discount: '20%', price: 'от 500₽/кг' }
  ];

  const advantages = [
    {
      icon: TrendingDown,
      title: 'Оптовые цены',
      description: 'Скидки до 20% при больших объемах'
    },
    {
      icon: Truck,
      title: 'Бесплатная доставка',
      description: 'При заказе от 100 кг по Москве и МО'
    },
    {
      icon: Clock,
      title: 'Быстрая отгрузка',
      description: 'Отгружаем заказы в течение 1-2 дней'
    },
    {
      icon: FileText,
      title: 'Полный пакет документов',
      description: 'Все необходимые сертификаты и накладные'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wholesale form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Оптовые продажи</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выгодные условия для магазинов, кафе, ресторанов и других предприятий. 
            Качественный мед по оптовым ценам.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Преимущества работы с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <advantage.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Price Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Оптовые цены</h2>
          <Card>
            <CardHeader>
              <CardTitle>Прайс-лист для оптовых покупателей</CardTitle>
              <CardDescription>
                Цены указаны за килограмм меда. Действуют дополнительные скидки для постоянных клиентов.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Объем заказа</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Скидка</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Цена за кг</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Экономия</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {priceRanges.map((range, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{range.volume}</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-100 text-green-800">{range.discount}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-semibold">{range.price}</td>
                        <td className="px-6 py-4 text-sm text-green-600">
                          до {parseInt(range.discount) * 10}₽/кг
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="w-6 h-6 mr-2 text-amber-600" />
                  Заявка на оптовое сотрудничество
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для обсуждения условий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactPerson">Контактное лицо *</Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Тип бизнеса</Label>
                      <Select value={formData.businessType} onValueChange={(value) => setFormData({...formData, businessType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Розничный магазин</SelectItem>
                          <SelectItem value="restaurant">Ресторан/Кафе</SelectItem>
                          <SelectItem value="distributor">Дистрибьютор</SelectItem>
                          <SelectItem value="manufacturer">Производство</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="volume">Планируемый объем (кг/месяц)</Label>
                      <Input
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о ваших потребностях, предпочтениях по сортам меда и другие пожелания"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits and Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Условия сотрудничества</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                    <span>Минимальный заказ от 50 кг</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                    <span>Отсрочка платежа до 30 дней для постоянных клиентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                    <span>Индивидуальные условия для крупных заказов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                    <span>Помощь в продвижении продукции</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                    <span>Обучение персонала</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Калькулятор оптовой цены</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Объем заказа (кг)</Label>
                    <Input type="number" placeholder="Введите количество" />
                  </div>
                  <div>
                    <Label>Сорт меда</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сорт" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linden">Липовый</SelectItem>
                        <SelectItem value="buckwheat">Гречишный</SelectItem>
                        <SelectItem value="acacia">Акациевый</SelectItem>
                        <SelectItem value="sunflower">Подсолнечный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Документооборот</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Договор поставки</li>
                  <li>• Счета и накладные</li>
                  <li>• Сертификаты качества</li>
                  <li>• Декларации соответствия</li>
                  <li>• Ветеринарные справки</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;