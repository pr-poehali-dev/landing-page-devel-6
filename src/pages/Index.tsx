import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(9).fill(false));
  const [showCheckResult, setShowCheckResult] = useState(false);
  const [showPhoenixModal, setShowPhoenixModal] = useState(false);
  const [showQueenModal, setShowQueenModal] = useState(false);
  const [showGoddessModal, setShowGoddessModal] = useState(false);
  const [showWarriorModal, setShowWarriorModal] = useState(false);
  const [showStandardPackageModal, setShowStandardPackageModal] = useState(false);
  const [showPremiumPackageModal, setShowPremiumPackageModal] = useState(false);
  const [showVipPackageModal, setShowVipPackageModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="flex items-center justify-between py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">
              АПГРЕЙД 2026
            </div>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
              >
                Об АПГРЕЙДЕ
              </button>
              <button 
                onClick={() => scrollToSection('avatars')} 
                className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
              >
                Аватары
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
              >
                Пакеты
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
              >
                FAQ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors z-[70] relative border border-white/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <Icon name="X" size={28} className="text-white" />
              ) : (
                <Icon name="Menu" size={28} className="text-white" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <Button 
              onClick={() => scrollToSection('packages')} 
              className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 text-xs sm:text-sm px-3 sm:px-4"
            >
              ВЫБРАТЬ ПАКЕТ
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 md:hidden overflow-y-auto">
          <div className="min-h-screen pt-20 pb-8 px-4">
            {/* Navigation Links */}
            <nav className="space-y-1 mb-6">
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Об АПГРЕЙДЕ
              </button>
              <button 
                onClick={() => scrollToSection('avatars')} 
                className="w-full text-left px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Аватары
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="w-full text-left px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Пакеты
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="w-full text-left px-4 py-3 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* CTA Button */}
            <div className="mb-6">
              <Button 
                onClick={() => scrollToSection('packages')} 
                className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg shadow-purple-500/30 py-6 text-lg font-bold"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-bold mb-4 text-white">Контакты:</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+79147047392" 
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon name="Phone" size={20} className="flex-shrink-0" />
                  <span className="text-base">+7 914 704 7392</span>
                </a>
                
                <a 
                  href="https://t.me/darya_tsybulskaya22" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-sky-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon name="Send" size={20} className="flex-shrink-0" />
                  <span className="text-base">Телеграм</span>
                </a>
                
                <a 
                  href="mailto:offic1978@mail.ru" 
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon name="Mail" size={20} className="flex-shrink-0" />
                  <span className="text-base">offic1978@mail.ru</span>
                </a>
                
                <a 
                  href="https://instagram.com/darya_tsybulskaya22" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon name="Instagram" size={20} className="flex-shrink-0" />
                  <span className="text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Из <span className="text-slate-400 line-through">УСТАЛОСТИ</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent animate-gradient">
                  в ГОРЯЩИЙ ГЛАЗ
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">за 14 дней</span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                  с 9—22 февраля
                </span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-white/80">
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-purple-400 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                  <span>Восстановление тела, разума, пространства</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-amber-400 flex-shrink-0 mt-1 icon-hover" size={20} />
                  <span>Игровой формат + живое сообщество</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-turquoise-400 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
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
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-6 text-xs sm:text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-amber-400 animate-bounce-gentle" />
                  <span>Старт: 9 февраля 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" size={16} className="text-purple-400 animate-float" />
                  <span>500+ женщин трансформировались</span>
                </div>
              </div>
            </div>

            {/* Visual - Avatar Evolution */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-white/10 min-h-[600px] md:min-h-[700px]">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/dcd3d481-4757-4df9-bf9e-02aaade6081b.png" 
                  alt="Эволюция аватара: Level 1 → Level 4"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-white/80 mb-2">Трансформация твоего аватара:</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full text-xs">Level 1</span>
                    <Icon name="ArrowRight" size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
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
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Что тебе <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">знакомо?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60">Пройди чек-лист</p>
          </div>

          <div className="relative">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
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
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => {
                    const newChecked = [...checkedItems];
                    newChecked[index] = !newChecked[index];
                    setCheckedItems(newChecked);
                  }}
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                    checkedItems[index] 
                      ? 'border-purple-400 bg-purple-600' 
                      : 'border-white/30 group-hover:border-purple-400'
                  }`}>
                    {checkedItems[index] && (
                      <Icon name="Check" className="text-white" size={14} />
                    )}
                  </div>
                  <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">{problem}</p>
                </div>
              ))}
            </div>

            {/* Кнопка Проверить */}
            <div className="flex justify-end mb-8">
              <Button
                onClick={() => setShowCheckResult(true)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                Проверить
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-amber-500/10 border border-purple-500/20 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold">
              Это не депрессия. Это <span className="text-amber-400">СИГНАЛ.</span>
            </p>
            <p className="text-base md:text-xl text-white/80 leading-relaxed">
              Твоё тело, разум и душа говорят:<br />
              <span className="text-purple-400 font-semibold">'Пришло время по-новому взглянуть на себя.'</span>
            </p>
          </div>
        </div>
      </section>

      {/* РЕШЕНИЕ */}
      <section id="program" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              АПГРЕЙД 2026: <span className="bg-gradient-to-r from-amber-400 via-turquoise-400 to-white bg-clip-text text-transparent">Не курс. Не теория. ПРОЦЕСС.</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
              с 9—22 февраля
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* ЧТО ЭТО НЕ ЯВЛЯЕТСЯ */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-red-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <Icon name="X" className="text-red-400" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">ЭТО НЕ</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Не записанные лекции",
                  "Не стандартная избитая информация",
                  "Не ещё одна стеклотека знаний",
                  "Не соло-работа в одиночестве"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-white/70">
                    <Icon name="XCircle" className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ЧТО ЭТО ЕСТЬ */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="CheckCircle2" className="text-emerald-400" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">ЭТО</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "ТОЛЬКО ПРАКТИКА + ЖИВОЕ СООБЩЕСТВО",
                  "Ежедневные простые, но эффективные задания",
                  "20 мин утром + 20 мин вечером — это всё",
                  "Игровой формат с лидербордом и аватарами",
                  "Живое взаимодействие с Дарьей и участницами в чате"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-white/90">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* КАК ЭТО РАБОТАЕТ */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 via-amber-500/10 to-turquoise-500/10 border border-purple-500/20 backdrop-blur-sm space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-amber-500/20 flex items-center justify-center">
                  <Icon name="Gamepad2" className="text-purple-400 animate-wiggle" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">КАК РАБОТАЕТ</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { icon: "User", text: "Выбираешь АВАТАР (по отклику)" },
                  { icon: "Target", text: "Ежедневные ЗАДАНИЯ (по теме дня)" },
                  { icon: "Trophy", text: "Выполняешь → получаешь БАЛЛЫ" },
                  { icon: "Sparkles", text: "Твой аватар ТРАНСФОРМИРУЕТСЯ вместе с ТОБОЙ" },
                  { icon: "TrendingUp", text: "Ты видишь свой прогресс ВИЗУАЛЬНО" },
                  { icon: "Award", text: "Идешь к своей ПОБЕДЕ - получаешь ПРИЗ" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-white/90">
                    <Icon 
                      name={item.icon} 
                      className={`text-amber-400 flex-shrink-0 mt-0.5 ${
                        item.icon === 'User' ? 'icon-hover' :
                        item.icon === 'Target' ? 'animate-wiggle' :
                        item.icon === 'Trophy' || item.icon === 'Award' ? 'animate-float' :
                        item.icon === 'Sparkles' ? 'animate-pulse-glow' : ''
                      }`}
                      size={18} 
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ИТОГ */}
          <div className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-turquoise-600/20 border border-purple-500/30 backdrop-blur-sm text-center space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">ИТОГ ЗА 14 ДНЕЙ</h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ты не просто пройдёшь программу.
            </p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Ты <span className="text-purple-400">ПРОЖИВЁШЬ</span> маленькую, но насыщенную <span className="text-amber-400">другую ЖИЗНЬ</span>,
              в которой поймёшь, что значит состояние <span className="text-turquoise-400">'Горящий Глаз'</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ТАЙМЛАЙН КВЕСТА */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">Таймлайн квеста</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60">Две недели — два этапа трансформации</p>
          </div>

          <div className="space-y-8">
            {/* НЕДЕЛЯ 1: ОЧИЩЕНИЕ */}
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 group">
              <div className="absolute -left-3 md:-left-4 top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 border-2 md:border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                1
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-xs md:text-sm font-semibold mb-3 md:mb-4">
                    НЕДЕЛЯ 1: ОЧИЩЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-white/60 mb-4 md:mb-6">
                    <Icon name="Calendar" size={16} className="animate-bounce-gentle" />
                    <span>9-15 февраля</span>
                  </div>
                  <div className="space-y-2 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Search" className="text-purple-400 icon-hover" size={18} />
                      <span className="text-sm">Самоанализ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-purple-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Очищение тела, ума, пространства</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Trash2" className="text-purple-400 icon-hover" size={18} />
                      <span className="text-sm">Избавление от ненужного хлама</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Moon" className="text-purple-400 animate-float" size={18} />
                      <span className="text-sm">Убывающая луна помогает отпустить</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-3 md:space-y-4">
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Icon name="User" className="text-purple-400 icon-hover" size={18} />
                      <span className="text-sm md:text-base font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-white/80 flex-wrap">
                      <span className="px-2 md:px-3 py-1 bg-slate-700 rounded-full text-xs md:text-sm">Level 1</span>
                      <Icon name="ArrowRight" className="text-purple-400 group-hover:translate-x-1 transition-transform" size={14} />
                      <span className="px-2 md:px-3 py-1 bg-purple-600 rounded-full text-xs md:text-sm">Level 2</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Icon name="Heart" className="text-amber-400 animate-float" size={18} />
                      <span className="text-sm md:text-base font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-sm md:text-base text-white/80">От усталости к лёгкости</p>
                  </div>
                </div>
              </div>
            </div>

            {/* НЕДЕЛЯ 2: ПРОБУЖДЕНИЕ */}
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-500/10 via-turquoise-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500 group">
              <div className="absolute -left-3 md:-left-4 top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-600 border-2 md:border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                2
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-600/20 border border-amber-500/30 text-xs md:text-sm font-semibold mb-3 md:mb-4">
                    НЕДЕЛЯ 2: ПРОБУЖДЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-white/60 mb-4 md:mb-6">
                    <Icon name="Calendar" size={16} className="animate-bounce-gentle" />
                    <span>16-22 февраля</span>
                  </div>
                  <div className="space-y-2 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="text-amber-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Пробуждение интуиции и энергии</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Flame" className="text-amber-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Создание состояния "Горящий Глаз"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Target" className="text-amber-400 animate-wiggle" size={18} />
                      <span className="text-sm">Намерения и вектор на 2026 год</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-amber-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Энергия Года Красной Огненной Лошади</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="User" className="text-amber-400 icon-hover" size={20} />
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
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-turquoise-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm">
              <div className="absolute -left-3 md:-left-4 top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-turquoise-600 border-2 md:border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Star" size={14} className="animate-pulse-glow" />
              </div>
              
              <div>
                <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-turquoise-600/20 border border-turquoise-500/30 text-xs md:text-sm font-semibold mb-4 md:mb-6">
                  ФИНАЛ: ВСТРЕЧА И НАГРАДЫ
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { icon: "Video", text: "Онлайн-встреча всех участниц в ZOOM" },
                    { icon: "Trophy", text: "Награждение победительниц" },
                    { icon: "Sunrise", text: "Завершающая встреча на рассвете у \"Двери Возможностей\" (о.Русский)" },
                    { icon: "Sparkles", text: "Переход в новый цикл жизни" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-800/50 border border-white/10 flex flex-col items-center text-center gap-2 md:gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-turquoise-600/20 flex items-center justify-center">
                        <Icon 
                          name={item.icon} 
                          className={`text-turquoise-400 ${
                            item.icon === 'Trophy' ? 'animate-float' :
                            item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                            item.icon === 'Sunrise' ? 'animate-float' : ''
                          }`}
                          size={18} 
                        />
                      </div>
                      <p className="text-xs md:text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 5: ЧЕТЫРЕ АВАТАРА */}
      <section id="avatars" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Выбери <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">своего аватара</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60">Твой персональный путь трансформации за 14 дней</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Аватар 1: Огненная Феникс */}
            <div className="group p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-slate-800/50 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/b83fafa7-5a89-4d54-938c-861e5383e79b.png"
                  alt="Огненная Феникс"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-orange-400/30 shadow-lg shadow-orange-500/20"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-orange-400">ОГНЕННАЯ ФЕНИКС</h3>
                <p className="text-base md:text-lg font-semibold text-orange-300">"Из пепла в пламя"</p>
                
                <Button 
                  onClick={() => setShowPhoenixModal(true)}
                  variant="outline"
                  className="w-full bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 transition-all text-sm md:text-base"
                >
                  Узнать больше об этом архетипе
                </Button>
              </div>
            </div>

            {/* Аватар 2: Королева Перемен */}
            <div className="group p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/893cf94e-b6c8-4637-a050-df6ff6af7551.png"
                  alt="Королева Перемен"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-purple-400/30 shadow-lg shadow-purple-500/20"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-purple-400">КОРОЛЕВА ПЕРЕМЕН</h3>
                <p className="text-base md:text-lg font-semibold text-purple-300">"От замужества к королевству"</p>
                
                <Button 
                  onClick={() => setShowQueenModal(true)}
                  variant="outline"
                  className="w-full bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20 transition-all text-sm md:text-base"
                >
                  Узнать больше об этом архетипе
                </Button>
              </div>
            </div>

            {/* Аватар 3: Богиня Восстановления */}
            <div className="group p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/b0d282c7-a99c-4251-8a18-0c4061573e1a.png"
                  alt="Богиня Восстановления"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-emerald-400/30 shadow-lg shadow-emerald-500/20"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400">БОГИНЯ ВОССТАНОВЛЕНИЯ</h3>
                <p className="text-base md:text-lg font-semibold text-emerald-300">"От рассеяния к целостности"</p>
                
                <Button 
                  onClick={() => setShowGoddessModal(true)}
                  variant="outline"
                  className="w-full bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 transition-all text-sm md:text-base"
                >
                  Узнать больше об этом архетипе
                </Button>
              </div>
            </div>

            {/* Аватар 4: Воительница Света */}
            <div className="group p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/3c76767c-9237-4805-8e1e-68367a8cd34b.png"
                  alt="Воительница Света"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-amber-400/30 shadow-lg shadow-amber-500/20"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-amber-400">ВОИТЕЛЬНИЦА СВЕТА</h3>
                <p className="text-base md:text-lg font-semibold text-amber-300">"От сомнений к уверенности"</p>
                
                <Button 
                  onClick={() => setShowWarriorModal(true)}
                  variant="outline"
                  className="w-full bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20 transition-all text-sm md:text-base"
                >
                  Узнать больше об этом архетипе
                </Button>
              </div>
            </div>
          </div>

          {/* КАК ВЫБРАТЬ АВАТАРА */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-turquoise-600/20 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">
                КАК ВЫБРАТЬ СВОЙ АВАТАР?
              </span>
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="avatar-selection" className="border-purple-500/30">
                <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-lg md:text-xl font-semibold hover:no-underline">
                  Доверься первому порыву
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 md:space-y-6 text-white/90 text-base md:text-lg leading-relaxed pt-4">
                    <p className="text-center">
                      Смотри на описание и прислушивайся к интуиции. Какой аватар "говорит" с тобой? Какое описание заставило твоё сердце биться чаще?
                    </p>
                    
                    <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                      <p className="font-semibold text-purple-300 text-lg md:text-xl">Помни:</p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Нет \"правильного\" или \"неправильного\" аватара",
                          "Каждый архетип — это зеркало твоего пути",
                          "Твой аватар будет прокачиваться ВМЕСТЕ с ТОБОЙ за эти 14 дней",
                          "Выбор аватара — это выбор, какую версию себя ты хочешь встретить"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 md:gap-3">
                            <Icon name="Sparkles" className="text-amber-400 flex-shrink-0 mt-1 animate-pulse-glow" size={18} />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="text-xl md:text-2xl font-bold text-center mt-6 md:mt-8 bg-gradient-to-r from-orange-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                      Выбери аватара и начни свою трансформацию! 🔥👑✨
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* БЛОК 6: ПОЧЕМУ ИМЕННО СЕЙЧАС */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Почему именно <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">9 февраля?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60">(Это не просто дата — это МОМЕНТ)</p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Убывающая луна */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-500/10 to-slate-800/50 border border-indigo-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="text-4xl md:text-5xl">🌙</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-indigo-300">4-я четверть убывающей луны (9-16 февраля)</h3>
                  <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">→ ЛУЧШЕЕ время для:</p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {["Самоанализа", "Очищения тела и ума", "Освобождения от старого"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 md:gap-3">
                        <Icon name="Check" className="text-indigo-400 flex-shrink-0" size={18} />
                        <span className="text-sm md:text-base text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Новолуние */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-600/10 to-slate-800/50 border border-slate-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="text-4xl md:text-5xl">🌑</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-300">НОВОЛУНИЕ 17 февраля</h3>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Icon name="ArrowRight" className="text-slate-400 flex-shrink-0" size={18} />
                      <span className="text-sm md:text-base text-white/80">Новый лунный год начинается</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Icon name="ArrowRight" className="text-slate-400 flex-shrink-0" size={18} />
                      <span className="text-sm md:text-base text-white/80">Новая энергия, новый цикл</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Год Лошади */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="text-5xl">🐴</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-red-400">ГОД КРАСНОЙ ОГНЕННОЙ ЛОШАДИ (2026)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Flame" className="text-red-400 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                      <span className="text-white/80">Происходит раз в 60 лет (следующий в 2086)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" className="text-orange-400 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                      <span className="text-white/80">Энергия стартов, новых начинаний</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Heart" className="text-pink-400 flex-shrink-0 mt-1 animate-float" size={20} />
                      <span className="text-white/80">ОСОБЕННО мощно для женщин</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Sparkles" className="text-amber-400 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                      <span className="text-white/80">Идеальное время переосмыслить себя и свою жизнь</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Вывод */}
          <div className="mt-10 md:mt-12 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-red-600/20 border border-purple-500/30 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Это уникальное время. Оно не вернётся.</p>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              И именно сейчас твоё тело, луна и год синхронизируются
              для твоего <span className="text-amber-400 font-semibold">АПГРЕЙДА</span>.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 7: ЧТО ТЫ ПОЛУЧИШЬ */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              За 14 дней <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">ты получишь</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "Flame", color: "text-orange-400", title: "СОСТОЯНИЕ \"ГОРЯЩИЙ ГЛАЗ\"", desc: "Вернётся ощущение ЖИВОСТИ, вкус к жизни, искра в глазах, которую ты потеряла." },
              { icon: "Zap", color: "text-purple-400", title: "ФИЗИЧЕСКОЕ ВОССТАНОВЛЕНИЕ", desc: "Лёгкость в теле, энергию, избавление от физической тяжести и усталости." },
              { icon: "Brain", color: "text-turquoise-400", title: "МЕНТАЛЬНУЮ ЯСНОСТЬ", desc: "Избавление от мозгового тумана, чёткость в мыслях, освобождение от ненужных забот." },
              { icon: "Home", color: "text-emerald-400", title: "ОЧИЩЕНИЕ ПРОСТРАНСТВА", desc: "Избавление от хлама (как физического, так и энергетического), ощущение безопасности дома." },
              { icon: "Users", color: "text-pink-400", title: "ЖИВОЕ СООБЩЕСТВО", desc: "Поддержка 20-50 женщин, которые понимают, знакомства и дружба, которые останутся с тобой." },
              { icon: "Target", color: "text-amber-400", title: "ЯСНЫЕ НАМЕРЕНИЯ НА 2026", desc: "Вектор движения, понимание, куда идти, чего хочешь достичь в новом году." },
              { icon: "TrendingUp", color: "text-blue-400", title: "ВИДИМЫЙ ПРОГРЕСС", desc: "Твой аватар трансформируется вместе с тобой, ты видишь результат визуально каждый день." },
              { icon: "Gift", color: "text-red-400", title: "ПРИЗ ПО ЗАВЕРШЕНИЮ", desc: "Подарок от Дарьи (зависит от пакета)." },
              { icon: "Award", color: "text-yellow-400", title: "ИНДИВИДУАЛЬНЫЙ АНАЛИЗ", desc: "Нумерология, астрология, Хьюман Дизайн, Икигай (Только в пакетах Премиум и VIP)." },
              { icon: "Crown", color: "text-purple-400", title: "ЛИЧНОЕ СОПРОВОЖДЕНИЕ", desc: "2 недели после завершения квеста Дарья поддерживает лично тебя (только VIP)." }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <Icon 
                  name={item.icon} 
                  className={`${item.color} mb-3 md:mb-4 ${
                    item.icon === 'Flame' || item.icon === 'Zap' || item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                    item.icon === 'Heart' || item.icon === 'Award' || item.icon === 'Crown' || item.icon === 'Gift' ? 'animate-float' :
                    item.icon === 'Users' ? 'icon-hover' :
                    item.icon === 'Target' ? 'animate-wiggle' : ''
                  }`} 
                  size={28} 
                />
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 8: АВТОРИТЕТ (История Дарьи) */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Я прошла этот путь <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">сама</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60">Теперь помогаю другим</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Фото Дарьи */}
            <div className="relative">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/a662e271-dff4-4165-9d8a-5a068854b09c.png"
                  alt="Дарья Цыбульская"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Дарья Цыбульская, 47 лет</h3>
                <p className="text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Юрист по образованию, мама двух сыновей.<br />Живу во Владивостоке, Дальний Восток.</p>
              </div>
            </div>

            {/* История */}
            <div className="space-y-8">
              {/* Было */}
              <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="XCircle" className="text-red-400" size={24} />
                  <span>БЫЛО</span>
                </h4>
                <ul className="space-y-2">
                  {[
                    "Токсичные отношения с мужем (развод)",
                    "Сложная финансовая ситуация",
                    "Психологический кризис (\"Я не хочу жить\")",
                    "Опустошение, выгорание",
                    "Категоричная, жёсткая, недовольная женщина"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="text-red-400">✗</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Стало */}
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                  <span>СТАЛО</span>
                </h4>
                <ul className="space-y-2">
                  {[
                    "Восстановила отношения с бывшим мужем (дружба)",
                    "Вышла из финансовой ямы",
                    "Обрела энергичность, радость, вкус жизни",
                    "Трансформировалась в понимающую, созидающую, радостную женщину, которая любит себя и людей"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Опыт */}
              <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">МОЙ ОПЫТ</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Соорганизатор сообщества "PROЖИЗНЬ" на Дальнем Востоке</li>
                  <li>• Куратор тренерских команд (11 потоков 4-дневной программы)</li>
                  <li>• СоТренер 9 потоков лидерской программы "Контекст"</li>
                  <li>• <strong className="text-purple-400">700+ людей</strong> прошли трансформацию с моим участием</li>
                  <li>• Куратор 5 социальных проектов в Владивостоке</li>
                  <li>• 4 года опыта персонального и группового коачинга</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Миссия */}
          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-turquoise-600/20 border border-purple-500/30 backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-6 text-center">МОЯ МИССИЯ</h4>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mission" className="border-purple-500/30">
                <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-lg font-semibold hover:no-underline">
                  Читать полностью
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-white/90 leading-relaxed pt-4">
                    <p>"Поддерживать и направлять женщин в поднятии энергии, яркости и уникальности (состояние 'Горящий Глаз').</p>
                    <p>Это не имеет возраста и стоимости.</p>
                    <p>Это самое важное — чувствовать себя, жизнь и внутреннюю свободу. От этого напрямую зависят деньги, отношения и реализация.</p>
                    <p>Я научилась быть сама себе психологом. Я легко и с улыбкой отношусь к жизни. И я знаю, что и тебе это по силам.</p>
                    <p className="text-xl font-semibold text-amber-400">Если ты дочитала до этого предложения, то ты точно на верном пути. Тебе точно сюда."</p>
                  </div>
                  <div className="text-center mt-8">
                    <Button 
                      onClick={() => scrollToSection('packages')}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-lg px-12 py-6 shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105 border-none"
                    >
                      Я ТУТ!
                      <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* БЛОК 9: ПАКЕТЫ И ЦЕНЫ */}
      <section id="packages" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Выбери <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">свой пакет</span>
            </h2>
            <p className="text-xl text-white/60">Инвестиция в себя — лучшее решение 2026 года</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* СТАНДАРТ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-700/20 to-slate-800/50 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="text-2xl font-bold mb-2">СТАНДАРТ</h3>
                <div className="text-4xl font-bold text-white mb-2">4 900 ₽</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Полное участие во всех процессах квеста",
                  "Ежедневные практические задания",
                  "Лидерборд + прокачка аватара",
                  "Живое сообщество",
                  "Онлайн-встреча в ZOOM",
                  "Встреча на Двери Возможностей",
                  "Приз по завершению"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => setShowStandardPackageModal(true)}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                size="lg"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>

            {/* ПРЕМИУМ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-purple-600/20 border-2 border-amber-500/50 backdrop-blur-sm hover:border-amber-500/70 transition-all duration-500 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-sm font-bold">
                РЕКОМЕНДУЕМ
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">👑</div>
                <h3 className="text-2xl font-bold mb-2">ПРЕМИУМ</h3>
                <div className="text-4xl font-bold text-amber-400 mb-2">6 900 ₽</div>
                <p className="text-sm text-emerald-400">💰 Экономия: 2000 ₽</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Icon name="Check" className="text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-semibold">ВСЁ из Стандарта</span>
                </li>
                <li className="text-sm font-semibold text-amber-400 mt-4 mb-2">+ ИНДИВИДУАЛЬНЫЙ АНАЛИЗ:</li>
                {[
                  "Нумерология",
                  "Астрология",
                  "Хьюман Дизайн",
                  "Икигай",
                  "Персональные перспективы развития на 2026"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                    <Icon name="Star" className="text-amber-400 flex-shrink-0 mt-0.5 animate-pulse-glow" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => setShowPremiumPackageModal(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg shadow-amber-500/30 transition-all"
                size="lg"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>

            {/* VIP */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-600/20 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-500/70 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-2xl font-bold mb-2">VIP</h3>
                <div className="text-sm text-white/60 mb-2">ВСЁ ВКЛЮЧЕНО</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">9 900 ₽</div>
                <p className="text-sm text-emerald-400">💰 Экономия: 3000 ₽</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-semibold">ВСЁ из Премиума</span>
                </li>
                <li className="text-sm font-semibold text-purple-400 mt-4 mb-2">+ ЛИЧНОЕ СОПРОВОЖДЕНИЕ:</li>
                {[
                  "2 недели после завершения",
                  "Персональная поддержка",
                  "1-на-1 консультации",
                  "Дарья рядом с тобой"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                    <Icon name="Crown" className="text-purple-400 flex-shrink-0 mt-0.5 animate-float" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => setShowVipPackageModal(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none shadow-lg shadow-purple-500/30 transition-all"
                size="lg"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZES SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              🏆 Три уровня признания.
            </h1>
            
            <h3 className="text-2xl font-normal text-white/90">
              Неважно, какое место ты займёшь. Важно, что ты ВЫБРАЛА СЕБЯ.
            </h3>
            
            <div className="max-w-3xl mx-auto text-lg text-white/70 space-y-4">
              <p>
                За 14 дней квеста каждая участница получит признание. Одна станет королевой, 
                вторая — её верной героиней, остальные — светом в сообществе.
              </p>
              <p>
                Все получат награду. Все получат честное признание. Все станут частью чего-то большего.
              </p>
              <p className="font-semibold text-white/90">
                Вот как это работает:
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 1st Place */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-yellow-500/50 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300">
                <div className="text-7xl mb-4 text-center animate-bounce">👑</div>
                
                <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  ПЕРВОЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-white">
                  Манифест Королевы
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="queen-manifesto" className="border-yellow-500/30">
                    <AccordionTrigger className="text-amber-300 hover:text-amber-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты стала королевой своей жизни"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-white/70 pt-4">
                        <p>
                          Королева Апгрейда 2026 — это ты. Та, кто прошла все 14 дней честно, 
                          выполнила каждое задание, и твой аватар светит на максимум.
                        </p>
                        <p>
                          Манифест Королевы — это не просто награда. Это твоё официальное признание. 
                          Печать того, что ты больше не заложница чужой жизни. Ты — королева своей.
                        </p>
                        <p className="text-white font-semibold">
                          💎 Это твой трон. Заработай его.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* 2nd Place */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-slate-400/50 backdrop-blur-sm hover:border-slate-300 transition-all duration-300">
                <div className="text-7xl mb-4 text-center animate-pulse">👑</div>
                
                <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent">
                  ВТОРОЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-white">
                  Свидетельство Героини
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="heroine-certificate" className="border-slate-400/30">
                    <AccordionTrigger className="text-slate-300 hover:text-slate-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты прошла весь путь и стала смелее"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-white/70 pt-4">
                        <p>
                          Героиня Апгрейда 2026 — это ты. Та, кто не сдалась, прошла полный путь трансформации, 
                          и её аватар прокачался до максимума.
                        </p>
                        <p>
                          Свидетельство Героини — это признание твоей силы. Доказательство того, 
                          что ты — героиня, а не просто участница. Ты победила себя.
                        </p>
                        <p className="text-white font-semibold">
                          ⭐ Ты светишь. И об этом узнают все.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-cyan-500/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                <div className="text-7xl mb-4 text-center animate-pulse">👑</div>
                
                <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  ТРЕТЬЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-white">
                  Сертификат Участия
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="participant-certificate" className="border-cyan-500/30">
                    <AccordionTrigger className="text-cyan-300 hover:text-cyan-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты прошла до конца — ты уже победила"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-white/70 pt-4">
                        <p>
                          Участница Апгрейда 2026 — это ты. Каждая, кто дошла до конца этих 14 дней. 
                          Потому что дойти до конца — уже значит изменить себя.
                        </p>
                        <p>
                          Сертификат Участия — это подтверждение того, что ты сделала выбор в пользу себя. 
                          Что ты прошла полный путь. Что ты теперь часть нашего светлого сообщества.
                        </p>
                        <p className="text-white font-semibold">
                          ✨ Твой путь продолжается. И ты не одна.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
              Как определяются победители?
            </h3>
            
            <p className="text-lg text-white/80 mb-6 text-center">
              Мы смотрим на три критерия:
            </p>
            
            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <span className="font-semibold text-white">ЧЕСТНОСТЬ</span> — ты честна с собой и с участницами квеста
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <span className="font-semibold text-white">ВОВЛЕЧЕНИЕ</span> — ты выполняешь задания, участвуешь активно в чате, даешь обратную связь
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <span className="font-semibold text-white">ТРАНСФОРМАЦИЯ</span> — твой аватар прокачивается вместе с тобой, и это видно
                </div>
              </div>
            </div>
            
            <p className="text-lg text-white/90 mt-6 text-center font-semibold">
              Это не конкурс в привычном смысле. Это праздник того, что ты выбрала себя.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 10: FAQ */}
      <section id="faq" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Частые <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">вопросы</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Сколько времени в день нужно уделять?",
                a: "20 минут утром + 20 минут вечером = 40 минут в день. Это меньше, чем 1 серия в Netflix."
              },
              {
                q: "Я не верю в свой успех. Получится ли у меня?",
                a: "Я прошла это сама, когда казалось, что не получится. 700+ людей прошли с моим участием. Если ты дочитала до этого — ты уже на верном пути."
              },
              {
                q: "Что если я пропущу день?",
                a: "Ничего страшного. Это не строгий курс. Но суть квеста в ежедневном процессе. Если пропустила — просто продолжи завтра."
              },
              {
                q: "Это только для женщин?",
                a: "Да, это специально для женщин 35+. Контекст, практики, архетипы аватаров — всё подобрано именно для женской трансформации."
              },
              {
                q: "Что если я не верю в астрологию?",
                a: "Астрология здесь контекст, а не суть. Суть — это практические ежедневные задания. Они работают вне зависимости от веры."
              },
              {
                q: "Можно ли участвовать, если я в другом часовом поясе?",
                a: "Да, всё асинхронно. Задания присылаются в Telegram-чат, ты выполняешь в удобное для тебя время."
              },
              {
                q: "Что входит в \"приз по завершению\"?",
                a: "Это либо сертификат + подарок (Стандарт), либо специальный подарок + сертификат (Премиум/VIP). Точный список объявим в квесте."
              },
              {
                q: "Если я куплю VIP, мне хватит 2 недель сопровождения?",
                a: "Это стартовая поддержка для закрепления результатов. Многие участницы продолжают работать с Дарьей дальше (это отдельная опция)."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-purple-300">{item.q}</h3>
                <p className="text-white/80 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    { icon: "Sunrise", text: "Пройдёшь в новый цикл жизни через \"Дверь Возможностей\"" },
                    { icon: "Gamepad2", text: "Увидишь всё визуально через прокачку своего аватара" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <Icon 
                        name={item.icon} 
                        className={`text-amber-400 flex-shrink-0 mt-1 ${
                          item.icon === 'Zap' ? 'animate-pulse-glow' :
                          item.icon === 'Heart' ? 'animate-float' :
                          item.icon === 'Eye' || item.icon === 'Users' ? 'icon-hover' :
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
                    А ты уже пришла сюда с отклик — значит, ты уже на старте.
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

      {/* МОДАЛЬНОЕ ОКНО РЕЗУЛЬТАТА ЧЕК-ЛИСТА */}
      {showCheckResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-emerald-900 to-purple-900 border border-emerald-500/30 shadow-2xl">
            <button 
              onClick={() => setShowCheckResult(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="CheckCircle2" className="text-emerald-400 animate-pulse-glow" size={48} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Нужна ли тебе эта программа?</h3>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-6">БЕЗ СОМНЕНИЙ — НУЖНА!</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p>
                    Ты узнала себя в одном из этих пунктов — и это сигнал.
                  </p>
                  <p>
                    Твоя энергия иссякает. Твоё тело тяжелеет. Твоя душа просит помощи.
                  </p>
                  <p className="font-semibold text-emerald-300">
                    Апгрейд — это ответ на этот сигнал.
                  </p>
                  <p>
                    За 14 дней ты не будешь слушать лекции. Ты будешь ПРАКТИКОВАТЬ. 40 минут в день — и твой аватар прокачивается вместе с тобой.
                  </p>
                  <p>
                    Ты вернёшь лёгкость в теле, ясность в голове и главное — состояние "Горящий Глаз".
                  </p>
                  <p>
                    Впервые за долгое время ты будешь делать что-то только для себя. Рядом с 30-50 женщинами, которые чувствуют то же самое.
                  </p>
                  <p className="font-semibold text-purple-300">
                    Это не курс. Это перезагрузка.
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-center text-amber-400">
                    Твоя перезагрузка.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-emerald-950/50 to-purple-950/50">
              <Button 
                onClick={() => {
                  setShowCheckResult(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 border-none shadow-lg w-full"
              >
                Выбрать пакет
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ОГНЕННАЯ ФЕНИКС */}
      {showPhoenixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-orange-900 to-red-900 border border-orange-500/30 shadow-2xl">
            <button 
              onClick={() => setShowPhoenixModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">🔥</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-400">ОГНЕННАЯ ФЕНИКС</h3>
                <p className="text-lg sm:text-xl italic text-orange-300/80 mb-6">"Из пепла в пламя"</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-orange-300/80">
                    "Для тех, кто прошёл выгорание и готов воскреситься."
                  </p>
                  
                  <p>
                    Ты была в огне. Может быть, любви, карьеры, забот о других. Ты горела, пока не превратилась в пепел.
                  </p>
                  
                  <p>
                    Теперь внутри холодно. Пусто. Безжизненно.
                  </p>
                  
                  <p>
                    Но Феникс знает секрет: из пепла не только приходит конец. Из пепла рождается НОВОЕ ОГОНЬ.
                  </p>
                  
                  <p className="font-semibold text-orange-300">Твой архетип Феникса означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✨ Ты пережила сложное, и это сделало тебя сильнее</li>
                    <li>✨ Ты готова воскреситься, но уже другой — мудрой и осознанной</li>
                    <li>✨ Твой огонь вернётся, но теперь это будет ТВОЙ огонь, а не чужой</li>
                    <li>✨ За 14 дней ты научишься гореть для себя, а не для других</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-orange-950/50 to-red-950/50">
              <Button 
                onClick={() => {
                  setShowPhoenixModal(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 border-none shadow-lg w-full"
              >
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО КОРОЛЕВА ПЕРЕМЕН */}
      {showQueenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-purple-900 to-pink-900 border border-purple-500/30 shadow-2xl">
            <button 
              onClick={() => setShowQueenModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">👑</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">КОРОЛЕВА ПЕРЕМЕН</h3>
                <p className="text-lg sm:text-xl italic text-purple-300/80 mb-6">"От замужества к королевству"</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-purple-300/80">
                    "Для тех, кто готов стать главной героиней своей жизни."
                  </p>
                  
                  <p>
                    Ты жила для других. Для мужа, детей, семьи, работы, ожиданий.
                  </p>
                  
                  <p>
                    Где-то внутри забыла про СЕБЯ. Забыла, что ты — главная героиня своей жизни, а не второстепенный персонаж в чужой истории.
                  </p>
                  
                  <p>
                    Королева Перемен знает правду: ты можешь быть королевой своего королевства. Не потому что власть над кем-то, а потому что ВЛАСТЬ НАД СОБОЙ.
                  </p>
                  
                  <p className="font-semibold text-purple-300">Твой архетип Королевы означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>👑 Ты готова взять ответственность за свою жизнь</li>
                    <li>👑 Ты учишься расставлять приоритеты: сначала ТЫ, потом остальные</li>
                    <li>👑 Твой голос, твои желания, твои мечты — ВАЖНЫ</li>
                    <li>👑 За 14 дней ты станешь королевой, а не служанкой в своей жизни</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-purple-950/50 to-pink-950/50">
              <Button 
                onClick={() => {
                  setShowQueenModal(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none shadow-lg w-full"
              >
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО БОГИНЯ ВОССТАНОВЛЕНИЯ */}
      {showGoddessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-900 border border-emerald-500/30 shadow-2xl">
            <button 
              onClick={() => setShowGoddessModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">✨</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-400">БОГИНЯ ВОССТАНОВЛЕНИЯ</h3>
                <p className="text-lg sm:text-xl italic text-emerald-300/80 mb-6">"От рассеяния к целостности"</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-emerald-300/80">
                    "Для тех, кто ищет гармонию между материальным и духовным."
                  </p>
                  
                  <p>
                    Ты рассеяна. Твоя энергия разбросана по сотням дел, забот, обязательств.
                  </p>
                  
                  <p>
                    Куски тебя везде: на работе, дома, с друзьями, в социальных сетях. Но нигде ты полностью не здесь.
                  </p>
                  
                  <p>
                    Богиня Восстановления знает силу ЦЕЛОСТНОСТИ. Когда все части тебя собраны вместе, когда тело, ум и душа работают в унисон.
                  </p>
                  
                  <p className="font-semibold text-emerald-300">Твой архетип Богини означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✨ Ты ищешь баланс — не фанатизм, а гармонию</li>
                    <li>✨ Ты понимаешь, что забота о себе — это не эгоизм, а инвестиция</li>
                    <li>✨ Ты готова объединить материальное и духовное в единое целое</li>
                    <li>✨ За 14 дней ты станешь собранной, центрированной, целостной</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-emerald-950/50 to-teal-950/50">
              <Button 
                onClick={() => {
                  setShowGoddessModal(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-none shadow-lg w-full"
              >
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ВОИТЕЛЬНИЦА СВЕТА */}
      {showWarriorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-amber-900 to-yellow-900 border border-amber-500/30 shadow-2xl">
            <button 
              onClick={() => setShowWarriorModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">🌟</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-400">ВОИТЕЛЬНИЦА СВЕТА</h3>
                <p className="text-lg sm:text-xl italic text-amber-300/80 mb-6">"От сомнений к уверенности"</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-amber-300/80">
                    "Для тех, кто готов встать и действовать."
                  </p>
                  
                  <p>
                    Ты знаешь, что нужно изменить. Но ты медлишь. Сомневаешься. Боишься.
                  </p>
                  
                  <p>
                    Внутри тебя есть сила, но её заковало сомнение. Как цепи, которые не дают тебе двигаться вперёд.
                  </p>
                  
                  <p>
                    Воительница Света знает правду: свет не приходит с неба. Свет зажигается ВНУТРИ, когда ты решаешься действовать несмотря на страх.
                  </p>
                  
                  <p className="font-semibold text-amber-300">Твой архетип Воительницы означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>⚔️ Ты готова сражаться за себя (не с другими, а с собой)</li>
                    <li>⚔️ Ты понимаешь: без действия нет результата</li>
                    <li>⚔️ Ты будешь идти, даже если страшно, потому что цена неверия выше</li>
                    <li>⚔️ За 14 дней ты превратишь сомнение в уверенность</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-amber-950/50 to-yellow-950/50">
              <Button 
                onClick={() => {
                  setShowWarriorModal(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 border-none shadow-lg w-full"
              >
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ПАКЕТ СТАНДАРТ */}
      {showStandardPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-500/30 shadow-2xl">
            <button 
              onClick={() => setShowStandardPackageModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">📦</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-300">ПАКЕТ СТАНДАРТ</h3>
                <p className="text-lg sm:text-xl text-slate-400 mb-6">4 900 ₽</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-white/60">
                    Здесь скоро появится подробное описание пакета...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
              <Button 
                onClick={() => setShowStandardPackageModal(false)}
                size="lg"
                className="bg-white/10 hover:bg-white/20 border border-white/20 w-full"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ПАКЕТ ПРЕМИУМ */}
      {showPremiumPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-purple-900 to-amber-900 border border-amber-500/30 shadow-2xl">
            <button 
              onClick={() => setShowPremiumPackageModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">👑</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-400">ПАКЕТ ПРЕМИУМ</h3>
                <p className="text-lg sm:text-xl text-amber-300 mb-6">6 900 ₽</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-white/60">
                    Здесь скоро появится подробное описание пакета...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-purple-950/50 to-amber-950/50">
              <Button 
                onClick={() => setShowPremiumPackageModal(false)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg w-full"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО ПАКЕТ VIP */}
      {showVipPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-purple-900 to-pink-900 border border-purple-500/30 shadow-2xl">
            <button 
              onClick={() => setShowVipPackageModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">💎</div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">ПАКЕТ VIP</h3>
                <p className="text-lg sm:text-xl text-purple-300 mb-6">9 900 ₽</p>
                
                <div className="text-left space-y-4 text-white/90 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-white/60">
                    Здесь скоро появится подробное описание пакета...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-purple-950/50 to-pink-950/50">
              <Button 
                onClick={() => setShowVipPackageModal(false)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none shadow-lg w-full"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* КНОПКА TELEGRAM БОТА */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
        <div className="hidden md:block bg-gradient-to-r from-purple-900/90 to-amber-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30 shadow-xl animate-fade-in">
          <p className="text-white text-sm font-medium">Есть вопросы? Спроси помошницу! 💜</p>
        </div>
        
        <a
          href="https://t.me/KvestUpgrade_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50 group animate-pulse-glow"
          title="Задать вопрос помощнице"
        >
          <Icon name="MessageCircle" size={28} className="text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full border-2 border-slate-950 animate-pulse"></span>
        </a>
      </div>
    </div>
  );
}