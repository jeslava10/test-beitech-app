import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelOrderCustomerProduct } from 'src/app/models/model-order-customer-product';
import { ModelCustomer } from 'src/app/models/model-customer.model';
import { ServiceCustomerOrderService } from 'src/app/services/service-customer-order.service';
import { DatePipe } from '@angular/common'



@Component({
  selector: 'app-list-customer-order',
  templateUrl: './list-customer-order.component.html',
  styleUrls: ['./list-customer-order.component.css']
})
export class ListCustomerOrderComponent implements OnInit {

  page = 1;
  pageSize =20;

  listModelOrderCustomerProduct: ModelOrderCustomerProduct[] = [];
  listModelCustomer: ModelCustomer[] = [];
  opcionSeleccionado: number;

  constructor(private ServiceCustomerOrderService: ServiceCustomerOrderService, public actRoute: ActivatedRoute,
    public router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getOrderCustomer() {

    const formatYmd = date => date.toISOString().slice(0, 10);
    let incial :Date = new Date();
    incial.setMonth(incial.getMonth() -1 );
    incial = formatYmd(incial);
    const final: Date = formatYmd(new Date);

    this.ServiceCustomerOrderService.getCustomerOrder(this.opcionSeleccionado,incial,final).subscribe(data => {
      this.listModelOrderCustomerProduct = data
      this.listModelOrderCustomerProduct.forEach(x =>{ x.listProductDetailString = []; 
        x.listProductDetail.map(data => {
        const {productDescription, quantity} = data;
        x.listProductDetailString.push( `${productDescription} x ${quantity}`);
      })});
    });
  }

  getAllCustomer() {
    this.ServiceCustomerOrderService.getCustomerAll().subscribe(data => {
      this.listModelCustomer = data
    });
  }
}
