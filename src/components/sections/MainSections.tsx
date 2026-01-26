import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
  checkedItems: boolean[];
  setCheckedItems: (items: boolean[]) => void;
  setShowCheckResult: (value: boolean) => void;
  setShowPhoenixModal: (value: boolean) => void;
  setShowQueenModal: (value: boolean) => void;
  setShowGoddessModal: (value: boolean) => void;
  setShowWarriorModal: (value: boolean) => void;
  setShowStandardPackageModal: (value: boolean) => void;
  setShowPremiumPackageModal: (value: boolean) => void;
  setShowVipPackageModal: (value: boolean) => void;
}

export default function MainSections(props: MainSectionsProps) {
  const {
    scrollToSection,
    checkedItems,
    setCheckedItems,
    setShowCheckResult,
    setShowPhoenixModal,
    setShowQueenModal,
    setShowGoddessModal,
    setShowWarriorModal,
    setShowStandardPackageModal,
    setShowPremiumPackageModal,
    setShowVipPackageModal
  } = props;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-amber-400/20 border border-amber-400/40 text-sm font-medium backdrop-blur-sm text-warm-gold">
                  Квест-челлендж для женщин 35+
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-warm-gold">Из</span> <span className="text-slate-400 line-through">УСТАЛОСТИ</span>
                <br />
                <span className="text-glow-gold">
                  в ГОРЯЩИЙ ГЛАЗ
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-warm-gold">за 14 дней</span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <span className="text-warm-gold">
                  с 9—22 февраля
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
                  <span>Старт: 9 февраля 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" size={16} className="text-rose-300 animate-float" />
                  <span>500+ женщин трансформировались</span>
                </div>
              </div>
            </div>

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-glow-gold">
              Что тебе <span className="bg-gradient-to-r from-fuchsia-400 via-amber-400 to-white bg-clip-text text-transparent">знакомо?</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-50/65">Пройди чек-лист</p>
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
    </>
  );
}
