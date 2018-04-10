import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { EventosComponent }      from './eventos/eventos.component';
import { EventoDetailComponent }  from './evento-detail/evento-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EventoDetailComponent },
  { path: 'eventos', component: EventosComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}