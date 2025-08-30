import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, MapPin, CheckCircle, Clock, Search, Phone } from 'lucide-react';

const TrackOrder: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderFound, setOrderFound] = useState(false);

  // Моковые данные заказа
  const orderData = {
    id: 'ORD-2024-001',
    status: 'shipped',
    trackingNumber: 'TRK123456789',
    estimatedDelivery: new Date('2024-01-20'),
    items: [
      { name: 'Липовый мед 500г', quantity: 2, price: 850 },
      { name: 'Акациевый мед 500г', quantity: 1, price: 1200 }
    ],
    total: 2900,
    customer: {
      name: 'Анна Петрова',
      phone: '+7 (495) 123-45-67',
      address: 'Москва, ул. Примерная, д. 123, кв. 45'
    },
    timeline: [
      {
        status: 'confirmed',
        title: 'Заказ подтвержден',
        description: 'Ваш заказ принят в обработку',
        date: new Date('2024-01-15T10:30:00'),
        completed: true
      },
      {
        status: 'processing',
        title: 'Заказ собирается',
        description: 'Товары упаковываются для отправки',
        date: new Date('2024-01-16T14:20:00'),
        completed: true
      },
      {
        status: 'shipped',
        title: 'Заказ отправлен',
        description: 'Передан курьерской службе',
        date: new Date('2024-01-17T09:15:00'),
        completed: true
      },
      {
        status: 'in-transit',
        title: 'В пути',
        description: 'Заказ направляется к вам',
        date: new Date('2024-01-18T16:45:00'),
        completed: true
      },
      {
        status: 'out-for-delivery',
        title: 'Передан курьеру',
        description: 'Курьер доставит заказ сегодня',
        date: new Date('2024-01-19T08:00:00'),
        completed: false
      },
      {
        status: 'delivered',
        title: 'Доставлен',
        description: 'Заказ успешно доставлен',
        date: null,
        completed: false
      }
    ]
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setOrderFound(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'in-transit': return 'bg-orange-100 text-orange-800';
      case 'out-for-delivery': return 'bg-green-100 text-green-800';
      case 'delivered': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Подтвержден';
      case 'processing': return 'Обрабатывается';
      case 'shipped': return 'Отправлен';
      case 'in-transit': return 'В пути';
      case 'out-for-delivery': return 'У курьера';
      case 'delivered': return 'Доставлен';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Отследить заказ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте актуальный статус вашего заказа и примерное время доставки
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {!orderFound ? (
          /* Tracking Form */
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Введите номер заказа</CardTitle>
                <CardDescription className="text-center">
                  Номер заказа указан в email-подтверждении
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrackOrder} className="space-y-4">
                  <div>
                    <Label htmlFor="tracking">Номер заказа или трек-номер</Label>
                    <Input
                      id="tracking"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="ORD-2024-001 или TRK123456789"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Отследить заказ
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Нет номера заказа?</p>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Позвонить в поддержку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Order Details */
          <div className="max-w-4xl mx-auto">
            {/* Order Header */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">Заказ #{orderData.id}</h2>
                    <p className="text-gray-600">Трек-номер: {orderData.trackingNumber}</p>
                  </div>
                  <div className="text-center">
                    <Badge className={getStatusColor(orderData.status)} size="lg">
                      {getStatusText(orderData.status)}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-2">Текущий статус</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Ожидаемая доставка:</p>
                    <p className="font-semibold">{orderData.estimatedDelivery.toLocaleDateString('ru-RU')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>История заказа</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderData.timeline.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.description}
                          </p>
                          {step.date && (
                            <p className="text-xs text-gray-500 mt-1">
                              {step.date.toLocaleString('ru-RU')}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <div className="space-y-6">
                {/* Items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Состав заказа</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {orderData.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{item.name} × {item.quantity}</span>
                          <span>{(item.price * item.quantity).toLocaleString()}₽</span>
                        </div>
                      ))}
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Итого:</span>
                          <span>{orderData.total.toLocaleString()}₽</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Информация о доставке</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <User className="w-4 h-4 text-gray-500 mt-1" />
                        <div>
                          <p className="font-medium">{orderData.customer.name}</p>
                          <p className="text-sm text-gray-600">{orderData.customer.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                        <p className="text-sm">{orderData.customer.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Связаться с курьером
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="w-4 h-4 mr-2" />
                      Изменить адрес
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="w-4 h-4 mr-2" />
                      Повторить заказ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Track Another Order */}
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setOrderFound(false);
                  setTrackingNumber('');
                }}
              >
                Отследить другой заказ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;