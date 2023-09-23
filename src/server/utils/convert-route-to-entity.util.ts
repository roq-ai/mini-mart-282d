const mapping: Record<string, string> = {
  businesses: 'business',
  carts: 'cart',
  categories: 'category',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
