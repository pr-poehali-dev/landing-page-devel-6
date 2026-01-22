import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
  checkedItems: boolean[];
  setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>;
  showCheckResult: boolean;
  setShowCheckResult: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainSections({ 
  scrollToSection, 
  checkedItems, 
  setCheckedItems, 
  showCheckResult, 
  setShowCheckResult 
}: MainSectionsProps) {
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (index: number) => {
    if (index === 0) {
      setShowModal(true);
    }
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };



  return (
    <>
      {/* ПРОБЛЕМА: ЗЕРКАЛО */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Что тебе <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">знакомо?</span>
            </h2>
            <p className="text-xl text-white/60">Пройди чек-лист</p>
          </div>

          <div className="relative">
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
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => handleItemClick(index)}
                >
                  <div className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                    checkedItems[index] 
                      ? 'border-purple-400 bg-purple-600' 
                      : 'border-white/30 group-hover:border-purple-400'
                  }`}>
                    {checkedItems[index] && (
                      <Icon name="Check" className="text-white" size={16} />
                    )}
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors">{problem}</p>
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

      {/* МОДАЛЬНОЕ ОКНО */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="relative max-w-2xl w-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-purple-900 border border-purple-500/30 shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              <Icon name="X" size={16} />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">
                Энергетическая и психологическая усталость
              </h3>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Ты просыпаешься, но не чувствуешь, что проснулась.
                </p>
                <p>
                  Весь день как через стекло — даже любимое кажется тусклым. Ты работаешь, общаешься, улыбаешься, но внутри пусто. Как батарейка, которая разрядилась, но никто не позволяет ей отдохнуть.
                </p>
                <p className="text-amber-400 font-semibold">
                  Это усталость не от работы. Это усталость ОТ ЖИЗНИ.
                </p>
                <p>
                  Энергетическая усталость означает, что твоя внутренняя батарейка истощена. Ты отдаёшь, но не получаешь обратно. Психологическая усталость — это когда ум не может больше бороться со своими же мыслями.
                </p>
                
                <div className="pt-4">
                  <p className="font-semibold text-white mb-3">За эти 14 дней ты:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✨</span>
                      <span>Научишься восстанавливать энергию каждый день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✨</span>
                      <span>Поймёшь, что иссушает твою батарейку</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✨</span>
                      <span>Вернёшь тот самый здоровый жар изнутри</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-turquoise-400 font-semibold pt-4">
                  Это начало. Это первый шаг к восстановлению.
                </p>
              </div>
            </div>

            <Button 
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-lg"
            >
              Понятно
            </Button>
          </div>
        </div>
      )}



      {/* РЕШЕНИЕ */}
      <section id="program" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              АПГРЕЙД 2026: <span className="bg-gradient-to-r from-amber-400 via-turquoise-400 to-white bg-clip-text text-transparent">Не курс. Не теория. ПРОЦЕСС.</span>
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
                  "Не теория в vacuum",
                  "Не «делай сам»",
                  "Не просто челлендж"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80">
                    <Icon name="X" className="text-red-400 flex-shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ЧТО ЭТО ТАКОЕ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="Check" className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Что это ЕСТЬ</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "Flame", text: "Живой процесс трансформации" },
                  { icon: "Users", text: "Сообщество 20-50 женщин" },
                  { icon: "Sparkles", text: "Игровая механика с аватарами" },
                  { icon: "Trophy", text: "Реальная конкуренция и призы" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <Icon 
                      name={item.icon} 
                      className={`text-emerald-400 flex-shrink-0 mt-0.5 ${
                        item.icon === 'Flame' || item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                        item.icon === 'Trophy' ? 'animate-float' :
                        item.icon === 'Users' ? 'icon-hover' : ''
                      }`} 
                      size={20} 
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* КАК ЭТО РАБОТАЕТ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                  <Icon name="Zap" className="text-amber-400 animate-pulse-glow" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Как это работает</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "User", text: "Ты выбираешь аватар (архетип трансформации)" },
                  { icon: "Target", text: "Каждый день — задания: тело, разум, пространство" },
                  { icon: "Trophy", text: "Выполнение даёт очки → Level Up твоего аватара" },
                  { icon: "TrendingUp", text: "Ты видишь свой прогресс ВИЗУАЛЬНО" },
                  { icon: "Award", text: "Лидерборд создаёт здоровую конкуренцию" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <Icon 
                      name={item.icon} 
                      className={`text-amber-400 flex-shrink-0 mt-0.5 ${
                        item.icon === 'User' ? 'icon-hover' :
                        item.icon === 'Target' ? 'animate-wiggle' :
                        item.icon === 'Trophy' || item.icon === 'Award' ? 'animate-float' :
                        item.icon === 'Sparkles' ? 'animate-pulse-glow' : ''
                      }`}
                      size={20} 
                    />
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
              <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">Таймлайн квеста</span>
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
                    <Icon name="Calendar" size={18} className="animate-bounce-gentle" />
                    <span>9-15 февраля</span>
                  </div>
                  <div className="space-y-2 mb-6">
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

                <div className="lg:col-span-2 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="User" className="text-purple-400 icon-hover" size={20} />
                      <span className="font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Level 1</span>
                      <Icon name="ArrowRight" className="text-purple-400 group-hover:translate-x-1 transition-transform" size={16} />
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Level 2</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Heart" className="text-amber-400 animate-float" size={20} />
                      <span className="font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-white/80">От усталости к лёгкости</p>
                  </div>
                </div>
              </div>
            </div>

            {/* НЕДЕЛЯ 2: НАПОЛНЕНИЕ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500 group">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-600 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">
                2
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-amber-600/20 border border-amber-500/30 text-sm font-semibold mb-4">
                    НЕДЕЛЯ 2: НАПОЛНЕНИЕ
                  </div>
                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <Icon name="Calendar" size={18} className="animate-bounce-gentle" />
                    <span>16-22 февраля</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Lightbulb" className="text-amber-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Новые намерения и цели</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="text-amber-400 animate-pulse-glow" size={18} />
                      <span className="text-sm">Создание энергии роста</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-amber-400 icon-hover" size={18} />
                      <span className="text-sm">Развитие нового себя</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Sun" className="text-amber-400 animate-float" size={18} />
                      <span className="text-sm">Растущая луна усиливает намерения</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="User" className="text-amber-400 icon-hover" size={20} />
                      <span className="font-semibold">Твой аватар:</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Level 2</span>
                      <Icon name="ArrowRight" className="text-amber-400 group-hover:translate-x-1 transition-transform" size={16} />
                      <span className="px-3 py-1 bg-amber-600 rounded-full text-sm">Level 3</span>
                      <Icon name="ArrowRight" className="text-amber-400 group-hover:translate-x-1 transition-transform" size={16} />
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-turquoise-600 rounded-full text-sm font-bold">Level 4 ЛЕГЕНДАРНЫЙ</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Heart" className="text-turquoise-400 animate-float" size={20} />
                      <span className="font-semibold">Твоё состояние:</span>
                    </div>
                    <p className="text-white/80">От ясности к горящему глазу</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ФИНАЛ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-turquoise-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm">
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
                        <Icon 
                          name={item.icon} 
                          className={`text-turquoise-400 ${
                            item.icon === 'Trophy' ? 'animate-float' :
                            item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                            item.icon === 'Sunrise' ? 'animate-float' : ''
                          }`}
                          size={20} 
                        />
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

      {/* БЛОК 5: ЧЕТЫРЕ АВАТАРА */}
      <section id="avatars" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Выбери <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">своего аватара</span>
            </h2>
            <p className="text-xl text-white/60">Твой персональный путь трансформации за 14 дней</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Аватар 1: Огненная Феникс */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-slate-800/50 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">ОГНЕННАЯ ФЕНИКС</h3>
                <p className="text-white/80 italic">"Для тех, кто прошёл выгорание и готов воскреситься."</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-white/60 mb-3">Трансформация за 14 дней:</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">L1</span>
                  <Icon name="ArrowRight" size={14} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-orange-600/50 rounded-full text-xs">L2</span>
                  <Icon name="ArrowRight" size={14} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-orange-600 rounded-full text-xs">L3</span>
                  <Icon name="ArrowRight" size={14} className="text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-xs font-bold">L4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-orange-300 mb-6">"Из пепла в пламя"</p>

              <Button 
                variant="outline"
                className="w-full bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20 transition-all"
              >
                Узнать больше об этом архетипе
              </Button>
            </div>

            {/* Аватар 2: Королева Перемен */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">👑</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">КОРОЛЕВА ПЕРЕМЕН</h3>
                <p className="text-white/80 italic">"Для тех, кто готов стать главной героиней своей жизни."</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-white/60 mb-3">Трансформация за 14 дней:</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">L1</span>
                  <Icon name="ArrowRight" size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-purple-600/50 rounded-full text-xs">L2</span>
                  <Icon name="ArrowRight" size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-purple-600 rounded-full text-xs">L3</span>
                  <Icon name="ArrowRight" size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold">L4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-purple-300 mb-6">"От замужества к королевству"</p>

              <Button 
                variant="outline"
                className="w-full bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20 transition-all"
              >
                Узнать больше об этом архетипе
              </Button>
            </div>

            {/* Аватар 3: Богиня Баланса */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-turquoise-500/10 via-cyan-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm hover:border-turquoise-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold mb-3 text-turquoise-400">БОГИНЯ БАЛАНСА</h3>
                <p className="text-white/80 italic">"Для тех, кто ищет гармонию между всеми ролями."</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-white/60 mb-3">Трансформация за 14 дней:</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">L1</span>
                  <Icon name="ArrowRight" size={14} className="text-turquoise-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-turquoise-600/50 rounded-full text-xs">L2</span>
                  <Icon name="ArrowRight" size={14} className="text-turquoise-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-turquoise-600 rounded-full text-xs">L3</span>
                  <Icon name="ArrowRight" size={14} className="text-turquoise-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-gradient-to-r from-turquoise-600 to-cyan-600 rounded-full text-xs font-bold">L4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-turquoise-300 mb-6">"От хаоса к гармонии"</p>

              <Button 
                variant="outline"
                className="w-full bg-turquoise-500/10 border-turquoise-500/30 hover:bg-turquoise-500/20 transition-all"
              >
                Узнать больше об этом архетипе
              </Button>
            </div>

            {/* Аватар 4: Воин Света */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⚔️</div>
                <h3 className="text-2xl font-bold mb-3 text-amber-400">ВОИН СВЕТА</h3>
                <p className="text-white/80 italic">"Для тех, кто готов бороться за себя и свои цели."</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-white/60 mb-3">Трансформация за 14 дней:</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">L1</span>
                  <Icon name="ArrowRight" size={14} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-amber-600/50 rounded-full text-xs">L2</span>
                  <Icon name="ArrowRight" size={14} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-amber-600 rounded-full text-xs">L3</span>
                  <Icon name="ArrowRight" size={14} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full text-xs font-bold">L4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-amber-300 mb-6">"От слабости к силе"</p>

              <Button 
                variant="outline"
                className="w-full bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20 transition-all"
              >
                Узнать больше об этом архетипе
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6: ПОЧЕМУ ИМЕННО СЕЙЧАС */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Почему именно <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">9 февраля?</span>
            </h2>
            <p className="text-xl text-white/60">(Это не просто дата — это МОМЕНТ)</p>
          </div>

          <div className="space-y-8">
            {/* Убывающая луна */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-slate-800/50 border border-indigo-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="text-5xl">🌙</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-300">4-я четверть убывающей луны (9-16 февраля)</h3>
                  <p className="text-white/80 mb-4">→ ЛУЧШЕЕ время для:</p>
                  <ul className="space-y-2">
                    {["Самоанализа", "Очищения тела и ума", "Освобождения от старого"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Icon name="Check" className="text-indigo-400 flex-shrink-0" size={20} />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Новолуние */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-600/10 to-slate-800/50 border border-slate-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="text-5xl">🌑</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-slate-300">НОВОЛУНИЕ 17 февраля</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon name="ArrowRight" className="text-slate-400 flex-shrink-0" size={20} />
                      <span className="text-white/80">Новый лунный год начинается</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="ArrowRight" className="text-slate-400 flex-shrink-0" size={20} />
                      <span className="text-white/80">Новая энергия, новый цикл</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Год Лошади */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-slate-800/50 border border-red-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-6">
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
          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-purple-600/20 via-amber-600/20 to-red-600/20 border border-purple-500/30 backdrop-blur-sm text-center">
            <p className="text-2xl font-bold mb-4">Это уникальное время. Оно не вернётся.</p>
            <p className="text-xl text-white/90 leading-relaxed">
              И именно сейчас твоё тело, луна и год синхронизируются<br />
              для твоего <span className="text-amber-400 font-semibold">АПГРЕЙДА</span>.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 7: ЧТО ТЫ ПОЛУЧИШЬ */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              За 14 дней <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">ты получишь</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <Icon 
                  name={item.icon} 
                  className={`${item.color} mb-4 ${
                    item.icon === 'Flame' || item.icon === 'Zap' || item.icon === 'Sparkles' ? 'animate-pulse-glow' :
                    item.icon === 'Heart' || item.icon === 'Award' || item.icon === 'Crown' || item.icon === 'Gift' ? 'animate-float' :
                    item.icon === 'Users' ? 'icon-hover' :
                    item.icon === 'Target' ? 'animate-wiggle' : ''
                  }`} 
                  size={32} 
                />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 8: АВТОРИТЕТ (История Дарьи) */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Я прошла этот путь <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">сама</span>
            </h2>
            <p className="text-xl text-white/60">Теперь помогаю другим</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Фото Дарьи */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/7bb4cf62-980a-4732-bc77-0398b3258b4c.jpg"
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
                    "Новый взгляд на жизнь и себя",
                    "Финансовая стабильность и рост",
                    "Энергия, радость, вдохновение",
                    "Любящие отношения (новые)",
                    "Мягкая, открытая, излучающая свет"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Цитата */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-amber-500/10 border border-purple-500/20 backdrop-blur-sm">
                <p className="text-lg text-white/90 italic leading-relaxed">
                  "Я знаю, каково это — чувствовать, что жизнь проходит мимо. Но я также знаю, что из этого можно выйти. И я помогу тебе в этом."
                </p>
                <p className="mt-4 text-amber-400 font-semibold">— Дарья Цыбульская</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 9: СОЦИАЛЬНЫЕ ДОКАЗАТЕЛЬСТВА */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Что говорят <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">участницы</span>
            </h2>
            <p className="text-xl text-white/60">500+ женщин уже прошли трансформацию</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 42 года",
                text: "Я не верила, что за 14 дней можно так измениться. Но это случилось. Вернулась энергия, которую я не чувствовала годами.",
                rating: 5
              },
              {
                name: "Ирина, 38 лет",
                text: "Игровой формат с аватарами — это гениально! Я прокачивала не только себя, но и своего персонажа. Это было увлекательно!",
                rating: 5
              },
              {
                name: "Марина, 45 лет",
                text: "Сообщество женщин — это то, чего мне так не хватало. Мы поддерживали друг друга, и это помогло пройти до конца.",
                rating: 5
              }
            ].map((review, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">"{review.text}"</p>
                <p className="text-purple-400 font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 10: ПАКЕТЫ */}
      <section id="packages" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Выбери <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">свой пакет</span>
            </h2>
            <p className="text-xl text-white/60">Три варианта участия — выбери подходящий для себя</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Пакет СТАНДАРТ */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">СТАНДАРТ</h3>
                <p className="text-white/60 text-sm mb-4">Базовый пакет для самостоятельного прохождения</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">5 900 ₽</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Доступ к платформе квеста на 14 дней",
                  "Ежедневные задания (тело, разум, пространство)",
                  "Выбор аватара и система Level Up",
                  "Лидерборд участниц",
                  "Общий чат поддержки",
                  "Финальная онлайн-встреча в ZOOM",
                  "Подарок от Дарьи"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => scrollToSection('packages')}
                className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none"
              >
                Выбрать СТАНДАРТ
              </Button>
            </div>

            {/* Пакет ПРЕМИУМ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-amber-500/10 border-2 border-amber-500/50 backdrop-blur-sm hover:border-amber-500 transition-all duration-300 transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-full text-xs font-bold">
                ПОПУЛЯРНЫЙ
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">ПРЕМИУМ</h3>
                <p className="text-white/60 text-sm mb-4">Расширенный пакет с индивидуальными инструментами</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">11 900 ₽</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Всё из пакета СТАНДАРТ",
                  "Индивидуальный анализ по нумерологии",
                  "Индивидуальный анализ по астрологии",
                  "Анализ Хьюман Дизайн",
                  "Персональная карта Икигай",
                  "Приоритетная поддержка",
                  "Расширенный подарок от Дарьи"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => scrollToSection('packages')}
                className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none shadow-xl"
              >
                Выбрать ПРЕМИУМ
              </Button>
            </div>

            {/* Пакет VIP */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-amber-500/10 to-turquoise-500/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">VIP</h3>
                <p className="text-white/60 text-sm mb-4">Максимальная поддержка и личное внимание</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">24 900 ₽</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Всё из пакета ПРЕМИУМ",
                  "2 личные консультации с Дарьей (по 1 часу)",
                  "Личная поддержка в течение 2 недель после квеста",
                  "Приглашение на финальную встречу в реале (о.Русский)",
                  "Эксклюзивный подарок от Дарьи",
                  "Доступ в закрытый VIP-чат"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Crown" className="text-turquoise-400 flex-shrink-0 mt-1 animate-float" size={18} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => scrollToSection('packages')}
                className="w-full bg-gradient-to-r from-purple-600 via-amber-600 to-turquoise-600 hover:from-purple-700 hover:via-amber-700 hover:to-turquoise-700 border-none"
              >
                Выбрать VIP
              </Button>
            </div>
          </div>

          {/* Гарантия */}
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm text-center">
            <Icon name="Shield" className="text-emerald-400 mx-auto mb-4 animate-float" size={48} />
            <h3 className="text-2xl font-bold mb-4">Гарантия возврата</h3>
            <p className="text-white/80 leading-relaxed">
              Если в течение первых 3 дней ты поймёшь, что квест тебе не подходит — мы вернём 100% стоимости. Без вопросов.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 11: FAQ */}
      <section id="faq" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Частые <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text text-transparent">вопросы</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Когда точно стартует квест?",
                answer: "Старт 9 февраля 2026 года. Первая неделя (9-15 февраля) — очищение. Вторая неделя (16-22 февраля) — наполнение."
              },
              {
                question: "Сколько времени нужно уделять ежедневно?",
                answer: "В среднем 1-2 часа в день. Задания разбиты на три направления: тело (30-40 мин), разум (20-30 мин), пространство (30-40 мин). Ты можешь распределить их в течение дня."
              },
              {
                question: "Что если я не успею выполнить задание за день?",
                answer: "Ничего страшного! У тебя есть возможность догнать в течение следующих дней. Главное — не бросать и идти до конца."
              },
              {
                question: "Как работает система Level Up аватара?",
                answer: "За каждое выполненное задание ты получаешь очки. Накопленные очки повышают уровень твоего аватара (Level 1 → Level 4). Ты видишь свой прогресс визуально."
              },
              {
                question: "Нужно ли приезжать во Владивосток?",
                answer: "Нет. Весь квест проходит онлайн. Финальная встреча на рассвете у \"Двери Возможностей\" (о.Русский) — опциональна и доступна только для VIP-пакета."
              },
              {
                question: "Что если у меня нет опыта в таких программах?",
                answer: "Это не проблема! Квест создан для обычных женщин, которые хотят изменений. Всё объясняется просто и понятно. Плюс есть поддержка сообщества и Дарьи."
              }
            ].map((item, index) => (
              <details 
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                  <Icon name="ChevronDown" className="text-white/60 group-open:rotate-180 transition-transform flex-shrink-0" size={24} />
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}