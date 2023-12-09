import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { UsersService } from '../users/users.services';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
private route = inject(ActivatedRoute);
public services = inject(UsersService);

  public user: any = toSignal(
    this.route.params.pipe(
      switchMap( async ({ id }) => this.services.getUserById(id))
    )
  )
  
public titleLabel = computed(() => {
  if (this.services.user())  {
   return `User:  ${this.services.user()!.first_name} ${this.services.user()!.last_name}`
  }
  return 'User information';
})



}
