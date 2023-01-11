import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { QaPageComponent } from '@pages/qa-page/qa-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: { style: 'white' },
  },
  { path: 'home', component: HomePageComponent, data: { style: 'white' } },
  { path: 'qa', component: QaPageComponent, data: { style: 'black' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
