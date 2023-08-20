import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FormComponent } from './components/form/form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewPostComponent } from './components/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
    MainPageComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
