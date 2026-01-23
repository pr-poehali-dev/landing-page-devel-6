import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface FooterWithPopupProps {
  scrollToSection: (id: string) => void;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FooterWithPopup({ scrollToSection, showPopup, setShowPopup }: FooterWithPopupProps) {
  return (
    <>
      {/* БЛОК 11: ФИНАЛЬНЫЙ CTA */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-turquoise-600/20 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
            {/* Декоративный фон */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                  Тебя ждёт <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">14 дней</span>, в которые ты:
                </h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                  {[
                    { icon: "Zap", text: "Восстановишь энергию и вкус к жизни" },
                    { icon: "Heart", text: "Избавишься от усталости и тяжести" },
                    { icon: "Eye", text: "Обретёшь ясность и новые намерения" },
                    { icon: "Users", text: "Встретишь сообщество единомышленниц" },
                    { icon: "HeartHandshake", text: "Улучшишь отношения с близкими" },
                    { icon: "TrendingUp", text: "Повысишь уровень своей уверенности и ценности" },
                    { icon: "Sunrise", text: "Войдешь ярко в новый важный цикл жизни 2026 года" },
                    { icon: "Gamepad2", text: "Увидишь всё визуально через прокачку своего аватара" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <Icon 
                        name={item.icon} 
                        className={`text-amber-400 flex-shrink-0 mt-1 ${
                          item.icon === 'Zap' ? 'animate-pulse-glow' :
                          item.icon === 'Heart' ? 'animate-float' :
                          item.icon === 'Eye' || item.icon === 'Users' || item.icon === 'HeartHandshake' ? 'icon-hover' :
                          item.icon === 'TrendingUp' ? 'animate-wiggle' :
                          item.icon === 'Sunrise' ? 'animate-float' :
                          item.icon === 'Gamepad2' ? 'animate-wiggle' : ''
                        }`}
                        size={24} 
                      />
                      <span className="text-white/90 text-left">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-4 mb-12">
                  <p className="text-2xl font-semibold leading-relaxed">
                    Это не просто программа. <span className="text-purple-400">Это ИГРА твоей трансформации.</span>
                  </p>
                  <p className="text-xl text-white/80">
                    А ты уже пришла сюда с откликом — значит, ты уже на старте.
                  </p>
                  <p className="text-2xl font-bold text-amber-400">
                    Выбери свой пакет и присоединяйся.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    onClick={() => scrollToSection('packages')}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-xl px-12 py-8 shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105 border-none"
                  >
                    🚀 Я ГОТОВА. ВЫБИРАЮ ПАКЕТ
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('avatars')}
                    size="lg"
                    variant="outline"
                    className="bg-white/5 border-white/20 hover:bg-white/10 text-lg px-8 py-8 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    💬 Хочу узнать больше об аватарах
                  </Button>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/60 mb-4">Не уверена? Напиши мне, и я расскажу про твой путь.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="https://t.me/darya_tsybulskaya22" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-sky-500/20 border border-sky-500/30 hover:bg-sky-500/30 transition-all flex items-center gap-2"
                    >
                      <Icon name="Send" size={18} className="icon-hover" />
                      <span>НАПИСАТЬ В TELEGRAM</span>
                    </a>
                    <a 
                      href="tel:+79147047392" 
                      className="px-6 py-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                    >
                      <Icon name="Phone" size={18} className="icon-hover" />
                      <span>ПОЗВОНИТЬ ДАРЬЕ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* О компании */}
            <div>
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">АПГРЕЙД 2026</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-4">Квест-челлендж для женщин 35+. Из усталости в горящий глаз за 14 дней.</p>
              <div className="text-xs text-white/40 space-y-1">
                <p>ИП Цыбульский С.И.</p>
                <p>ИНН 436687430</p>
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-white/60 hover:text-white transition-colors text-left">Об АПГРЕЙДЕ</button>
                <button onClick={() => scrollToSection('avatars')} className="block text-white/60 hover:text-white transition-colors text-left">Четыре аватара</button>
                <button onClick={() => scrollToSection('packages')} className="block text-white/60 hover:text-white transition-colors text-left">Пакеты и цены</button>
                <button onClick={() => scrollToSection('faq')} className="block text-white/60 hover:text-white transition-colors text-left">FAQ</button>
                <button onClick={() => scrollToSection('packages')} className="block text-white/60 hover:text-white transition-colors text-left">Как присоединиться</button>
              </div>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+79147047392" className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors">
                  <Icon name="Phone" size={16} className="icon-hover" />
                  <span>+7 914 704 7392</span>
                </a>
                <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-sky-400 transition-colors">
                  <Icon name="Send" size={16} className="icon-hover" />
                  <span>@darya_tsybulskaya22</span>
                </a>
                <a href="mailto:offic1978@mail.ru" className="flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors">
                  <Icon name="Mail" size={16} className="icon-hover" />
                  <span>offic1978@mail.ru</span>
                </a>
                <a href="https://instagram.com/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-pink-400 transition-colors">
                  <Icon name="Instagram" size={16} className="icon-hover" />
                  <span>darya_tsybulskaya22</span>
                </a>
                <a href="mailto:contact@upgrade2026.ru" className="flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors">
                  <Icon name="Mail" size={16} className="icon-hover" />
                  <span>contact@upgrade2026.ru</span>
                </a>
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="text-lg font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <a 
                  href="https://t.me/darya_tsybulskaya22" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-500/30 transition-all"
                >
                  <Icon name="Send" size={18} className="icon-hover" />
                </a>
                <a 
                  href="https://instagram.com/darya_tsybulskaya22" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/30 transition-all"
                >
                  <Icon name="Instagram" size={18} className="icon-hover" />
                </a>
                <a 
                  href="https://wa.me/79149666617" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all"
                >
                  <Icon name="MessageCircle" size={18} className="icon-hover" />
                </a>
              </div>
              <p className="text-xs text-white/40 mt-6">
                Владивосток, Дальний Восток<br />
                Россия, 2026
              </p>
            </div>
          </div>

          <div className="text-center text-white/60 text-sm pt-8 border-t border-white/10">
            <p>© 2026 АПГРЕЙД. Дарья Цыбульская. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* POP-UP ПРИВЕТСТВИЕ */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-purple-900 border border-purple-500/30 shadow-2xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Привет, Дорогая! 👑</h3>
              <p className="text-white/90 mb-3 leading-relaxed">Я Дарья. Рада Тебе! 💐</p>
              <p className="text-white/80 mb-4 leading-relaxed">Ты пришла и читаешь Это не просто Так! ✨</p>
              <p className="text-white/80 mb-4 leading-relaxed">Чувствуй Свой Отклик и исходи при решении из него, не от ума — это ВАЖНО! 🤗</p>
              <p className="text-white/80 mb-4 leading-relaxed">Позволь Себе эту игру для Себя Любимой… 💝 и Ты увидишь, как Жизнь вознаградит Тебя за это 🎁</p>
              <p className="text-xl font-semibold text-amber-400 mb-6">Выбери своего Аватара и вперед!</p>
              <p className="text-white/70 mb-8 italic">Буду рада Вместе с Тобой пройти этот квест во благо для Нас обоих ♥️</p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => {
                    setShowPopup(false);
                    scrollToSection('avatars');
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg"
                >
                  Да, я готова!
                </Button>
                <Button 
                  onClick={() => setShowPopup(false)}
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-white/20 hover:bg-white/10"
                >
                  Пока просто смотрю
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}