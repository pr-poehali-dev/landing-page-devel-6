import { useState, useEffect } from 'react';
import Header from '@/components/webapp/Header';
import MainSections from '@/components/sections/MainSections';
import Footer from '@/components/webapp/FooterWithPopup';
import AllModals from '@/components/modals/AllModals';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(9).fill(false));
  const [showCheckResult, setShowCheckResult] = useState(false);
  const [showPhoenixModal, setShowPhoenixModal] = useState(false);
  const [showQueenModal, setShowQueenModal] = useState(false);
  const [showGoddessModal, setShowGoddessModal] = useState(false);
  const [showWarriorModal, setShowWarriorModal] = useState(false);
  const [showStandardPackageModal, setShowStandardPackageModal] = useState(false);
  const [showPremiumPackageModal, setShowPremiumPackageModal] = useState(false);
  const [showVipPackageModal, setShowVipPackageModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-violet-900 to-rose-950 text-white overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      
      <MainSections 
        scrollToSection={scrollToSection}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        setShowCheckResult={setShowCheckResult}
        setShowPhoenixModal={setShowPhoenixModal}
        setShowQueenModal={setShowQueenModal}
        setShowGoddessModal={setShowGoddessModal}
        setShowWarriorModal={setShowWarriorModal}
        setShowStandardPackageModal={setShowStandardPackageModal}
        setShowPremiumPackageModal={setShowPremiumPackageModal}
        setShowVipPackageModal={setShowVipPackageModal}
      />
      
      <Footer scrollToSection={scrollToSection} />
      
      <AllModals 
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCheckResult={showCheckResult}
        setShowCheckResult={setShowCheckResult}
        showPhoenixModal={showPhoenixModal}
        setShowPhoenixModal={setShowPhoenixModal}
        showQueenModal={showQueenModal}
        setShowQueenModal={setShowQueenModal}
        showGoddessModal={showGoddessModal}
        setShowGoddessModal={setShowGoddessModal}
        showWarriorModal={showWarriorModal}
        setShowWarriorModal={setShowWarriorModal}
        showStandardPackageModal={showStandardPackageModal}
        setShowStandardPackageModal={setShowStandardPackageModal}
        showPremiumPackageModal={showPremiumPackageModal}
        setShowPremiumPackageModal={setShowPremiumPackageModal}
        showVipPackageModal={showVipPackageModal}
        setShowVipPackageModal={setShowVipPackageModal}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
