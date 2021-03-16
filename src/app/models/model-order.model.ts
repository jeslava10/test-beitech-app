
import { ModelCustomer } from "./model-customer.model";

export class ModelOrder {
	
    orderId?:number;
    customer?: ModelCustomer;
    creationDate?: Date; 
    deliveryAddress?: string;
    total?: number;

}
