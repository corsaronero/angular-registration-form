import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/registration/registration.module')
      .then(m => m.RegistrationModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module')
      .then(m => m.RegistrationModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('./pages/registration/registration.module')
      .then(m => m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
