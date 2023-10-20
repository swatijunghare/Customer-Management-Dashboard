import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredData:string) {
    if(value.length === 0 || filteredData === ''){
      return value;
    }
    const customers: any[] = [];
    for (const customer of value){
      if(customer['firstName']  === filteredData ){
        customers.push(customer);
      }
    }
    return customers;
  }

}

//multiple search => customer['firstName'] === filteredData || customer['lastName'] === filteredData

