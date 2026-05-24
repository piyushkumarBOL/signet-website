import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { SolutionsComponent } from './screens/solutions/solutions.component';
import { WhySignetComponent } from './screens/why-signet/why-signet.component';
import { OurClientsComponent } from './screens/our-clients/our-clients.component';
import { CareerComponent } from './screens/career/career.component';

import { HeaderComponent } from './screens/header/header.component';
import { FooterComponent } from './screens/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    SolutionsComponent,
    WhySignetComponent,
    OurClientsComponent,
    CareerComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
