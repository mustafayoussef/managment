import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deal } from '../../Models/deal';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss'],
})
export class DealCardComponent {
  @Input() deal: Deal | undefined;
  @Input() currentStatus: string | any;
  @Output() status = new EventEmitter<object>();
  probability: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.probability = this.deal?.probability_status.slice(0, -1);
      return this.status.emit(this.deal);
    }, 500);
  }
}
