import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, User, Search, BookOpen, TrendingUp } from 'lucide-react';
import { articles } from '@/data/articles';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || article.category === selectedCategory)
  );

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Блог о меде</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полезные статьи о меде, пчеловодстве, здоровье и кулинарии. 
            Узнайте больше о мире пчел и меда.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img 
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-amber-500">Рекомендуем</Badge>
                <Badge variant="outline">{featuredArticle.category}</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{featuredArticle.publishedAt.toLocaleDateString('ru-RU')}</span>
                </div>
              </div>
              <Button asChild>
                <Link to={`/article/${featuredArticle.id}`}>Читать статью</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск статей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              {categories.slice(1).map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline">
            <TrendingUp className="w-4 h-4 mr-2" />
            Популярные
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2" variant="outline">
                  {article.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{article.publishedAt.toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link to={`/article/${article.id}`}>Читать далее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Topics */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Популярные темы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Здоровье', 'Рецепты', 'Пчеловодство', 'Красота', 'Детям', 'Спорт'].map(topic => (
              <Button key={topic} variant="outline" className="h-auto p-4">
                <BookOpen className="w-4 h-4 mr-2" />
                {topic}
              </Button>
            ))}
          </div>
        </section>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
            <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;