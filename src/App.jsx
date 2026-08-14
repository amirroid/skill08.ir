import React, { useState, useEffect, useCallback } from 'react';
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

// ── URL ↔ page mapping ──────────────────────────────────────────────────────
const PATH_TO_PAGE = {
  '/':                       'home',
  '/competition':            'competition',
  '/modules':                'modules',
  '/technical-description':  'td',
  '/achievements':           'achievements',
  '/resources':              'resources',
  '/rules':                  'rules',
  '/contact':                'contact',
};

const PAGE_TO_PATH = {
  home:         '/',
  competition:  '/competition',
  modules:      '/modules',
  td:           '/technical-description',
  achievements: '/achievements',
  resources:    '/resources',
  rules:        '/rules',
  contact:      '/contact',
};

function getPageFromPath(pathname) {
  return PATH_TO_PAGE[pathname] || 'home';
}

// ── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePageState] = useState(() =>
    getPageFromPath(window.location.pathname)
  );
  const [lang,  setLang]  = useState('fa');
  const [theme, setTheme] = useState('dark');

  // Navigate: update state + push URL
  const setActivePage = useCallback((page) => {
    const path = PAGE_TO_PATH[page] || '/';
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    setActivePageState(page);
  }, []);

  // Browser back / forward
  useEffect(() => {
    const onPop = (e) => {
      const page = e.state?.page || getPageFromPath(window.location.pathname);
      setActivePageState(page);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // dir / lang / theme on <html>
  useEffect(() => {
    document.documentElement.dir  = lang === 'fa' ? 'rtl' : 'ltr';
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
