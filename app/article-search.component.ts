import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from './services/article.service';
import { Globals } from './globals/globals';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    templateUrl: "app/templates/article-search.component.html"
})

export class ArticleSearchComponent implements OnInit{

    constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private globals: Globals) {}

    private articles: any;


    ngOnInit(): void{
        this.route.params.forEach((params:Params)=>{
            this.globals.categoryTitle = 'Pretraga:' + params['keyword'];
            this.articleService.searchArticle(params['keyword']).subscribe(
                response => {
                    this.globals.httpLoading = false;
                    this.articles = response;
                },
                error => {
                    this.globals.httpLoading = false;
                    this.globals.httpError = true;
                }
            );
        })
    }

}
