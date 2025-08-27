import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
          <Button asChild>
            <Link to="/catalog">Перейти к покупкам</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Корзина</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {state.items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-gray-600">{item.product.weight}</p>
                      <p className="text-amber-600 font-bold">{item.product.price}₽</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-3 py-1 border rounded min-w-[50px] text-center">
                        {item.quantity}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        {(item.product.price * item.quantity).toLocaleString()}₽
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Итого</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары ({state.items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{state.total.toLocaleString()}₽</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>{state.total >= 2000 ? 'Бесплатно' : '300₽'}</span>
                </div>
                
                <hr />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате</span>
                  <span>{(state.total + (state.total >= 2000 ? 0 : 300)).toLocaleString()}₽</span>
                </div>
                
                <Button className="w-full" size="lg" asChild>
                  <Link to="/checkout">Оформить заказ</Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/catalog">Продолжить покупки</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Delivery Info */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="text-sm text-gray-600">
                <p className="mb-2">🚚 Бесплатная доставка от 2000₽</p>
                <p className="mb-2">📦 Доставка 1-3 дня</p>
                <p>🔒 Безопасная оплата</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;