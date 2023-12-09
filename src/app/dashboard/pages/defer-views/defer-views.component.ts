import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-defer-views',
  imports: [CommonModule, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export class DeferViewsComponent {

}
