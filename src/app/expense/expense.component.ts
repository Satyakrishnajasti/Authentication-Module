import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const Element_Data: PeriodicElement[] = [
  {
    position: 1, name: 'Hydrozen', weight: 1.0079, symbol: 'H'
  },

  {
    position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'
  },

  {
    position: 3, name: 'Lithium', weight: 9.0122, symbol: 'Li'
  },

  {
    position: 4, name: 'Beryllium', weight: 10.811, symbol: 'B'
  },

  {
    position: 5, name: 'Boron', weight: 12.0107, symbol: 'B'
  }
];

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = new MatTableDataSource(Element_Data);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isUserLoggedIn = false;

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData" + storeData);

    if (storeData != null && storeData == "true")
      this.isUserLoggedIn = true;

    else
      this.isUserLoggedIn = false;
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
