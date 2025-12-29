import React, { useState } from 'react';
import { MobileFrame, TabBar } from './components/Layout';
import { SplashView, LoginView, HomeView } from './views/HomeViews';
import { AssetsView, TeamView, PackagesView, ProfileView } from './views/FeatureViews';
import { AppView, Tab } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.SPLASH);
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.HOME);

  // Simple Router
  const renderView = () => {
    switch (currentView) {
      case AppView.SPLASH:
        return <SplashView onComplete={() => setCurrentView(AppView.LOGIN)} />;
      case AppView.LOGIN:
        return <LoginView onLogin={() => setCurrentView(AppView.MAIN)} />;
      case AppView.MAIN:
        return (
          <>
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {currentTab === Tab.HOME && <HomeView onChangeTab={setCurrentTab} />}
              {currentTab === Tab.ASSETS && <AssetsView />}
              {currentTab === Tab.TEAM && <TeamView />}
              {currentTab === Tab.PACKAGES && <PackagesView />}
              {currentTab === Tab.PROFILE && <ProfileView onLogout={() => setCurrentView(AppView.LOGIN)} />}
            </div>
            <TabBar currentTab={currentTab} onTabChange={setCurrentTab} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <MobileFrame>
      {renderView()}
    </MobileFrame>
  );
};

export default App;