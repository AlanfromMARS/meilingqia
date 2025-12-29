
import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { MOCK_ASSETS, PACKAGES, TEAM_DATA, MOCK_USER } from '../constants';
import { InkCard, InkButton, StatLabel, BambooDivider, SectionHeader } from '../components/Shared';
import { Header } from '../components/Layout';
// Added ShoppingBag to imports
import { ShieldCheck, ChevronRight, Settings, CreditCard, LogOut, Search, Filter, Wallet, ShoppingBag } from 'lucide-react';
import { AssetData } from '../types';

// --- Assets View ---
export const AssetsView: React.FC = () => {
  const [period, setPeriod] = useState(7);
  
  return (
    <div className="flex-1 flex flex-col bg-mibai h-full">
      <Header title="资产管理" />
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 pb-20">
        
        {/* Overview Cards */}
        <div className="flex space-x-3 mb-6">
          <InkCard className="flex-1 p-4 bg-white" active>
             <h4 className="text-daiqing text-sm font-bold mb-2">泉点余额</h4>
             <p className="text-2xl text-zhuhong font-bold font-sans">{MOCK_ASSETS.points.toLocaleString()}</p>
             <button className="text-xs text-shilv mt-2 flex items-center">查看明细 <ChevronRight size={10} /></button>
          </InkCard>
          <InkCard className="flex-1 p-4 bg-white">
             <h4 className="text-daiqing text-sm font-bold mb-2">泉水持有</h4>
             <p className="text-2xl text-zhuhong font-bold font-sans">{MOCK_ASSETS.springWater}</p>
             <button className="text-xs text-shilv mt-2 flex items-center">查看明细 <ChevronRight size={10} /></button>
          </InkCard>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-danhui mb-6">
           <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-daiqing">泉水价值趋势</h3>
             <div className="flex bg-gray-100 rounded-lg p-0.5">
               {[7, 30, 90].map(d => (
                 <button 
                   key={d}
                   onClick={() => setPeriod(d)}
                   className={`px-3 py-1 text-xs rounded-md transition-all ${period === d ? 'bg-white shadow text-zhuhong font-bold' : 'text-qianhui'}`}
                 >
                   {d}天
                 </button>
               ))}
             </div>
           </div>
           
           <div className="h-48 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={MOCK_ASSETS.history}>
                 <defs>
                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#A82C2C" stopOpacity={0.1}/>
                     <stop offset="95%" stopColor="#A82C2C" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#1E404A'}} />
                 <Tooltip 
                   contentStyle={{backgroundColor: '#F5F2EB', borderColor: '#1E404A', borderRadius: '8px'}}
                   itemStyle={{color: '#A82C2C', fontWeight: 'bold'}}
                   labelStyle={{color: '#1E404A', marginBottom: '4px'}}
                 />
                 <Area type="monotone" dataKey="value" stroke="#A82C2C" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Withdrawal Section */}
        <SectionHeader title="泉点提现" />
        <div className="bg-white rounded-xl p-5 shadow-sm border border-danhui">
           {/* Steps */}
           <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-zhuhong text-white flex items-center justify-center text-xs mb-1">1</div>
                 <span className="text-[10px] text-zhuhong font-bold">提现通道</span>
              </div>
              <div className="flex-1 h-[2px] bg-danhui mx-2 relative">
                 <div className="absolute left-0 top-0 h-full w-full bg-zhuhong"></div>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-zhuhong text-white flex items-center justify-center text-xs mb-1">2</div>
                 <span className="text-[10px] text-zhuhong font-bold">输入金额</span>
              </div>
              <div className="flex-1 h-[2px] bg-danhui mx-2"></div>
              <div className="flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-gray-200 text-qianhui flex items-center justify-center text-xs mb-1">3</div>
                 <span className="text-[10px] text-qianhui">验证提交</span>
              </div>
           </div>

           <div className="mb-6">
              <label className="text-xs text-qianhui mb-3 block">选择提现方式</label>
              <div className="flex justify-center">
                <div className="w-full max-w-[200px] border-2 border-zhuhong bg-red-50 rounded-xl py-4 flex flex-col items-center justify-center shadow-sm">
                   <div className="w-12 h-12 bg-zhuhong rounded-full flex items-center justify-center text-white mb-2">
                     <Wallet size={24} />
                   </div>
                   <span className="text-sm text-zhuhong font-bold">支付宝支付</span>
                   <span className="text-[10px] text-zhuhong/60 mt-1">官方指定唯一通道</span>
                </div>
              </div>
           </div>

           <div className="mb-6">
             <label className="text-xs text-qianhui mb-2 block">提现金额 (元)</label>
             <div className="flex items-end border-b border-danhui pb-2">
                <span className="text-2xl font-bold text-daiqing mr-2">¥</span>
                <input type="number" placeholder="0.00" className="text-3xl font-bold text-daiqing bg-transparent outline-none w-full font-sans" />
             </div>
             <div className="flex justify-between mt-2">
               <span className="text-[10px] text-qianhui">可用余额: {MOCK_ASSETS.points.toLocaleString()}.00</span>
               <span className="text-[10px] text-qianhui">最低提现: 100.00</span>
             </div>
           </div>

           <InkButton fullWidth>确认提现</InkButton>
           <p className="text-center text-[10px] text-qianhui mt-4">提现预计 T+1 个工作日内到账</p>
        </div>

      </div>
    </div>
  );
};

// --- Team View ---
export const TeamView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-mibai h-full">
      <Header title="团队管理" />
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 pb-20">
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-daiqing p-4 rounded-xl text-white shadow-lg">
              <span className="text-xs opacity-70">团队总人数</span>
              <div className="text-2xl font-bold mt-1">1,248</div>
           </div>
           <div className="bg-white border border-danhui p-4 rounded-xl text-daiqing shadow-sm">
              <span className="text-xs opacity-70">本月新增</span>
              <div className="text-2xl font-bold mt-1 text-zhuhong">+32</div>
           </div>
        </div>

        {/* Tree / List Area */}
        <div className="flex h-[400px] mb-6">
           {/* Filters */}
           <div className="w-1/4 pr-2 space-y-2">
             <div className="bg-white rounded-lg p-3 border border-danhui flex flex-col items-center justify-center h-20 shadow-sm">
               <Filter size={16} className="text-daiqing mb-1" />
               <span className="text-[10px] text-daiqing">筛选</span>
             </div>
             <div className="bg-white rounded-lg p-3 border border-danhui flex flex-col items-center justify-center h-20 shadow-sm">
               <Search size={16} className="text-daiqing mb-1" />
               <span className="text-[10px] text-daiqing">搜索</span>
             </div>
           </div>
           
           {/* Tree Visualization (Simplified List) */}
           <div className="flex-1 bg-white border border-danhui rounded-xl p-4 overflow-y-auto relative">
              <div className="absolute inset-0 bg-paper-texture opacity-20 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                 {/* Root Node */}
                 <div className="flex justify-center mb-6">
                    <div className="bg-daiqing text-white px-4 py-2 rounded-lg shadow text-sm font-bold flex flex-col items-center">
                       <span>我 (V1)</span>
                    </div>
                 </div>
                 
                 {/* Connection Lines (CSS Art) */}
                 <div className="flex justify-center -mt-6 mb-2">
                   <div className="w-px h-6 bg-daiqing/30"></div>
                 </div>
                 <div className="w-full h-px bg-daiqing/30 mb-4 mx-auto w-3/4"></div>

                 {/* Child Nodes */}
                 <div className="grid grid-cols-2 gap-4">
                    {TEAM_DATA.map((member) => (
                      <div key={member.id} className="flex flex-col items-center">
                         <div className={`w-px h-4 bg-daiqing/30 -mt-4 mb-1`}></div>
                         <div className={`w-full p-2 rounded border ${member.role === '直属' ? 'border-zhuhong/50 bg-red-50' : 'border-danhui bg-gray-50'}`}>
                            <div className="flex justify-between items-center mb-1">
                               <span className="font-bold text-xs text-daiqing">{member.name}</span>
                               <span className={`text-[10px] px-1 rounded ${member.role === '直属' ? 'bg-zhuhong text-white' : 'bg-gray-200 text-gray-600'}`}>{member.role}</span>
                            </div>
                            <div className="text-[10px] text-qianhui">消费: ¥{member.value}</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Packages View ---
export const PackagesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部');

  const categories = ['全部', '股东分红', '高级合伙', '商城'];

  return (
    <div className="flex-1 flex flex-col bg-mibai h-full">
      <Header title="产品套餐" />
      <div className="bg-white p-3 shadow-sm flex items-center space-x-4 border-b border-danhui overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-sm pb-1 whitespace-nowrap transition-all duration-300 ${activeTab === cat ? 'font-bold text-daiqing border-b-2 border-zhuhong' : 'text-qianhui border-b-2 border-transparent'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 pb-20">
         {activeTab === '商城' ? (
           <div className="flex flex-col items-center justify-center py-20 text-qianhui">
              <ShoppingBag size={48} className="opacity-20 mb-4" />
              <p>商城商品筹备中，敬请期待...</p>
           </div>
         ) : (
           <div className="grid grid-cols-1 gap-4">
             {PACKAGES.map((pkg) => (
               <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-danhui flex">
                  <div className="relative w-1/3 h-32 bg-gray-200">
                    <img src={pkg.imageUrl} className="w-full h-full object-cover" alt={pkg.name} />
                    <div className="absolute top-0 left-0 bg-zhuhong text-white text-[9px] px-2 py-0.5 rounded-br-lg shadow-sm">{pkg.tags[0]}</div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-daiqing font-bold text-base leading-tight">{pkg.name}</h4>
                      <p className="text-[10px] text-shilv mt-1">尊享分红权益 · 品牌共建</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                         <span className="text-zhuhong font-bold text-lg font-sans">¥{pkg.price.toLocaleString()}</span>
                         <span className="text-qianhui text-[10px] line-through">¥{pkg.originalPrice.toLocaleString()}</span>
                      </div>
                      <button className="bg-daiqing text-white text-xs px-4 py-1.5 rounded-full shadow-md active:scale-95 transition-transform">
                         购买
                      </button>
                    </div>
                  </div>
               </div>
             ))}
           </div>
         )}
      </div>
    </div>
  );
};

// --- Profile View ---
export const ProfileView: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <div className="flex-1 flex flex-col bg-mibai h-full">
      {/* Top Banner */}
      <div className="h-64 bg-daiqing relative overflow-hidden flex flex-col items-center pt-8 text-white rounded-b-[2rem] shadow-xl">
         <div className="absolute inset-0 bg-ink-gradient opacity-60"></div>
         <div className="z-10 flex flex-col items-center w-full px-6">
            <h2 className="text-lg font-serif mb-6 tracking-widest">个人中心</h2>
            
            <div className="flex items-center w-full mb-6">
               <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden mr-4 shadow-lg">
                  <img src={MOCK_USER.avatar} alt="Avatar" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                  <div className="flex items-center">
                     <h3 className="text-xl font-bold mr-2">{MOCK_USER.name}</h3>
                     <span className="bg-zhuhong/80 text-white text-[10px] px-2 py-0.5 rounded-full border border-white/20">{MOCK_USER.level}</span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">{MOCK_USER.id}</p>
               </div>
               <Settings className="text-white/80" size={20} />
            </div>

            {/* Asset Board */}
            <div className="w-full flex justify-between px-4">
              <div className="flex flex-col items-center">
                 <span className="text-white/60 text-xs mb-1">泉点余额</span>
                 <span className="text-2xl font-bold text-zhuhong text-shadow-sm">{MOCK_ASSETS.points.toLocaleString()}</span>
              </div>
              <div className="w-px h-10 bg-white/10 mt-2"></div>
              <div className="flex flex-col items-center">
                 <span className="text-white/60 text-xs mb-1">当前市值</span>
                 <span className="text-2xl font-bold text-white text-shadow-sm">¥ {MOCK_ASSETS.value.toLocaleString()}</span>
              </div>
            </div>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar -mt-6 p-4 pb-20 z-20">
         {/* Action Bar */}
         <div className="bg-white rounded-xl shadow-md p-4 flex justify-between mb-6">
            {['提现', '转赠', '兑换'].map(action => (
              <button key={action} className="flex-1 py-2 text-daiqing font-bold text-sm hover:bg-gray-50 rounded transition-colors">
                {action}
              </button>
            ))}
         </div>

         {/* Security Center */}
         <div className="bg-white rounded-xl shadow-sm p-4 border border-danhui mb-6">
            <SectionHeader title="安全中心" />
            <div className="space-y-4">
               <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                     <ShieldCheck className="text-daiqing" size={20} />
                     <span className="text-sm text-daiqing">实名认证</span>
                  </div>
                  <div className="flex items-center">
                     <span className="text-xs text-zhuhong mr-2">未认证</span>
                     <div className="w-2 h-2 rounded-full bg-zhuhong"></div>
                     <ChevronRight size={16} className="text-qianhui ml-2" />
                  </div>
               </div>
               <div className="h-px bg-danhui w-full"></div>
               <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                     <CreditCard className="text-daiqing" size={20} />
                     <span className="text-sm text-daiqing">支付宝账号绑定</span>
                  </div>
                  <div className="flex items-center">
                     <span className="text-xs text-shilv mr-2">已绑定</span>
                     <ChevronRight size={16} className="text-qianhui" />
                  </div>
               </div>
            </div>
         </div>

         <InkButton variant="outline" fullWidth onClick={onLogout} className="flex items-center justify-center space-x-2">
            <LogOut size={16} />
            <span>退出登录</span>
         </InkButton>
      </div>
    </div>
  );
};
