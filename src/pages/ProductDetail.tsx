import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Heart, Share2, Truck, Shield, Award, Plus, Minus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
        <Button asChild>
          <Link to="/catalog">Вернуться к каталогу</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', product });
    }
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-amber-600">Главная</Link></li>
          <li>/</li>
          <li><Link to="/catalog" className="hover:text-amber-600">Каталог</Link></li>
          <li>/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <div className="relative mb-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <Badge className="absolute top-4 right-4 bg-amber-500">
              {product.weight}
            </Badge>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <img 
                key={i}
                src={product.image} 
                alt={`${product.name} ${i + 1}`}
                className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-sm text-gray-600">({product.reviews} отзывов)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold text-amber-600 mb-2">{product.price}₽</div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-medium">Количество:</span>
              <div className="flex items-center border rounded">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
              </Button>
              <Button variant="outline" size="lg">
                Купить в 1 клик
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded">
              <Truck className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Быстрая доставка</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <Shield className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Гарантия качества</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <Award className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-medium">100% натуральный</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="composition">Состав</TabsTrigger>
          <TabsTrigger value="benefits">Польза</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Описание товара</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {product.description} Этот мед собран на экологически чистых пасеках 
                и обладает уникальными вкусовыми качествами. Идеально подходит для 
                ежедневного употребления и использования в кулинарии.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="composition" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Состав и пищевая ценность</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">На 100г продукта:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Калорийность: 328 ккал</li>
                    <li>Углеводы: 82г</li>
                    <li>Белки: 0.4г</li>
                    <li>Жиры: 0г</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Витамины и минералы:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Витамин C</li>
                    <li>Витамины группы B</li>
                    <li>Калий, магний</li>
                    <li>Железо, цинк</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="benefits" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Полезные свойства</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500">•</span>
                  <span>Укрепляет иммунную систему</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500">•</span>
                  <span>Обладает антибактериальными свойствами</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500">•</span>
                  <span>Улучшает пищеварение</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500">•</span>
                  <span>Является природным источником энергии</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Отзывы покупателей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">Анна К.</span>
                    <span className="text-sm text-gray-500">15.01.2024</span>
                  </div>
                  <p className="text-gray-700">
                    Отличный мед! Очень вкусный и ароматный. Заказываю уже не первый раз.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="font-medium">Михаил П.</span>
                    <span className="text-sm text-gray-500">10.01.2024</span>
                  </div>
                  <p className="text-gray-700">
                    Качественный продукт, быстрая доставка. Рекомендую!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-500">
                    {relatedProduct.weight}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-amber-600">{relatedProduct.price}₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link to={`/product/${relatedProduct.id}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;