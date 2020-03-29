import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-collection-sheet',
  templateUrl: './collection-sheet.component.html',
  styleUrls: ['./collection-sheet.component.scss']
})
export class CollectionSheetComponent implements OnInit {
  /** Columns for due savings collections table */
  savingsCollectionsTableColumns =  ['SavingsAccount', 'ProductName', 'ClientName', 'TotalDue', 'Actions'];
  /** Placeholder for due savings table data source */
  savingsDataSource = new MatTableDataSource<any>();
  /** Dummy data for due collections table */
  dueCollectionsTableData: any[] = [
    {LoanAccount: 1, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
    {LoanAccount: 2, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
    {LoanAccount: 3, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
];
 /** Columns for due collections table */
    dueCollectionsTableColumns =  ['LoanAccount', 'ProductName', 'ClientName', 'TotalDue', 'Charges', 'Actions'];
/** Assigns array declared above to dataSource */
    dataSource = this.dueCollectionsTableData;


  constructor() { }

  ngOnInit() {
  }

}
