import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Gift, CreditCard, Mail, Download, Heart } from 'lucide-react';

const GiftCards: React.FC = () => {
  const [giftCardData, setGiftCardData] = useState({
    amount: '',
    customAmount: '',
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
    deliveryMethod: 'email',
    design: 'classic'
  });

  const predefinedAmounts = [1000, 2000, 3000, 5000];
  const designs = [
    { id: 'classic', name: 'Классический', preview: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg' },
    { id: 'honey', name: 'Медовый', preview: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg' },
    { id: 'flowers', name: 'Цветочный', preview: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg' },
    { id: 'bees', name: 'Пчелиный', preview: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Gift card order:', giftCardData);
  };

  const selectedAmount = giftCardData.amount === 'custom' 
    ? parseInt(giftCardData.customAmount) || 0 
    : parseInt(giftCardData.amount) || 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Подарочные сертификаты</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подарите здоровье и сладость! Подарочные сертификаты на натуральный мед — 
            идеальный подарок для близких.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Card Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-6 h-6 mr-2 text-amber-600" />
                  Оформить подарочный сертификат
                </CardTitle>
                <CardDescription>
                  Заполните форму для создания персонального подарочного сертификата
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold">Сумма сертификата</Label>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={giftCardData.amount === amount.toString() ? "default" : "outline"}
                          onClick={() => setGiftCardData({...giftCardData, amount: amount.toString()})}
                        >
                          {amount.toLocaleString()}₽
                        </Button>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Button
                        type="button"
                        variant={giftCardData.amount === 'custom' ? "default" : "outline"}
                        onClick={() => setGiftCardData({...giftCardData, amount: 'custom'})}
                        className="w-full"
                      >
                        Другая сумма
                      </Button>
                      {giftCardData.amount === 'custom' && (
                        <Input
                          type="number"
                          placeholder="Введите сумму"
                          value={giftCardData.customAmount}
                          onChange={(e) => setGiftCardData({...giftCardData, customAmount: e.target.value})}
                          className="mt-2"
                          min="500"
                          max="50000"
                        />
                      )}
                    </div>
                  </div>

                  {/* Design Selection */}
                  <div>
                    <Label className="text-base font-semibold">Дизайн сертификата</Label>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {designs.map((design) => (
                        <div
                          key={design.id}
                          className={`border-2 rounded-lg p-2 cursor-pointer transition-all ${
                            giftCardData.design === design.id 
                              ? 'border-amber-500 bg-amber-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setGiftCardData({...giftCardData, design: design.id})}
                        >
                          <img 
                            src={design.preview} 
                            alt={design.name}
                            className="w-full h-20 object-cover rounded mb-2"
                          />
                          <p className="text-sm font-medium text-center">{design.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recipient Info */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Информация о получателе</Label>
                    <div>
                      <Label htmlFor="recipientName">Имя получателя</Label>
                      <Input
                        id="recipientName"
                        value={giftCardData.recipientName}
                        onChange={(e) => setGiftCardData({...giftCardData, recipientName: e.target.value})}
                        placeholder="Как обращаться к получателю"
                      />
                    </div>
                    <div>
                      <Label htmlFor="recipientEmail">Email получателя</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={giftCardData.recipientEmail}
                        onChange={(e) => setGiftCardData({...giftCardData, recipientEmail: e.target.value})}
                        placeholder="Куда отправить сертификат"
                      />
                    </div>
                  </div>

                  {/* Sender Info */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Информация об отправителе</Label>
                    <div>
                      <Label htmlFor="senderName">Ваше имя</Label>
                      <Input
                        id="senderName"
                        value={giftCardData.senderName}
                        onChange={(e) => setGiftCardData({...giftCardData, senderName: e.target.value})}
                        placeholder="От кого подарок"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Поздравительное сообщение</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={giftCardData.message}
                        onChange={(e) => setGiftCardData({...giftCardData, message: e.target.value})}
                        placeholder="Напишите поздравление или пожелание"
                      />
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div>
                    <Label className="text-base font-semibold">Способ доставки</Label>
                    <RadioGroup 
                      value={giftCardData.deliveryMethod} 
                      onValueChange={(value) => setGiftCardData({...giftCardData, deliveryMethod: value})}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email" className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Отправить на email (бесплатно)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="print" id="print" />
                        <Label htmlFor="print" className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Скачать для печати
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Оформить сертификат на {selectedAmount.toLocaleString()}₽
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Info */}
          <div className="space-y-6">
            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Предварительный просмотр</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg text-center">
                  <div className="mb-4">
                    <Gift className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">Подарочный сертификат</h3>
                    <p className="text-sm text-gray-600">МедоДом</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded mb-4">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      {selectedAmount > 0 ? `${selectedAmount.toLocaleString()}₽` : '0₽'}
                    </div>
                    <p className="text-sm text-gray-600">Номинал сертификата</p>
                  </div>
                  
                  {giftCardData.recipientName && (
                    <p className="text-sm mb-2">Для: {giftCardData.recipientName}</p>
                  )}
                  {giftCardData.senderName && (
                    <p className="text-sm mb-2">От: {giftCardData.senderName}</p>
                  )}
                  {giftCardData.message && (
                    <p className="text-sm italic">"{giftCardData.message}"</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Преимущества подарочных сертификатов</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Идеальный подарок</p>
                      <p className="text-sm text-gray-600">Подходит для любого случая</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CreditCard className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Удобство использования</p>
                      <p className="text-sm text-gray-600">Легко активировать и использовать</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Gift className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Персонализация</p>
                      <p className="text-sm text-gray-600">Добавьте личное сообщение</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Мгновенная доставка</p>
                      <p className="text-sm text-gray-600">Отправка на email за секунды</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Условия использования</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Срок действия сертификата: 1 год</li>
                  <li>• Можно использовать частями</li>
                  <li>• Не подлежит возврату</li>
                  <li>• Действует на всю продукцию</li>
                  <li>• Можно совмещать с акциями</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Gift Sets */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Популярные подарочные наборы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Набор "Здоровье"</h3>
                <p className="text-gray-600 mb-4">Мед с прополисом + липовый мед</p>
                <div className="text-2xl font-bold text-amber-600 mb-4">2500₽</div>
                <Button className="w-full">Купить набор</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Набор "Гурман"</h3>
                <p className="text-gray-600 mb-4">3 сорта премиального меда</p>
                <div className="text-2xl font-bold text-amber-600 mb-4">3200₽</div>
                <Button className="w-full">Купить набор</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Набор "Семейный"</h3>
                <p className="text-gray-600 mb-4">Большие банки для всей семьи</p>
                <div className="text-2xl font-bold text-amber-600 mb-4">4500₽</div>
                <Button className="w-full">Купить набор</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GiftCards;