import { CategoryInterface } from 'interfaces/category';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  location?: string;
  business_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  category?: CategoryInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    category?: number;
    product?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  business_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
