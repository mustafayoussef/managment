import { DealsService } from './../../services/deals.service';
import { Component, Input, SimpleChanges, ViewChildren } from '@angular/core';
import { Deal } from '../../Models/deal';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
})
export class DealListComponent {
  @Input() title: string = '';
  @Input() searchTitle: string = '';
  @Input() deals: Deal[] | any = [];
  search: string;

  constructor(private dealsService: DealsService) {
    this.search = this.dealsService.search;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  changeStatus(status: any) {
    status.status = this.title;
  }
}
