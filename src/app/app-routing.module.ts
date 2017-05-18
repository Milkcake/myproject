import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { NovelListComponent } from './novel-list/novel-list.component';
import { NovelDetailComponent } from './novel-list/novel-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'novel',
    component: NovelListComponent
  },
  {
    path: 'novel/:id',
    component: NovelDetailComponent
  },
  {
    path: 'glossary',
    component: GlossaryComponent
  },
  
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}