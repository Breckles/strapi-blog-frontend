import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GraphQLModule } from './graphql.module';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BackToTopButtonComponent } from './components/shared/back-to-top-button/back-to-top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    PostCardComponent,
    BackToTopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
