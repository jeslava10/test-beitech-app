
import { ModelCustomer } from "./model-customer.model";
import { ModelOrderDetail } from "./model-order-detail.model";

export class ModelOrder {
	
    orderId?:number;
    customer?: ModelCustomer;
    creationDate?: Date; 
    deliveryAddress?: string;
    total?: number;
    listOrderDetail?:ModelOrderDetail[];


}
