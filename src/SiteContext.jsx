import { createContext, useContext, useState, useEffect } from 'react';
import { ES, EN } from './i18n';
import { THEMES } from './theme';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#0A0F1F' : '#FFFFFF';
  }, [theme]);

  const t = lang === 'es' ? ES : EN;
  const vars = THEMES[theme];

  return (
    <SiteContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      <div style={vars}>{children}</div>
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite debe usarse dentro de SiteProvider');
  return ctx;
}
