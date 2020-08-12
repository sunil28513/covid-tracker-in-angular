import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';  
import { MatSelectModule } from '@angular/material/select';  
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepagecontentComponent } from './homepagecontent/homepagecontent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivetrackerComponent } from './livetracker/livetracker.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepagecontentComponent,
    LivetrackerComponent,
    PagenotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
