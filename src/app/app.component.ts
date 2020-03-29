import { Component, ViewChild, OnInit  } from '@angular/core';
import {MatDialog, MatTable, MatDatepicker, MatIcon, MatCard, MatDialogConfig, MatDialogRef,  MAT_DIALOG_DATA} from "@angular/material";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatInputModule } from "@angular/material/input";
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   /** Collection sheet form. */
   collectionSheetForm: FormGroup;
  /** Branch Office data. */
  branchOffice: string;
  /** Repayment date. */
  repaymentDate: Date;
  /** Staff data. */
  staff: string;
  /** Individual collection sheet data. */
  individualCollectionSheetData: any;

    tableData: any[] = [
    {LoanAccount: 1, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
    {LoanAccount: 2, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
    {LoanAccount: 3, ProductName: 'Loan', ClientName: 'Val Colong', TotalDue: '$4000', Charges: '$500', Actions: ''},
];

  /**
   * Retrieves the offices, currencies, payment types and gl accounts data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  private ELEMENT_DATA: any = undefined;
  displayedColumns =  ['LoanAccount', 'ProductName', 'ClientName', 'TotalDue', 'Charges', 'Actions'];
  dataSource = this.tableData;
  savingsCollectionsColumns =  ['SavingsAccount', 'ProductName', 'ClientName', 'TotalDue', 'Actions'];
  savingsDataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matche
  }

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder ) {}

  createCollectionSheetForm() {
    this.collectionSheetForm = this.formBuilder.group({
      branchOffice: ['', Validators.required],
      repaymentDate: ['', Validators.required],
      staff: ['']
    });
  }
  ngOnInit() {
    this. createCollectionSheetForm();
  }

  /**
   * Creates the affected gl entry form.
   * @returns {FormGroup} Affected gl entry form.
   */
  createAffectedGLEntryForm(): FormGroup {
    return this.formBuilder.group({
      'glAccountId': ['', Validators.required],
      'amount': ['', Validators.required]
    });
  }


  submit() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

    this.dialog.open(CourseDialogComponent, dialogConfig);
}

openModal() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
  id: 1,
  };
  const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);


}
}
