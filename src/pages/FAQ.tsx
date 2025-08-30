import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Заказ и оплата',
      questions: [
        {
          question: 'Как оформить заказ?',
          answer: 'Вы можете оформить заказ на нашем сайте, добавив товары в корзину и заполнив форму заказа. Также можно заказать по телефону +7 (495) 123-45-67.'
        },
        {
          question: 'Какие способы оплаты доступны?',
          answer: 'Мы принимаем оплату банковскими картами, наличными при получении, банковским переводом для юридических лиц, а также предоставляем рассрочку на 3 месяца.'
        },
        {
          question: 'Можно ли отменить заказ?',
          answer: 'Да, вы можете отменить заказ до момента его отправки. Свяжитесь с нами по телефону или email для отмены.'
        },
        {
          question: 'Предоставляете ли вы чек?',
          answer: 'Да, мы предоставляем кассовый чек при любом способе оплаты. Электронный чек отправляется на указанный email.'
        }
      ]
    },
    {
      category: 'Доставка',
      questions: [
        {
          question: 'Сколько стоит доставка?',
          answer: 'Стоимость доставки зависит от региона: по Москве — 300₽, по МО — 400₽, по России — от 400₽. При заказе от 2000₽ доставка бесплатная.'
        },
        {
          question: 'Как долго доставляется заказ?',
          answer: 'По Москве — 1-2 дня, по МО — 1-3 дня, по России — 3-7 дней в зависимости от региона.'
        },
        {
          question: 'Можно ли изменить адрес доставки?',
          answer: 'Да, адрес можно изменить до момента передачи заказа курьеру. Свяжитесь с нами как можно скорее.'
        },
        {
          question: 'Что делать, если меня не будет дома?',
          answer: 'Курьер свяжется с вами за час до доставки. Можно договориться о доставке в удобное время или к соседям.'
        }
      ]
    },
    {
      category: 'Продукция',
      questions: [
        {
          question: 'Как проверить качество меда?',
          answer: 'Качественный мед имеет однородную консистенцию, приятный аромат, не содержит посторонних примесей. Все наши продукты имеют сертификаты качества.'
        },
        {
          question: 'Почему мед кристаллизуется?',
          answer: 'Кристаллизация — естественный процесс для натурального меда. Это подтверждает его натуральность. Разные сорта кристаллизуются с разной скоростью.'
        },
        {
          question: 'Какой срок годности у меда?',
          answer: 'При правильном хранении мед может храниться неограниченно долго. Официальный срок годности — 2 года с даты производства.'
        },
        {
          question: 'Можно ли давать мед детям?',
          answer: 'Мед можно давать детям старше 1 года. Начинать следует с небольших количеств. Акациевый мед наиболее подходит для детского питания.'
        }
      ]
    },
    {
      category: 'Хранение',
      questions: [
        {
          question: 'Как правильно хранить мед?',
          answer: 'Мед следует хранить в сухом, темном месте при температуре 5-20°C в плотно закрытой таре. Избегайте попадания влаги.'
        },
        {
          question: 'Можно ли хранить мед в холодильнике?',
          answer: 'Можно, но не обязательно. В холодильнике мед быстрее кристаллизуется, но это не влияет на его качество.'
        },
        {
          question: 'Что делать, если мед засахарился?',
          answer: 'Засахаривание — нормальный процесс. Для возвращения жидкой консистенции подогрейте мед на водяной бане до 40°C.'
        }
      ]
    }
  ];

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашем меде, доставке и условиях покупки.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2 text-amber-600" />
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                    <Card>
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-left font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardContent className="pt-0">
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <section className="mt-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-gray-600 mb-6">
                Наши специалисты готовы помочь вам с любыми вопросами о меде и заказах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить нам
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать в чат
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;