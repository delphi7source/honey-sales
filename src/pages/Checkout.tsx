import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Truck, MapPin, User, Phone, Mail, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Checkout: React.FC = () => {
  const { state } = useCart();
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    // Customer info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Delivery info
    deliveryType: 'courier',
    address: '',
    city: 'Москва',
    postalCode: '',
    apartment: '',
    entrance: '',
    floor: '',
    comment: '',
    
    // Payment info
    paymentMethod: 'card',
    
    // Additional
    newsletter: false,
    terms: false
  });

  const deliveryPrice = state.total >= 2000 ? 0 : 300;
  const totalWithDelivery = state.total + deliveryPrice;

  const handleInputChange = (field: string, value: string | boolean) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', orderData);
    // Здесь будет логика оформления заказа
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
        <p className="text-gray-600 mb-8">Добавьте товары в корзину для оформления заказа</p>
        <Button>Перейти к покупкам</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNum ? 'bg-amber-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNum ? 'bg-amber-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-16 mt-2">
            <span className={step >= 1 ? 'text-amber-600 font-medium' : 'text-gray-500'}>
              Контакты
            </span>
            <span className={step >= 2 ? 'text-amber-600 font-medium' : 'text-gray-500'}>
              Доставка
            </span>
            <span className={step >= 3 ? 'text-amber-600 font-medium' : 'text-gray-500'}>
              Оплата
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Customer Information */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Контактная информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input
                          id="firstName"
                          value={orderData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input
                          id="lastName"
                          value={orderData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={orderData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={orderData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter"
                        checked={orderData.newsletter}
                        onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Подписаться на новости и акции
                      </Label>
                    </div>
                    
                    <Button 
                      type="button" 
                      className="w-full"
                      onClick={() => setStep(2)}
                    >
                      Продолжить
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Delivery */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="w-5 h-5 mr-2" />
                      Способ доставки
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup 
                      value={orderData.deliveryType} 
                      onValueChange={(value) => handleInputChange('deliveryType', value)}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="courier" id="courier" />
                        <Label htmlFor="courier" className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Курьерская доставка</p>
                              <p className="text-sm text-gray-600">1-2 дня</p>
                            </div>
                            <span className="font-semibold">
                              {deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice}₽`}
                            </span>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Самовывоз</p>
                              <p className="text-sm text-gray-600">Сегодня</p>
                            </div>
                            <span className="font-semibold">Бесплатно</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {orderData.deliveryType === 'courier' && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="city">Город *</Label>
                          <Select value={orderData.city} onValueChange={(value) => handleInputChange('city', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Москва">Москва</SelectItem>
                              <SelectItem value="СПб">Санкт-Петербург</SelectItem>
                              <SelectItem value="Другой">Другой город</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Адрес *</Label>
                          <Input
                            id="address"
                            value={orderData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Улица, дом"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="apartment">Квартира</Label>
                            <Input
                              id="apartment"
                              value={orderData.apartment}
                              onChange={(e) => handleInputChange('apartment', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="entrance">Подъезд</Label>
                            <Input
                              id="entrance"
                              value={orderData.entrance}
                              onChange={(e) => handleInputChange('entrance', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="floor">Этаж</Label>
                            <Input
                              id="floor"
                              value={orderData.floor}
                              onChange={(e) => handleInputChange('floor', e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="comment">Комментарий к заказу</Label>
                          <Textarea
                            id="comment"
                            value={orderData.comment}
                            onChange={(e) => handleInputChange('comment', e.target.value)}
                            placeholder="Дополнительная информация для курьера"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex space-x-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Назад
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setStep(3)}
                        className="flex-1"
                      >
                        Продолжить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Способ оплаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup 
                      value={orderData.paymentMethod} 
                      onValueChange={(value) => handleInputChange('paymentMethod', value)}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1">
                          <div className="flex items-center">
                            <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                            <div>
                              <p className="font-medium">Банковской картой</p>
                              <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1">
                          <div className="flex items-center">
                            <Package className="w-5 h-5 mr-3 text-green-600" />
                            <div>
                              <p className="font-medium">При получении</p>
                              <p className="text-sm text-gray-600">Наличными или картой</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms"
                        checked={orderData.terms}
                        onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        Я согласен с <a href="/terms" className="text-amber-600 hover:underline">условиями использования</a> и 
                        <a href="/privacy" className="text-amber-600 hover:underline ml-1">политикой конфиденциальности</a>
                      </Label>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(2)}
                        className="flex-1"
                      >
                        Назад
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1"
                        disabled={!orderData.terms}
                      >
                        Оформить заказ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-3">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.product.name}</p>
                        <p className="text-xs text-gray-600">{item.quantity} × {item.product.price}₽</p>
                      </div>
                      <span className="font-semibold">
                        {(item.product.price * item.quantity).toLocaleString()}₽
                      </span>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товары:</span>
                      <span>{state.total.toLocaleString()}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice}₽`}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span>{totalWithDelivery.toLocaleString()}₽</span>
                    </div>
                  </div>
                  
                  {state.total < 2000 && (
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-amber-800">
                        Добавьте товаров на {(2000 - state.total).toLocaleString()}₽ 
                        для бесплатной доставки!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;