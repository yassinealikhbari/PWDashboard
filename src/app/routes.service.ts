import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AppComponent} from './app.component';



const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: AppComponent},
  // { path: 'modals', component: ModalsComponent},
  // { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
