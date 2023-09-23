import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CartInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface CartGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
