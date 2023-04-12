import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TagModule,
    DragDropModule,
    ScrollPanelModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ProgressBarModule,
    AvatarModule,
  ],
})
export class SharedModule {}
