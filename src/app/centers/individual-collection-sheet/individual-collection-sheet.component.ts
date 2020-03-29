import { Component, OnInit, ViewChild } from '@angular/core';


import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-individual-collection-sheet',
  templateUrl: './individual-collection-sheet.component.html',
  styleUrls: ['./individual-collection-sheet.component.scss']
})
export class IndividualCollectionSheetComponent implements OnInit {
    /** Collection sheet form. */
    collectionSheetForm: FormGroup;
    /** Branch Office data. */
    branchOffice: string;
    /** Repayment date. */
    repaymentDate: Date;
    /** Staff data. */
    staff: string;

  constructor(private formBuilder: FormBuilder ) {
   }

  createCollectionSheetForm() {
    this.collectionSheetForm = this.formBuilder.group({
      branchOffice: ['', Validators.required],
      repaymentDate: ['', Validators.required],
      staff: ['']
    });
  }

  ngOnInit() {
    this.createCollectionSheetForm();
  }

  submit() {

  }

}
