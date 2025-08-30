import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Video, Calendar, Clock, User, Award } from 'lucide-react';

const Consultation: React.FC = () => {
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'honey-selection',
    preferredMethod: 'phone',
    preferredTime: '',
    questions: '',
    experience: '',
    healthConditions: false,
    allergies: ''
  });

  const consultationTypes = [
    {
      id: 'honey-selection',
      name: 'Подбор меда',
      description: 'Поможем выбрать подходящий сорт меда',
      duration: '15-20 мин',
      price: 'Бесплатно'
    },
    {
      id: 'health-benefits',
      name: 'Польза для здоровья',
      description: 'Консультация о лечебных свойствах меда',
      duration: '30-40 мин',
      price: '500₽'
    },
    {
      id: 'beekeeping',
      name: 'Пчеловодство',
      description: 'Советы по разведению пчел и производству меда',
      duration: '45-60 мин',
      price: '1000₽'
    },
    {
      id: 'business',
      name: 'Бизнес-консультация',
      description: 'Помощь в организации медового бизнеса',
      duration: '60-90 мин',
      price: '2000₽'
    }
  ];

  const experts = [
    {
      id: '1',
      name: 'Иван Петрович Медведев',
      title: 'Главный пчеловод',
      experience: '25 лет',
      specialization: 'Производство и качество меда',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.9,
      consultations: 150
    },
    {
      id: '2',
      name: 'Мария Ивановна Нектарова',
      title: 'Врач-апитерапевт',
      experience: '15 лет',
      specialization: 'Лечение продуктами пчеловодства',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.8,
      consultations: 200
    },
    {
      id: '3',
      name: 'Алексей Сергеевич Пчелкин',
      title: 'Бизнес-консультант',
      experience: '12 лет',
      specialization: 'Развитие медового бизнеса',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 4.7,
      consultations: 80
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request:', consultationData);
  };

  const selectedConsultationType = consultationTypes.find(t => t.id === consultationData.consultationType);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Консультация специалиста</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите профессиональную консультацию от наших экспертов по меду, 
            пчеловодству и апитерапии.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Experts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Наши эксперты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <Card key={expert.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{expert.name}</h3>
                  <p className="text-amber-600 mb-2">{expert.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{expert.specialization}</p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1 text-amber-500" />
                      <span>{expert.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                      <span>{expert.consultations}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{expert.rating}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Записаться к эксперту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для уточнения деталей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={consultationData.name}
                          onChange={(e) => setConsultationData({...consultationData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={consultationData.phone}
                          onChange={(e) => setConsultationData({...consultationData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={consultationData.email}
                        onChange={(e) => setConsultationData({...consultationData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <Label className="text-base font-semibold">Тип консультации</Label>
                    <RadioGroup 
                      value={consultationData.consultationType} 
                      onValueChange={(value) => setConsultationData({...consultationData, consultationType: value})}
                      className="mt-3 space-y-3"
                    >
                      {consultationTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{type.name}</p>
                                <p className="text-sm text-gray-600">{type.description}</p>
                                <p className="text-xs text-gray-500">{type.duration}</p>
                              </div>
                              <Badge variant={type.price === 'Бесплатно' ? 'secondary' : 'outline'}>
                                {type.price}
                              </Badge>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Preferred Method */}
                  <div>
                    <Label className="text-base font-semibold">Способ консультации</Label>
                    <RadioGroup 
                      value={consultationData.preferredMethod} 
                      onValueChange={(value) => setConsultationData({...consultationData, preferredMethod: value})}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-method" />
                        <Label htmlFor="phone-method" className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Телефонный звонок
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="video-method" />
                        <Label htmlFor="video-method" className="flex items-center">
                          <Video className="w-4 h-4 mr-2" />
                          Видеозвонок
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="chat" id="chat-method" />
                        <Label htmlFor="chat-method" className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Текстовый чат
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <Label htmlFor="preferredTime">Удобное время</Label>
                    <Select 
                      value={consultationData.preferredTime} 
                      onValueChange={(value) => setConsultationData({...consultationData, preferredTime: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Questions */}
                  <div>
                    <Label htmlFor="questions">Ваши вопросы</Label>
                    <Textarea
                      id="questions"
                      rows={4}
                      value={consultationData.questions}
                      onChange={(e) => setConsultationData({...consultationData, questions: e.target.value})}
                      placeholder="Опишите, что вас интересует"
                    />
                  </div>

                  {/* Health Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="healthConditions"
                        checked={consultationData.healthConditions}
                        onCheckedChange={(checked) => setConsultationData({...consultationData, healthConditions: checked as boolean})}
                      />
                      <Label htmlFor="healthConditions" className="text-sm">
                        У меня есть особенности здоровья или аллергии
                      </Label>
                    </div>
                    
                    {consultationData.healthConditions && (
                      <div>
                        <Label htmlFor="allergies">Укажите подробности</Label>
                        <Textarea
                          id="allergies"
                          rows={2}
                          value={consultationData.allergies}
                          onChange={(e) => setConsultationData({...consultationData, allergies: e.target.value})}
                          placeholder="Аллергии, хронические заболевания и т.д."
                        />
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Записаться на консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info and Benefits */}
          <div className="space-y-6">
            {/* Selected Consultation Info */}
            {selectedConsultationType && (
              <Card>
                <CardHeader>
                  <CardTitle>Выбранная консультация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{selectedConsultationType.name}</h3>
                    <p className="text-gray-600">{selectedConsultationType.description}</p>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Длительность:</span>
                      <span>{selectedConsultationType.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Стоимость:</span>
                      <span className="font-semibold text-amber-600">{selectedConsultationType.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Что вы получите</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <User className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Персональные рекомендации</p>
                      <p className="text-sm text-gray-600">Подбор меда под ваши потребности</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Экспертные знания</p>
                      <p className="text-sm text-gray-600">Опыт профессиональных пчеловодов</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Ответы на все вопросы</p>
                      <p className="text-sm text-gray-600">Подробная консультация</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Удобное время</p>
                      <p className="text-sm text-gray-600">Выберите подходящее время</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm">Сколько длится консультация?</p>
                    <p className="text-sm text-gray-600">От 15 до 90 минут в зависимости от типа</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Можно ли перенести консультацию?</p>
                    <p className="text-sm text-gray-600">Да, за 24 часа до назначенного времени</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Нужна ли предоплата?</p>
                    <p className="text-sm text-gray-600">Только для платных консультаций</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Срочная консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Нужна срочная консультация? Позвоните нам прямо сейчас!
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Онлайн-чат
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;