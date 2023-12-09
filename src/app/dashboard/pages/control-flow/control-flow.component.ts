import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade= signal<Grade>('B');

  public frameWorks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameWorks2 = signal([]);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }
}
