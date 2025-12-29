
import { PackageItem, AssetData, User } from './types';

export const MOCK_USER: User = {
  name: "张三丰",
  id: "138****8888",
  role: "分红股东",
  level: "V1",
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  isVerified: false,
};

export const MOCK_ASSETS: AssetData = {
  points: 12500,
  springWater: 380,
  value: 5700,
  growth: 2.3,
  history: [
    { day: 'Mon', value: 4000 },
    { day: 'Tue', value: 4200 },
    { day: 'Wed', value: 4100 },
    { day: 'Thu', value: 4800 },
    { day: 'Fri', value: 5200 },
    { day: 'Sat', value: 5500 },
    { day: 'Sun', value: 5700 },
  ]
};

export const PACKAGES: PackageItem[] = [
  {
    id: '1',
    name: '会员套餐',
    price: 699,
    originalPrice: 899,
    discount: '7.7折',
    tags: ['基础'],
    imageUrl: 'https://images.unsplash.com/photo-1544350284-5971bb30202f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    name: 'V1分红股东套餐',
    price: 6990,
    originalPrice: 7999,
    discount: '8.7折',
    tags: ['推荐'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173bdd99600?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    name: 'V2分红股东套餐',
    price: 21800,
    originalPrice: 25800,
    discount: '8.4折',
    tags: ['高收益'],
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-475426879693?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'V3分红股东套餐',
    price: 50000,
    originalPrice: 58800,
    discount: '8.5折',
    tags: ['极尊'],
    imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '5',
    name: '合伙人套餐',
    price: 210000,
    originalPrice: 250000,
    discount: '8.4折',
    tags: ['顶级'],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
  }
];

export const TEAM_DATA = [
  { id: 1, name: '李四', role: '直属', value: 2000, level: 'V0' },
  { id: 2, name: '王五', role: '间推', value: 500, level: 'V0' },
  { id: 3, name: '赵六', role: '直属', value: 8000, level: 'V1' },
  { id: 4, name: '孙七', role: '间推', value: 1200, level: 'V0' },
];
