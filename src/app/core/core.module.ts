import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DealListComponent } from './components/deal-list/deal-list.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    DealListComponent,
    DealCardComponent,
    SearchPipe,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, DealListComponent, DealCardComponent, SearchPipe],
})
export class CoreModule {}
