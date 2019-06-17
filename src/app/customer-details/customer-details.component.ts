import { Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';//for compose to Asy connection 


@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.styl']
})
export class CustomerDetailsComponent implements OnInit {

  customers: Observable<Customer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();//when call this class load the data from backend endpoint for GET method
  }

  reloadData(){
    this.customers = this.customerService.getCustomersList();//method to call backend via customer service class
  }
  

}
