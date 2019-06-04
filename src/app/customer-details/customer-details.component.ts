import { Component, OnInit,Input } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';


@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.styl']
})
export class CustomerDetailsComponent implements OnInit {

  //@Input() customer: Customer;
 customers: Observable<Customer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData(); 
  }

  reloadData(){
    this.customers = this.customerService.getCustomersList();
  }
  

}
