import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date('2026-02-09T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 my-8">
      {/* Badge "ВСЕГО 30 МЕСТ" */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 blur-xl opacity-60 animate-pulse"></div>
        <div className="relative px-8 py-3 bg-gradient-to-r from-pink-600 to-amber-500 rounded-full border-2 border-amber-300 shadow-2xl">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={24} className="text-white animate-bounce" />
            <span className="text-white font-black text-xl tracking-wider">
              ВСЕГО 30 МЕСТ
            </span>
            <Icon name="Flame" size={24} className="text-white animate-bounce" />
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-amber-300">
          <Icon name="Sparkles" size={28} />
          <h3 className="text-2xl md:text-3xl font-bold">Стартует через:</h3>
          <Icon name="Sparkles" size={28} />
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <TimeBlock value={timeLeft.days} label="дн" />
          <span className="text-4xl md:text-6xl text-pink-400 font-bold">:</span>
          <TimeBlock value={timeLeft.hours} label="ч" />
          <span className="text-4xl md:text-6xl text-pink-400 font-bold">:</span>
          <TimeBlock value={timeLeft.minutes} label="м" />
          <span className="text-4xl md:text-6xl text-pink-400 font-bold">:</span>
          <TimeBlock value={timeLeft.seconds} label="сек" />
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-pink-500/30 blur-2xl rounded-lg"></div>
        <div className="relative bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-pink-500/40 shadow-2xl">
          <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-pink-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm md:text-base text-amber-300 font-semibold tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function StickyTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date('2026-02-09T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-fuchsia-950 via-purple-900 to-pink-950 backdrop-blur-xl border-t-2 border-amber-500/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Icon name="Clock" size={16} className="text-amber-400 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-amber-300">
              СТАРТУЕТ ЧЕРЕЗ:
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-white">
              <span className="bg-pink-600/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{timeLeft.days}дн</span>
              <span className="bg-pink-600/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{timeLeft.hours}ч</span>
              <span className="bg-pink-600/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{timeLeft.minutes}м</span>
              <span className="bg-pink-600/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{timeLeft.seconds}сек</span>
            </div>
          </div>
          
          <button
            onClick={scrollToPackages}
            className="bg-gradient-to-r from-pink-600 to-amber-500 hover:from-pink-700 hover:to-amber-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-1 sm:gap-2"
          >
            <span className="hidden sm:inline">ПРИСОЕДИНИТЬСЯ</span>
            <span className="sm:hidden">ВСТУПИТЬ</span>
            <Icon name="ArrowRight" size={14} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
}
