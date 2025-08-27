import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🍯</span>
              </div>
              <h3 className="text-xl font-bold">МедоДом</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Натуральный мед высшего качества от лучших пасечников России. 
              Более 15 лет на рынке.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-300 hover:text-white">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-white">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-300 hover:text-white">Оплата</Link></li>
              <li><Link to="/wholesale" className="text-gray-300 hover:text-white">Оптовикам</Link></li>
              <li><Link to="/certificates" className="text-gray-300 hover:text-white">Сертификаты</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white">Вопросы и ответы</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white">Отзывы</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Блог</Link></li>
              <li><Link to="/recipes" className="text-gray-300 hover:text-white">Рецепты</Link></li>
              <li><Link to="/health-benefits" className="text-gray-300 hover:text-white">Польза меда</Link></li>
              <li><Link to="/honey-types" className="text-gray-300 hover:text-white">Виды меда</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">info@honey-shop.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">Москва, ул. Пчелиная, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 МедоДом. Все права защищены. | 
            <Link to="/privacy" className="hover:text-white ml-1">Политика конфиденциальности</Link> | 
            <Link to="/terms" className="hover:text-white ml-1">Условия использования</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;