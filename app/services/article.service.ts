import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService{

  constructor(private http: Http) { } 
  
  //get articles in the category
  getArticleList(menuType: string){
    return this.http.get("http://www.subotica.info/restful-" + menuType)
               .map(response=>response.json().nodes);
  }      

  //get specific article by id
  getArticleDetails(endPoint: string, id: number){
      return this.http.get("https://www.subotica.info/restful-" + endPoint + "/" + id)
          .map(response=>{
                var result = response.json().nodes;
                for(var index in result){
                   if(result[index].node.Nid == id){
                        return result[index].node;
                   }
                }              
                return "";
          });
  }
  
  //get articles searching by a keyword
  searchArticle(keyword: string){
      return this.http.get("https://www.subotica.info/restful-search?naslov=" + keyword)
          .map(response=>response.json().nodes);
   }
}
