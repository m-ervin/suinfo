import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from './services/article.service';
import { Router }    from '@angular/router';
import { Globals } from './globals/globals';

@Component({
    templateUrl: 'app/templates/article-details.component.html'
})

export class ArticleDetailsComponent implements OnInit{

    constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private globals: Globals,
    private router: Router) {}

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
                    if(response)
                        this.article = this.correctJson(response);
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
    
    //Create youtube thumbnail image from youtube link
    getThumbnail(url: string){
        var id = this.globals.youtubeParser(url);
        return "http://img.youtube.com/vi/" + id + "/default.jpg";
    }       
    
    //converts string to an object (and corrects the json formatting mistake)
    correctJson(data: any) {
        var videoGallery = data['YouTube videos'];
        var photoGallery = data['Photo gallery'];       
        data['YouTube videos'] = (videoGallery) ? this.hack(videoGallery) : '';
        data['Photo gallery'] = (photoGallery) ? this.hack(photoGallery) : '';            
        return data;
    }    
    
    //create object from bad formatted json string
    hack(str: string){
        return JSON.parse(str.replace(",  ]","]")); 
    }     
}

