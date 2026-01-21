import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-amber-400 to-white bg-clip-text text-transparent">
            АПГРЕЙД 2026
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Об АПГРЕЙДЕ
            </button>
            <button 
              onClick={() => scrollToSection('avatars')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Аватары
            </button>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Пакеты
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQ
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
  );
}