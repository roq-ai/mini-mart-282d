interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Owner'],
  customerRoles: [],
  tenantRoles: ['Store Owner', 'Customer'],
  tenantName: 'Business',
  applicationName: 'Mini Mart',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage business information',
    'Manage product inventory',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8fe53825-768c-4da2-b9d1-d61551a91f33',
};
