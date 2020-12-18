import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { ObslugaMarketingowa3mscZamowComponent } from './obsluga-marketingowa3msc-zamow/obsluga-marketingowa3msc-zamow.component';
import { ObslugaMarketingowa3mscComponent } from './obsluga-marketingowa3msc/obsluga-marketingowa3msc.component';
import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';
import { PakietStartComponent } from './pakiet-start/pakiet-start.component';
import { PromocjeComponent } from './promocje/promocje.component';
import { ReklamaTwojegoProduktuComponent } from './reklama-twojego-produktu/reklama-twojego-produktu.component';


const routes: Routes = [
  {path: 'home', component: PromocjeComponent},
  
  {path: 'obsluga-marketingowa-3msc', component: ObslugaMarketingowa3mscComponent, data: {animation: 'MainPage'}},
  {path: 'obsluga-marketingowa-3msc-zamow', component: ObslugaMarketingowa3mscZamowComponent, data: {animation: 'SubPage'} },
  {path: 'pakiet-start', component: PakietStartComponent, data: {animation: 'MainPage'}},
  {path: 'pakiet-start-zamow', component: PakietStartZamowComponent, data: {animation: 'SubPage'}},
  {path: 'reklama-twojego-produktu-facebook-google', component: ReklamaTwojegoProduktuComponent, data: {animation: 'MainPage'}},

  
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
