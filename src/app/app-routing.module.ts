import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './pages/deals/deals.component';

const routes: Routes = [
  { path: '', redirectTo: 'sales', pathMatch: 'full' },
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
  },
  { path: 'exhibitors', component: ComingSoonComponent },
  { path: 'program', component: ComingSoonComponent },
  { path: 'delegates', component: ComingSoonComponent },
  { path: 'settings', component: ComingSoonComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
