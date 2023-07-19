import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayCardComponent } from './components/overlay-card/overlay-card.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayCardComponent,
    AboutSectionComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
