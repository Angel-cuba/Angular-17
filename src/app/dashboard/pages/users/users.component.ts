import { Component, inject } from '@angular/core';
import { UsersService } from './users.services';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
    imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  public services = inject(UsersService)

}
