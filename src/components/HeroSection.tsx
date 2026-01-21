import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
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
                <Icon name="Sparkles" className="text-purple-400 flex-shrink-0 mt-1 animate-pulse-glow" size={24} />
                <span>Восстановление тела, разума, пространства</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Users" className="text-amber-400 flex-shrink-0 mt-1 icon-hover" size={24} />
                <span>Игровой формат + живое сообщество</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Zap" className="text-turquoise-400 flex-shrink-0 mt-1 animate-pulse-glow" size={24} />
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

            <div className="flex items-center gap-6 pt-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} className="text-amber-400 animate-bounce-gentle" />
                <span>Старт: 9 февраля 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={18} className="text-purple-400 animate-float" />
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
                  <Icon name="ArrowRight" size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs">Level 4 ЛЕГЕНДАРНЫЙ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
