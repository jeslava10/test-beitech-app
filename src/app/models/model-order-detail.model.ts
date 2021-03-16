import { ModelProduct } from "./model-product.model";
import { ModelOrder } from "./model-order.model";

export class ModelOrderDetail {
    idOrder:ModelOrder;
    orderDetailId:number;
    price:number;
    product:ModelProduct;
    productDescription:string;
    quantity:number;

}
