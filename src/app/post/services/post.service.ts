import { Injectable } from '@angular/core';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'New Post', content: 'This is new post' },
  ];

  constructor() {}

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(postId: number) {
    const post = this.posts.find(post => post.id === postId);
    return post;
  }

  addPost(post: Post): void {
    post.id = Date.now();
    this.posts.push(post);
  }

  updatePost(post: Post): void {
    const index = this.posts.indexOf(post);

    if (index >= 0) {
      this.posts[index] = post;
    }
  }

  deletePost(postId: number): void {
    this.posts = this.posts.filter(post => post.id !== postId)
  }
}
