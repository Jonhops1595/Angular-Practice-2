import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { MovieTitlePipe } from './pipes/movie-title.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { RoutingHomePageComponent } from './routing-home-page/routing-home-page.component';
import { RoutingDayPageComponent } from './routing-day-page/routing-day-page.component';
import { Routes, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    StarComponent,
    MovieTitleComponent,
    MovieTitlePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PasswordFormComponent,
    PostsComponent,
    RoutingHomePageComponent,
    RoutingDayPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
