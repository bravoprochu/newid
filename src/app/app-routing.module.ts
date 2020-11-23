import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { HomeComponent } from '@sites/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'HomnePage'} },
     
  
  {path: 'kontakt', loadChildren: ()=> import('@sites/contact/contact.module').then(m=>m.ContactModule), data: {animation: 'ContactPage'}  },
    {path: 'contact', redirectTo: 'kontakt', pathMatch: 'full'},

  {path: 'promocje', loadChildren: ()=> import('@sites/promocje/promocje.module').then(m=>m.PromocjeModule), data: {animation: 'FilterPage'} },
  {path: 'promo', redirectTo: 'promocje', pathMatch: 'full'},

  {path: 'projekty', loadChildren: ()=> import('@sites/projekty/projekty.module').then(m=>m.ProjektyModule), data: {animation: 'FilterPage'} },

  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top",
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
