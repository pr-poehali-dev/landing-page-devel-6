import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface AvatarModalsProps {
  showPhoenixModal: boolean;
  showQueenModal: boolean;
  showGoddessModal: boolean;
  showWarriorModal: boolean;
  setShowPhoenixModal: (v: boolean) => void;
  setShowQueenModal: (v: boolean) => void;
  setShowGoddessModal: (v: boolean) => void;
  setShowWarriorModal: (v: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function AvatarModals({
  showPhoenixModal, showQueenModal, showGoddessModal, showWarriorModal,
  setShowPhoenixModal, setShowQueenModal, setShowGoddessModal, setShowWarriorModal,
  scrollToSection,
}: AvatarModalsProps) {
  return (
    <>
      {showPhoenixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-orange-900 to-red-900 border border-orange-500/30 shadow-2xl">
            <button onClick={() => setShowPhoenixModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">🔥</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">ОГНЕННАЯ ФЕНИКС</h3>
                <p className="text-lg sm:text-xl italic text-orange-300/80 mb-6">"Из пепла в пламя"</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-orange-300/80">"Для тех, кто прошёл выгорание и готов воскреситься."</p>
                  <p>Ты была в огне. Может быть, любви, карьеры, забот о других. Ты горела, пока не превратилась в пепел.</p>
                  <p>Теперь внутри холодно. Пусто. Безжизненно.</p>
                  <p>Но Феникс знает секрет: из пепла не только приходит конец. Из пепла рождается НОВОЕ ОГОНЬ.</p>
                  <p className="font-semibold text-orange-300">Твой архетип Феникса означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✨ Ты пережила сложное, и это сделало тебя сильнее</li>
                    <li>✨ Ты готова воскреситься, но уже другой — мудрой и осознанной</li>
                    <li>✨ Твой огонь вернётся, но теперь это будет ТВОЙ огонь, а не чужой</li>
                    <li>✨ За 14 дней ты научишься гореть для себя, а не для других</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-orange-950/50 to-red-950/50">
              <Button onClick={() => { setShowPhoenixModal(false); scrollToSection('packages'); }} size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 border-none shadow-lg w-full">
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {showQueenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-fuchsia-900 to-pink-900 border border-fuchsia-500/30 shadow-2xl">
            <button onClick={() => setShowQueenModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">👑</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">КОРОЛЕВА ПЕРЕМЕН</h3>
                <p className="text-lg sm:text-xl italic text-purple-300/80 mb-6">"От замужества к королевству"</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-purple-300/80">"Для тех, кто готов стать главной героиней своей жизни."</p>
                  <p>Ты жила для других. Для мужа, детей, семьи, работы, ожиданий.</p>
                  <p>Где-то внутри забыла про СЕБЯ. Забыла, что ты — главная героиня своей жизни, а не второстепенный персонаж в чужой истории.</p>
                  <p>Королева Перемен знает правду: ты можешь быть королевой своего королевства. Не потому что власть над кем-то, а потому что ВЛАСТЬ НАД СОБОЙ.</p>
                  <p className="font-semibold text-purple-300">Твой архетип Королевы означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>👑 Ты готова взять ответственность за свою жизнь</li>
                    <li>👑 Ты учишься расставлять приоритеты: сначала ТЫ, потом остальные</li>
                    <li>👑 Твой голос, твои желания, твои мечты — ВАЖНЫ</li>
                    <li>👑 За 14 дней ты станешь королевой, а не служанкой в своей жизни</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-fuchsia-950/50 to-pink-950/50">
              <Button onClick={() => { setShowQueenModal(false); scrollToSection('packages'); }} size="lg" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 border-none shadow-lg w-full">
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {showGoddessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-900 border border-emerald-500/30 shadow-2xl">
            <button onClick={() => setShowGoddessModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">✨</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">БОГИНЯ ВОССТАНОВЛЕНИЯ</h3>
                <p className="text-lg sm:text-xl italic text-emerald-300/80 mb-6">"От рассеяния к целостности"</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-emerald-300/80">"Для тех, кто ищет гармонию между материальным и духовным."</p>
                  <p>Ты рассеяна. Твоя энергия разбросана по сотням дел, забот, обязательств.</p>
                  <p>Куски тебя везде: на работе, дома, с друзьями, в социальных сетях. Но нигде ты полностью не здесь.</p>
                  <p>Богиня Восстановления знает силу ЦЕЛОСТНОСТИ. Когда все части тебя собраны вместе, когда тело, ум и душа работают в унисон.</p>
                  <p className="font-semibold text-emerald-300">Твой архетип Богини означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>✨ Ты ищешь баланс — не фанатизм, а гармонию</li>
                    <li>✨ Ты понимаешь, что забота о себе — это не эгоизм, а инвестиция</li>
                    <li>✨ Ты готова объединить материальное и духовное в единое целое</li>
                    <li>✨ За 14 дней ты станешь собранной, центрированной, целостной</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-emerald-950/50 to-teal-950/50">
              <Button onClick={() => { setShowGoddessModal(false); scrollToSection('packages'); }} size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-none shadow-lg w-full">
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}

      {showWarriorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col rounded-3xl bg-gradient-to-br from-amber-900 to-yellow-900 border border-amber-500/30 shadow-2xl">
            <button onClick={() => setShowWarriorModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
              <Icon name="X" size={16} />
            </button>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div className="text-center">
                <div className="text-7xl mb-6">🌟</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">ВОИТЕЛЬНИЦА СВЕТА</h3>
                <p className="text-lg sm:text-xl italic text-amber-300/80 mb-6">"От сомнений к уверенности"</p>
                <div className="text-left space-y-4 text-amber-50/95 leading-relaxed text-sm sm:text-base">
                  <p className="italic text-amber-300/80">"Для тех, кто готов встать и действовать."</p>
                  <p>Ты знаешь, что нужно изменить. Но ты медлишь. Сомневаешься. Боишься.</p>
                  <p>Внутри тебя есть сила, но её заковало сомнение. Как цепи, которые не дают тебе двигаться вперёд.</p>
                  <p>Воительница Света знает правду: свет не приходит с неба. Свет зажигается ВНУТРИ, когда ты решаешься действовать несмотря на страх.</p>
                  <p className="font-semibold text-amber-300">Твой архетип Воительницы означает:</p>
                  <ul className="space-y-2 ml-4">
                    <li>⚔️ Ты готова сражаться за себя (не с другими, а с собой)</li>
                    <li>⚔️ Ты понимаешь: без действия нет результата</li>
                    <li>⚔️ Ты будешь идти, даже если страшно, потому что цена неверия выше</li>
                    <li>⚔️ За 14 дней ты превратишь сомнение в уверенность</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 border-t border-white/10 bg-gradient-to-br from-amber-950/50 to-yellow-950/50">
              <Button onClick={() => { setShowWarriorModal(false); scrollToSection('packages'); }} size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 border-none shadow-lg w-full">
                Выбрать этот архетип
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
