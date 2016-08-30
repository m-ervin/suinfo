import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing } from './routing/app.routing';
import { HttpModule } from '@angular/http';
import { SidemenuComponent } from './sidemenu.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleSearchComponent } from './article-search.component';
import { ArticleService } from './services/article.service';
import { Globals } from './globals/globals';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule ],
  declarations: [ AppComponent, SidemenuComponent, ArticleListComponent, ArticleSearchComponent ],
  bootstrap: [ AppComponent ],
  providers:[ ArticleService, Globals, Title ]
})
export class AppModule { }
