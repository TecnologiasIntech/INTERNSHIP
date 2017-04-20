/**
 * Created by Toshiba on 01/04/2017.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'nuevo/:termino', component: NuevoComponent },
  { path: '*', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
