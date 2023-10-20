import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  customers:any[]=[];
  totalLength:any;
  p:number = 1;
  filteredData:string='';
  constructor(private custService:CustomerService){ }

  ngOnInit(){
    this.getcustomerList();
  }
getcustomerList(){
  this.customers = this.custService.getCustomers();
  console.log(this.customers);
  this.totalLength = this.customers.length
}
deleteCustomers(customer:any){
  const index =this.customers.indexOf(customer);
  if(index > -1){
    this.custService.deleteCustomers(index);
    this.customers = this.custService.getCustomers();
    this.totalLength =this.customers.length;
  }
}


}
