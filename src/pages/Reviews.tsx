import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, User, Calendar, ThumbsUp, MessageSquare, Filter } from 'lucide-react';

const Reviews: React.FC = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    comment: '',
    product: ''
  });

  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: '1',
      name: 'Анна Петрова',
      rating: 5,
      title: 'Отличный липовый мед!',
      comment: 'Заказывала липовый мед для всей семьи. Очень довольна качеством! Мед ароматный, вкусный, явно натуральный. Доставили быстро, упаковка отличная. Обязательно закажу еще!',
      date: new Date('2024-01-15'),
      product: 'Липовый мед 500г',
      verified: true,
      helpful: 12
    },
    {
      id: '2',
      name: 'Михаил Сидоров',
      rating: 4,
      title: 'Хорошее качество',
      comment: 'Покупаю мед в этом магазине уже второй раз. Качество стабильно хорошее, цены адекватные. Единственное — хотелось бы больше вариантов упаковки.',
      date: new Date('2024-01-10'),
      product: 'Гречишный мед 500г',
      verified: true,
      helpful: 8
    },
    {
      id: '3',
      name: 'Елена Козлова',
      rating: 5,
      title: 'Рекомендую всем!',
      comment: 'Заказывала мед с прополисом для укрепления иммунитета. Результат превзошел ожидания! Простуды стали реже, общее самочувствие улучшилось. Спасибо за качественный продукт!',
      date: new Date('2024-01-08'),
      product: 'Мед с прополисом 250г',
      verified: true,
      helpful: 15
    },
    {
      id: '4',
      name: 'Дмитрий Волков',
      rating: 5,
      title: 'Быстрая доставка',
      comment: 'Заказал в понедельник, получил во вторник. Очень быстро! Мед отличный, упаковка надежная. Курьер вежливый, все объяснил. Буду заказывать еще.',
      date: new Date('2024-01-05'),
      product: 'Акациевый мед 500г',
      verified: true,
      helpful: 6
    },
    {
      id: '5',
      name: 'Ольга Смирнова',
      rating: 4,
      title: 'Вкусный мед для детей',
      comment: 'Покупала акациевый мед для ребенка. Мед очень нежный, не вызывает аллергии. Ребенок ест с удовольствием. Цена немного высоковата, но качество того стоит.',
      date: new Date('2024-01-03'),
      product: 'Акациевый мед 500г',
      verified: true,
      helpful: 9
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === '5') return review.rating === 5;
    if (filter === '4') return review.rating === 4;
    if (filter === '3') return review.rating <= 3;
    return true;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review:', newReview);
    // Здесь будет логика отправки отзыва
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Отзывы покупателей</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Читайте честные отзывы наших клиентов и делитесь своим опытом покупки меда
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Rating Summary */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-amber-600 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Основано на {reviews.length} отзывах</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Распределение оценок</h3>
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center mb-2">
                      <span className="w-8 text-sm">{item.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-amber-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            {/* Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <Filter className="w-5 h-5 text-gray-500" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все отзывы</SelectItem>
                  <SelectItem value="5">5 звезд</SelectItem>
                  <SelectItem value="4">4 звезды</SelectItem>
                  <SelectItem value="3">3 звезды и ниже</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="w-5 h-5 text-gray-500" />
                          <span className="font-semibold">{review.name}</span>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              Проверенная покупка
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date.toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {review.product}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{review.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Write Review Form */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Оставить отзыв</CardTitle>
                <CardDescription>
                  Поделитесь своим опытом покупки меда
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="reviewName">Ваше имя *</Label>
                    <Input
                      id="reviewName"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewEmail">Email *</Label>
                    <Input
                      id="reviewEmail"
                      type="email"
                      value={newReview.email}
                      onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Оценка *</Label>
                    <div className="flex space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating})}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${rating <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewProduct">Товар</Label>
                    <Select value={newReview.product} onValueChange={(value) => setNewReview({...newReview, product: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите товар" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linden">Липовый мед</SelectItem>
                        <SelectItem value="buckwheat">Гречишный мед</SelectItem>
                        <SelectItem value="acacia">Акациевый мед</SelectItem>
                        <SelectItem value="sunflower">Подсолнечный мед</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewTitle">Заголовок отзыва *</Label>
                    <Input
                      id="reviewTitle"
                      value={newReview.title}
                      onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                      placeholder="Кратко опишите ваше впечатление"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewComment">Отзыв *</Label>
                    <Textarea
                      id="reviewComment"
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      placeholder="Расскажите подробнее о вашем опыте"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Опубликовать отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;