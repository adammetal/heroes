import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreatorComponent } from './hero-creator/hero-creator.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'details/:id', component: HeroDetailComponent },
  { path: 'create', component: HeroCreatorComponent },
  { path: 'logs', component: LogsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
