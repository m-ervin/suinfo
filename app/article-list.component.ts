import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from './services/article.service';
import { Globals } from './globals/globals';
import { Router }    from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'app/templates/article-list.component.html'
})

export class ArticleListComponent implements OnInit{

constructor(private route: ActivatedRoute,
private articleService: ArticleService,
private globals: Globals,
private router: Router,
private titleService: Title) {}

private articles: any;
private menuType: string;

ngOnInit(): void{

  this.route.params.forEach((params: Params) => {

    var type = params['type'];
    this.menuType = type;
    if(!this.globals.menuTypeExists(type)){
        this.router.navigate(['/404']);
        return;
    }
    this.setPageTitle(type);
    this.articleService.getArticleList(type).subscribe(
                response => {
                    this.globals.httpLoading = false;
                    this.articles = response;
                },
                error => {
                    this.globals.httpLoading = false;
                    this.globals.httpError = true;
                }
    );
  });

}

setPageTitle(urlName: string){
    var menuItems = this.globals.menuList;
    for(var index in menuItems){
        if(menuItems[index].url == urlName){
            this.globals.categoryTitle=menuItems[index].name;
            this.titleService.setTitle("Subotica.info - " + menuItems[index].name)
        }
    }
}

}
