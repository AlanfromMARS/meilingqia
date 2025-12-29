import React from 'react';
import { Tab } from '../types';
import { TabIcon } from './Shared';
import { Home, PieChart, Users, ShoppingBag, User } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-8 bg-gray-800">
      <div className="w-full md:w-[390px] h-[100vh] md:h-[844px] bg-mibai md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col font-sans">
        {/* Paper Texture Overlay for entire app */}
        <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none z-0" />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

interface TabBarProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="h-[70px] bg-mibai border-t border-danhui flex items-center shadow-lg z-50 px-2 pb-2">
      <TabIcon 
        icon={Home} 
        label="首页" 
        isActive={currentTab === Tab.HOME} 
        onClick={() => onTabChange(Tab.HOME)} 
      />
      <TabIcon 
        icon={PieChart} 
        label="资产" 
        isActive={currentTab === Tab.ASSETS} 
        onClick={() => onTabChange(Tab.ASSETS)} 
      />
      <TabIcon 
        icon={Users} 
        label="团队" 
        isActive={currentTab === Tab.TEAM} 
        onClick={() => onTabChange(Tab.TEAM)} 
      />
      <TabIcon 
        icon={ShoppingBag} 
        label="套餐" 
        isActive={currentTab === Tab.PACKAGES} 
        onClick={() => onTabChange(Tab.PACKAGES)} 
      />
      <TabIcon 
        icon={User} 
        label="我的" 
        isActive={currentTab === Tab.PROFILE} 
        onClick={() => onTabChange(Tab.PROFILE)} 
      />
    </div>
  );
};

interface HeaderProps {
  title: string;
  rightIcon?: React.ReactNode;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, rightIcon, transparent = false }) => {
  return (
    <div className={`
      h-[60px] flex items-end pb-3 px-5 justify-between
      ${transparent ? 'bg-transparent text-white' : 'bg-daiqing text-mibai shadow-md'}
      transition-all duration-300
    `}>
      <h1 className="text-xl font-serif font-bold tracking-widest">{title}</h1>
      {rightIcon && <div className="text-mibai opacity-90">{rightIcon}</div>}
    </div>
  );
};