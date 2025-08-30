import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Zap, Brain, Leaf, Award, Users, Clock } from 'lucide-react';

const HealthBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Укрепление иммунитета',
      description: 'Мед содержит антиоксиданты и витамины, которые помогают организму бороться с инфекциями',
      details: [
        'Витамины группы B, C, E',
        'Минералы: калий, магний, железо',
        'Природные антибиотики',
        'Повышает сопротивляемость организма'
      ]
    },
    {
      icon: Shield,
      title: 'Антибактериальные свойства',
      description: 'Натуральные ферменты в меде обладают мощным антибактериальным действием',
      details: [
        'Подавляет рост бактерий',
        'Ускоряет заживление ран',
        'Помогает при воспалениях',
        'Природный антисептик'
      ]
    },
    {
      icon: Zap,
      title: 'Источник энергии',
      description: 'Быстро усваиваемые углеводы дают мгновенный прилив энергии',
      details: [
        'Фруктоза и глюкоза',
        'Быстрое усвоение',
        'Восстановление после нагрузок',
        'Улучшает работоспособность'
      ]
    },
    {
      icon: Brain,
      title: 'Улучшение работы мозга',
      description: 'Глюкоза в меде питает мозг и улучшает когнитивные функции',
      details: [
        'Улучшает память',
        'Повышает концентрацию',
        'Снижает стресс',
        'Питает нервную систему'
      ]
    }
  ];

  const ageGroups = [
    {
      group: 'Дети (от 1 года)',
      recommendations: [
        'Начинать с 1/4 чайной ложки',
        'Добавлять в теплое молоко',
        'Помогает при кашле',
        'Укрепляет иммунитет'
      ],
      dosage: '1-2 ч.л. в день'
    },
    {
      group: 'Взрослые',
      recommendations: [
        'Утром натощак с водой',
        'Вместо сахара в чае',
        'При физических нагрузках',
        'Для восстановления сил'
      ],
      dosage: '2-3 ст.л. в день'
    },
    {
      group: 'Пожилые люди',
      recommendations: [
        'Поддержка сердечно-сосудистой системы',
        'Улучшение пищеварения',
        'Профилактика простуд',
        'Общеукрепляющее действие'
      ],
      dosage: '1-2 ст.л. в день'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Польза меда для здоровья</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мед — это не просто сладость, это природная аптека с множеством 
            целебных свойств, проверенных веками.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Основные полезные свойства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <benefit.icon className="w-8 h-8 text-amber-600" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </div>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Age Groups */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Рекомендации по возрастам</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{group.group}</CardTitle>
                  <Badge className="w-fit bg-amber-100 text-amber-800">
                    {group.dosage}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {group.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scientific Facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Научные факты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">180+</div>
                <p className="text-sm text-gray-600">полезных веществ в составе</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">22</div>
                <p className="text-sm text-gray-600">аминокислоты</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">27</div>
                <p className="text-sm text-gray-600">минеральных веществ</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
                <p className="text-sm text-gray-600">срок хранения</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как правильно употреблять мед</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">✅ Правильно</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Употреблять в чистом виде или с теплой водой (не горячей!)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Рассасывать во рту для лучшего усвоения</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Принимать утром натощак за 30 минут до еды</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Хранить при комнатной температуре</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">❌ Неправильно</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    <span>Добавлять в кипяток (разрушает полезные вещества)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    <span>Нагревать выше 40°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    <span>Употреблять в больших количествах (более 100г в день)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    <span>Давать детям до 1 года</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Medical Applications */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Применение в народной медицине</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">При простуде</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мед с теплым молоком или чаем помогает при кашле и боли в горле.
                </p>
                <Badge variant="outline">Липовый мед</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">При анемии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Гречишный мед богат железом и помогает повысить гемоглобин.
                </p>
                <Badge variant="outline">Гречишный мед</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">При бессоннице</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Чайная ложка меда перед сном успокаивает нервную систему.
                </p>
                <Badge variant="outline">Липовый мед</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">При гастрите</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мед обволакивает слизистую желудка и способствует заживлению.
                </p>
                <Badge variant="outline">Акациевый мед</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Для красоты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Медовые маски питают и увлажняют кожу, делают волосы блестящими.
                </p>
                <Badge variant="outline">Любой сорт</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">При стрессе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мед стабилизирует нервную систему и улучшает настроение.
                </p>
                <Badge variant="outline">Разнотравье</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warning */}
        <section className="mt-16">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">⚠️ Важно помнить</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-yellow-800">
                <li>• Мед не рекомендуется детям до 1 года</li>
                <li>• При аллергии на продукты пчеловодства следует быть осторожным</li>
                <li>• Диабетикам необходима консультация врача</li>
                <li>• Не превышайте рекомендуемую дозировку</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HealthBenefits;