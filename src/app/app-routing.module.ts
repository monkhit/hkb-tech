import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogDescriptionComponent } from './layout/blog-description/blog-description.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ServicesComponent } from './pages/services/services.component';
import { IndustriesComponent } from './pages/industries/industries.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog-description', component: BlogDescriptionComponent},
  { path: 'privacy', component: PrivacyPolicyComponent, },
  { path: 'terms', component: TermsComponent, },
  { path: 'services', component: ServicesComponent, },
  { path: 'industries', component: IndustriesComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
})],
  exports: [RouterModule]
})




export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PrivacyPolicyComponent, TermsComponent, BlogDescriptionComponent, ServicesComponent, IndustriesComponent]
