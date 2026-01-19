import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Contacts Bar */}
          <div className="py-2 border-b border-white/5 flex items-center justify-center gap-6 text-sm">
            <a 
              href="https://wa.me/79149666617" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
            >
              <Icon name="MessageCircle" size={16} />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://t.me/dashapoddubnaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-sky-400 transition-all duration-300 hover:scale-110"
            >
              <Icon name="Send" size={16} />
              <span>Telegram</span>
            </a>
            <a 
              href="https://instagram.com/dashapoddubnaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              <Icon name="Instagram" size={16} />
              <span>Instagram</span>
            </a>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">
              АПГРЕЙД 2026
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('program')} 
                className="text-white/80 hover:text-white transition-colors"
              >
                Программа
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="text-white/80 hover:text-white transition-colors"
              >
                Пакеты
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-white/80 hover:text-white transition-colors"
              >
                Отзывы
              </button>
            </nav>

            <Button 
              onClick={() => scrollToSection('packages')} 
              className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              ВЫБРАТЬ ПАКЕТ
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-turquoise-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30 text-sm font-medium backdrop-blur-sm">
                  Квест-челлендж для женщин 35+
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Из <span className="text-slate-400 line-through">УСТАЛОСТИ</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent animate-gradient">
                  в ГОРЯЩИЙ ГЛАЗ
                </span>
                <br />
                <span className="text-4xl sm:text-5xl lg:text-6xl">за 14 дней</span>
              </h1>

              <div className="space-y-4 text-lg text-white/80">
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                  <span>Восстановление тела, разума, пространства</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                  <span>Игровой формат + живое сообщество</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-turquoise-400 flex-shrink-0 mt-1" size={24} />
                  <span>Твой персональный аватар трансформируется с тобой</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('packages')} 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-lg px-8 py-6 shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105 border-none"
                >
                  ВЫБРАТЬ СВОЙ ПАКЕТ
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')} 
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/20 hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Узнать больше
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} className="text-amber-400" />
                  <span>Старт: 9 февраля 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" size={18} className="text-purple-400" />
                  <span>500+ женщин трансформировались</span>
                </div>
              </div>
            </div>

            {/* Visual - Avatar Evolution */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-white/10">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/666011a1-845b-4364-b55b-98181d1026af.jpg" 
                  alt="Эволюция аватара: Level 1 → Level 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-white/80 mb-2">Трансформация твоего аватара:</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full text-xs">Level 1</span>
                    <Icon name="ArrowRight" size={16} className="text-purple-400" />
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs">Level 4 ЛЕГЕНДАРНЫЙ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОБЛЕМА: ЗЕРКАЛО */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ты это <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">знаешь?</span>
            </h2>
            <p className="text-xl text-white/60">Узнаёшь себя хотя бы в 3-х пунктах?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {[
              "Энергетическая и психологическая усталость",
              "Апатия, раздражение, \"ничего не хочется\"",
              "Живёшь в \"дне сурка\" — одни и те же дни",
              "Редко испытываешь радость и вдохновение",
              "Физическая тяжесть, потеря лёгкости в теле",
              "\"Спасательный круг\" после праздников",
              "Нет ощущения собственной ценности",
              "Чувство внутренней опасности и неуверенности",
              "Потеря смысла в том, что раньше вдохновляло"
            ].map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-6 h-6 rounded border-2 border-white/30 group-hover:border-purple-400 flex-shrink-0 mt-0.5 transition-colors"></div>
                <p className="text-white/80 group-hover:text-white transition-colors">{problem}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-amber-500/10 border border-purple-500/20 backdrop-blur-sm">
            <p className="text-3xl font-bold">
              Это не депрессия. Это <span className="text-amber-400">СИГНАЛ.</span>
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              Твоё тело, разум и душа говорят:<br />
              <span className="text-purple-400 font-semibold">'Пришло время по-новому взглянуть на себя.'</span>
            </p>
          </div>
        </div>
      </section>

      {/* РЕШЕНИЕ */}
      <section id="program" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              АПГРЕЙД: <span className="bg-gradient-to-r from-amber-400 to-turquoise-400 bg-clip-text text-transparent">Не курс. Не теория. ПРОЦЕСС.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* ЧТО ЭТО НЕ ЯВЛЯЕТСЯ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <Icon name="X" className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Что это НЕ</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Не записанные лекции",
                  "Не стандартная избитая информация",
                  "Не ещё одна стеклотека знаний",
                  "Не соло-работа в одиночестве"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <Icon name="XCircle" className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ЧТО ЭТО ЕСТЬ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Что это ЕСТЬ</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "ТОЛЬКО ПРАКТИКА + ЖИВОЕ СООБЩЕСТВО",
                  "Ежедневные простые, но эффективные задания",
                  "20 мин утром + 20 мин вечером — это всё",
                  "Игровой формат с лидербордом и аватарами",
                  "Живое взаимодействие с Дарьей и участницами"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* КАК ЭТО РАБОТАЕТ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-amber-500/10 to-turquoise-500/10 border border-purple-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-amber-500/20 flex items-center justify-center">
                  <Icon name="Gamepad2" className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Как работает</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "User", text: "Выбираешь АВАТАР (по отклику)" },
                  { icon: "Target", text: "Ежедневные ЗАДАНИЯ (по теме дня)" },
                  { icon: "Trophy", text: "Выполняешь → получаешь БАЛЛЫ" },
                  { icon: "Sparkles", text: "Твой аватар ТРАНСФОРМИРУЕТСЯ вместе с тобой" },
                  { icon: "TrendingUp", text: "Ты видишь свой прогресс ВИЗУАЛЬНО" },
                  { icon: "Award", text: "Лидерборд создаёт здоровую конкуренцию" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <Icon name={item.icon} className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ИТОГ */}
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-turquoise-600/20 border border-purple-500/30 backdrop-blur-sm text-center space-y-4">
            <h3 className="text-3xl font-bold">ИТОГ ЗА 14 ДНЕЙ</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Ты не просто пройдёшь программу.
            </p>
            <p className="text-2xl font-semibold leading-relaxed">
              Ты <span className="text-purple-400">ПРОЖИВЁШЬ</span> маленькую, но насыщенную <span className="text-amber-400">другую ЖИЗНЬ</span>,<br />
              в которой поймёшь, что значит состояние <span className="text-turquoise-400">'Горящий Глаз'</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ТАЙМЛАЙН КВЕСТА */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">Таймлайн квеста</span>
            </h2>
            <p className="text-xl text-white/60">Две недели — два этапа трансформации</p>
          </div>

          <div className="space-y-8">
            {/* НЕДЕЛЯ 1: ОЧИЩЕНИЕ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 group">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                1
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-sm font-semibold mb-4">
                    НЕДЕЛЯ 1: ОЧИЩЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <Icon name="Calendar" size={18} />
                    <span>9-15 февраля</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Search" className="text-purple-400" size={18} />
                      <span className="text-sm">Самоанализ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-purple-400" size={18} />
                      <span className="text-sm">Очищение тела, ума, пространства</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Trash2" className="text-purple-400" size={18} />
                      <span className="text-sm">Избавление от ненужного хлама</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Moon" className="text-purple-400" size={18} />
                      <span className="text-sm">Убывающая луна помогает отпустить</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="User" className="text-purple-400" size={20} />
                      <span className="font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Level 1</span>
                      <Icon name="ArrowRight" className="text-purple-400" size={16} />
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Level 2</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Heart" className="text-amber-400" size={20} />
                      <span className="font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-white/80">От усталости к лёгкости</p>
                  </div>
                </div>
              </div>
            </div>

            {/* НЕДЕЛЯ 2: ПРОБУЖДЕНИЕ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-turquoise-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500 group">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-600 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                2
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-amber-600/20 border border-amber-500/30 text-sm font-semibold mb-4">
                    НЕДЕЛЯ 2: ПРОБУЖДЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <Icon name="Calendar" size={18} />
                    <span>16-22 февраля</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="text-amber-400" size={18} />
                      <span className="text-sm">Пробуждение интуиции и энергии</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Flame" className="text-amber-400" size={18} />
                      <span className="text-sm">Создание состояния "Горящий Глаз"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Target" className="text-amber-400" size={18} />
                      <span className="text-sm">Намерения и вектор на 2026 год</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-amber-400" size={18} />
                      <span className="text-sm">Энергия Года Красной Огненной Лошади</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="User" className="text-amber-400" size={20} />
                      <span className="font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 flex-wrap">
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Level 2</span>
                      <Icon name="ArrowRight" className="text-amber-400" size={16} />
                      <span className="px-3 py-1 bg-amber-600 rounded-full text-sm">Level 3</span>
                      <Icon name="ArrowRight" className="text-turquoise-400" size={16} />
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-turquoise-600 rounded-full text-sm font-bold">Level 4 ЛЕГЕНДАРНЫЙ</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-600/20 to-turquoise-600/20 border border-amber-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Flame" className="text-turquoise-400" size={20} />
                      <span className="font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-white/90 font-semibold">От пробуждения к ГОРЯЩЕМУ ГЛАЗУ 🔥</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ФИНАЛ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-turquoise-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-turquoise-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Star" size={16} />
              </div>
              
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-turquoise-600/20 border border-turquoise-500/30 text-sm font-semibold mb-6">
                  ФИНАЛ: ВСТРЕЧА И НАГРАДЫ
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: "Video", text: "Онлайн-встреча всех участниц в ZOOM" },
                    { icon: "Trophy", text: "Награждение победительниц" },
                    { icon: "Sunrise", text: "Завершающая встреча на рассвете у \"Двери Возможностей\" (о.Русский)" },
                    { icon: "Sparkles", text: "Переход в новый цикл жизни" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-slate-800/50 border border-white/10 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-turquoise-600/20 flex items-center justify-center">
                        <Icon name={item.icon} className="text-turquoise-400" size={20} />
                      </div>
                      <p className="text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PLACEHOLDER */}
      <section id="packages" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готова к <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">трансформации?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">Следующие блоки с пакетами, отзывами и контактами уже на подходе!</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-lg px-12 py-6 shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105 border-none"
          >
            ВЫБРАТЬ ПАКЕТ
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* FOOTER PLACEHOLDER */}
      <footer id="reviews" className="relative py-12 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60">
          <p>© 2026 АПГРЕЙД. Дарья Поддубная. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
