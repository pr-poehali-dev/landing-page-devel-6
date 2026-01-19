import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Контакты над header */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="https://wa.me/79147047392" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Icon name="Phone" size={16} />
              <span>Вопросы? WhatsApp +79147047392</span>
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Icon name="MessageCircle" size={16} />
              <span>Telegram @darya_tsybulskaya22</span>
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://instagram.com/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Icon name="Instagram" size={16} />
              <span>Instagram darya_tsybulskaya22</span>
            </a>
          </div>
        </div>
      </div>

      {/* BLOCK 1: HEADER */}
      <header className="fixed top-10 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple tracking-wider">АПГРЕЙД</div>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#quest" className="text-gray-700 hover:text-purple transition-colors font-medium">О квесте</a>
              <a href="#archetypes" className="text-gray-700 hover:text-purple transition-colors font-medium">Архетипы</a>
              <a href="#results" className="text-gray-700 hover:text-purple transition-colors font-medium">Результаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-purple transition-colors font-medium">Контакты</a>
              <Button 
                onClick={scrollToPackages}
                className="bg-purple hover:brightness-110 text-white px-12 py-6 rounded-lg text-lg font-bold shadow-lg hover:shadow-purple/40 transition-all duration-300"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </nav>
            <Button 
              onClick={scrollToPackages}
              className="md:hidden bg-purple hover:brightness-110 text-white px-6 py-3 rounded-lg font-bold"
            >
              ВЫБРАТЬ ПАКЕТ
            </Button>
          </div>
        </div>
      </header>

      {/* BLOCK 2: HERO */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-[60px] md:text-[70px] font-bold text-purple mb-6 tracking-[2px] leading-tight">
                АПГРЕЙД
              </h1>
              <h2 className="text-4xl font-semibold mb-8 text-gray-800">
                Квест восстановления за 14 дней
              </h2>
              
              <div className="text-lg text-gray-600 leading-relaxed mb-6 space-y-2">
                <p>Из <strong>ОПУСТОШЕНИЯ</strong> в <strong>ГОРЯЩИЙ ГЛАЗ</strong>.</p>
                <p>От <strong>АПАТИИ</strong> к <strong>ЭНЕРГИЧНОСТИ</strong>.</p>
                <p>От <strong>"Не хочу жить"</strong> к <strong>"Я готова"</strong>.</p>
                <p className="mt-4">За две недели.</p>
                <p>С инструментами, которые работают.</p>
                <p>Потому что они сработали со мной.</p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple p-4 rounded mb-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  14 дней практических заданий.<br />
                  20 минут утром + 20 минут вечером.<br />
                  Всё остальное делаешь ты.
                </p>
              </div>

              <Button 
                size="lg" 
                onClick={scrollToPackages}
                className="bg-purple hover:brightness-110 text-white text-[28px] px-12 py-8 rounded-lg font-bold shadow-2xl hover:shadow-purple/40 transition-all duration-300 mb-8"
              >
                ⭐ ВЫБРАТЬ ПАКЕТ ⭐
              </Button>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise flex-shrink-0" size={24} />
                  <span className="text-gray-700">Первый запуск квеста</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise flex-shrink-0" size={24} />
                  <span className="text-gray-700">Только 30 участниц (мест ограничено)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise flex-shrink-0" size={24} />
                  <span className="text-gray-700">Старт: 9 февраля 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-turquoise flex-shrink-0" size={24} />
                  <span className="text-gray-700">500+ женщин уже трансформировались</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/f6858276-973e-4eaf-85ac-b62fbe9bbe68.jpg" 
                  alt="Уверенная женщина с горящим взглядом"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Временная секция для остальных блоков */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple mb-6">Следующие блоки</h2>
          <p className="text-gray-600">Продолжим добавлять блоки по порядку</p>
        </div>
      </section>
    </div>
  );
}