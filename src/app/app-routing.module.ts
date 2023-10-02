import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { TestComponent } from './pages/test/test.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: NewsComponent },
  { path: 'test', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NewsComponent, TestComponent]
