import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface PackageModalsProps {
  showStandardPackageModal: boolean;
  showPremiumPackageModal: boolean;
  showVipPackageModal: boolean;
  setShowStandardPackageModal: (v: boolean) => void;
  setShowPremiumPackageModal: (v: boolean) => void;
  setShowVipPackageModal: (v: boolean) => void;
}

export default function PackageModals({
  showStandardPackageModal, showPremiumPackageModal, showVipPackageModal,
  setShowStandardPackageModal, setShowPremiumPackageModal, setShowVipPackageModal,
}: PackageModalsProps) {
  return (
    <>
      {showStandardPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-500/30 shadow-2xl">
            <button onClick={() => setShowStandardPackageModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/bfca9eb8-4131-462c-80d5-cebde3d6162b.jpg" alt="Стандарт" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">ПАКЕТ СТАНДАРТ</h3>
                <p className="text-lg sm:text-xl text-slate-400 mb-6">4 900 ₽</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-lg">
                    Перейди по кнопке и отправь мне сообщение:<br />
                    <span className="font-bold text-amber-400">СТАНДАРТ</span> и свое ФИО
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
              <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 border-none shadow-lg w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {showPremiumPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-fuchsia-900 to-amber-900 border border-amber-500/30 shadow-2xl">
            <button onClick={() => setShowPremiumPackageModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/6a25d76e-6165-4749-9061-24561759b39f.jpg" alt="Премиум" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">ПАКЕТ ПРЕМИУМ</h3>
                <p className="text-lg sm:text-xl text-amber-300 mb-6">6 900 ₽</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-lg">
                    Перейди по кнопке и отправь мне сообщение:<br />
                    <span className="font-bold text-amber-400">ПРЕМИУМ</span> и свое ФИО
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-fuchsia-950/50 to-amber-950/50">
              <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-700 hover:to-amber-700 border-none shadow-lg w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {showVipPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-fuchsia-900 to-pink-900 border border-fuchsia-500/30 shadow-2xl">
            <button onClick={() => setShowVipPackageModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <img src="https://cdn.poehali.dev/projects/fb27df1f-1dc0-4f97-b6bf-b3c9eb7cbc02/files/13b3cf95-5a88-4410-9274-a9df7724552e.jpg" alt="VIP" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">ПАКЕТ VIP</h3>
                <p className="text-lg sm:text-xl text-purple-300 mb-6">9 900 ₽</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="text-center text-lg">
                    Перейди по кнопке и отправь мне сообщение:<br />
                    <span className="font-bold text-amber-400">VIP</span> и свое ФИО
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-fuchsia-950/50 to-pink-950/50">
              <a href="https://t.me/darya_tsybulskaya22" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 border-none shadow-lg w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
