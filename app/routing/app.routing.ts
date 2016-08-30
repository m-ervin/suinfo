import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from '../article-list.component';
import { ArticleDetailsComponent } from '../article-details.component';
import { ArticleSearchComponent } from '../article-search.component';
import { NotFoundComponent } from '../not-found.component'

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'list/latest',
    pathMatch:'full'
  },
  {
    path:'list/:type',
    component: ArticleListComponent
  },
  {
    path:'article/:type/:id',
    component:ArticleDetailsComponent
  },
  {
    path:'search/:keyword',
    component:ArticleSearchComponent
  },
    {path:'404',component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}  
  
];

export const routing = RouterModule.forRoot(appRoutes);

