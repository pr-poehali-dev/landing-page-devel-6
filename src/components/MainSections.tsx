import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
  checkedItems: boolean[];
  setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>;
  showCheckResult: boolean;
  setShowCheckResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const problemsData = [
  {
    title: "Энергетическая и психологическая усталость",
    description: "Это состояние, когда ты просыпаешься уже уставшей, и к вечеру силы на нуле. Ты чувствуешь, что работаешь на автопилоте, а энергии хватает только на самое необходимое. Твой внутренний аккумулятор разряжен, и ты не знаешь, как его зарядить."
  },
  {
    title: "Апатия, раздражение, \"ничего не хочется\"",
    description: "Тебе сложно найти радость в том, что раньше приносило удовольствие. Всё кажется серым и одинаковым. Мелочи раздражают, а мотивация делать что-то новое на нуле. Это не лень — это сигнал, что твоя система перегружена."
  },
  {
    title: "Живёшь в \"дне сурка\" — одни и те же дни",
    description: "Каждый день похож на предыдущий: работа, дом, обязанности. Ты застряла в рутине, и времени на себя почти не остаётся. Жизнь проходит мимо, а ты чувствуешь, что топчешься на месте. Хочется перемен, но не знаешь, с чего начать."
  },
  {
    title: "Редко испытываешь радость и вдохновение",
    description: "Раньше ты загоралась идеями, мечтала, строила планы. Сейчас эта искра погасла. Ты реже улыбаешься, реже чувствуешь восторг. Жизнь стала функциональной, а не вдохновляющей. Ты скучаешь по той себе, которая была полна энергии."
  },
  {
    title: "Физическая тяжесть, потеря лёгкости в теле",
    description: "Твоё тело чувствует тяжесть. Лишний вес, отёки, напряжение в мышцах, проблемы со сном. Ты словно носишь на себе груз, который мешает двигаться свободно. Хочется вернуть лёгкость, но не знаешь, как это сделать."
  },
  {
    title: "\"Спасательный круг\" после праздников",
    description: "После новогодних праздников, застолий и отдыха ты чувствуешь, что набрала вес и потеряла форму. Одежда сидит иначе, отражение в зеркале не радует. Хочется быстро вернуться в форму, но мотивация на нуле."
  },
  {
    title: "Нет ощущения собственной ценности",
    description: "Ты чувствуешь, что живёшь для других: работа, семья, обязанности. Твои желания и потребности отходят на второй план. Ты забыла, что ты важна сама по себе, а не только как мама, жена, сотрудница. Хочется вернуть ощущение собственной ценности."
  },
  {
    title: "Чувство внутренней опасности и неуверенности",
    description: "Внутри поселилась тревога. Ты не чувствуешь себя в безопасности — ни эмоционально, ни физически. Мир кажется нестабильным, будущее — неопределённым. Хочется обрести опору внутри себя, но не знаешь, как это сделать."
  },
  {
    title: "Потеря смысла в том, что раньше вдохновляло",
    description: "То, что раньше наполняло жизнь смыслом, сейчас кажется пустым. Цели, которые ты ставила, больше не вдохновляют. Ты в точке, когда нужно переосмыслить свою жизнь и найти новый вектор движения. Это не конец — это начало нового этапа."
  }
];

export default function MainSections({ 
  scrollToSection, 
  checkedItems, 
  setCheckedItems, 
  showCheckResult, 
  setShowCheckResult 
}: MainSectionsProps) {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const handleProblemClick = (index: number) => {
    setSelectedProblem(index);
  };

  const closeModal = () => {
    setSelectedProblem(null);
  };

  const toggleCheck = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
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
              {problemsData.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => handleProblemClick(index)}
                >
                  <div 
                    className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                      checkedItems[index] 
                        ? 'border-purple-400 bg-purple-600' 
                        : 'border-white/30 group-hover:border-purple-400'
                    }`}
                    onClick={(e) => toggleCheck(index, e)}
                  >
                    {checkedItems[index] && (
                      <Icon name="Check" className="text-white" size={16} />
                    )}
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors">{problem.title}</p>
                </div>
              ))}
            </div>

            {/* Modal окно с описанием */}
            {selectedProblem !== null && (
              <div 
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
                onClick={closeModal}
              >
                <div 
                  className="relative max-w-2xl w-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-scale-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Icon name="X" size={20} className="text-white/70" />
                  </button>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Info" className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {problemsData[selectedProblem].title}
                        </h3>
                        <p className="text-lg text-white/80 leading-relaxed">
                          {problemsData[selectedProblem].description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div 
                        className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                        onClick={(e) => toggleCheck(selectedProblem, e)}
                      >
                        <div className={`w-6 h-6 rounded border-2 transition-all flex items-center justify-center ${
                          checkedItems[selectedProblem] 
                            ? 'border-purple-400 bg-purple-600' 
                            : 'border-white/30 hover:border-purple-400'
                        }`}>
                          {checkedItems[selectedProblem] && (
                            <Icon name="Check" className="text-white" size={16} />
                          )}
                        </div>
                        <span className="text-white/70">Отметить как знакомое</span>
                      </div>

                      <Button
                        onClick={closeModal}
                        className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 border-none"
                      >
                        Понятно
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                  <Icon name="Gamepad2" className="text-purple-400 animate-wiggle" size={24} />
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
            <p className="text-xl text-white/90">
              <span className="line-through text-white/40">Зашла смотреть, но всё равно не сделала</span><br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-amber-400 to-turquoise-400 bg-clip-text font-bold text-2xl">ВЫ ИГРАЕТЕ, ДЕЛИТЕСЬ И РАСТЁТЕ ВМЕСТЕ</span>
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 3: ТАЙМЛАЙН КВЕСТА (14 дней) */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Таймлайн <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">14-дневного квеста</span>
            </h2>
            <p className="text-xl text-white/60">Путь из точки А в точку Б за 2 недели</p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
            {/* СТАРТ */}
            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-purple-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Rocket" size={16} className="animate-float" />
              </div>
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm">
                <div className="inline-block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-sm font-semibold mb-4">
                  СТАРТ: 9 ФЕВРАЛЯ
                </div>
                <h3 className="text-2xl font-bold mb-4">Запуск + Выбор аватара</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Знакомство с участницами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Выбор аватара по отклику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                    <span>Первые задания + лидерборд</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ДНИ 1-5 */}
            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Sunrise" size={16} />
              </div>
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm">
                <div className="inline-block px-4 py-2 rounded-full bg-amber-600/20 border border-amber-500/30 text-sm font-semibold mb-4">
                  ДНИ 1-5: ОЧИЩЕНИЕ
                </div>
                <h3 className="text-2xl font-bold mb-4">Тело, Разум, Пространство</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: "Activity", text: "Ежедневные физические практики" },
                    { icon: "Brain", text: "Медитации и дыхание" },
                    { icon: "Home", text: "Расхламление пространства" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-slate-800/50 border border-white/10 flex flex-col items-center text-center gap-2">
                      <Icon name={item.icon} className="text-amber-400" size={24} />
                      <p className="text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ДНИ 6-10 */}
            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-emerald-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="animate-pulse-glow" />
              </div>
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm">
                <div className="inline-block px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-sm font-semibold mb-4">
                  ДНИ 6-10: АКТИВАЦИЯ
                </div>
                <h3 className="text-2xl font-bold mb-4">Образ, Женственность, Творчество</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: "Eye", text: "Работа с образом и стилем" },
                    { icon: "Heart", text: "Практики женской энергии" },
                    { icon: "Palette", text: "Творческие задания" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-slate-800/50 border border-white/10 flex flex-col items-center text-center gap-2">
                      <Icon name={item.icon} className="text-emerald-400" size={24} />
                      <p className="text-sm text-white/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ДНИ 11-14 */}
            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-turquoise-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Flame" size={16} className="animate-pulse-glow" />
              </div>
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-turquoise-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm">
                <div className="inline-block px-4 py-2 rounded-full bg-turquoise-600/20 border border-turquoise-500/30 text-sm font-semibold mb-4">
                  ДНИ 11-14: ИНТЕГРАЦИЯ
                </div>
                <h3 className="text-2xl font-bold mb-4">Ценности, Отношения, Цели</h3>
                <div className="space-y-4">
                  {[
                    "Прояснение личных ценностей",
                    "Трансформация отношений с людьми и собой",
                    "Постановка целей и намерений на 2026",
                    "От пробуждения к ГОРЯЩЕМУ ГЛАЗУ 🔥"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-white/90">
                      <Icon 
                        name={index === 3 ? "Flame" : "Target"} 
                        className={`text-turquoise-400 flex-shrink-0 mt-0.5 ${index === 3 ? 'animate-pulse-glow' : ''}`}
                        size={20} 
                      />
                      <p className="text-white/90 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ФИНАЛ */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-turquoise-500/10 to-slate-800/50 border border-turquoise-500/20 backdrop-blur-sm">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-turquoise-600 border-4 border-slate-900 flex items-center justify-center">
                <Icon name="Star" size={16} className="animate-pulse-glow" />
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

            {/* Аватар 3: Богиня Восстановления */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-slate-800/50 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-400">БОГИНЯ ВОССТАНОВЛЕНИЯ</h3>
                <p className="text-white/80 italic">"Для тех, кто ищет гармонию между материальным и духовным."</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-white/60 mb-3">Трансформация за 14 дней:</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">L1</span>
                  <Icon name="ArrowRight" size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-emerald-600/50 rounded-full text-xs">L2</span>
                  <Icon name="ArrowRight" size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs">L3</span>
                  <Icon name="ArrowRight" size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-xs font-bold">L4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-emerald-300 mb-6">"От рассеяния к целостности"</p>

              <Button 
                variant="outline"
                className="w-full bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
              >
                Узнать больше об этом архетипе
              </Button>
            </div>

            {/* Аватар 4: Воительница Света */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-slate-800/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3 text-amber-400">ВОИТЕЛЬНИЦА СВЕТА</h3>
                <p className="text-white/80 italic">"Для тех, кто готов брать жизнь в свои руки."</p>
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

              <p className="text-center text-lg font-semibold text-amber-300 mb-6">"От тени к силе"</p>

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

      {/* БЛОК 6: ПОЧЕМУ ИМЕННО 9 ФЕВРАЛЯ */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Почему старт <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">9 февраля?</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: "Calendar",
                title: "Заканчивается 23 февраля",
                desc: "К празднику ты войдёшь уже НОВОЙ — с лёгкостью, силой и горящим глазом",
                color: "purple"
              },
              {
                icon: "Moon",
                title: "Идеальное время по лунному календарю",
                desc: "Период активной трансформации и обновления энергии",
                color: "amber"
              },
              {
                icon: "Sparkles",
                title: "После праздников — самое время",
                desc: "Сброс \"праздничного балласта\" и восстановление лёгкости",
                color: "turquoise"
              }
            ].map((item, index) => (
              <div key={index} className={`p-8 rounded-3xl bg-gradient-to-br from-${item.color}-500/10 to-slate-800/50 border border-${item.color}-500/20 backdrop-blur-sm hover:border-${item.color}-500/40 transition-all duration-500`}>
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <Icon name={item.icon} className={`text-${item.color}-400 ${item.icon === 'Sparkles' ? 'animate-pulse-glow' : item.icon === 'Moon' ? 'animate-float' : ''}`} size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-white/70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
              { icon: "Zap", text: "Энергию и лёгкость в теле", color: "amber" },
              { icon: "Heart", text: "Возвращение к себе настоящей", color: "purple" },
              { icon: "Sparkles", text: "Ясность целей и желаний", color: "turquoise" },
              { icon: "Users", text: "Поддерживающее комьюнити", color: "emerald" },
              { icon: "Trophy", text: "Видимые результаты", color: "orange" },
              { icon: "Flame", text: "ГОРЯЩИЙ ГЛАЗ вместо усталости", color: "red" }
            ].map((item, index) => (
              <div key={index} className={`group p-8 rounded-3xl bg-gradient-to-br from-${item.color}-500/10 to-slate-800/50 border border-${item.color}-500/20 backdrop-blur-sm hover:border-${item.color}-500/40 transition-all duration-500 text-center`}>
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center mx-auto mb-6`}>
                  <Icon 
                    name={item.icon} 
                    className={`text-${item.color}-400 ${
                      item.icon === 'Sparkles' || item.icon === 'Flame' ? 'animate-pulse-glow' : 
                      item.icon === 'Trophy' ? 'animate-float' : ''
                    }`}
                    size={28} 
                  />
                </div>
                <p className="text-lg font-semibold text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 8: АВТОР (Я прошла этот путь сама) */}
      <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Фото */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-white/10">
                <img 
                  src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/d5d08d21-c0d2-4e48-8e05-e33e91d9e850.jpg" 
                  alt="Дарья Поддубная"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Текст */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Я прошла <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">этот путь сама</span>
              </h2>

              <p className="text-xl text-white/80 leading-relaxed">
                Меня зовут <span className="text-purple-400 font-semibold">Дарья Поддубная</span>, и я знаю, что такое выгорание, потеря себя и ощущение "день сурка".
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Я работала в корпорации, жила на автопилоте, пока однажды не поняла: <span className="text-amber-400">я потеряла саму себя.</span>
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Я прошла путь трансформации — от полного выгорания до жизни в энергии, смысле и радости. Теперь я помогаю другим женщинам найти себя через практику, а не теорию.
              </p>

              <div className="pt-6 space-y-4">
                {[
                  "700+ человек прошли мои программы",
                  "15+ лет в трансформационных практиках",
                  "Сертифицированный коуч и наставник"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 8.5: СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Что говорят <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">участницы</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 42 года",
                text: "Я не ожидала, что за 14 дней можно так измениться. Вернулась энергия, появилось желание жить!",
                avatar: "👩🏻"
              },
              {
                name: "Анна, 38 лет",
                text: "Игровой формат затягивает! Каждый день ждала новых заданий. Похудела на 3 кг, хотя это не было целью.",
                avatar: "👩🏼"
              },
              {
                name: "Мария, 45 лет",
                text: "Самое ценное — сообщество. Мы поддерживали друг друга. Теперь у меня есть подруги на всю жизнь!",
                avatar: "👩🏽"
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-slate-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500">
                <div className="text-6xl mb-4">{item.avatar}</div>
                <p className="text-white/80 mb-6 italic">"{item.text}"</p>
                <p className="text-purple-400 font-semibold">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 9: ПАКЕТЫ (3 тарифа) */}
      <section id="packages" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Выбери <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">свой пакет</span>
            </h2>
            <p className="text-xl text-white/60">3 варианта участия — выбери по своим задачам</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* СТАРТ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-2xl font-bold mb-2">СТАРТ</h3>
                <div className="text-sm text-white/60 mb-2">БАЗОВЫЙ ПАКЕТ</div>
                <div className="text-4xl font-bold text-white mb-2">2 900 ₽</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "14 дней квест-челленджа",
                  "Доступ к закрытому чату",
                  "Ежедневные задания",
                  "Лидерборд и геймификация",
                  "Твой аватар-проводник",
                  "Групповая поддержка"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                size="lg"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>

            {/* ПРЕМИУМ */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-amber-600/20 border-2 border-amber-500/50 backdrop-blur-sm hover:border-amber-500/70 transition-all duration-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-sm font-bold">
                ПОПУЛЯРНЫЙ
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-2xl font-bold mb-2">ПРЕМИУМ</h3>
                <div className="text-sm text-white/60 mb-2">РАСШИРЕННЫЙ ПАКЕТ</div>
                <div className="text-4xl font-bold text-amber-400 mb-2">4 900 ₽</div>
                <p className="text-sm text-emerald-400">💰 Экономия: 2000 ₽</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <Icon name="Check" className="text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-semibold">ВСЁ из пакета СТАРТ</span>
                </li>
                <li className="text-sm font-semibold text-amber-400 mt-4 mb-2">+ БОНУСЫ:</li>
                {[
                  "3 live-встречи с Дарьей в Zoom",
                  "Персональный разбор твоего прогресса",
                  "Доступ к записям всех встреч",
                  "Workbook с упражнениями",
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
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none shadow-lg shadow-purple-500/30 transition-all"
                size="lg"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>
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
                a: "Ничего страшного! Задания остаются доступными. Главное — не бросать совсем. Мы здесь не за перфекционизмом, а за прогрессом."
              },
              {
                q: "Это подходит для работающих мам?",
                a: "ДА. Именно для них! 40 минут в день — это реально даже при плотном графике. Многие участницы — мамы с детьми и карьерой."
              },
              {
                q: "Что если мне не подойдёт мой аватар?",
                a: "Ты можешь сменить аватара в первые 3 дня. Но обычно интуиция не подводит — люди выбирают именно 'своего' проводника."
              },
              {
                q: "Есть ли возврат средств?",
                a: "Да. В течение первых 3 дней, если ты поймёшь, что это не твоё, мы вернём деньги без вопросов."
              }
            ].map((item, index) => (
              <details key={index} className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer">
                <summary className="flex items-start justify-between gap-4 text-lg font-semibold text-white list-none">
                  <span>{item.q}</span>
                  <Icon name="ChevronDown" className="flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" size={20} />
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}