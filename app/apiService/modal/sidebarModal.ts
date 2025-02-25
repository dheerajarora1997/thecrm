export type sidebarMenu = {
  id: number;
  name: string;
  icon: string;
  path: string;
  component: string;
  exact: boolean;
};

export type customerData = {
  id: number;
  name: string;
  phone: string;
  email?: string;
  address?: string;
};

export type productsData = {
  id: 2;
  name: string;
  price: string;
  quantity: string;
  category: string;
};

export type salesData = {
  id: number;
  product: string;
  customer: string;
  quantity: string;
  price: string;
  total: string;
};

export type inventoryData = {
  id: number;
  product: string;
  quantity: string;
  price: string;
  total: string;
};
