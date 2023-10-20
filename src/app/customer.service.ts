import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: any[] = [
    { id: 1, firstName: 'Ram', lastName: 'Sharma', email: 'ram@gmail.com', phoneNumber: '1234567890' },
    { id: 2, firstName: 'Pooja', lastName: 'Verma', email: 'pooja@gmail.com', phoneNumber: '9876543210' },
    { id: 3, firstName: 'vishal', lastName: 'batra', email: 'vishal@gmail.com', phoneNumber: '9876543210' },
    { id: 4, firstName: 'Ankita', lastName: 'Deshmukh', email: 'ankita@gmail.com', phoneNumber: '9876543210' },
    { id: 5, firstName: 'Teena', lastName: 'Mundada', email: 'teena@gmail.com', phoneNumber: '9876543210' },
  ];
  getCustomers() {
    return this.customers;
  }
  getCustomerById(customerId: any) {
    return this.customers.find(customer => customer.id === customerId);
  }
  addCustomer(customer: any) {
    const newId = this.customers.length + 1; // Calculate the new ID based on the current length
    customer.id = newId;
    console.log("Adding customer:", customer);
      this.customers.push(customer);
  }
  editCustomer(editcustomer: any) {
     const index = this.customers.findIndex(customer => customer.id === editcustomer.id);
    // if (index != null && index != undefined) {
      if (index !== -1) {
      this.customers[index] = editcustomer;
    }
  }
  deleteCustomers(index: number) {
    this.customers.splice(index, 1)
  }
  constructor() { }
}
