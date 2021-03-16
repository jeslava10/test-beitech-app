import { TestBed } from '@angular/core/testing';

import { ServiceCustomerOrderService } from './service-customer-order.service';

describe('ServiceCustomerOrderService', () => {
  let service: ServiceCustomerOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCustomerOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
