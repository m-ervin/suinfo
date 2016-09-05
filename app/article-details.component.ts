import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from './services/article.service';
import { Router }    from '@angular/router';
import { Globals } from './globals/globals';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'app/templates/article-details.component.html'
})

export class ArticleDetailsComponent implements OnInit{

    constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private globals: Globals,
    private router: Router,
    private titleService: Title) {}

    private article: any;
    private noArticle = false;

    ngOnInit(): void{
      this.route.params.forEach((params: Params) => {

            if(!this.globals.menuTypeExists(params['type'])){
                this.router.navigate(['/404']);
                return;
        }

        var menuList = this.globals.menuList;
        for (var i in this.globals.menuList)
            if (params['type'] == menuList[i].url){
                var endPoint = menuList[i].endPoint;
            }

        this.articleService.getArticleDetails(endPoint,params['id']).subscribe(
                response => {
                    this.globals.httpLoading = false;
                    if(response){
                        this.article = this.correctJson(response);
                        this.titleService.setTitle("Subotica.info - " + this.article.Naslov);
                    }
                    else
                        this.noArticle = true;
                },
                error => {
                    this.globals.httpLoading = false;
                    this.globals.httpError = true;
                }
            );
      });

    }

    getThumbnail(url: string){
        var id = this.globals.youtubeParser(url);
        return "http://img.youtube.com/vi/" + id + "/default.jpg";
    }

    correctJson(data: any) {
        var videoGallery = data['YouTube videos'];
        var photoGallery = data['Photo gallery'];
        data['YouTube videos'] = (videoGallery) ? this.hack(videoGallery) : '';
        data['Photo gallery'] = (photoGallery) ? this.hack(photoGallery) : '';
        return data;
    }

    hack(str: string){
        return JSON.parse(str.replace(",  ]","]"));
    }
}
