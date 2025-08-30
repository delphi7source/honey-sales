import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Plus, X, ShoppingCart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Comparison: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const { dispatch } = useCart();

  const handleProductSelect = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 4) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const compareProducts = products.filter(p => selectedProducts.includes(p.id));

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const characteristics = [
    { key: 'price', label: 'Цена', format: (value: number) => `${value}₽` },
    { key: 'weight', label: 'Вес', format: (value: string) => value },
    { key: 'rating', label: 'Рейтинг', format: (value: number) => `${value}/5` },
    { key: 'reviews', label: 'Отзывы', format: (value: number) => `${value} отзывов` },
    { key: 'category', label: 'Категория', format: (value: string) => value }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Сравнение товаров</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Сравните характеристики разных сортов меда, чтобы выбрать идеальный для вас
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Product Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Выберите товары для сравнения (до 4)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`cursor-pointer transition-all ${
                  selectedProducts.includes(product.id) 
                    ? 'ring-2 ring-amber-500 bg-amber-50' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => handleProductSelect(product.id)}
              >
                <CardContent className="p-4">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <div className="absolute top-2 right-2">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        disabled={!selectedProducts.includes(product.id) && selectedProducts.length >= 4}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-amber-600 font-bold">{product.price}₽</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        {compareProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Сравнение выбранных товаров</h2>
              <Button 
                variant="outline" 
                onClick={() => setSelectedProducts([])}
              >
                Очистить все
              </Button>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 w-48">
                          Характеристики
                        </th>
                        {compareProducts.map((product) => (
                          <th key={product.id} className="px-6 py-4 text-center min-w-[200px]">
                            <div className="relative">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute -top-2 -right-2"
                                onClick={() => handleProductSelect(product.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded mx-auto mb-2"
                              />
                              <h3 className="font-semibold text-sm">{product.name}</h3>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {characteristics.map((char) => (
                        <tr key={char.key} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {char.label}
                          </td>
                          {compareProducts.map((product) => (
                            <td key={product.id} className="px-6 py-4 text-center text-sm">
                              {char.format((product as any)[char.key])}
                            </td>
                          ))}
                        </tr>
                      ))}
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Рейтинг</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="px-6 py-4 text-center">
                            <div className="flex justify-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Наличие</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="px-6 py-4 text-center">
                            <Badge className={product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {product.inStock ? 'В наличии' : 'Нет в наличии'}
                            </Badge>
                          </td>
                        ))}
                      </tr>
                      
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Действия</td>
                        {compareProducts.map((product) => (
                          <td key={product.id} className="px-6 py-4 text-center">
                            <div className="space-y-2">
                              <Button 
                                size="sm" 
                                className="w-full"
                                onClick={() => handleAddToCart(product)}
                                disabled={!product.inStock}
                              >
                                <ShoppingCart className="w-4 h-4 mr-1" />
                                В корзину
                              </Button>
                              <Button variant="outline" size="sm" className="w-full">
                                Подробнее
                              </Button>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Empty State */}
        {compareProducts.length === 0 && (
          <section className="text-center py-12">
            <Plus className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Выберите товары для сравнения</h3>
            <p className="text-gray-600 mb-8">
              Отметьте до 4 товаров выше, чтобы сравнить их характеристики
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Comparison;