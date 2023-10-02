import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HttpBackend } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoaderComponent } from './component/loader/loader.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';

export function createTranslateLoader(handler: HttpBackend) {
  const http = new HttpClient(handler);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    FooterComponent,
    NewsComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpBackend],
      },
    }),
    LoadingBarModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
