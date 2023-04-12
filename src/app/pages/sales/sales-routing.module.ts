import { ComingSoonComponent } from './../coming-soon/coming-soon.component';
import { SalesComponent } from './sales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from '../deals/deals.component';

const routes: Routes = [
  { path: '', redirectTo: 'deals', pathMatch: 'full' },
  { path: 'deals', component: DealsComponent },
  { path: 'activities', component: ComingSoonComponent },
  { path: 'statistics', component: ComingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
