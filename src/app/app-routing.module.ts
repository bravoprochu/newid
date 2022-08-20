import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { HomeComponent } from '@sites/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'Home',
      title:
        'NewId - Nowa Tożsamość Twojej Firmy. Agencja Marketingowa, Agencja Reklamowa. Kładziemy nacisk na wyjątkowość',
      description:
        'Zróbmy wynik 💰 Świeżość 🌱, nieszablonowe 💥indywidualne podejście ☝️ wysoka skuteczność 🎯 olbrzymie zaangażowanie 😅🙋 Spraw Swojej Firmie Prezent ! Reklama Twojego produktu, fotografia, grafika, animacje, code.',
    },
  },

  {
    path: 'kontakt',
    loadChildren: () =>
      import('@sites/contact/contact.module').then((m) => m.ContactModule),
    data: { animation: 'Kontakt' },
  },
  { path: 'contact', redirectTo: 'kontakt', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
