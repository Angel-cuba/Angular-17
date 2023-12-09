import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy .OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  public currentName = computed(() => this.frameworkasSignal().name);

  public frameworkasSignal = signal({
    name: 'React',
    releaseDate: 2013,
  });

  public frameworkasProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      //this.frameworkasProperty.name = 'Svelte';
      //this.frameworkasProperty.releaseDate = 2020;
      this.frameworkasSignal.update( value => ({
        ...value,
        name: 'Svelte',
        releaseDate: 2020
      }))
      console.log('ChangeDetectionComponent: setTimeout');
    }, 3000);
  }

}
