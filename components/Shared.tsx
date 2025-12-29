import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- Ink Button ---
interface InkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const InkButton: React.FC<InkButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-serif transition-all duration-300 active:scale-95 flex items-center justify-center";
  const variants = {
    primary: "bg-zhuhong text-white shadow-lg shadow-zhuhong/30 hover:bg-red-800 rounded-xl",
    secondary: "bg-daiqing text-white shadow-lg shadow-daiqing/30 hover:bg-cyan-900 rounded-xl",
    outline: "border-2 border-daiqing text-daiqing hover:bg-daiqing/5 rounded-xl",
    ghost: "text-daiqing hover:bg-daiqing/5 rounded-lg",
  };
  
  const widthClass = fullWidth ? "w-full py-3 text-lg" : "px-6 py-2 text-sm";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Ink Card ---
interface InkCardProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const InkCard: React.FC<InkCardProps> = ({ children, className = '', active = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative bg-mibai rounded-lg transition-all duration-300
        ${active ? 'border border-shilv shadow-md shadow-shilv/20' : 'border border-danhui shadow-sm'}
        ${className}
      `}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-20 pointer-events-none rounded-lg" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// --- Bamboo Divider ---
export const BambooDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center space-x-1 opacity-40 ${className}`}>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center">
          <div className="w-4 h-[2px] bg-shilv rounded-full"></div>
          <div className="w-1 h-1 bg-shilv rounded-full mx-[2px]"></div>
        </div>
      ))}
    </div>
  );
};

// --- Section Header ---
export const SectionHeader: React.FC<{ title: string; action?: string; onAction?: () => void }> = ({ title, action, onAction }) => (
  <div className="flex justify-between items-center mb-4 px-1">
    <div className="flex flex-col">
      <h3 className="text-xl font-serif font-bold text-daiqing">{title}</h3>
      <div className="w-8 h-1 bg-zhuhong mt-1 rounded-full opacity-80"></div>
    </div>
    {action && (
      <button onClick={onAction} className="text-sm text-shilv flex items-center hover:underline">
        {action} &rarr;
      </button>
    )}
  </div>
);

// --- Stat Label ---
export const StatLabel: React.FC<{ label: string; value: string | number; sub?: string; highlight?: boolean }> = ({ label, value, sub, highlight }) => (
  <div className="flex flex-col">
    <span className="text-xs text-qianhui mb-1">{label}</span>
    <span className={`text-xl font-bold font-sans ${highlight ? 'text-zhuhong' : 'text-daiqing'}`}>
      {value}
    </span>
    {sub && <span className="text-[10px] text-shilv mt-1">{sub}</span>}
  </div>
);

// --- Custom Tab Icon Wrapper ---
export const TabIcon: React.FC<{ icon: LucideIcon; label: string; isActive: boolean; onClick: () => void }> = ({ icon: Icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick} 
    className={`flex-1 flex flex-col items-center justify-center py-2 transition-colors duration-300 relative`}
  >
    <Icon 
      size={24} 
      strokeWidth={isActive ? 2.5 : 1.5}
      className={`${isActive ? 'text-zhuhong' : 'text-daiqing opacity-60'} transition-all`} 
    />
    <span className={`text-[10px] mt-1 font-serif ${isActive ? 'text-zhuhong font-bold' : 'text-daiqing opacity-60'}`}>
      {label}
    </span>
    {isActive && (
      <div className="absolute bottom-1 w-1 h-1 bg-zhuhong rounded-full shadow-sm shadow-red-500" />
    )}
  </button>
);