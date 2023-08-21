import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arun', weight: 1.0079, symbol: 'Fund is not received'},
  {position: 2, name: 'David', weight: 4.0026, symbol: 'High loading time'},
  {position: 3, name: 'Varun', weight: 6.941, symbol: 'website down for one weak'},
  {position: 4, name: 'Beryly', weight: 9.0122, symbol: 'loosing control on server'},
  {position: 5, name: 'Balu', weight: 10.811, symbol: 'Fund is  received'},
  {position: 6, name: 'Charlse', weight: 12.0107, symbol: 'low loading time'},
  // {position: 7, name: 'Nithin', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'homas', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Meera', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Nenu', weight: 20.1797, symbol: 'Ne'},
];
