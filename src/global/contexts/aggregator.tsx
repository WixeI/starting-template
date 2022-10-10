import { ThemeProvider } from 'styled-components';
import customTheme from '../styles/customTheme';
import { I18nextProvider } from 'react-i18next';
import languageInstance from '../../configs/i18n/config';
import StyleAggregator from '../styles/aggregator';
import { ReactNode } from 'react';

interface ContextAggregatorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: any;
  children: ReactNode;
}

const ContextAggregator = ({ theme = customTheme, children }: ContextAggregatorProps) => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={languageInstance}>
      <StyleAggregator />
      {children}
    </I18nextProvider>
  </ThemeProvider>
);

export { ContextAggregator };
