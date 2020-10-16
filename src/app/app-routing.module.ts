import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { HomeComponent } from '@sites/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'HomnePage'} },
     
  
  {path: 'kontakt', loadChildren: ()=> import('@sites/contact/contact.module').then(m=>m.ContactModule), data: {animation: 'AboutPage'}  },
    {path: 'contact', redirectTo: 'kontakt', pathMatch: 'full'},

  {path: 'promo', loadChildren: ()=> import('@sites/promo/promo.module').then(m=>m.PromoModule), data: {animation: 'FilterPage'} },


  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
