import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Package, Heart, Settings, Bell, CreditCard, MapPin, Phone } from 'lucide-react';

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Анна',
    lastName: 'Петрова',
    email: 'anna.petrova@email.com',
    phone: '+7 (495) 123-45-67',
    birthDate: '1985-03-15'
  });

  const orders = [
    {
      id: 'ORD-001',
      date: new Date('2024-01-15'),
      status: 'delivered',
      total: 2450,
      items: [
        { name: 'Липовый мед 500г', quantity: 2, price: 850 },
        { name: 'Акациевый мед 500г', quantity: 1, price: 1200 }
      ]
    },
    {
      id: 'ORD-002',
      date: new Date('2024-01-10'),
      status: 'processing',
      total: 1850,
      items: [
        { name: 'Мед с прополисом 250г', quantity: 1, price: 1450 },
        { name: 'Подсолнечный мед 500г', quantity: 1, price: 750 }
      ]
    }
  ];

  const favorites = [
    {
      id: '1',
      name: 'Липовый мед',
      price: 850,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'
    },
    {
      id: '3',
      name: 'Акациевый мед',
      price: 1200,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Доставлен';
      case 'processing': return 'Обрабатывается';
      case 'shipped': return 'Отправлен';
      case 'cancelled': return 'Отменен';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-gray-600">Управляйте своими заказами и настройками</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Адреса
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                  <CardDescription>Обновите свои личные данные</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя</Label>
                      <Input
                        id="firstName"
                        value={userInfo.firstName}
                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input
                        id="lastName"
                        value={userInfo.lastName}
                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthDate">Дата рождения</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={userInfo.birthDate}
                      onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                    />
                  </div>
                  
                  <Button>Сохранить изменения</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">12</div>
                    <p className="text-sm text-gray-600">заказов</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">24,500₽</div>
                    <p className="text-sm text-gray-600">общая сумма покупок</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">VIP</div>
                    <p className="text-sm text-gray-600">статус клиента</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
                <CardDescription>Все ваши заказы и их статусы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">Заказ #{order.id}</h3>
                            <p className="text-sm text-gray-600">
                              {order.date.toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(order.status)}>
                              {getStatusText(order.status)}
                            </Badge>
                            <p className="font-semibold mt-1">{order.total.toLocaleString()}₽</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span>{(item.price * item.quantity).toLocaleString()}₽</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Повторить заказ</Button>
                          <Button variant="outline" size="sm">Отследить</Button>
                          <Button variant="outline" size="sm">Скачать чек</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
                <CardDescription>Ваши любимые сорта меда</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-32 object-cover rounded mb-4"
                        />
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <p className="text-amber-600 font-bold mb-4">{product.price}₽</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">В корзину</Button>
                          <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle>Адреса доставки</CardTitle>
                <CardDescription>Управляйте адресами для быстрого оформления заказов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Домашний адрес</p>
                          <p className="text-sm text-gray-600">Москва, ул. Примерная, д. 123, кв. 45</p>
                          <Badge className="mt-2 bg-green-100 text-green-800">Основной</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Изменить</Button>
                          <Button variant="outline" size="sm">Удалить</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Добавить новый адрес
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                  <CardDescription>Настройте, какие уведомления вы хотите получать</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email уведомления</p>
                      <p className="text-sm text-gray-600">О статусе заказа и акциях</p>
                    </div>
                    <Button variant="outline" size="sm">Включено</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS уведомления</p>
                      <p className="text-sm text-gray-600">О доставке заказа</p>
                    </div>
                    <Button variant="outline" size="sm">Включено</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Рекламные рассылки</p>
                      <p className="text-sm text-gray-600">Акции и новинки</p>
                    </div>
                    <Button variant="outline" size="sm">Отключено</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>Настройки безопасности аккаунта</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Изменить пароль
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Двухфакторная аутентификация
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600">
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;