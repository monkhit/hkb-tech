import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: NewsComponent},
  { path: 'privacy', component: PrivacyPolicyComponent, },
  { path: 'terms', component: TermsComponent, },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NewsComponent, PrivacyPolicyComponent, TermsComponent]
