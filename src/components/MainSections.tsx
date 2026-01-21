import React from 'react';
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
  "Энергетическая и психологическая усталость",
  "Апатия, раздражение, \"ничего не хочется\"",
  "Живёшь в \"дне сурка\" — одни и те же дни",
  "Редко испытываешь радость и вдохновение",
  "Физическая тяжесть, потеря лёгкости в теле",
  "\"Спасательный круг\" после праздников",
  "Нет ощущения собственной ценности",
  "Чувство внутренней опасности и неуверенности",
  "Потеря смысла в том, что раньше вдохновляло"
];

export default function MainSections({ 
  scrollToSection, 
  checkedItems, 
  setCheckedItems, 
  showCheckResult, 
  setShowCheckResult 
}: MainSectionsProps) {

  const toggleCheck = (index: number) => {
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
                  onClick={() => toggleCheck(index)}
                >
                  <div 
                    className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-0.5 transition-all flex items-center justify-center ${
                      checkedItems[index] 
                        ? 'border-purple-400 bg-purple-600' 
                        : 'border-white/30 group-hover:border-purple-400'
                    }`}
                  >
                    {checkedItems[index] && (
                      <Icon name="Check" className="text-white" size={16} />
                    )}
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors">{problem}</p>
                </div>
              ))}
            </div>

            {!showCheckResult && (
              <div className="text-center animate-fade-in">
                <Button 
                  onClick={() => setShowCheckResult(true)}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-none"
                >
                  Показать результат
                </Button>
              </div>
            )}

            {showCheckResult && (
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-amber-900/30 border border-purple-500/30 backdrop-blur-sm animate-fade-in">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-amber-600 mb-4">
                    <Icon name="Sparkles" className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Ты не одна!</h3>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Все эти состояния знакомы многим женщинам. Хорошая новость: это можно изменить. 
                    <span className="block mt-4 font-semibold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                      Марафон "Перезагрузка" создан именно для того, чтобы помочь тебе вернуть энергию, лёгкость и радость жизни.
                    </span>
                  </p>
                  <Button 
                    onClick={() => scrollToSection('program')}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mt-6 border-none"
                  >
                    Узнать о марафоне
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Остальные секции остаются без изменений */}
      {/* РЕШЕНИЕ: ПРОГРАММА */}
      <section id="program" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Что тебя <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">ждёт?</span>
            </h2>
            <p className="text-xl text-white/60">21 день трансформации</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Энергия и лёгкость",
                description: "Вернёшь физическую форму, энергию и лёгкость в теле через питание и движение"
              },
              {
                icon: "Heart",
                title: "Эмоциональная перезагрузка",
                description: "Освободишься от тревоги, апатии и раздражения через психологические практики"
              },
              {
                icon: "Sparkles",
                title: "Новая версия себя",
                description: "Обретёшь ясность, вдохновение и ощущение собственной ценности"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ДЕЙСТВИЕ: CTA */}
      <section id="cta" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 to-amber-900/30 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Готова к <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">переменам?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Присоединяйся к марафону "Перезагрузка" и начни свой путь к новой себе уже сегодня
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-none"
            >
              Начать трансформацию
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
