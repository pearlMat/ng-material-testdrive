import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

   /* form: FormGroup;
    description:string;

    modalTitle: string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;

    }*/

    form: FormGroup;
    description:string;
    entity: string;
    status: string;
    dataTable: string;
    product: string;
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {description,longDescription,
            category, status}:Course ) {

        this.description = description;


        this.form = fb.group({
            description: [description, Validators.required],
            category: [category, Validators.required],
            entity: [this.entity, Validators.required],
            status: [this.status, Validators.required],
            dataTable:[this.dataTable, Validators.required],
            product: [this.product ],
            releasedAt: [moment(), Validators.required],
            longDescription: [longDescription, Validators.required]
        });

    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }


    ngOnInit() {

    }

}
