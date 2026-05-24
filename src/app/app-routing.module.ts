import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { SolutionsComponent } from './screens/solutions/solutions.component';
import { WhySignetComponent } from './screens/why-signet/why-signet.component';
import { OurClientsComponent } from './screens/our-clients/our-clients.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { CareerComponent } from './screens/career/career.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'solutions', component: SolutionsComponent, pathMatch: 'full' },
  { path: 'why-signet', component: WhySignetComponent, pathMatch: 'full' },
  { path: 'clients', component: OurClientsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'careers', component: CareerComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
