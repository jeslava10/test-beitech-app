import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelOrder } from 'src/app/models/model-order.model';
import { ModelOrderDetail } from 'src/app/models/model-order-detail.model';
import { ModelCustomerOrder } from 'src/app/models/model-customer-order.model';
import { ModelProduct } from 'src/app/models/model-product.model';
import { ServiceCustomerOrderService } from 'src/app/services/service-customer-order.service';
import { DatePipe } from '@angular/common'


var incial: Date;
var final: Date;

@Component({
  selector: 'app-list-customer-order',
  templateUrl: './list-customer-order.component.html',
  styleUrls: ['./list-customer-order.component.css']
})
export class ListCustomerOrderComponent implements OnInit {

  listModelOrder: ModelOrder[] = [];
  listModelOrderDetail: ModelOrderDetail[] = [];
  listModelCustomerOrder : ModelCustomerOrder[] = [];


  constructor(private ServiceCustomerOrderService: ServiceCustomerOrderService, public actRoute: ActivatedRoute,
    public router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getOrderCustomer();
  }

  getOrderCustomer() {
    this.ServiceCustomerOrderService.getCustomerOrder(1,incial,final).subscribe(data => {
      data.forEach(element =>{
        let modelCustomerOrder;
          this.listModelCustomerOrder.push( modelCustomerOrder = {
            idOrder: element,
            listProduct:this.getOrderCustomerDetail(element.orderId)
          })
       });
       console.log(this.listModelCustomerOrder);
    });
  }

  getOrderCustomerDetail(idOrder  : ModelOrder) {
  
    let listProduc : string[]=[];
    
    this.ServiceCustomerOrderService.getOrderDetail(idOrder.orderId).subscribe(data => {
      data.forEach(element =>{
        let product = `${element.quantity} x ${element.productDescription}`;
        listProduc.push(product);
      });
    });

    return listProduc;

  }



}
