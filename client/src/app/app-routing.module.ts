import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { HebergementHebertHotelComponent } from './components/hebergement/hebergement-hebert-hotel/hebergement-hebert-hotel.component';
import { HebergementManoirBecancourComponent } from './components/hebergement/hebergement-manoir-becancour/hebergement-manoir-becancour.component';
import { HebergementComponent } from './components/hebergement/hebergement.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuShowComponent } from './components/menu/menu-show/menu-show.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotreEquipeComponent } from './components/notre-equipe/notre-equipe.component';
import { PromotionsComponent } from './components/promotions/promotions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/menu-pdf', component: MenuShowComponent },
  { path: 'hebergement', component: HebergementComponent },
  {
    path: 'hebergement/manoir-becancour',
    component: HebergementManoirBecancourComponent,
  },
  {
    path: 'hebergement/hebert-hotel',
    component: HebergementHebertHotelComponent,
  },
  {
    path: 'promotions',
    component: PromotionsComponent,
  },
  {
    path: 'notre-equipe',
    component: NotreEquipeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
