import React from 'react';
import { ConfigProvider, theme as thm } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import enUS from 'antd/lib/locale/en_US';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { AppRouter } from './components/router/AppRouter';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { useAppSelector } from './hooks/reduxHooks';
import { themeObject } from './styles/themes/themeVariables';
import { getDefaultAntdStyles } from './styles/themes/default-styles';
// import './styles/themes/main.css';

const App: React.FC = () => {
  
  const theme = useAppSelector((state) => state.theme.theme);
  const token = getDefaultAntdStyles(theme);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider
          locale={enUS}
          theme={{
            token,
            algorithm: thm.darkAlgorithm
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;
