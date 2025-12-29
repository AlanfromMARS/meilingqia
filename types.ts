export enum AppView {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  MAIN = 'MAIN',
}

export enum Tab {
  HOME = 'HOME',
  ASSETS = 'ASSETS',
  TEAM = 'TEAM',
  PACKAGES = 'PACKAGES',
  PROFILE = 'PROFILE',
}

export interface PackageItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  tags: string[];
  imageUrl: string;
}

export interface AssetData {
  points: number;
  springWater: number;
  value: number;
  growth: number;
  history: { day: string; value: number }[];
}

export interface User {
  name: string;
  id: string;
  role: string;
  level: string;
  avatar: string;
  isVerified: boolean;
}