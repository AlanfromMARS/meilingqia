
import React, { useState, useEffect } from 'react';
import { InkButton, InkCard, BambooDivider, SectionHeader } from '../components/Shared';
import { AppView, Tab } from '../types';
import { Bell, ChevronRight, TrendingUp, ShieldCheck, Wallet, Activity, Users, ShoppingBag } from 'lucide-react';
import { Header } from '../components/Layout';
import { MOCK_USER, PACKAGES } from '../constants';

// --- Splash Screen ---
export const SplashView: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-daiqing text-mibai relative overflow-hidden">
      <div className="absolute inset-0 bg-ink-gradient opacity-90" />
      <div className="z-10 flex flex-col items-center animate-pulse">
        <div className="w-24 h-24 border-4 border-zhuhong rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-zhuhong/50 bg-mibai/10 backdrop-blur-sm">
          <span className="text-5xl font-serif text-mibai font-bold">泉</span>
        </div>
        <h1 className="text-4xl font-serif tracking-[0.5em] mb-4 text-transparent bg-clip-text bg-gradient-to-b from-mibai to-gray-400">梅岭泉</h1>
        <p className="text-sm font-light tracking-widest opacity-80 mt-2">山水之间 · 泉润财富</p>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center opacity-50">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-mibai to-transparent" />
      </div>
    </div>
  );
};

// --- Login Screen ---
export const LoginView: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [method, setMethod] = useState<'code' | 'password'>('code');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col bg-mibai px-8 py-12 relative overflow-y-auto no-scrollbar">
      <div className="mt-12 mb-12 flex flex-col items-center">
         <div className="w-16 h-16 border-2 border-daiqing rounded-full flex items-center justify-center mb-4 text-daiqing">
            <span className="text-2xl font-serif font-bold">梅</span>
         </div>
         <h2 className="text-2xl font-serif text-daiqing font-bold">欢迎回来</h2>
      </div>

      <div className="flex space-x-6 mb-8 border-b border-danhui">
        <button 
          onClick={() => setMethod('code')}
          className={`pb-2 text-sm font-medium transition-colors ${method === 'code' ? 'text-zhuhong border-b-2 border-zhuhong' : 'text-qianhui'}`}
        >
          验证码登录
        </button>
        <button 
          onClick={() => setMethod('password')}
          className={`pb-2 text-sm font-medium transition-colors ${method === 'password' ? 'text-zhuhong border-b-2 border-zhuhong' : 'text-qianhui'}`}
        >
          密码登录
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
           <label className="text-xs text-daiqing font-bold">手机号码</label>
           <div className="flex items-center border-b border-danhui py-2 focus-within:border-shilv transition-colors">
             <span className="text-daiqing font-serif mr-2">+86</span>
             <input type="tel" placeholder="请输入手机号" className="flex-1 bg-transparent outline-none text-daiqing placeholder-qianhui/50" />
           </div>
        </div>

        {method === 'code' && (
           <div className="space-y-2">
             <label className="text-xs text-daiqing font-bold">验证码</label>
             <div className="flex items-center border-b border-danhui py-2 focus-within:border-shilv transition-colors">
               <input type="number" placeholder="6位数字" className="flex-1 bg-transparent outline-none text-daiqing placeholder-qianhui/50" />
               <button className="text-xs text-zhuhong font-bold border border-zhuhong rounded px-2 py-1">获取验证码</button>
             </div>
           </div>
        )}

        {method === 'password' && (
           <div className="space-y-2">
             <label className="text-xs text-daiqing font-bold">密码</label>
             <div className="flex items-center border-b border-danhui py-2 focus-within:border-shilv transition-colors">
               <input type="password" placeholder="请输入密码" className="flex-1 bg-transparent outline-none text-daiqing placeholder-qianhui/50" />
             </div>
           </div>
        )}
      </div>

      <div className="mt-10">
        <InkButton fullWidth variant="primary" onClick={handleLogin}>
          {loading ? '登录中...' : '立即登录'}
        </InkButton>
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center space-y-4">
        <p className="text-xs text-qianhui">其他方式登录</p>
        <div className="flex space-x-6">
          <div className="w-10 h-10 rounded-full border border-danhui flex items-center justify-center text-daiqing bg-white shadow-sm">
            <span className="text-[10px]">微信</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-danhui flex items-center justify-center text-daiqing bg-white shadow-sm">
             <span className="text-[10px]">QQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Home View ---
export const HomeView: React.FC<{ onChangeTab: (tab: Tab) => void }> = ({ onChangeTab }) => {
  return (
    <div className="flex-1 flex flex-col bg-mibai overflow-hidden">
      <Header 
        title="梅岭泉" 
        rightIcon={<Bell size={20} />} 
      />
      
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20 p-4 space-y-6">
        {/* Carousel / Banner */}
        <div className="w-full h-48 bg-daiqing rounded-xl overflow-hidden relative shadow-lg group">
           <img 
             src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=800&q=80" 
             alt="Banner" 
             className="w-full h-full object-cover opacity-80 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-daiqing/90 to-transparent p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-serif text-white mb-2 font-bold">尊享套餐<br/>限时折扣</h2>
              <p className="text-white/80 text-sm mb-4 font-light">传承与增值的经济模型</p>
              <button className="bg-zhuhong text-white text-xs px-4 py-1.5 rounded-full w-fit">立即查看</button>
           </div>
           
           {/* Dots */}
           <div className="absolute bottom-3 left-6 flex space-x-1.5">
             <div className="w-4 h-1.5 bg-zhuhong rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
           </div>
        </div>

        {/* Core Function Grid */}
        <div className="grid grid-cols-2 gap-4">
          <InkCard className="p-4 flex flex-col items-start space-y-2 h-32 justify-between" onClick={() => onChangeTab(Tab.ASSETS)}>
             <div className="p-2 bg-daiqing/5 rounded-full text-daiqing">
               <Wallet size={20} />
             </div>
             <div>
               <h3 className="text-daiqing font-bold">资产总览</h3>
               <p className="text-xs text-qianhui mt-1">实时掌控收益</p>
             </div>
          </InkCard>
          
          <InkCard className="p-4 flex flex-col items-start space-y-2 h-32 justify-between relative" onClick={() => onChangeTab(Tab.ASSETS)}>
             <div className="p-2 bg-daiqing/5 rounded-full text-daiqing">
               <Activity size={20} />
             </div>
             <div>
               <h3 className="text-daiqing font-bold">收益查询</h3>
               <p className="text-xs text-qianhui mt-1">昨日 +128.00</p>
             </div>
             <div className="absolute top-2 right-2 bg-zhuhong text-white text-[9px] px-1.5 py-0.5 rounded-sm">
               3条新收益
             </div>
          </InkCard>

          <InkCard className="p-4 flex flex-col items-start space-y-2 h-32 justify-between" onClick={() => onChangeTab(Tab.TEAM)}>
             <div className="p-2 bg-daiqing/5 rounded-full text-daiqing">
               <Users size={20} />
             </div>
             <div>
               <h3 className="text-daiqing font-bold">团队管理</h3>
               <p className="text-xs text-qianhui mt-1">成员活跃度</p>
             </div>
          </InkCard>

          <InkCard className="p-4 flex flex-col items-start space-y-2 h-32 justify-between" onClick={() => onChangeTab(Tab.PACKAGES)}>
             <div className="p-2 bg-daiqing/5 rounded-full text-daiqing">
               <ShoppingBag size={20} />
             </div>
             <div>
               <h3 className="text-daiqing font-bold">套餐购买</h3>
               <p className="text-xs text-qianhui mt-1">限时特惠中</p>
             </div>
          </InkCard>
        </div>

        <BambooDivider />

        {/* Recommendations */}
        <div className="pb-10">
          <SectionHeader title="个性化推荐" action="查看全部" onAction={() => onChangeTab(Tab.PACKAGES)} />
          
          {/* Promotion Card */}
          <div className="bg-white border border-shilv/20 rounded-lg p-4 flex items-center justify-between mb-6 shadow-sm">
             <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zhuhong/10 rounded-full flex items-center justify-center text-zhuhong">
                  <TrendingUp size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-daiqing text-sm">晋升提示</h4>
                   <p className="text-xs text-qianhui mt-0.5">距离 V1 股东还差 2000 元</p>
                </div>
             </div>
             <button className="text-xs text-shilv border border-shilv px-3 py-1 rounded-full">去查看</button>
          </div>

          <div className="space-y-4">
             {PACKAGES.slice(0, 5).map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-danhui">
                   <div className="h-32 bg-gray-200 relative">
                     <img src={pkg.imageUrl} className="w-full h-full object-cover" alt={pkg.name} />
                     <div className="absolute top-2 left-2 bg-daiqing text-white text-xs px-2 py-0.5 rounded">{pkg.tags[0]}礼包</div>
                   </div>
                   <div className="p-3">
                      <h4 className="font-bold text-daiqing mb-1">{pkg.name}</h4>
                      <div className="flex justify-between items-end">
                         <div>
                           <span className="text-zhuhong font-bold text-lg font-sans">¥ {pkg.price.toLocaleString()}</span>
                           <span className="text-xs text-qianhui line-through ml-2">¥ {pkg.originalPrice.toLocaleString()}</span>
                         </div>
                         <button className="bg-zhuhong text-white text-xs px-4 py-1.5 rounded-md active:scale-95 transition-transform" onClick={() => onChangeTab(Tab.PACKAGES)}>立即购买</button>
                      </div>
                      <div className="mt-2 flex space-x-2">
                         <span className="text-[10px] text-shilv bg-shilv/10 px-1.5 py-0.5 rounded">赠送泉点</span>
                         <span className="text-[10px] text-shilv bg-shilv/10 px-1.5 py-0.5 rounded">极速发货</span>
                         <span className="text-[10px] text-zhuhong/10 text-zhuhong px-1.5 py-0.5 rounded">{pkg.discount}</span>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
