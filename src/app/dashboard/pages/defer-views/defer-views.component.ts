import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders-slow/heavy-loaders-slow.component';

@Component({
  standalone: true,
  selector: 'app-defer-views',
  imports: [CommonModule, TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export class DeferViewsComponent {}
