import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentDetailComponent } from './content/content-detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { NovelListComponent } from './novel-list/novel-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    ContentDetailComponent,
    HomeComponent,
    AboutComponent,
    GlossaryComponent,
    NovelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
