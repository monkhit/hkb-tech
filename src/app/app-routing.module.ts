import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: NewsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NewsComponent]
