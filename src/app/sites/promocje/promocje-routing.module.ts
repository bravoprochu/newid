import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { ObslugaMarketingowa3mscZamowComponent } from './obsluga-marketingowa3msc-zamow/obsluga-marketingowa3msc-zamow.component';
import { ObslugaMarketingowa3mscComponent } from './obsluga-marketingowa3msc/obsluga-marketingowa3msc.component';
import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';
import { PakietStartComponent } from './pakiet-start/pakiet-start.component';
import { PromocjeComponent } from './promocje/promocje.component';
import { ReklamaTwojegoProduktuComponent } from './reklama-twojego-produktu/reklama-twojego-produktu.component';


const string = "NewId - Promocje";

const routes: Routes = [
  {path: 'home', component: PromocjeComponent, data: { title: 'Najnowsze Promocje. Marketing - Reklama Twojej Firmy', description: 'Filmy reklamowe, spoty promocyjne, grafika reklamowa, profesjonalna fotografia. Kompleksowa obsługa marketingowa. Unikatowa reklama.'}},
  
  {path: 'obsluga-marketingowa-3msc', component: ObslugaMarketingowa3mscComponent, data: {animation: 'MainPage', title: 'Obsługa Marketingowa Twojej Firmy przez 3 miesiace !', description: 'Najnowsze Trendy Graficzne, Video promocja Twojej Marki, Lepszy Wizerunek Twojej Firmy. Trzy miesiące intensywnej pracy by REALNIE poprawić wyniki sprzedaży, zwiększyć rozpoznawalność produktu czy stworzyć nowe rozwiązania marketingowe. Twoja Własna Tarcza Antykryzysowa. Tworzymy UNIKATOWY KONTENT, Tworzymy NOWĄ JAKOŚĆ'}},
  {path: 'obsluga-marketingowa-3msc-zamow', component: ObslugaMarketingowa3mscZamowComponent, data: {animation: 'SubPage', title: 'Obsługa Marketingowa 3msc - ZAMÓW JUŻ DZIŚ !', description: 'Skontaktuj się z nami i ZAMÓW pakiet już dziś. Zapytaj o dodatkowy upust'} },
  {path: 'pakiet-start', component: PakietStartComponent, data: {animation: 'MainPage', title: 'Pakiet Dla Rozpoczynajacych Działalność Gospodarczą. Twój Biznes W Internecie', description: 'Nowa działalność równa się biznes w Internecie. Pierwsze kroki i wskazówki. Profesjonalny profil, google maps, pierwsza kampania reklmaowa. '}},
  {path: 'pakiet-start-zamow', component: PakietStartZamowComponent, data: {animation: 'SubPage', title: '', description: 'Skontaktuj się z nami i ZAMÓW dziś pakiet na start dla Twojej Firmy. Wszystko co potrzebujesz by dobrze pojawić się na rynku internetowym.'}},
  {path: 'reklama-twojego-produktu-facebook-google', component: ReklamaTwojegoProduktuComponent, data: {animation: 'MainPage', title: 'Wyjątkowa Reklama Twojego Produktu | Spot Reklamowy, Video Reklama, Animacja, Grafika. Subtelny przekaz.', description: 'Gotowe rozwiązanie. Reklama Twojego produktu/usługi. Najnowsze trendy graficzne, nowoczesne techniki video, ciekawe, nietuzinkowe pomysły. Wizerunkiem, kontekstem tworzymy markę PREMIUM'}},

  
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule {}
