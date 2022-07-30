import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../classes/sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
  salesPersonList:SalesPerson[] = [
    new SalesPerson("Mohan","Dongara","mohandongara@gmail.com",7000),
    new SalesPerson("Srinu","Dunuku","srinu@gmail.com",5999),
    new SalesPerson("Ratna","Kumari","ratna@gmail.com",7000),
    new SalesPerson("Apssara","Ganesh","apssarapencil@gmail.com",9000)

  ]
  inputData : SalesPerson = new SalesPerson("", "", "" , 0);

  ngOnInit(): void {
    this.salesPersonList.push(this.inputData)
  }
  onSubmit(){
    console.log(this.inputData);
  }

}
