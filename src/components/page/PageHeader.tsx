import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface PageHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function PageHeader({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: PageHeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-fuchsia-950/90 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/bucket/e14f5f9b-7113-4707-9411-d0c9017c3b23.png"
                alt="Горящий глаз"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
                АПГРЕЙД 2026
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <button onClick={() => scrollToSection('about')} className="text-warm-gold hover:text-amber-300 transition-colors text-sm lg:text-base">
                Об АПГРЕЙДЕ
              </button>
              <button onClick={() => scrollToSection('avatars')} className="text-warm-gold hover:text-amber-300 transition-colors text-sm lg:text-base">
                Аватары
              </button>
              <button onClick={() => scrollToSection('packages')} className="text-warm-gold hover:text-amber-300 transition-colors text-sm lg:text-base">
                Пакеты
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-warm-gold hover:text-amber-300 transition-colors text-sm lg:text-base">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-warm-gold hover:text-amber-300 transition-colors text-sm lg:text-base">
                FAQ
              </button>
            </nav>

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

            <Button 
              onClick={() => scrollToSection('packages')} 
              className="hidden md:inline-flex bg-gradient-to-r from-fuchsia-600 to-amber-500 hover:from-fuchsia-700 hover:to-amber-600 border-none shadow-lg shadow-amber-500/40 transition-all duration-300 hover:scale-105 text-xs sm:text-sm px-3 sm:px-4"
            >
              ВЫБРАТЬ ПАКЕТ
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 md:hidden overflow-y-auto">
          <div className="min-h-screen pt-20 pb-8 px-4">
            <nav className="space-y-1 mb-6">
              <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-3 text-lg text-amber-50/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Об АПГРЕЙДЕ
              </button>
              <button onClick={() => scrollToSection('avatars')} className="w-full text-left px-4 py-3 text-lg text-amber-50/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Аватары
              </button>
              <button onClick={() => scrollToSection('packages')} className="w-full text-left px-4 py-3 text-lg text-amber-50/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Пакеты
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="w-full text-left px-4 py-3 text-lg text-amber-50/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('faq')} className="w-full text-left px-4 py-3 text-lg text-amber-50/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                FAQ
              </button>
            </nav>

            <div className="mb-6">
              <Button 
                onClick={() => scrollToSection('packages')} 
                className="w-full bg-gradient-to-r from-fuchsia-600 to-amber-500 hover:from-fuchsia-700 hover:to-amber-600 border-none shadow-lg shadow-amber-500/40 py-6 text-lg font-bold"
              >
                ВЫБРАТЬ ПАКЕТ
              </Button>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-bold mb-4 text-white">Контакты:</h4>
              <div className="space-y-3">
                <a href="tel:+79147047392" className="flex items-center gap-3 px-4 py-3 text-amber-50/85 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors">
                  <Icon name="Phone" size={20} className="flex-shrink-0" />
                  <span className="text-base">+7 914 704 7392</span>
                </a>
                <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-amber-50/85 hover:text-sky-400 hover:bg-white/5 rounded-lg transition-colors">
                  <Icon name="Send" size={20} className="flex-shrink-0" />
                  <span className="text-base">Телеграм</span>
                </a>
                <a href="mailto:offic1978@mail.ru" className="flex items-center gap-3 px-4 py-3 text-amber-50/85 hover:text-fuchsia-300 hover:bg-white/5 rounded-lg transition-colors">
                  <Icon name="Mail" size={20} className="flex-shrink-0" />
                  <span className="text-base">offic1978@mail.ru</span>
                </a>
                <a href="https://instagram.com/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-amber-50/85 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-colors">
                  <Icon name="Instagram" size={20} className="flex-shrink-0" />
                  <span className="text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
