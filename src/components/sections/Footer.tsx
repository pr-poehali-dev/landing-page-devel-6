import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="relative py-16 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-amber-400 bg-clip-text text-transparent">АПГРЕЙД 2026</h4>
            <p className="text-amber-50/65 text-sm leading-relaxed mb-4">Квест-челлендж для женщин 35+. Из усталости в горящий глаз за 14 дней.</p>
            <div className="text-xs text-white/40 space-y-1">
              <p>ИП Цыбульский С.И.</p>
              <p>ИНН 436687430</p>
            </div>
          </div>

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
  );
}
