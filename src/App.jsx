import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CompetitionPage from './pages/CompetitionPage';
import ModulesPage from './pages/ModulesPage';
import TdPage from './pages/TdPage';
import AchievementsPage from './pages/AchievementsPage';
import ResourcesPage from './pages/ResourcesPage';
import RulesPage from './pages/RulesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('fa');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-theme', theme);
  }, [lang, theme]);

  const pages = {
    home:         <HomePage setActivePage={setActivePage} lang={lang} />,
    competition:  <CompetitionPage lang={lang} />,
    modules:      <ModulesPage lang={lang} />,
    td:           <TdPage lang={lang} />,
    achievements: <AchievementsPage lang={lang} />,
    resources:    <ResourcesPage lang={lang} />,
    rules:        <RulesPage lang={lang} />,
    contact:      <ContactPage lang={lang} />,
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="page-container" style={{ flex: 1 }}>
        {pages[activePage] || pages.home}
      </main>
      <Footer setActivePage={setActivePage} lang={lang} />
    </div>
  );
}
