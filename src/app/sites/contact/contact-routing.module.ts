import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: ContactComponent, data: {title: 'Kontakt - NewId,  61-608 Bolka 2/81, Telefon: +48 509 229 735 email: info@newId.pl', description: 'Nasza siedziba znajduje się w cudownej lokalizacji w Poznaniu, niedaleko parku krajobrazowego Żurawiniec. To miejsce jest inspiracją do kreatywnej pracy. Serdecznie zapraszamy do kontaktu'}},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
