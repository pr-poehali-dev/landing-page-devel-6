import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HeroTimer, StickyTimer } from '@/components/CountdownTimer';
import PageHeader from '@/components/page/PageHeader';
import AvatarModals from '@/components/page/AvatarModals';
import PackageModals from '@/components/page/PackageModals';

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
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 15000);
      return () => clearTimeout(timer);
    }
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
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-violet-900 to-rose-950 text-white overflow-x-hidden">
      <PageHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-amber-400/20 border border-amber-400/40 text-sm font-medium backdrop-blur-sm text-warm-gold">
                  Квест-челлендж для женщин
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-purple-300/70 line-through">Из усталости</span>
                <br />
                <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  в Горящие Глаза
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-400">за 14 дней</span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <span className="text-warm-gold/80">
                  с 9 по 23 апреля
                </span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-amber-100/80">
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-amber-300 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                  <span>Восстановление тела, разума, пространства</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-rose-300 flex-shrink-0 mt-1 icon-hover" size={20} />
                  <span>Игровой формат + живое сообщество</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-fuchsia-300 flex-shrink-0 mt-1 animate-pulse-glow" size={20} />
                  <span>Твой персональный аватар трансформируется с тобой</span>
                </div>
              </div>

              {/* COUNTDOWN TIMER AND SPOTS */}
              <HeroTimer />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('packages')} 
                  size="lg"
                  className="bg-gradient-to-r from-fuchsia-600 to-amber-500 hover:from-fuchsia-700 hover:to-amber-600 text-lg px-8 py-6 shadow-2xl shadow-amber-500/40 transition-all duration-300 hover:scale-105 border-none font-bold"
                >
                  ВЫБРАТЬ СВОЙ ПАКЕТ
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')} 
                  size="lg"
                  variant="outline"
                  className="bg-amber-500/10 border-amber-400/30 hover:bg-amber-500/20 text-warm-gold text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Узнать больше
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-6 text-xs sm:text-sm text-amber-100/60">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-amber-300 animate-bounce-gentle" />
                  <span>Старт: 9 апреля 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" size={16} className="text-rose-300 animate-float" />
                  <span>500+ женщин трансформировались</span>
                </div>
              </div>
            </div>

            {/* Visual - Avatar Evolution */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/30 border border-amber-400/20 min-h-[600px] md:min-h-[700px]">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/dcd3d481-4757-4df9-bf9e-02aaade6081b.png" 
                  alt="Эволюция аватара: Level 1 → Level 4"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-amber-50/85 mb-2">Трансформация твоего аватара:</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full text-xs">Level 1</span>
                    <Icon name="ArrowRight" size={16} className="text-fuchsia-300 group-hover:translate-x-1 transition-transform" />
                    <span className="px-3 py-1 bg-fuchsia-600/80 backdrop-blur-sm rounded-full text-xs">Level 4 ЛЕГЕНДАРНЫЙ</span>
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
              <span className="text-purple-300/70">Что тебе</span> <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-400 bg-clip-text text-transparent">знакомо?</span>
            </h2>
            <p className="text-lg md:text-xl text-warm-gold/70">Пройди чек-лист</p>
          </div>

          <div className="relative">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
              {[
                "Энергетическая и психологическая усталость",
                "Апатия, раздражение, \"ничего не хочется\"",
                "Живёшь в \"дне сурка\" — одни и те же дни",
                "Редко испытываешь радость и вдохновение",
                "Физическая тяжесть, потеря лёгкости в теле",
                "\"Спасательный круг\" после праздников",
                "Нет ощущения собственной ценности",
                "Чувство внутренней опасности и неуверенности"
              ].map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300 group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => {
                    const newChecked = [...checkedItems];
                    newChecked[index] = !newChecked[index];
                    setCheckedItems(newChecked);
                  }}
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                    checkedItems[index] 
                      ? 'border-fuchsia-400 bg-fuchsia-600' 
                      : 'border-white/30 group-hover:border-fuchsia-400'
                  }`}>
                    {checkedItems[index] && (
                      <Icon name="Check" className="text-white" size={14} />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-amber-50/85 group-hover:text-white transition-colors leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            {/* Последний блок с кнопкой */}
            <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
              <div 
                className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  const newChecked = [...checkedItems];
                  newChecked[8] = !newChecked[8];
                  setCheckedItems(newChecked);
                }}
              >
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                  checkedItems[8] 
                    ? 'border-fuchsia-400 bg-fuchsia-600' 
                    : 'border-white/30 group-hover:border-fuchsia-400'
                }`}>
                  {checkedItems[8] && (
                    <Icon name="Check" className="text-white" size={14} />
                  )}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-amber-50/85 group-hover:text-white transition-colors leading-relaxed">Потеря смысла в том, что раньше вдохновляло</p>
              </div>

              {/* Пустой блок с кнопкой */}
              <div className="relative flex items-end justify-end p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-amber-500/10 border border-fuchsia-500/20 backdrop-blur-sm min-h-[80px] sm:min-h-[100px]">
                <Button
                  onClick={() => setShowCheckResult(true)}
                  className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 border-none shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105 text-base sm:text-lg font-semibold px-8 py-4 sm:px-10 sm:py-5 rounded-xl"
                >
                  Проверить
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-amber-500/10 border border-fuchsia-500/20 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold">
              Это не депрессия. Это <span className="text-amber-400">СИГНАЛ.</span>
            </p>
            <p className="text-base md:text-xl text-amber-50/85 leading-relaxed">
              Твоё тело, разум и душа говорят:<br />
              <span className="text-fuchsia-300 font-semibold">'Пришло время по-новому взглянуть на себя.'</span>
            </p>
          </div>
        </div>
      </section>

      {/* РЕШЕНИЕ */}
      <section id="program" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              <span className="text-purple-300/70">АПГРЕЙД 2026:</span> <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-400 bg-clip-text text-transparent">Не курс. Не теория. ПРОЦЕСС.</span>
            </h2>

          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* ЧТО ЭТО НЕ ЯВЛЯЕТСЯ */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-red-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <Icon name="X" className="text-red-400" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-warm-gold">ЭТО НЕ</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Не записанные лекции",
                  "Не стандартная избитая информация",
                  "Не ещё одна стеклотека знаний",
                  "Не соло-работа в одиночестве"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-amber-50/75">
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
                <h3 className="text-2xl md:text-3xl font-bold text-warm-gold">ЭТО</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "ТОЛЬКО ПРАКТИКА + ЖИВОЕ СООБЩЕСТВО",
                  "Ежедневные простые, но эффективные задания",
                  "20 мин утром + 20 мин вечером — это всё",
                  "Игровой формат с лидербордом и аватарами",
                  "Живое взаимодействие со мной и участницами в чате"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-amber-50/95">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* КАК ЭТО РАБОТАЕТ */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-amber-500/10 to-turquoise-500/10 border border-fuchsia-500/20 backdrop-blur-sm space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-amber-500/20 flex items-center justify-center">
                  <Icon name="Gamepad2" className="text-fuchsia-300 animate-wiggle" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-warm-gold">КАК РАБОТАЕТ</h3>
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
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-amber-50/95">
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
          <div className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-turquoise-600/20 border border-fuchsia-500/30 backdrop-blur-sm text-center space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-warm-gold">ИТОГ ЗА 14 ДНЕЙ</h3>
            <p className="text-lg md:text-xl text-amber-50/95 leading-relaxed">
              Ты не просто пройдёшь программу.
            </p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Ты <span className="text-fuchsia-300">ПРОЖИВЁШЬ</span> маленькую, но насыщенную <span className="text-amber-400">другую ЖИЗНЬ</span>,
              в которой поймёшь, что значит состояние <span className="text-rose-300">'Горящий Глаз'</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ТАЙМЛАЙН КВЕСТА */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">Таймлайн квеста</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-50/65">Две недели — два этапа трансформации</p>
          </div>

          <div className="space-y-8">
            {/* НЕДЕЛЯ 1: ОЧИЩЕНИЕ */}
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-slate-800/50 border border-fuchsia-500/20 backdrop-blur-sm hover:border-fuchsia-500/40 transition-all duration-500 group">
              <div className="absolute -left-3 md:-left-4 top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-fuchsia-600 border-2 md:border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                1
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
                <div>
                  <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-fuchsia-600/20 border border-fuchsia-500/30 text-xs md:text-sm font-semibold mb-3 md:mb-4">
                    НЕДЕЛЯ 1: ОЧИЩЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-amber-50/65 mb-4 md:mb-6">
                    <Icon name="Calendar" size={16} className="animate-bounce-gentle" />
                    <span>с 9 по 16 апреля</span>
                  </div>
                  <div className="space-y-2 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Search" className="text-fuchsia-300 icon-hover" size={18} />
                      <span className="text-sm">Самоанализ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-fuchsia-300 animate-pulse-glow" size={18} />
                      <span className="text-sm">Очищение тела, ума, пространства</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Trash2" className="text-fuchsia-300 icon-hover" size={18} />
                      <span className="text-sm">Избавление от ненужного хлама</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Убывающая луна помогает отпустить</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-3 md:space-y-4">
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Icon name="User" className="text-fuchsia-300 icon-hover" size={18} />
                      <span className="text-sm md:text-base font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-amber-50/85 flex-wrap">
                      <span className="px-2 md:px-3 py-1 bg-slate-700 rounded-full text-xs md:text-sm">Level 1</span>
                      <Icon name="ArrowRight" className="text-fuchsia-300 group-hover:translate-x-1 transition-transform" size={14} />
                      <span className="px-2 md:px-3 py-1 bg-fuchsia-600 rounded-full text-xs md:text-sm">Level 2</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Icon name="Heart" className="text-amber-400 animate-float" size={18} />
                      <span className="text-sm md:text-base font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-sm md:text-base text-amber-50/85">От усталости к лёгкости</p>
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
                  <div className="flex items-center gap-2 text-sm md:text-base text-amber-50/65 mb-4 md:mb-6">
                    <Icon name="Calendar" size={16} className="animate-bounce-gentle" />
                    <span>с 17 по 23 апреля</span>
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
                    <div className="flex items-center gap-3 text-amber-50/85 flex-wrap">
                      <span className="px-3 py-1 bg-fuchsia-600 rounded-full text-sm">Level 2</span>
                      <Icon name="ArrowRight" className="text-amber-400" size={16} />
                      <span className="px-3 py-1 bg-amber-600 rounded-full text-sm">Level 3</span>
                      <Icon name="ArrowRight" className="text-rose-300" size={16} />
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-turquoise-600 rounded-full text-sm font-bold">Level 4 ЛЕГЕНДАРНЫЙ</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-600/20 to-turquoise-600/20 border border-amber-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Flame" className="text-rose-300" size={20} />
                      <span className="font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-amber-50/95 font-semibold">От пробуждения к ГОРЯЩЕМУ ГЛАЗУ 🔥</p>
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
                          className={`text-rose-300 ${
                            item.icon === 'Trophy' ? 'animate-float' :
                            item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                            item.icon === 'Sunrise' ? 'animate-float' : ''
                          }`}
                          size={18} 
                        />
                      </div>
                      <p className="text-xs md:text-sm text-amber-50/85">{item.text}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              Выбери <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">своего аватара</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-50/65">Твой персональный путь трансформации за 14 дней</p>
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
                <h3 className="text-xl md:text-2xl font-bold text-warm-gold">ОГНЕННАЯ ФЕНИКС</h3>
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
            <div className="group p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-slate-800/50 border border-fuchsia-500/20 backdrop-blur-sm hover:border-fuchsia-500/40 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/893cf94e-b6c8-4637-a050-df6ff6af7551.png"
                  alt="Королева Перемен"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-fuchsia-400/30 shadow-lg shadow-amber-500/20"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-warm-gold">КОРОЛЕВА ПЕРЕМЕН</h3>
                <p className="text-base md:text-lg font-semibold text-purple-300">"От замужества к королевству"</p>
                
                <Button 
                  onClick={() => setShowQueenModal(true)}
                  variant="outline"
                  className="w-full bg-fuchsia-500/10 border-fuchsia-500/30 hover:bg-fuchsia-500/20 transition-all text-sm md:text-base"
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
                <h3 className="text-xl md:text-2xl font-bold text-warm-gold">БОГИНЯ ВОССТАНОВЛЕНИЯ</h3>
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
                <h3 className="text-xl md:text-2xl font-bold text-warm-gold">ВОИТЕЛЬНИЦА СВЕТА</h3>
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
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-turquoise-600/20 border border-fuchsia-500/30 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-warm-gold">
              <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">
                КАК ВЫБРАТЬ СВОЙ АВАТАР?
              </span>
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="avatar-selection" className="border-fuchsia-500/30">
                <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-lg md:text-xl font-semibold hover:no-underline">
                  Доверься первому порыву
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 md:space-y-6 text-amber-50/95 text-base md:text-lg leading-relaxed pt-4">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              Почему именно <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">9 апреля?</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-50/65">(Это не просто дата — это МОМЕНТ)</p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Убывающая луна */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/e36389d6-989d-4b83-a2c9-79594f97d380.jpg" 
                  alt="Убывающая луна"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-warm-gold">4-я четверть убывающей луны (9-15 апреля)</h3>
                  <p className="text-sm md:text-base text-amber-50/85 mb-3 md:mb-4">→ ЛУЧШЕЕ время для:</p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {["Самоанализа", "Очищения тела и ума", "Освобождения от старого"].map((item, index) => (
                      <li key={index} className="text-sm md:text-base text-amber-50/85">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Новолуние */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-600/10 to-slate-800/50 border border-slate-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/c86b4b78-1deb-4b1c-83da-77ce0bddb22b.jpg" 
                  alt="Новолуние"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-warm-gold">НОВОЛУНИЕ 17 апреля</h3>
                  <div className="space-y-1.5 md:space-y-2">
                    <p className="text-sm md:text-base text-amber-50/85">• Новый лунный год начинается</p>
                    <p className="text-sm md:text-base text-amber-50/85">• Новая энергия, новый цикл</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Год Лошади */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/6b8388ca-b9c0-4888-80bf-83624470df8f.jpg" 
                  alt="Год Лошади"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-warm-gold">ГОД КРАСНОЙ ОГНЕННОЙ ЛОШАДИ (2026)</h3>
                  <div className="space-y-3">
                    <p className="text-amber-50/85">• Происходит раз в 60 лет (следующий в 2086)</p>
                    <p className="text-amber-50/85">• Энергия стартов, новых начинаний</p>
                    <p className="text-amber-50/85">• ОСОБЕННО мощно для женщин</p>
                    <p className="text-amber-50/85">• Идеальное время переосмыслить себя и свою жизнь</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Вывод */}
          <div className="mt-10 md:mt-12 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-red-600/20 border border-fuchsia-500/30 backdrop-blur-sm text-center">
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Это уникальное время. Оно не вернётся.</p>
            <p className="text-base md:text-xl text-amber-50/95 leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              За 14 дней <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">ты получишь</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "Flame", color: "text-orange-400", title: "СОСТОЯНИЕ \"ГОРЯЩИЙ ГЛАЗ\"", desc: "Вернётся ощущение ЖИВОСТИ, вкус к жизни, искра в глазах, которую ты потеряла." },
              { icon: "Zap", color: "text-fuchsia-300", title: "ФИЗИЧЕСКОЕ ВОССТАНОВЛЕНИЕ", desc: "Лёгкость в теле, энергию, избавление от физической тяжести и усталости." },
              { icon: "Brain", color: "text-rose-300", title: "МЕНТАЛЬНУЮ ЯСНОСТЬ", desc: "Избавление от мозгового тумана, чёткость в мыслях, освобождение от ненужных забот." },
              { icon: "Home", color: "text-emerald-400", title: "ОЧИЩЕНИЕ ПРОСТРАНСТВА", desc: "Избавление от хлама (как физического, так и энергетического), ощущение безопасности дома." },
              { icon: "Users", color: "text-pink-400", title: "ЖИВОЕ СООБЩЕСТВО", desc: "Поддержка 20-50 женщин, которые понимают, знакомства и дружба, которые останутся с тобой." },
              { icon: "Target", color: "text-amber-400", title: "ЯСНЫЕ НАМЕРЕНИЯ НА 2026", desc: "Вектор движения, понимание, куда идти, чего хочешь достичь в новом году." },
              { icon: "TrendingUp", color: "text-blue-400", title: "ВИДИМЫЙ ПРОГРЕСС", desc: "Твой аватар трансформируется вместе с тобой, ты видишь результат визуально каждый день." },
              { icon: "Gift", color: "text-red-400", title: "ПРИЗ ПО ЗАВЕРШЕНИЮ", desc: "Подарок от Дарьи (зависит от пакета)." },
              { icon: "Award", color: "text-yellow-400", title: "ИНДИВИДУАЛЬНЫЙ АНАЛИЗ", desc: "Нумерология, астрология, Хьюман Дизайн, Икигай (Только в пакетах Премиум и VIP)." },
              { icon: "Crown", color: "text-fuchsia-300", title: "ЛИЧНОЕ СОПРОВОЖДЕНИЕ", desc: "2 недели после завершения квеста Я поддержу лично тебя (только VIP)." }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300 group"
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
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-warm-gold">{item.title}</h3>
                <p className="text-amber-50/75 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 8: АВТОРИТЕТ (История Дарьи) */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              Я прошла этот путь <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">сама</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-50/65">Теперь помогаю другим</p>
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
                <h3 className="text-2xl font-bold mb-2 text-warm-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Дарья Цыбульская, 47 лет</h3>
                <p className="text-amber-50/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Юрист по образованию, мама двух сыновей.<br />Живу во Владивостоке, Дальний Восток.</p>
              </div>
            </div>

            {/* История */}
            <div className="space-y-8">
              {/* Было */}
              <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-warm-gold">
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
                    <li key={index} className="flex items-start gap-3 text-amber-50/85">
                      <span className="text-red-400">✗</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Стало */}
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-warm-gold">
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
                    <li key={index} className="flex items-start gap-3 text-amber-50/85">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Опыт */}
              <div className="p-6 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 text-warm-gold">МОЙ ОПЫТ</h4>
                <ul className="space-y-2 text-sm text-amber-50/85">
                  <li>• Соорганизатор сообщества "PROЖИЗНЬ" на Дальнем Востоке</li>
                  <li>• Куратор тренерских команд (11 потоков 4-дневной программы)</li>
                  <li>• СоТренер 9 потоков лидерской программы "Контекст"</li>
                  <li>• <strong className="text-fuchsia-300">700+ людей</strong> прошли трансформацию с моим участием</li>
                  <li>• Куратор 5 социальных проектов в Владивостоке</li>
                  <li>• 4 года опыта персонального и группового коачинга</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Миссия */}
          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-turquoise-600/20 border border-fuchsia-500/30 backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-6 text-center text-warm-gold">МОЯ МИССИЯ</h4>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mission" className="border-fuchsia-500/30">
                <AccordionTrigger className="text-amber-400 hover:text-amber-300 text-lg font-semibold hover:no-underline">
                  Читать полностью
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-amber-50/95 leading-relaxed pt-4">
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
                      className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 text-lg px-12 py-6 shadow-2xl shadow-amber-500/40 transition-all duration-300 hover:scale-105 border-none"
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-glow-gold">
              Выбери <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">свой пакет</span>
            </h2>
            <p className="text-xl text-amber-50/65">Инвестиция в себя — лучшее решение 2026 года</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* СТАНДАРТ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-700/20 to-slate-800/50 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="p-4 rounded-2xl bg-slate-700/40">
                    <img 
                      src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/bfca9eb8-4131-462c-80d5-cebde3d6162b.jpg" 
                      alt="Стандарт"
                      className="w-16 h-16 object-contain animate-pulse-glow"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-warm-gold">СТАНДАРТ</h3>
                <div className="text-4xl font-bold text-white mb-2">6 490 ₽</div>
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
                  <li key={index} className="flex items-start gap-3 text-amber-50/85 text-sm">
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
                РЕГИСТРАЦИЯ
              </Button>
            </div>

            {/* ПРЕМИУМ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-violet-600/20 border-2 border-amber-500/50 backdrop-blur-sm hover:border-amber-500/70 transition-all duration-500 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-sm font-bold">
                РЕКОМЕНДУЕМ
              </div>
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-fuchsia-600/30 to-amber-600/30">
                    <img 
                      src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/6a25d76e-6165-4749-9061-24561759b39f.jpg" 
                      alt="Премиум"
                      className="w-16 h-16 object-contain animate-float"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-warm-gold">ПРЕМИУМ</h3>
                <div className="text-4xl font-bold text-amber-400 mb-2">8 900 ₽</div>
                <p className="text-sm text-emerald-400">💰 Экономия: 2000 ₽</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-amber-50/85 text-sm">
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
                  <li key={index} className="flex items-start gap-3 text-amber-50/85 text-sm">
                    <Icon name="Star" className="text-amber-400 flex-shrink-0 mt-0.5 animate-pulse-glow" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => setShowPremiumPackageModal(true)}
                className="w-full bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 border-none shadow-lg shadow-amber-500/30 transition-all"
                size="lg"
              >
                РЕГИСТРАЦИЯ
              </Button>
            </div>

            {/* VIP */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-pink-600/20 to-violet-600/20 border-2 border-fuchsia-500/50 backdrop-blur-sm hover:border-fuchsia-500/70 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-fuchsia-600/30 to-pink-600/30">
                    <img 
                      src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/13b3cf95-5a88-4410-9274-a9df7724552e.jpg" 
                      alt="VIP"
                      className="w-16 h-16 object-contain animate-pulse"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-warm-gold">VIP</h3>
                <div className="text-sm text-amber-50/65 mb-2">ВСЁ ВКЛЮЧЕНО</div>
                <div className="text-4xl font-bold text-fuchsia-300 mb-2">12 490 ₽</div>
                <p className="text-sm text-emerald-400">💰 Экономия: 3000 ₽</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-amber-50/85 text-sm">
                  <Icon name="Check" className="text-fuchsia-300 flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-semibold">ВСЁ из Премиума</span>
                </li>
                <li className="text-sm font-semibold text-fuchsia-300 mt-4 mb-2">+ ЛИЧНОЕ СОПРОВОЖДЕНИЕ:</li>
                {[
                  "2 недели после завершения",
                  "Персональная поддержка",
                  "1-на-1 консультации",
                  "Дарья рядом с тобой"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-amber-50/85 text-sm">
                    <Icon name="Crown" className="text-fuchsia-300 flex-shrink-0 mt-0.5 animate-float" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => setShowVipPackageModal(true)}
                className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 border-none shadow-lg shadow-amber-500/30 transition-all"
                size="lg"
              >
                РЕГИСТРАЦИЯ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZES SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-slate-950 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-gold">
              🏆 Три уровня признания.
            </h1>
            
            <h3 className="text-2xl font-normal text-warm-gold">
              Неважно, какое место ты займёшь. Важно, что ты ВЫБРАЛА СЕБЯ.
            </h3>
            
            <div className="max-w-3xl mx-auto text-lg text-amber-50/75 space-y-4">
              <p>
                За 14 дней квеста каждая участница получит признание. Одна станет королевой, 
                вторая — героиней, остальные — светом в сообществе.
              </p>
              <p>
                Все получат награду. Все получат честное признание. Все станут частью чего-то большего.
              </p>
              <p className="font-semibold text-amber-50/95">
                Вот как это работает:
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 1st Place */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-2 border-yellow-500/50 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/7d1da4ec-9d45-405d-bd3b-d97da9137318.jpg" 
                    alt="Золотая корона"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-center text-warm-gold">
                  ПЕРВОЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-warm-gold">
                  Манифест Королевы
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="queen-manifesto" className="border-yellow-500/30">
                    <AccordionTrigger className="text-amber-300 hover:text-amber-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты стала королевой своей жизни"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-amber-50/75 pt-4">
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
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/46f24e4b-36f7-413f-b4f0-f0828585094a.jpg" 
                    alt="Серебряная корона"
                    className="w-24 h-24 object-contain animate-pulse"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-center text-warm-gold">
                  ВТОРОЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-warm-gold">
                  Свидетельство Героини
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="heroine-certificate" className="border-slate-400/30">
                    <AccordionTrigger className="text-slate-300 hover:text-slate-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты прошла весь путь и стала смелее"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-amber-50/75 pt-4">
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
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/8c05b7be-44c2-4357-ad88-4e95a8fad3b1.jpg" 
                    alt="Бронзовая корона"
                    className="w-24 h-24 object-contain animate-pulse"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-center text-warm-gold">
                  ТРЕТЬЕ МЕСТО
                </h2>
                <h3 className="text-xl font-bold mb-4 text-center text-warm-gold">
                  Сертификат Участия
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="participant-certificate" className="border-cyan-500/30">
                    <AccordionTrigger className="text-cyan-300 hover:text-cyan-200 text-lg italic text-center justify-center hover:no-underline py-6">
                      "Ты прошла до конца — ты уже победила"
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-amber-50/75 pt-4">
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
            <h3 className="text-2xl font-bold mb-6 text-center text-warm-gold">
              Как определяются победители?
            </h3>
            
            <p className="text-lg text-amber-50/85 mb-6 text-center">
              Мы смотрим на три критерия:
            </p>
            
            <div className="space-y-4 text-amber-50/75">
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
            
            <p className="text-lg text-amber-50/95 mt-6 text-center font-semibold">
              Это не конкурс в привычном смысле. Это праздник того, что ты выбрала себя.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК: ОТЗЫВЫ */}
      <section id="testimonials" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow-gold">
              Они уже прошли{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
                Апгрейд
              </span>
            </h2>
            <p className="text-amber-50/70 text-lg">Живые слова участниц — без редактуры</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              {
                name: "Мария Воронцова",
                role: "Бизнес Трекер, владелица стройкомпании",
                text: "Даша, благодарю тебя за апгрейд! Несмотря на то, что задания затрагивают глубинные слои и заставляют смотреть на привычные ситуации под совершенно другим углом, он так легко встроился в обычный ритм жизни. Не нужно искать кучу времени, специально готовиться. Апгрейд сам запускает сильные изменения в мышлении и мировоззрении. Главное — теперь я часто ловлю себя на мысли: «А что же сегодня было самым важным и решающим?». Это работает как классный анализ всего, что меня окружает: я будто отшлифовываю реальность, убираю ненужный шум и декор, чтобы разглядеть, на чём действительно стоит фокусироваться, где спрятано настоящее ценное.",
                color: "fuchsia",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/50c7476f-e792-4c2a-87e1-efe217755a02.JPG",
              },
              {
                name: "Катерина Лисиенко",
                role: "Логистическая Компания",
                text: "Дашенька, большая тебе благодарность за эти две недели погружения в себя! Апгрейд позволил посмотреть на себя со стороны, с точки зрения любви, мягкости, кто ты есть, в какой системе координат находишься и что истинно желаешь для самой себя! Погрузил в глубину и принятие себя такой, какая я есть. Апгрейд помог настроить себя на нужную волну, найти опору и двигаться вперед! Фокус внимания теперь только на мне и моем будущем со знаком ПЛЮС!",
                color: "rose",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/43efa936-88fe-4609-b12d-eded7c15c194.jpg",
              },
              {
                name: "Татьяна Иващенко",
                role: "Владелица Агентства Недвижимости",
                text: "Даша 🥰 благодарю тебя от всей души за Апгрейд!!! Начался реально новый уровень моего жизненного Пути✨ Как будто всё было запланировано давно 😄 «Очистилось всё 😀 за две недели слетело много шелухи, разрушились рамки, хотя скорее расширились!!» Система привычек, осознанного внимания в глубину себя и наблюдателя снаружи помогли с новым взглядом на жизнь 😍❤️‍🔥 Апгрейд сработал как трамплин 🚀🚀 Я более точно и уверенно знаю, что я хочу, как хочу и с кем хочу двигаться дальше.",
                color: "amber",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/1daba9e2-2f7a-490c-9794-6729851dc0c6.jpg",
              },
              {
                name: "Лена Бровченко",
                role: "Владелица студии массажа",
                text: "Даша огромное тебе спасибо 🤗❤️ за то что ты создала этот квест Апгрейд. Вроде бы всего 14 дней, но они настолько насыщенные, настолько глубокие… Я не ожидала что это будет так глубоко и в то же время мягко. Я много раз хотела начать утренние ритуальчики для себя и благодаря тебе я наконец то к этому пришла мягко и не из надо, а из Хочу. Даша огромное спасибо тебе за практики и внимание и огромную любовь и заботу о каждой кто проходил этот квест ❤️🤗",
                color: "violet",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/3c486100-d8bd-46ce-8693-a89da72d59ce.jpg",
              },
              {
                name: "Анастасия Леонтьева",
                role: "Главная фея дома и детей",
                text: "Даша! Огромное тебе спасибо за эту трансформацию❤️ Процессы все комфортные, не ломаешь себя жестко, мягко, но… очень эффективно, с каждым днем погружаешься в состояние изменений не надрывая себя! Тебя лично благодарю за твою вовлеченность в каждую из нас, не оставляешь, поддерживаешь. Желаю тебе дальнейших успехов в этом направлении❤️",
                color: "pink",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/40ba4c93-cfaa-4645-971f-1d603fae8c4c.jpg",
              },
              {
                name: "Елена Жарикова",
                role: "Нумеролог и владелица ногтевой студии",
                text: "Это был настоящий квест через тело, сознание и пространство. Вернула себе ясность, энергию, женственность, внутреннюю опору и ощущение: «Я управляю своей жизнью!» Без идеальности, с мягкой дисциплиной — просто живые шаги каждый день, всё просто и тепло. Без сравнений, самокритики, с заботой о здоровье, о себе, о теле. ОГРОМНАЯ благодарность создателю Дарье за этот тёплый и эффективный процесс, поддержку и за пространство 💖",
                color: "fuchsia",
                photo: "https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/f87240e9-e1b1-41fd-bd52-d0db5bfe85ff.jpg",
              },
            ].map((review, i) => {
              const colorMap: Record<string, string> = {
                fuchsia: "from-fuchsia-500/10 to-slate-800/50 border-fuchsia-500/20 hover:border-fuchsia-500/40",
                rose: "from-rose-500/10 to-slate-800/50 border-rose-500/20 hover:border-rose-500/40",
                amber: "from-amber-500/10 to-slate-800/50 border-amber-500/20 hover:border-amber-500/40",
                violet: "from-violet-500/10 to-slate-800/50 border-violet-500/20 hover:border-violet-500/40",
                pink: "from-pink-500/10 to-slate-800/50 border-pink-500/20 hover:border-pink-500/40",
              };
              const nameColorMap: Record<string, string> = {
                fuchsia: "text-fuchsia-300",
                rose: "text-rose-300",
                amber: "text-amber-300",
                violet: "text-violet-300",
                pink: "text-pink-300",
              };
              return (
                <div
                  key={i}
                  className={`break-inside-avoid mb-6 p-6 rounded-2xl bg-gradient-to-br ${colorMap[review.color]} border backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="text-2xl text-warm-gold mb-3">"</div>
                  <p className="text-amber-50/85 text-sm leading-relaxed mb-4">{review.text}</p>
                  <div className="border-t border-white/10 pt-3 mt-3 flex items-center gap-3">
                    {"photo" in review && review.photo && (
                      <img
                        src={review.photo as string}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0 border border-white/20"
                      />
                    )}
                    <div>
                      <div className={`font-semibold text-sm ${nameColorMap[review.color]}`}>{review.name}</div>
                      <div className="text-amber-50/50 text-xs mt-0.5">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* БЛОК 10: FAQ */}
      <section id="faq" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-glow-gold">
              Частые <span className="bg-gradient-to-r from-fuchsia-400 to-amber-400 bg-clip-text text-transparent">вопросы</span>
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-purple-300">{item.q}</h3>
                <p className="text-amber-50/85 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 11: ФИНАЛЬНЫЙ CTA */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-fuchsia-600/20 via-amber-600/20 to-turquoise-600/20 border border-fuchsia-500/30 backdrop-blur-sm overflow-hidden">
            {/* Декоративный фон */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-glow-gold">
                  Тебя ждёт <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">14 дней</span>, в которые ты:
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
                      <span className="text-amber-50/95 text-left">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="max-w-3xl mx-auto space-y-4 mb-12">
                  <p className="text-2xl font-semibold leading-relaxed">
                    Это не просто программа. <span className="text-fuchsia-300">Это ИГРА твоей трансформации.</span>
                  </p>
                  <p className="text-xl text-amber-50/85">
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
                    className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 text-base sm:text-xl px-8 sm:px-12 py-8 shadow-2xl shadow-amber-500/40 transition-all duration-300 hover:scale-105 border-none"
                  >
                    🚀 Я ГОТОВА. ВЫБИРАЮ ПАКЕТ
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('avatars')}
                    size="lg"
                    variant="outline"
                    className="bg-white/5 border-white/20 hover:bg-white/10 text-sm sm:text-lg px-6 sm:px-8 py-8 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    💬 Хочу узнать больше об аватарах
                  </Button>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-amber-50/65 mb-4">Не уверена? Напиши мне, и я расскажу про твой путь.</p>
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
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-amber-400 bg-clip-text text-transparent">АПГРЕЙД 2026</h4>
              <p className="text-amber-50/65 text-sm leading-relaxed mb-4">Квест-челлендж для женщин 35+. Из усталости в горящий глаз за 14 дней.</p>
              <div className="text-xs text-white/40 space-y-1">
                <p>ИП Цыбульский С.И.</p>
                <p>ИНН 436687430</p>
              </div>
            </div>

            {/* Быстрые ссылки */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-warm-gold">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-amber-50/65 hover:text-white transition-colors text-left">Об АПГРЕЙДЕ</button>
                <button onClick={() => scrollToSection('avatars')} className="block text-amber-50/65 hover:text-white transition-colors text-left">Четыре аватара</button>
                <button onClick={() => scrollToSection('packages')} className="block text-amber-50/65 hover:text-white transition-colors text-left">Пакеты и цены</button>
                <button onClick={() => scrollToSection('faq')} className="block text-amber-50/65 hover:text-white transition-colors text-left">FAQ</button>
                <button onClick={() => scrollToSection('packages')} className="block text-amber-50/65 hover:text-white transition-colors text-left">Как присоединиться</button>
              </div>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-warm-gold">Контакты</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+79147047392" className="flex items-center gap-2 text-amber-50/65 hover:text-emerald-400 transition-colors">
                  <Icon name="Phone" size={16} className="icon-hover" />
                  <span>+7 914 704 7392</span>
                </a>
                <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-50/65 hover:text-sky-400 transition-colors">
                  <Icon name="Send" size={16} className="icon-hover" />
                  <span>@darya_tsybulskaya22</span>
                </a>
                <a href="https://instagram.com/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-50/65 hover:text-pink-400 transition-colors">
                  <Icon name="Instagram" size={16} className="icon-hover" />
                  <span>darya_tsybulskaya22</span>
                </a>
                <a href="mailto:contact@upgrade2026.ru" className="flex items-center gap-2 text-amber-50/65 hover:text-fuchsia-300 transition-colors">
                  <Icon name="Mail" size={16} className="icon-hover" />
                  <span>contact@upgrade2026.ru</span>
                </a>
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-warm-gold">Следите за нами</h4>
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

          <div className="text-center text-amber-50/65 text-sm pt-8 border-t border-white/10">
            <p>© 2026 АПГРЕЙД. Дарья Цыбульская. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* POP-UP ПРИВЕТСТВИЕ */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-violet-900 border border-fuchsia-500/30 shadow-2xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-glow-gold">Привет, Дорогая! 👑</h3>
              <p className="text-amber-50/95 mb-3 leading-relaxed">Я Дарья. Рада Тебе! 💐</p>
              <p className="text-amber-50/85 mb-4 leading-relaxed">Ты пришла и читаешь Это не просто Так! ✨</p>
              <p className="text-amber-50/85 mb-4 leading-relaxed">Чувствуй Свой Отклик и исходи при решении из него, не от ума — это ВАЖНО!</p>
              <p className="text-amber-50/85 mb-4 leading-relaxed">Позволь Себе эту игру для Себя Любимой… и Ты увидишь, как Жизнь вознаградит Тебя за это 🎁</p>
              <p className="text-xl font-semibold text-amber-400 mb-6">Выбери своего Аватара и вперед!</p>
              <p className="text-amber-50/75 mb-8 italic">Буду рада Вместе с Тобой пройти этот квест во благо для Нас обоих ♥️</p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => {
                    setShowPopup(false);
                    scrollToSection('avatars');
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 border-none shadow-lg"
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
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-emerald-900 to-violet-900 border border-emerald-500/30 shadow-2xl">
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
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">Нужна ли тебе эта программа?</h3>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-6">БЕЗ СОМНЕНИЙ — НУЖНА!</p>
                
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
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
                  <p className="font-semibold text-fuchsia-300">
                    Это не курс. Это перезагрузка.
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-center text-amber-400">
                    Твоя перезагрузка.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-emerald-950/50 to-violet-950/50">
              <Button 
                onClick={() => {
                  setShowCheckResult(false);
                  scrollToSection('packages');
                }}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 border-none shadow-lg w-full"
              >
                Выбрать пакет
              </Button>
            </div>
          </div>
        </div>
      )}

      <AvatarModals
        showPhoenixModal={showPhoenixModal}
        showQueenModal={showQueenModal}
        showGoddessModal={showGoddessModal}
        showWarriorModal={showWarriorModal}
        setShowPhoenixModal={setShowPhoenixModal}
        setShowQueenModal={setShowQueenModal}
        setShowGoddessModal={setShowGoddessModal}
        setShowWarriorModal={setShowWarriorModal}
        scrollToSection={scrollToSection}
      />

      <PackageModals
        showStandardPackageModal={showStandardPackageModal}
        showPremiumPackageModal={showPremiumPackageModal}
        showVipPackageModal={showVipPackageModal}
        setShowStandardPackageModal={setShowStandardPackageModal}
        setShowPremiumPackageModal={setShowPremiumPackageModal}
        setShowVipPackageModal={setShowVipPackageModal}
      />

      {/* КНОПКА TELEGRAM БОТА */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
        <div className="hidden md:block bg-gradient-to-r from-fuchsia-900/90 to-amber-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-fuchsia-500/30 shadow-xl animate-fade-in">
          <p className="text-white text-sm font-medium">Есть вопросы? Спроси помошницу! 💜</p>
        </div>
        
        <a
          href="https://t.me/KvestUpgrade_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-gradient-to-br from-fuchsia-600 to-amber-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 group animate-pulse-glow"
          title="Задать вопрос помощнице"
        >
          <Icon name="MessageCircle" size={28} className="text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full border-2 border-slate-950 animate-pulse"></span>
        </a>
      </div>

      {/* STICKY TIMER */}
      <StickyTimer />
    </div>
  );
}