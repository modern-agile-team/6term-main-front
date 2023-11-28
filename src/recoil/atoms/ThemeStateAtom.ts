// src/store/theme.tsx
import { atom } from 'recoil';

export type ThemeState = {
  value: string;
};

export const initialThemeState: ThemeState = {
  value: 'light',
};

export const themeState = atom({
  key: 'themeState',
  default: initialThemeState,
});
