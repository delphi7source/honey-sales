import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search as SearchIcon, Filter, Star, TrendingUp } from 'lucide-react';
import { products } from '@/data/products';
import { articles } from '@/data/articles';
import { recipes } from '@/data/recipes';
import { useCart } from '@/contexts/CartContext';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [searchType, setSearchType] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const { dispatch } = useCart();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      setSearchParams({ q: term });
    } else {
      setSearchParams({});
    }
  };

  // Поиск по продуктам
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Поиск по статьям
  const searchArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Поиск по рецептам
  const searchRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalResults = searchProducts.length + searchArticles.length + searchRecipes.length;

  const popularSearches = [
    'липовый мед', 'гречишный мед', 'мед с прополисом', 'акациевый мед',
    'рецепты с медом', 'польза меда', 'как выбрать мед', 'детям мед'
  ];

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <div className="min-h-screen">
      {/* Search Header */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Поиск</h1>
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Что вы ищете?"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {searchTerm ? (
          <>
            {/* Search Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Результаты поиска</h2>
                <p className="text-gray-600">
                  Найдено {totalResults} результатов по запросу "{searchTerm}"
                </p>
              </div>
              <div className="flex space-x-4">
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все результаты</SelectItem>
                    <SelectItem value="products">Товары ({searchProducts.length})</SelectItem>
                    <SelectItem value="articles">Статьи ({searchArticles.length})</SelectItem>
                    <SelectItem value="recipes">Рецепты ({searchRecipes.length})</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">По релевантности</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Results */}
            {(searchType === 'all' || searchType === 'products') && searchProducts.length > 0 && (
              <section className="mb-12">
                <h3 className="text-xl font-bold mb-6">Товары ({searchProducts.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-amber-500">
                          {product.weight}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="text-sm text-gray-600">({product.reviews})</span>
                          </div>
                          <span className="text-xl font-bold text-amber-600">{product.price}₽</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1" 
                            disabled={!product.inStock}
                            onClick={() => handleAddToCart(product)}
                          >
                            В корзину
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to={`/product/${product.id}`}>Подробнее</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Articles Results */}
            {(searchType === 'all' || searchType === 'articles') && searchArticles.length > 0 && (
              <section className="mb-12">
                <h3 className="text-xl font-bold mb-6">Статьи ({searchArticles.length})</h3>
                <div className="space-y-4">
                  {searchArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-32 object-cover rounded"
                        />
                        <div className="md:col-span-3 p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="text-sm text-gray-500">
                              {article.publishedAt.toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                          <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Автор: {article.author}</span>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/article/${article.id}`}>Читать</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Recipes Results */}
            {(searchType === 'all' || searchType === 'recipes') && searchRecipes.length > 0 && (
              <section className="mb-12">
                <h3 className="text-xl font-bold mb-6">Рецепты ({searchRecipes.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchRecipes.map((recipe) => (
                    <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={recipe.image} 
                        alt={recipe.title}
                        className="w-full h-32 object-cover"
                      />
                      <CardHeader>
                        <CardTitle className="text-lg">{recipe.title}</CardTitle>
                        <CardDescription>{recipe.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-600">{recipe.prepTime} мин</span>
                          <Badge variant="outline">{recipe.category}</Badge>
                        </div>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to={`/recipe/${recipe.id}`}>Смотреть рецепт</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* No Results */}
            {totalResults === 0 && (
              <div className="text-center py-16">
                <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-gray-600 mb-8">
                  Попробуйте изменить поисковый запрос или воспользуйтесь популярными запросами
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search) => (
                    <Button
                      key={search}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Initial State */
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Что вы ищете?</h2>
            <p className="text-gray-600 mb-8">
              Введите запрос в поле поиска выше или выберите из популярных запросов
            </p>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Популярные запросы
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;