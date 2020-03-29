import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CentersRoutingModule } from './centers-routing.module';
import { CentersComponent } from './centers/centers.component';
import { IndividualCollectionSheetComponent } from './individual-collection-sheet/individual-collection-sheet.component';

import { MatInputModule } from "@angular/material/input";

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";


import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CollectionSheetComponent } from './collection-sheet/collection-sheet.component';

@NgModule({
  declarations: [CentersComponent, IndividualCollectionSheetComponent, CollectionSheetComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatDatepickerModule,
    FontAwesomeModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CentersRoutingModule
  ]
})
export class CentersModule { }
