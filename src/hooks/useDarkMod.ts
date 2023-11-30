import { themeState } from '@/recoil/atoms/ThemeStateAtom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

type Theme = 'light' | 'dark';

export const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme({
        value: localTheme,
      });
      document.body.dataset.theme = localTheme;
    } else {
      setTheme({
        value: 'light',
      });
      document.body.dataset.theme = 'light';
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
    setTheme({
      value: newTheme,
    });
  };

  return [theme.value, toggleTheme];
};
