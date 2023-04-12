import { DealsService } from './../../core/services/deals.service';
import { Component } from '@angular/core';
import { Deal } from 'src/app/core/Models/deal';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent {
  deals: Deal[] = [];
  potentialValue: Array<Deal> = [];
  focus: Array<Deal> = [];
  contactMade: Array<Deal> = [];
  offerSent: Array<Deal> = [];
  gettingReady: Array<Deal> = [];
  public search: string = '';

  constructor(private dealsService: DealsService) {
    this.getDeals();
  }

  getDeals() {
    this.dealsService.getDeals().subscribe((res: any) => {
      this.deals = res.deals;
      this.filterDeals();
    });
  }

  filterDeals() {
    for (let key in this.deals) {
      let status = this.deals[key].status;
      switch (status) {
        case 'Potential Value':
          this.potentialValue.push(this.deals[key]);
          break;
        case 'Focus':
          this.focus.push(this.deals[key]);
          break;
        case 'Contact Made':
          this.contactMade.push(this.deals[key]);
          break;
        case 'Offer Sent':
          this.offerSent.push(this.deals[key]);
          break;
        case 'Getting Ready':
          this.gettingReady.push(this.deals[key]);
          break;
      }
    }
  }

  public searchSnapshot(name: string) {
    this.dealsService.search = name;
  }
}
