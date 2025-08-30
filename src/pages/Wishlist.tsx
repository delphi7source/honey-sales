import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, X, Share2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Wishlist: React.FC = () => {
  const { dispatch } = useCart();

  // Моковые данные избранного
  const wishlistItems = [
    {
      id: '1',
      name: 'Липовый мед',
      price: 850,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      weight: '500г',
      addedDate: new Date('2024-01-10')
    },
    {
      id: '3',
      name: 'Акациевый мед',
      price: 1200,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      weight: '500г',
      addedDate: new Date('2024-01-08')
    },
    {
      id: '5',
      name: 'Мед с прополисом',
      price: 1450,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      rating: 4.9,
      reviews: 203,
      inStock: false,
      weight: '250г',
      addedDate: new Date('2024-01-05')
    }
  ];

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    console.log('Remove from wishlist:', productId);
    // Здесь будет логика удаления из избранного
  };

  const handleAddAllToCart = () => {
    wishlistItems.filter(item => item.inStock).forEach(item => {
      handleAddToCart(item);
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Список желаний</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Сохраняйте понравившиеся товары и покупайте их позже
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {wishlistItems.length > 0 ? (
          <>
            {/* Actions Bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Избранные товары</h2>
                <p className="text-gray-600">{wishlistItems.length} товаров в списке</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться списком
                </Button>
                <Button onClick={handleAddAllToCart}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Добавить все в корзину
                </Button>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    {!item.inStock && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        Нет в наличии
                      </Badge>
                    )}
                    <Badge className="absolute bottom-2 right-2 bg-amber-500">
                      {item.weight}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="text-lg">{item.name}</span>
                      <span className="text-amber-600 font-bold">{item.price}₽</span>
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600">({item.reviews})</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span>Добавлено: {item.addedDate.toLocaleDateString('ru-RU')}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1" 
                        disabled={!item.inStock}
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {item.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/product/${item.id}`}>
                          Подробнее
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommendations */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Рекомендуем также</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => handleProductSelect(product.id)}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
                      <p className="text-amber-600 font-bold mb-2">{product.price}₽</p>
                      <Button size="sm" className="w-full">В корзину</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Список желаний пуст</h2>
            <p className="text-gray-600 mb-8">
              Добавляйте понравившиеся товары в избранное, нажимая на сердечко
            </p>
            <Button asChild>
              <Link to="/catalog">Перейти к покупкам</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;