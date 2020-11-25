import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { KaczyBrzegComponent } from './kaczy-brzeg/kaczy-brzeg.component';
import { ProjektyComponent } from './projekty/projekty.component';

const routes: Routes = [
  {path: 'home', component: ProjektyComponent },
  {path: 'kaczyBrzeg', component: KaczyBrzegComponent, data: {animation: 'SubPage'} },
  {path: 'kaczybrzeg', redirectTo: 'kaczyBrzeg', pathMatch: 'full'},
  
  {path: '', redirectTo: 'kaczyBrzeg', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjektyRoutingModule { }
