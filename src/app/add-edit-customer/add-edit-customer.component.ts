import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent {


  // customer:any={};
  // customers:any[]=[];
  addCustomer!: FormGroup;
  id: number = 0;
  action: string = 'Add';
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private custservice: CustomerService) { }

  ngOnInit() {
    this.addCustomer = this.fb.group({
      id: [0],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    })

    this.route.params.subscribe(params => {
      this.id = +params['id']
      if (this.id) {
        this.addCustomer.get('id')?.setValue(this.id);
        const data = this.custservice.getCustomerById(this.id);
        if (data) {
          this.action = 'Edit';
          this.addCustomer.patchValue(data);
        }
      }
    });

  }
  onSubmit() {
    console.log(this.addCustomer.value)
    if (this.addCustomer.invalid)
      return
    if (!this.id) {
      this.custservice.addCustomer(this.addCustomer.value);
    }
    else {
      this.custservice.editCustomer(this.addCustomer.value);
    }
    this.router.navigate(['dashboard']);
  }

  get(name: any) {
    return this.addCustomer.get(name);
  }
}
