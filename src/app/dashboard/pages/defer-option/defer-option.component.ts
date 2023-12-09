import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders-slow/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-option.component.html',
  styleUrl: './defer-option.component.css'
})
export class DeferOptionComponent {

}
