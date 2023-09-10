import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent,
    PostFormComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
