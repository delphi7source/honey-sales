import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, ChefHat, Search, Heart } from 'lucide-react';
import { recipes } from '@/data/recipes';

const Recipes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', ...Array.from(new Set(recipes.map(r => r.category)))];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || recipe.category === selectedCategory) &&
    (selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty)
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Рецепты с медом</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя удивительный мир кулинарии с натуральным медом. 
            Сладкие и полезные рецепты для всей семьи.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск рецептов..."
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

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Сложность" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любая сложность</SelectItem>
              <SelectItem value="easy">Легко</SelectItem>
              <SelectItem value="medium">Средне</SelectItem>
              <SelectItem value="hard">Сложно</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <ChefHat className="w-4 h-4 mr-2" />
            Мои рецепты
          </Button>
        </div>

        {/* Featured Recipe */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img 
              src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
              alt="Рецепт дня"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="p-8">
              <Badge className="mb-4 bg-amber-500">Рецепт дня</Badge>
              <h2 className="text-2xl font-bold mb-4">Медовые пряники по бабушкиному рецепту</h2>
              <p className="text-gray-600 mb-6">
                Традиционные русские пряники с ароматным медом и специями. 
                Этот рецепт передается в нашей семье из поколения в поколение.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm">45 мин</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm">6 порций</span>
                </div>
                <Badge className={getDifficultyColor('easy')}>
                  {getDifficultyText('easy')}
                </Badge>
              </div>
              <Button>Смотреть рецепт</Button>
            </div>
          </div>
        </Card>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {getDifficultyText(recipe.difficulty)}
                  </Badge>
                  <Badge variant="outline">{recipe.category}</Badge>
                </div>
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-sm">{recipe.prepTime} мин</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-sm">4-6 порций</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to={`/recipe/${recipe.id}`}>Смотреть рецепт</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Рецепты не найдены</h3>
            <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
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

export default Recipes;