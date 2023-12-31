import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ).then((m) => m.ChangeDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (m) => m.ControlFlowComponent
          ),
      },
      {
        path: 'defer-option',
        title: 'Defer Option',
        loadComponent: () =>
          import('./dashboard/pages/defer-option/defer-option.component').then(
            (m) => m.DeferOptionComponent
          ),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (m) => m.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (m) => m.UserComponent
          ),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component').then(
            (m) => m.UsersComponent
          ),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition.component'
          ).then((m) => m.ViewTransitionComponent),
      },
            {
        path: 'view-transition1',
        title: 'View Transition1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition1.component'
          ).then((m) => m.ViewTransition1Component),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
