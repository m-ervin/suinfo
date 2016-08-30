export class Globals{

    menuList= [
      { url: 'latest', name: 'Najnovije', endPoint: 'article' },
      { url: 'najava', name:'Najave za današnji dan', endPoint: 'najava' },
      { url: 'zajednica', name: 'Zajednica', endPoint: 'article' },
      { url: 'kultura', name:'Kultura', endPoint: 'article' },
      { url: 'sport', name: 'Sport', endPoint: 'article' },
      { url: 'privreda', name:'Privreda', endPoint: 'article' },
      { url: 'video', name: 'Video', endPoint: 'article' },
      { url: 'dailyphoto', name:'Foto Dana', endPoint: 'dailyphoto' },
      { url: 'press', name: 'Press', endPoint: 'article' },
      { url: 'intervju', name:'Intervju', endPoint: 'intervju' },
      { url: 'tbn', name:'TBN', endPoint: 'tbn' }, 
      { url: 'panoramica', name:'Panoramica', endPoint: 'panoramica' }, 
      { url: 'search', name:'Search', endPoint: 'article' }                                                                
    ];    
    
    menuState = 'inactive';   
    categoryTitle = '';
    httpError = false;
    httpLoading = true;
    
    menuTypeExists(menuType: string){
        var valid = false;
        for(var i in this.menuList)
            if(menuType == this.menuList[i].url)
                valid = true; 
        return valid;       
    }
    
    youtubeParser(url: string): string{
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match&&match[2].length == 11)
            return match[2];
        else
            return "";
    }     
}