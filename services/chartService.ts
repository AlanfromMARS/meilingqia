// Using Recharts directly in components for React simplicity, 
// but defining a helper format function here if needed.

export const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(val);
};

export const formatNumber = (val: number) => {
  return new Intl.NumberFormat('zh-CN').format(val);
};