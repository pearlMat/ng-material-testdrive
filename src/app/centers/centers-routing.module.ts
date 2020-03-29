import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */


/** Translation Imports */


import { CentersComponent } from './centers/centers.component';
import { IndividualCollectionSheetComponent } from './individual-collection-sheet/individual-collection-sheet.component';
import { CollectionSheetComponent } from './collection-sheet/collection-sheet.component';

const routes: Routes = [
    {
      path: 'centers',
      component: CentersComponent,
    },
    {
      path: 'centers/individual-collection-sheet',
      component: IndividualCollectionSheetComponent,
    },
    {
      path: 'centers/individual-collection-sheet/collection-sheet',
      component: CollectionSheetComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CentersRoutingModule { }
