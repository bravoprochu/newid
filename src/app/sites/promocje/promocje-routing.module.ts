import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';
import { PakietStartComponent } from './pakiet-start/pakiet-start.component';
import { PromocjeComponent } from './promocje/promocje.component';


const routes: Routes = [
  {path: 'home', component: PromocjeComponent},
  {path: 'pakiet-start', component: PakietStartComponent},
  {path: 'pakiet-start-zamow', component: PakietStartZamowComponent},
  
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
