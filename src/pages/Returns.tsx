import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, FileText, Camera, Clock, CheckCircle, AlertCircle, Phone } from 'lucide-react';

const Returns: React.FC = () => {
  const [returnData, setReturnData] = useState({
    orderNumber: '',
    reason: '',
    description: '',
    refundMethod: 'original',
    photos: [] as File[]
  });

  const returnReasons = [
    { id: 'defective', label: 'Товар поврежден/испорчен' },
    { id: 'wrong-item', label: 'Прислали не тот товар' },
    { id: 'not-as-described', label: 'Товар не соответствует описанию' },
    { id: 'quality', label: 'Низкое качество' },
    { id: 'allergic', label: 'Аллергическая реакция' },
    { id: 'other', label: 'Другая причина' }
  ];

  const returnProcess = [
    {
      step: 1,
      title: 'Подача заявки',
      description: 'Заполните форму возврата',
      timeframe: '1 день'
    },
    {
      step: 2,
      title: 'Рассмотрение',
      description: 'Проверяем основания для возврата',
      timeframe: '1-2 дня'
    },
    {
      step: 3,
      title: 'Забор товара',
      description: 'Курьер заберет товар (при необходимости)',
      timeframe: '1-3 дня'
    },
    {
      step: 4,
      title: 'Возврат средств',
      description: 'Деньги возвращаются на карту',
      timeframe: '3-7 дней'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Return request:', returnData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setReturnData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 5) // Максимум 5 фото
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Возврат товара</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы гарантируем качество нашей продукции. Если товар вас не устроил, 
            мы поможем решить проблему.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Return Policy */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Условия возврата</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">Можно вернуть:</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Поврежденный товар
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Неправильный товар
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Товар с браком
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      В течение 14 дней
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-800">Нельзя вернуть:</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                      Вскрытую упаковку (без брака)
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                      Товар с истекшим сроком
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                      Частично использованный
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                      После 14 дней
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Return Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Заявка на возврат
                </CardTitle>
                <CardDescription>
                  Заполните форму для оформления возврата товара
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="orderNumber">Номер заказа *</Label>
                    <Input
                      id="orderNumber"
                      value={returnData.orderNumber}
                      onChange={(e) => setReturnData({...returnData, orderNumber: e.target.value})}
                      placeholder="ORD-2024-001"
                      required
                    />
                  </div>

                  <div>
                    <Label>Причина возврата *</Label>
                    <RadioGroup 
                      value={returnData.reason} 
                      onValueChange={(value) => setReturnData({...returnData, reason: value})}
                      className="mt-3 space-y-2"
                    >
                      {returnReasons.map((reason) => (
                        <div key={reason.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={reason.id} id={reason.id} />
                          <Label htmlFor={reason.id} className="text-sm">
                            {reason.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="description">Подробное описание *</Label>
                    <Textarea
                      id="description"
                      rows={4}
                      value={returnData.description}
                      onChange={(e) => setReturnData({...returnData, description: e.target.value})}
                      placeholder="Опишите проблему подробнее"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="photos">Фотографии товара</Label>
                    <div className="mt-2">
                      <input
                        type="file"
                        id="photos"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('photos')?.click()}
                        className="w-full"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Добавить фото (до 5 штук)
                      </Button>
                      {returnData.photos.length > 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Загружено фото: {returnData.photos.length}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Способ возврата средств</Label>
                    <RadioGroup 
                      value={returnData.refundMethod} 
                      onValueChange={(value) => setReturnData({...returnData, refundMethod: value})}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="original" id="original" />
                        <Label htmlFor="original" className="text-sm">
                          На исходный способ оплаты
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="text-sm">
                          На банковскую карту
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="store-credit" id="store-credit" />
                        <Label htmlFor="store-credit" className="text-sm">
                          Бонусами на счет (+10% к сумме)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full">
                    Подать заявку на возврат
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Process and Info */}
          <div className="space-y-6">
            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle>Процесс возврата</CardTitle>
                <CardDescription>Как происходит возврат товара</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returnProcess.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {step.timeframe}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Важная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                    <span>Заявки рассматриваются в течение 24 часов</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Сохраните упаковку и документы</span>
                  </li>
                  <li className="flex items-start">
                    <Camera className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                    <span>Фото помогают быстрее решить вопрос</span>
                  </li>
                  <li className="flex items-start">
                    <RotateCcw className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Возврат средств в течение 7 рабочих дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Если у вас есть вопросы по возврату, свяжитесь с нашей службой поддержки
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    support@honey-shop.ru
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Частые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm">Сколько времени на возврат?</p>
                    <p className="text-sm text-gray-600">14 дней с момента получения товара</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Кто оплачивает доставку при возврате?</p>
                    <p className="text-sm text-gray-600">При браке товара — мы, в остальных случаях — покупатель</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Можно ли вернуть часть заказа?</p>
                    <p className="text-sm text-gray-600">Да, можно вернуть отдельные позиции</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;