import { Component } from '@angular/core';
import { Post } from '../../post.model';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = this.postService.getPosts();
  }

  addPost(): void {
    this.router.navigate(['/add']);
  }

  viewPost(postId: number) {
    this.router.navigate(['/posts/' + postId]);
  }

  editPost(postId: number) {
    this.router.navigate(['/edit/' + postId]);
  }

  deletePost(postId: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId);
      this.loadPosts();
    }
  }
}
