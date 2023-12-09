import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title title="View transition 1"></app-title>
    <section class="flex justify-end">
  <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300"  style="view-transition-name: hero1">
  <div class="bg-blue-800 w-56 h-56"></div>
</section>
  `,
})
export class ViewTransition1Component {

}
