import { I18nextProvider } from 'react-i18next';
import languageInstance from '../../configs/i18n/config';
import { ReactNode } from 'react';
import '../styles/defaultStyles/index.css';
import '../styles/resetStyles/index.css';

interface ContextAggregatorProps {
  children: ReactNode;
}

const ContextAggregator = ({ children }: ContextAggregatorProps) => (
  <I18nextProvider i18n={languageInstance}>{children}</I18nextProvider>
);

export { ContextAggregator };
