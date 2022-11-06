import { AppComponent } from './app.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { PescaraComponent } from './components/pescara/pescara.component';
import { PcelinjakComponent } from './components/pcelinjak/pcelinjak.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PcelinjakComponent },
  { path: 'pcelinjak-kovac-deliblatskapescara', component: PcelinjakComponent },
  { path: 'deliblatskapescara', component: PescaraComponent },  
  { path: 'kontakt', component: KontaktComponent }, 
  { path: 'pcelinjiproizvodi-bagremovmed-livadskimed-rakijaodmeda-banat', component: ProizvodiComponent }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
