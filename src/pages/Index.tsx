import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import FooterWithPopup from '@/components/FooterWithPopup';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(9).fill(false));
  const [showCheckResult, setShowCheckResult] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <MainSections 
        scrollToSection={scrollToSection}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        showCheckResult={showCheckResult}
        setShowCheckResult={setShowCheckResult}
      />
      
      <FooterWithPopup 
        scrollToSection={scrollToSection}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
}
