import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<any>({
    users: [],
    loading: false,
  });
  #user = signal<any>({
    user: [],
    loading: false,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  public user = computed(() => this.#user().user);

  constructor() {
    this.http
      .get<any>('https://reqres.in/api/users')
      .pipe(delay(1000))
      .subscribe((response) => {
        this.#state.set({
          users: response.data,
          loading: false,
        });
      });
  }

  getUserById(id: string) {
    this.http.get<any>(`https://reqres.in/api/users/${id}`).pipe(
      delay(1000)
    ).subscribe((response) => {
      this.#user.set({
        user: response.data,
        loading: false,
      });
    });
  }
}
