
import { ModelCustomer } from "./model-customer.model";
import { ModelProductDetail } from "./model-product-detail.model";

export class ModelOrderCustomerProduct {

    orderId?:number;
    customer?: ModelCustomer;
    creationDate?: Date; 
    deliveryAddress?: string;
    total?: number;
    listProductDetail?:ModelProductDetail[];
    listProductDetailString?:string[];
}
