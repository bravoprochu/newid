import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { KaczyBrzegComponent } from './kaczy-brzeg/kaczy-brzeg.component';
import { ProjektyComponent } from './projekty/projekty.component';

const routes: Routes = [
  {path: 'home', component: ProjektyComponent},
  {path: 'kaczyBrzeg', component: KaczyBrzegComponent, data: {animation: 'SubPage', title: 'Projekt Kaczy brzeg. Rewolucja marketingowa. Rebranding, Identyfikacja wizualna. Kompleksowa obsługa', description: 'Przykład wpływu naszch działań na Twoją markę, bez względu na stan aktualny. Nowoczesny wizerunek, niespotykane rozwiązania, pomoc w tworzeniu jak i gotowe rozwiązania. Video prezentacja firmy, profesjonalna fotografia, kampanie reklamowe. Ogromne zaangażowanie i ostatecznie EFEKT który robi różnice na rynku'} },
  {path: 'kaczybrzeg', redirectTo: 'kaczyBrzeg', pathMatch: 'full'},
  
  {path: '', redirectTo: 'kaczyBrzeg', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjektyRoutingModule { }
